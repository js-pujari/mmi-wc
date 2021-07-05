import React, { useState, useRef, useContext } from 'react'
import { AppContext } from '../App';
const Search = ({ getLatLngFromEloc, handleClick }) => {
    let interval;
    const myRef = useRef({})
    const context = useContext(AppContext);
    const [places, setPlaces] = useState([])
    const [showPlaces, setShowPlaces] = useState(false)
    console.log('token from context', context);

    const onPlaceSearch = (e) => {
        clearTimeout(interval);
        interval = setTimeout(async () => {
            const payload = {
                url: `https://atlas.mapmyindia.com/api/places/search/json?query=${e}&tokenizeAddress=true&`,
                method: 'GET',
                header: JSON.stringify({ Authorization: context.token })
            }
            // const myHeaders = new Headers({ Authorization: context.token, 'Content-type': 'application/json' });
            // const myRequest = new Request(`https://atlas.mapmyindia.com/api/places/search/json?query=${e}&tokenizeAddress=true&`, {
            //     method: 'GET',
            //     headers: myHeaders,
            // });

            await fetch('https://cors-support.herokuapp.com/utility/tkn', { headers: payload, method: 'post' })
                // fetch(myRequest)
                .then(j => j.json())
                .then(res => {
                    // if (res && res.suggestedLocations && res.suggestedLocations.length) {
                    if (res && res.data.suggestedLocations && res.data.suggestedLocations.length) {
                        setShowPlaces(true);
                        setPlaces(res.data.suggestedLocations);
                        setTimeout(() => {
                            initTooltip()
                        }, 1000);
                    } else {
                        setPlaces([])
                        // localStorage.clear()
                    }
                }).catch((e) => {
                    setPlaces([])
                })
        }, 300);
    }

    window.onclick = (e) => {
        setShowPlaces(false);
    }

    const onPlaseSelect = (placeDetails) => {
        setShowPlaces(false);
        // setPlaces([]);
        myRef.current.value = placeDetails.placeName + ', ' + placeDetails.placeAddress;
        console.log('Place details', placeDetails);
        getLatLngFromEloc(placeDetails);
        // handleClick({ type: 'search', value: placeDetails })
    }

    const initTooltip = () => {
        var tooltips = [].slice.call(document.querySelectorAll('.tooltip'))

        tooltips.forEach(function (tooltip) {
            var tooltipSpan = tooltip.querySelector('.tooltip-content');

            tooltip.onmousemove = function (e) {
                var x = e.clientX,
                    y = e.clientY;
                tooltipSpan.style.top = (y + 20) + 'px';
                tooltipSpan.style.left = (x + 20) + 'px';
            }
        })
    }


    const onFocusInput = (inp) => {
        if (places && places.length) {
            setShowPlaces(true);
            // onPlaceSearch(myRef.current.value)
        }
    }

    const onSearchClear = () => {
        setShowPlaces(false);
        setPlaces([]);
        myRef.current.value = '';
    }

    return (
        <div onClick={(e) => { e.stopPropagation() }}>
            <form className="as" onClick={(e) => { e.stopPropagation() }}>
                <input className="form-control as-a" ref={myRef} onKeyUp={(e) => onPlaceSearch(e.target.value)} type="search" onFocus={onFocusInput} placeholder="Search" aria-label="Search" />
                {myRef.current.value && <span className="as-clear-input" onClick={onSearchClear}>&#10006;</span>}
                {(places && places.length > 0 && showPlaces) &&
                    <ul className="as-b">
                        {places.map((x, i) => {
                            return <React.Fragment key={x.eLoc}>
                                <li onClick={() => onPlaseSelect(x)} style={{ display: 'flex', alignItems: 'center' }} className="ttip">
                                    <img src="https://storage.googleapis.com/ihxcheck-public-content/place-search-icon.png" style={{ width: '.9rem', marginRight: '6px' }}></img>
                                    <span className="as-place-name">{x.placeName + ' '}</span>
                                    <span className="as-place-address">{x.placeAddress}</span>
                                    <div className={"ttip-content " + ((i === 0 || i === 1 || i === 2) ? 'ttip-content-btm' : '')}>
                                        <span className="as-place-name wrap">{x.placeName + ' '}</span>
                                        <span className="as-place-address wrap">{x.placeAddress}</span>
                                    </div>
                                </li>
                            </React.Fragment>
                        })}
                    </ul>
                }
            </form>
        </div >
    )
}

export default Search
