import React, { useContext, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { EventContext, Styled } from 'direflow-component';
import styles from './App.css';
import Search from './search/Search';
import MyMap from './maps/MyMap';

export const parseJSON = (response) => {
  return response.text().then(function (text) {
    return text ? JSON.parse(text) : {}
  })
}

export const AppContext = React.createContext({ token: '' });

const App = ({ mapSdkKey, coordinates, apiToken, multipleMarkers, radius, features, titleOnClick }) => {
  const dispatch = useContext(EventContext);
  const [isLoaded, setIsLoaded] = useState(false);
  const tokenGeneratorUrl = 'https://outpost.mapmyindia.com/api/security/oauth/token';
  const grantType = 'client_credentials'
  const clientSecret = 'lrFxI-iSEg-kgqGq3XC5LVQRhPninXwxzNMmxYPTTL19v0C9xQk0lkmHczUODCcZ96XUorsnalcY_T5L73yJoDwW7A-hBDED40K3OvTWtclxvqnbWQc3NW-UHsPW6ayR';
  const clientId = '33OkryzDZsI9rfIby39FyFCydkBrhakhsKIomtLNcRWnV99C20ZMiLieP00a7ePXnxjifYspcDswJWd2znZp5uRyAr-jXQPUddn2L9i0_SWaf9a_jOVKMA==';
  let timer;
  const [coords, setCoords] = useState(coordinates);
  const ref = useRef({ isMapInitiated: false })

  useEffect(() => {
    getLocation()
    // if (!localStorage.getItem('_authToken')) {
    // generateToken();
    // }
    timer = setInterval(() => {
      if (!window.MapmyIndia) {
        if (mapSdkKey && features && features.indexOf('map') !== -1 && !ref.current.isMapInitiated) {
          ref.current.isMapInitiated = true;
          setMapConfig();
        }
      } else {
        clearInterval(timer)
        setIsLoaded(true);
      }
    }, 300);
  }, [radius, multipleMarkers, mapSdkKey, features])

  useEffect(() => {
    setCoords(coordinates);
  }, [coordinates])

  const showPosition = (position) => {
    handleClick({ type: 'mapData', value: { lat: position.coords.latitude, lng: position.coords.longitude } })
    setCoords({ lat: position.coords.latitude, lng: position.coords.longitude })
  }

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }


  const generateToken = () => {
    const url = `${tokenGeneratorUrl}?grant_type=${grantType}&client_id=${clientId}&client_secret=${clientSecret}`;
    const myHeaders = new Headers({ Accept: "application/json", 'Content-Type': 'application/x-www-form-urlencoded' });
    const myRequest = new Request(url, {
      method: 'POST',
      headers: myHeaders,
    });
    fetch(myRequest)
      .then(parseJSON)
      .then(res => {
        localStorage.setItem('_authToken', `${res.token_type} ${res.access_token}`);
      });
  }

  const setMapConfig = () => {
    const url = `https://apis.mapmyindia.com/advancedmaps/v1/${mapSdkKey}/map_load?v=0.1`
    const body = document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }


  const handleClick = (detail) => {
    const event = new CustomEvent('mapmyindia-event', { detail });
    dispatch(event);
  };

  const getLatLngFromEloc = async (place) => {
    const payload = {
      url: `https://explore.mapmyindia.com/apis/O2O/entity/${place.eLoc}`,
      method: 'GET',
      header: JSON.stringify({ Authorization: apiToken })
    }
    // const header = { Authorization: localStorage.getItem('_authToken'), 'Content-Type': 'application/json' }
    await fetch('https://cors-support.herokuapp.com/utility/tkn', { headers: payload, method: 'post' })
      // await fetch(`/apis/O2O/entity/${place.eLoc}`, { headers: header, method: 'get' })
      .then((x) => x.json())
      .then((x) => {
        if (x.success && x.data) {
          setCoords({ lat: x.data.latitude, lng: x.data.longitude, title: place.placeName + ', ' + place.placeAddress })
          handleClick({ type: 'search', value: { lat: x.data.latitude, lng: x.data.longitude } })
        }
      })
      .catch(e => console.log(e))
  }

  return (
    <AppContext.Provider value={{ token: apiToken }}>
      <Styled styles={styles}>
        <div className='app'>
          {(features && features.indexOf('search') !== -1) && <Search getLatLngFromEloc={getLatLngFromEloc} handleClick={handleClick} />}
          {(isLoaded && (coords && Object.keys(coords).length > 0)) &&
            <MyMap handleClick={handleClick} mapSdkKey={mapSdkKey} radius={radius} coords={coords} multipleMarkers={multipleMarkers} titleOnClick={titleOnClick} />}
        </div>
      </Styled>
    </AppContext.Provider>
  );
};

App.propTypes = {
  componentTitle: PropTypes.string,
  mapSdkKey: PropTypes.string,
  coordinates: PropTypes.object,
  apiToken: PropTypes.string,
  multipleMarkers: PropTypes.array,
  radius: PropTypes.number,
  features: PropTypes.array,
  titleOnClick: PropTypes.bool,
};

export default App;
