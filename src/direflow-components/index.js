import { DireflowComponent } from 'direflow-component';
import App from './App';

const data = [
  {
    "id": 50013,
    "name": "Abhaya Hospital",
    "address": "17 Dr. M.H. Mari Gowda Road(Hosur Road), Opp. Park Area Wilson Garden Bangalore - 560027",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560027",
    "phone": "080 - 26563865 / 26564586 / 26566767",
    "email": "abhayahospital@live.in",
    "isPPN": true,
    "latitude": "12.9463279",
    "longitude": "77.5947411",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Cardiac & Circulatory Disorder",
      "Dermatology",
      "Endocrinology",
      "Gastroenterology",
      "Hematology",
      "Infectious and parasitic diseases",
      "Medicine",
      "Neurology",
      "Oncology",
      "Orthopedics",
      "Pediatrics",
      "Psychiatric Disorders",
      "Pulmonology",
      "Uronephrology"
    ],
    "AvgRating": 4,
    "EntityId": 1000102
  },
  {
    "id": 119135,
    "name": "Apollo Cradle",
    "address": "# 25, 46th Cross, 5th Block, Jayanagar",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560011",
    "phone": "080 - 42659997",
    "email": "insurance_ahjn@apollohospitals.com",
    "isPPN": true,
    "latitude": "12.920049",
    "longitude": "77.583434",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Cardiac & Circulatory Disorder",
      "Endocrinology",
      "Gastroenterology",
      "Hematology",
      "Infectious and parasitic diseases",
      "Medicine",
      "Obstetrics",
      "Oncology",
      "Orthopedics",
      "Pediatrics",
      "Pulmonology",
      "Uronephrology"
    ],
    "AvgRating": 0,
    "EntityId": 1004695
  },
  {
    "id": 113644,
    "name": "Apollo Cradle",
    "address": "No. 58.5th Cross, 18th Main Dhanlakshmi Bank Building 6th Block, Kormangla",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560095",
    "phone": "80-49397979",
    "email": "finance.kora@apollocradle.com",
    "isPPN": true,
    "latitude": "12.933221",
    "longitude": "77.6321925",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Cardiac & Circulatory Disorder",
      "Dermatology",
      "Endocrinology",
      "Infectious and parasitic diseases",
      "Neurology",
      "Obstetrics",
      "Oncology",
      "Orthopedics",
      "Pediatrics",
      "Uronephrology"
    ],
    "AvgRating": 0,
    "EntityId": 1004480
  },
  {
    "id": 118716,
    "name": "Apollo Speciality Hospital",
    "address": "No.21/2 (2) 14th Cross 3rd Block, Jayanagar",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560011",
    "phone": "80-30804444",
    "email": "insurance_ahjn@apollohospitals.com",
    "isPPN": true,
    "latitude": "12.932946",
    "longitude": "77.583869",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Cardiac & Circulatory Disorder",
      "Dermatology",
      "Endocrinology",
      "ENT",
      "Gastroenterology",
      "Hematology",
      "Infectious and parasitic diseases",
      "Medicine",
      "Neurology",
      "Oncology",
      "Ophthalomology",
      "Orthopedics",
      "Pediatrics",
      "Psychiatric Disorders",
      "Pulmonology",
      "Uronephrology"
    ],
    "AvgRating": 0,
    "EntityId": 1004687
  },
  {
    "id": 156405,
    "name": "Apollo Spectra Hospitals",
    "address": "# 143, 5th Block, 1st Cross, Kormangala",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560034",
    "phone": "43485536",
    "email": "tpa.krm@apollospectra.com",
    "isPPN": true,
    "latitude": "12.933839",
    "longitude": "77.620263",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [],
    "AvgRating": 0,
    "EntityId": 1008494
  },
  {
    "id": 50107,
    "name": "Ashok Hospital",
    "address": "10a Cross, Old Bangalore Road, Hosur",
    "state": "Tamil Nadu",
    "city": "Hosur",
    "pinCode": "635109",
    "phone": "04344 - 243271 / 310255 / 309400",
    "email": "brashokhospital@gmail.com",
    "isPPN": false,
    "latitude": "12.918053",
    "longitude": "77.618258",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Endocrinology",
      "Gastroenterology",
      "Hematology",
      "Infectious and parasitic diseases",
      "Obstetrics",
      "Oncology",
      "Orthopedics",
      "Uronephrology"
    ],
    "AvgRating": 0,
    "EntityId": 1000158
  },
  {
    "id": 91890,
    "name": "Axon Specialty Hospital",
    "address": "No 321, 6th Main Hal 2nd Stage Indira Nagar",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560038",
    "phone": "43346333",
    "email": "axonhospitalinsurance321@gmail.com",
    "isPPN": true,
    "latitude": "12.973819",
    "longitude": "77.646141",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Cardiac & Circulatory Disorder",
      "Dermatology",
      "Endocrinology",
      "ENT",
      "Gastroenterology",
      "Hematology",
      "Infectious and parasitic diseases",
      "Medicine",
      "Neurology",
      "Obstetrics",
      "Oncology",
      "Orthopedics",
      "Pediatrics",
      "Plastic Surgery",
      "Psychiatric Disorders",
      "Pulmonology",
      "Uronephrology"
    ],
    "AvgRating": 3,
    "EntityId": 1003743
  },
  {
    "id": 59376,
    "name": "B W Lions Superspeciality Eye Hospital",
    "address": "#5, Lions Eye Hospial Road (Off. J.C Road ), Bangalore 560002",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560002",
    "phone": "080 - 2223 5005 / 22121253",
    "email": "lionseye@blr.vsnl.net.in",
    "isPPN": true,
    "latitude": "12.959454",
    "longitude": "77.58303",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Dermatology",
      "Ophthalomology"
    ],
    "AvgRating": 4,
    "EntityId": 1001197
  },
  {
    "id": 180639,
    "name": "Bangalore Institute Of Gastroenterology",
    "address": "No. 34, 100 feet road (ashoka pillar road), 2nd block, jayanagar, bnagalore",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560011",
    "phone": "67779777",
    "email": "big.idesk@gmail.com",
    "isPPN": true,
    "latitude": "12.940510",
    "longitude": "77.584945",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [],
    "AvgRating": 0,
    "EntityId": 1028111
  },
  {
    "id": 50208,
    "name": "Chinmaya Mission Hospital",
    "address": "Cmh Road Indira Nagar",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560038",
    "phone": "080 -  25280461 / 25281505 / 25200165",
    "email": "CMHINS@REDIFFMAIL.COM",
    "isPPN": true,
    "latitude": "12.978511",
    "longitude": "77.646153",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Cardiac & Circulatory Disorder",
      "Dermatology",
      "Endocrinology",
      "ENT",
      "Gastroenterology",
      "Hematology",
      "Infectious and parasitic diseases",
      "Medicine",
      "Neurology",
      "Obstetrics",
      "Oncology",
      "Ophthalomology",
      "Orthopedics",
      "Pediatrics",
      "Plastic Surgery",
      "Psychiatric Disorders",
      "Pulmonology",
      "Uronephrology"
    ],
    "AvgRating": 4,
    "EntityId": 1000229
  },
  {
    "id": 62979,
    "name": "Cloudnine",
    "address": "# 1533, 9th Main, 3rd Block, Jayanagar, Bangalore",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560011",
    "phone": "080 - 40202222",
    "email": "insurance@cloudninecare.com",
    "isPPN": true,
    "latitude": "12.93389",
    "longitude": "77.584258",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Cardiac & Circulatory Disorder",
      "Dermatology",
      "Endocrinology",
      "Gastroenterology",
      "Hematology",
      "Infectious and parasitic diseases",
      "Neurology",
      "Obstetrics",
      "Oncology",
      "Orthopedics",
      "Pediatrics",
      "Plastic Surgery",
      "Psychiatric Disorders",
      "Pulmonology",
      "Uronephrology"
    ],
    "AvgRating": 4,
    "EntityId": 1001721
  },
  {
    "id": 107026,
    "name": "Cloudnine Hospital Pvt Ltd",
    "address": "#115, Kodihalli, Old Airport Road",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560017",
    "phone": "080 - 67999999",
    "email": "insuranceoar@cloudninecare.com",
    "isPPN": true,
    "latitude": "12.959794",
    "longitude": "77.648224",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Cardiac & Circulatory Disorder",
      "Dermatology",
      "Endocrinology",
      "ENT",
      "Gastroenterology",
      "Hematology",
      "Infectious and parasitic diseases",
      "Neurology",
      "Obstetrics",
      "Oncology",
      "Orthopedics",
      "Pediatrics",
      "Pulmonology",
      "Uronephrology"
    ],
    "AvgRating": 4,
    "EntityId": 1004234
  },
  {
    "id": 62785,
    "name": "Deepa Hospital",
    "address": "# 27, Old Madras Road, K R Puram",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560036",
    "phone": "080 - 25610333",
    "email": "deepahsp@gmail.com",
    "isPPN": true,
    "latitude": "12.976377",
    "longitude": "77.626696",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Dermatology",
      "Endocrinology",
      "Gastroenterology",
      "Infectious and parasitic diseases",
      "Obstetrics",
      "Pediatrics",
      "Pulmonology",
      "Uronephrology"
    ],
    "AvgRating": 3,
    "EntityId": 1001676
  },
  {
    "id": 50248,
    "name": "Devi Super Speciality Eye Hospital Private Limited",
    "address": "#434, 18th Main, 80 Feet Road, 6th Block, Koramangala Bus Depot, Koramangala.",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560095",
    "phone": "080 - 25630563 / 25535514",
    "email": "rajalakshmil025@yahoo.com",
    "isPPN": true,
    "latitude": "12.927923",
    "longitude": "77.627108",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Ophthalomology"
    ],
    "AvgRating": 4,
    "EntityId": 1000261
  },
  {
    "id": 188761,
    "name": "Dharma Kidney Care",
    "address": "No.909, 47th Cross, Near BSNL Compound,, 5th Block, Jaya Nagar, Bengaluru, Karnataka 560041",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560041",
    "phone": "7760118844",
    "email": "insurancedesk@dharmakidney.com",
    "isPPN": true,
    "latitude": "12.9217081",
    "longitude": "77.5936183",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [],
    "AvgRating": 0,
    "EntityId": 1029232
  },
  {
    "id": 99471,
    "name": "Dr Agarwals Eye Hospital",
    "address": "Salarpuria Zest Building, No.16, Bannergatta Road, Opp to Shoppers Stop",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560078",
    "phone": "080 - 26784012 / 7760969601",
    "email": "devaraj@dragarwal.com",
    "isPPN": true,
    "latitude": "12.910233",
    "longitude": "77.60042",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Dermatology",
      "Endocrinology",
      "Ophthalomology"
    ],
    "AvgRating": 4,
    "EntityId": 1003947
  },
  {
    "id": 99472,
    "name": "Dr Agarwals Eye Hospital",
    "address": "No. 590, Service Road Of Sarjapur Road, 3rd Block, Koramangala, Bangalore",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560034",
    "phone": "080-25504555",
    "email": "tpa_ka@dragarwal.com",
    "isPPN": true,
    "latitude": "12.9338255",
    "longitude": "77.611028",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Ophthalomology"
    ],
    "AvgRating": 0,
    "EntityId": 1005250
  },
  {
    "id": 54837,
    "name": "Dr B G Rudrappas Hospital",
    "address": "No. 5 Raja Ram Mohan Roy Cross Road, Bangalore-560 025",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560025",
    "phone": "080 - 22278788 / 22106688 / 22106699",
    "email": "RUDRAPPAHOSPITAL@GMAIL.COM",
    "isPPN": false,
    "latitude": "12.964913",
    "longitude": "77.595702",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "ENT",
      "Oncology",
      "Ophthalomology",
      "Orthopedics",
      "Pediatrics",
      "Pulmonology"
    ],
    "AvgRating": 4,
    "EntityId": 1000968
  },
  {
    "id": 78695,
    "name": "Dr Malathi Manipal Hospital",
    "address": "45/1, 45th Cross, 9th Block, Jayanagar",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560069",
    "phone": "080 - 40091000",
    "email": "collection.mmh@manipalhospitals.com",
    "isPPN": true,
    "latitude": "12.917198",
    "longitude": "77.591929",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Cardiac & Circulatory Disorder",
      "Dermatology",
      "Endocrinology",
      "ENT",
      "Gastroenterology",
      "Hematology",
      "Infectious and parasitic diseases",
      "Medicine",
      "Neurology",
      "Obstetrics",
      "Oncology",
      "Orthopedics",
      "Pediatrics",
      "Psychiatric Disorders",
      "Pulmonology",
      "Uronephrology"
    ],
    "AvgRating": 0,
    "EntityId": 1003512
  },
  {
    "id": 208883,
    "name": "Dr. Agarwals  Eye Hospital",
    "address": "No. 3275, 12TH MAIN ROAD",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560008",
    "phone": "8884477938",
    "email": "INDIRANAGAR@DRAGARWAL.COM",
    "isPPN": true,
    "latitude": "12.970004",
    "longitude": "77.636245",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      ""
    ],
    "AvgRating": 0,
    "EntityId": 1040402
  },
  {
    "id": 174488,
    "name": "Fortis La Femme",
    "address": "#62 RICHMOND ROAD, SACRED HEART CHURCH ENTRY FROM MOTHER TERESA ROAD RICHMOND TOWN",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560025",
    "phone": "67454444/4000",
    "email": "INSURANCEDESK.LFB@FORTISHEALTHCARE.COM",
    "isPPN": true,
    "latitude": "12.9633823",
    "longitude": "77.6034894",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Multi"
    ],
    "AvgRating": 0,
    "EntityId": 1033444
  },
  {
    "id": 61178,
    "name": "Gangothri Hospital",
    "address": "# 27, Kuvempunagar, 100ft Ring Road, Bangalore",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560076",
    "phone": "080 - 26682734",
    "email": "gangotrihospital@gmail.com",
    "isPPN": true,
    "latitude": "12.916227",
    "longitude": "77.612484",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Cardiac & Circulatory Disorder",
      "Dermatology",
      "Endocrinology",
      "Gastroenterology",
      "Hematology",
      "Infectious and parasitic diseases",
      "Neurology",
      "Obstetrics",
      "Oncology",
      "Orthopedics",
      "Pulmonology",
      "Uronephrology"
    ],
    "AvgRating": 3,
    "EntityId": 1001498
  },
  {
    "id": 50340,
    "name": "Garden City Hospital",
    "address": "132/18 22nd Cross 3rd Block Jayanagar Bangalore",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560011",
    "phone": "080 -  26646202 / 26632838",
    "email": "gardencity_hospital81@yahoo.com",
    "isPPN": false,
    "latitude": "12.93308",
    "longitude": "77.5815",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Cardiac & Circulatory Disorder",
      "Dermatology",
      "Endocrinology",
      "Gastroenterology",
      "Hematology",
      "Infectious and parasitic diseases",
      "Neurology",
      "Obstetrics",
      "Ophthalomology",
      "Orthopedics",
      "Pediatrics",
      "Plastic Surgery",
      "Pulmonology",
      "Uronephrology"
    ],
    "AvgRating": 3,
    "EntityId": 1000313
  },
  {
    "id": 208934,
    "name": "Gleneagles Global Hospitals",
    "address": "NO. 5/5, ",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560025",
    "phone": "46694333",
    "email": "TPA.RR@GLOBALHOSPITALSINDIA.COM",
    "isPPN": true,
    "latitude": "12.971510",
    "longitude": "77.619580",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      ""
    ],
    "AvgRating": 0,
    "EntityId": 1042743
  },
  {
    "id": 50363,
    "name": "Greenview Medical Centre",
    "address": "20 & 21, 14th Main, HSR Layout",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560034",
    "phone": "080 - 25634563 / 25500552 / 65347777",
    "email": "tpa@gvhcol.com",
    "isPPN": false,
    "latitude": "12.91936",
    "longitude": "77.638375",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Cardiac & Circulatory Disorder",
      "Dermatology",
      "Endocrinology",
      "ENT",
      "Gastroenterology",
      "Hematology",
      "Infectious and parasitic diseases",
      "Medicine",
      "Neurology",
      "Obstetrics",
      "Oncology",
      "Orthopedics",
      "Pediatrics",
      "Plastic Surgery",
      "Psychiatric Disorders",
      "Pulmonology",
      "Uronephrology"
    ],
    "AvgRating": 0,
    "EntityId": 1000331
  },
  {
    "id": 63110,
    "name": "Healthcare Global Enterprises (HCG)",
    "address": "Hcg Tower, No. 8, P Kalinga Rao Road, Sampangiramnagar",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560027",
    "phone": "080 - 40206400 / 4026000",
    "email": "insurancehelpdesk@hcgoncology.com",
    "isPPN": true,
    "latitude": "12.964267",
    "longitude": "77.58945",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Cardiac & Circulatory Disorder",
      "Dermatology",
      "Endocrinology",
      "ENT",
      "Gastroenterology",
      "Hematology",
      "Infectious and parasitic diseases",
      "Medicine",
      "Neurology",
      "Oncology",
      "Ophthalomology",
      "Orthopedics",
      "Pediatrics",
      "Pulmonology",
      "Uronephrology"
    ],
    "AvgRating": 3,
    "EntityId": 1005173
  },
  {
    "id": 50393,
    "name": "Hosmat Hospital",
    "address": "45 Magrath Road Off Richmond Road Bangalore, Off Richmond Road",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560001",
    "phone": "080 -  25593796 / 25593797 / 9902800670",
    "email": "hosmatinfo@gmail.com",
    "isPPN": true,
    "latitude": "12.968414",
    "longitude": "77.614258",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Cardiac & Circulatory Disorder",
      "Dermatology",
      "Endocrinology",
      "Gastroenterology",
      "Hematology",
      "Infectious and parasitic diseases",
      "Medicine",
      "Neurology",
      "Oncology",
      "Orthopedics",
      "Pulmonology",
      "Uronephrology"
    ],
    "AvgRating": 4,
    "EntityId": 1000355
  },
  {
    "id": 71270,
    "name": "Mahanth Hospital",
    "address": "# 8, 1-St Cross, N.G.R.Lay Out, Roopena Agrahara",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560068",
    "phone": "080 - 32482188 / 9341069222",
    "email": "mahanth.hospital@gmail.com",
    "isPPN": true,
    "latitude": "12.90802",
    "longitude": "77.623655",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Cardiac & Circulatory Disorder",
      "Endocrinology",
      "Gastroenterology",
      "Infectious and parasitic diseases",
      "Orthopedics",
      "Pulmonology",
      "Uronephrology"
    ],
    "AvgRating": 4,
    "EntityId": 1002900
  },
  {
    "id": 50598,
    "name": "Mallya Hospital",
    "address": "No 2 Vittal Mallya Road",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560001",
    "phone": "080 - 22277979",
    "email": "mallyainsurance@gmail.com",
    "isPPN": true,
    "latitude": "12.968093",
    "longitude": "77.595108",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Cardiac & Circulatory Disorder",
      "Dermatology",
      "Endocrinology",
      "ENT",
      "Gastroenterology",
      "Hematology",
      "Infectious and parasitic diseases",
      "Medicine",
      "Neurology",
      "Obstetrics",
      "Oncology",
      "Ophthalomology",
      "Orthopedics",
      "Pediatrics",
      "Psychiatric Disorders",
      "Pulmonology",
      "Uronephrology"
    ],
    "AvgRating": 0,
    "EntityId": 1005155
  },
  {
    "id": 50610,
    "name": "Manipal Hospital",
    "address": "#98 Rustom Bagh, Hal Airport Road",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560017",
    "phone": "080 -  25023221 / 25024444 / 25024274 / 25266646 /",
    "email": "corporate@manipalhospitals.com",
    "isPPN": true,
    "latitude": "12.9586841",
    "longitude": "77.6491383",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Cardiac & Circulatory Disorder",
      "Dermatology",
      "Endocrinology",
      "ENT",
      "Gastroenterology",
      "Hematology",
      "Infectious and parasitic diseases",
      "Medicine",
      "Neurology",
      "Obstetrics",
      "Oncology",
      "Ophthalomology",
      "Orthopedics",
      "Pediatrics",
      "Plastic Surgery",
      "Psychiatric Disorders",
      "Pulmonology",
      "Uronephrology"
    ],
    "AvgRating": 0,
    "EntityId": 1005157
  },
  {
    "id": 50612,
    "name": "Manjushree Nursing Home Pvt Ltd",
    "address": "No.22/70, St. Johns Road",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560042",
    "phone": "080 - 25365325 / 25362918",
    "email": "ylraj@vsnl.com",
    "isPPN": true,
    "latitude": "12.982594",
    "longitude": "77.612481",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [],
    "AvgRating": 0,
    "EntityId": 1011592
  },
  {
    "id": 221788,
    "name": "Marigold Sugar Hospitals And Research Centre",
    "address": "# 243, 3rd cross, 7th main road, MICO layout, BTM 2nd stage, bangalore",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560078",
    "phone": "657217777",
    "email": "",
    "isPPN": true,
    "latitude": "12.913625",
    "longitude": "77.604488",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      ""
    ],
    "AvgRating": 0,
    "EntityId": 1070823
  },
  {
    "id": 106476,
    "name": "Medikeris Super Speciality Ent Center",
    "address": "# 9/91, Govindappa Road Cross",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560004",
    "phone": "80-26578324",
    "email": "MEDIKERIHOSPITAL@GMAIL.COM",
    "isPPN": false,
    "latitude": "12.9462625",
    "longitude": "77.5797645",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "ENT",
      "Pediatrics",
      "Pulmonology"
    ],
    "AvgRating": 4,
    "EntityId": 1004199
  },
  {
    "id": 98710,
    "name": "Motherhood",
    "address": "No 324, Cmh Road, Indiranagar 1st Stage",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560038",
    "phone": "80 -25190000,25202233,25202244",
    "email": "info@motherhoodindia.com",
    "isPPN": true,
    "latitude": "12.9784098",
    "longitude": "77.6373855",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Endocrinology",
      "Gastroenterology",
      "Infectious and parasitic diseases",
      "Obstetrics",
      "Oncology",
      "Orthopedics",
      "Pediatrics",
      "Pulmonology",
      "Uronephrology"
    ],
    "AvgRating": 0,
    "EntityId": 1003913
  },
  {
    "id": 198730,
    "name": "Naina Advanced Eye Centre",
    "address": "#50, 100 feet road banaswadi bengaluru",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560043",
    "phone": "25422829/9538767129",
    "email": "nainaeyecare@yahoo.in",
    "isPPN": true,
    "latitude": "12.928941",
    "longitude": "77.586874",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      ""
    ],
    "AvgRating": 0,
    "EntityId": 1043015
  },
  {
    "id": 50690,
    "name": "Narayana Health",
    "address": "Hosur Road Anekal Taluk, No. 258 / A Bommasandra Industrial Area Anekal Taluk Bangalore - 562158, Hosur Road, Anekal Taluk",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "562158",
    "phone": "080 - 27835000",
    "email": "admissions@nhhospitals.org",
    "isPPN": true,
    "latitude": "12.908548",
    "longitude": "77.643491",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Cardiac & Circulatory Disorder",
      "Dermatology",
      "Endocrinology",
      "Gastroenterology",
      "Hematology",
      "Infectious and parasitic diseases",
      "Medicine",
      "Neurology",
      "Obstetrics",
      "Oncology",
      "Ophthalomology",
      "Orthopedics",
      "Pediatrics",
      "Pulmonology",
      "Uronephrology"
    ],
    "AvgRating": 0,
    "EntityId": 1000545
  },
  {
    "id": 123278,
    "name": "Narayana Hrudayalaya Pvt Ltd",
    "address": "Basant Health Center Building, Site No. 1. Opp To Hsr Club, Hsr Layout",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560102",
    "phone": "080 - 71112300 / 71112223 / 71112224 / 71112223 / ",
    "email": "tpa.hsrbp@nhhospitals.org",
    "isPPN": true,
    "latitude": "12.9085478",
    "longitude": "77.6434909",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Cardiac & Circulatory Disorder",
      "Dermatology",
      "Endocrinology",
      "ENT",
      "Gastroenterology",
      "Hematology",
      "Infectious and parasitic diseases",
      "Neurology",
      "Obstetrics",
      "Oncology",
      "Ophthalomology",
      "Orthopedics",
      "Pediatrics",
      "Pulmonology",
      "Uronephrology"
    ],
    "AvgRating": 4,
    "EntityId": 1004788
  },
  {
    "id": 107270,
    "name": "Narayana Netralaya Unit 3",
    "address": "No 37, Castle Street Opp Sacred Heart Church Ashoknagar",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560025",
    "phone": "80-66974000-4003",
    "email": "erannaiah@narayananetralaya.com",
    "isPPN": true,
    "latitude": "12.967005",
    "longitude": "77.609481",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Ophthalomology"
    ],
    "AvgRating": 4,
    "EntityId": 1004248
  },
  {
    "id": 66763,
    "name": "Navashakti Nethralaya",
    "address": "#1803, Outer Ring Road, HBR Layout, 5th Block, 1st Stage, near Nagawara Flyover",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560043",
    "phone": "080 - 25445004 / 9341961202 ",
    "email": "navashakthinethralaya@gmail.com",
    "isPPN": true,
    "latitude": "12.975048",
    "longitude": "77.636342",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Ophthalomology"
    ],
    "AvgRating": 4,
    "EntityId": 1002454
  },
  {
    "id": 94138,
    "name": "Nethradhama Hospital Pvt Ltd",
    "address": "#66, Indiranagar Double Road, Hal 2nd Stage",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560038",
    "phone": "080 - 43332555",
    "email": "pr@nethradhama.org",
    "isPPN": true,
    "latitude": "12.97344",
    "longitude": "77.635628",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Ophthalomology",
      "Orthopedics"
    ],
    "AvgRating": 4,
    "EntityId": 1003770
  },
  {
    "id": 68147,
    "name": "Nethrakashi Eye Hospital And Micro Surgical Centre",
    "address": "No. 33, Ist Main, Telecom Layout, Padmanabhanagar, Bengaluru - 560061",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560061",
    "phone": "080 - 26393739",
    "email": "sureshkorati@yahoo.co.in",
    "isPPN": false,
    "latitude": "12.971599",
    "longitude": "77.594563",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Ophthalomology"
    ],
    "AvgRating": 5,
    "EntityId": 1002632
  },
  {
    "id": 135774,
    "name": "Oncology India",
    "address": "Sardoe #743, 15th Cross, 6th Phase, J.P Nagar, 100ft Road",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560078",
    "phone": "080-26540102",
    "email": "VS@ONCOLOGYINTERNATIONAL.IN",
    "isPPN": false,
    "latitude": "12.906342",
    "longitude": "77.5929463",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [],
    "AvgRating": 4,
    "EntityId": 1009889
  },
  {
    "id": 50725,
    "name": "P D Hinduja Sindhi Hospital",
    "address": "Sampangiramanagar",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560027",
    "phone": "080 - 22237535 / 22237117",
    "email": "insurance@hindujasindhihospital.com",
    "isPPN": true,
    "latitude": "12.967758",
    "longitude": "77.589129",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Cardiac & Circulatory Disorder",
      "Dermatology",
      "Endocrinology",
      "Gastroenterology",
      "Infectious and parasitic diseases",
      "Medicine",
      "Neurology",
      "Obstetrics",
      "Oncology",
      "Ophthalomology",
      "Orthopedics",
      "Pediatrics",
      "Pulmonology",
      "Uronephrology"
    ],
    "AvgRating": 4,
    "EntityId": 1000570
  },
  {
    "id": 56964,
    "name": "Prasad Eye Hospital",
    "address": "No. 11, Krinshan Nagar Indistrial Layout, D.R.C. Post, Near Christ College, Hosur Main Road, Bangalore - 560 029.",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560029",
    "phone": "080 - 41106887",
    "email": "prasadeyehospital@hotmail.com",
    "isPPN": true,
    "latitude": "12.935654",
    "longitude": "77.60802",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Ophthalomology"
    ],
    "AvgRating": 4,
    "EntityId": 1001031
  },
  {
    "id": 50810,
    "name": "Rama Krishna Nursing Home",
    "address": "806/1  15th Cross  3rd Block  Jayanagar",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560004",
    "phone": "080 -  26656800 / 26633143",
    "email": "insurance@rkhealth.com",
    "isPPN": false,
    "latitude": "12.9338915",
    "longitude": "77.587159",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Orthopedics"
    ],
    "AvgRating": 5,
    "EntityId": 1000624
  },
  {
    "id": 172997,
    "name": "Sagar Chandramma Hospitals",
    "address": "No. 1, Vani Vilas Road, V. V Puram",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560004",
    "phone": "26013255/7899930207",
    "email": "INFO@SAGARCHANDRAMMA.IN",
    "isPPN": true,
    "latitude": "12.9421166",
    "longitude": "77.5753609",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [],
    "AvgRating": 0,
    "EntityId": 1025187
  },
  {
    "id": 50853,
    "name": "Sagar Hospitals",
    "address": "# 44 / 54 30th Cross Tilaknagar, Jayanagar Extn Bangalore",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560041",
    "phone": "080 - 23156979 / 26536700 / 8",
    "email": "inssagar@gmail.com",
    "isPPN": true,
    "latitude": "12.9280031",
    "longitude": "77.599599",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Cardiac & Circulatory Disorder",
      "Dermatology",
      "Endocrinology",
      "ENT",
      "Gastroenterology",
      "Hematology",
      "Infectious and parasitic diseases",
      "Medicine",
      "Neurology",
      "Obstetrics",
      "Oncology",
      "Ophthalomology",
      "Orthopedics",
      "Pediatrics",
      "Psychiatric Disorders",
      "Pulmonology",
      "Uronephrology"
    ],
    "AvgRating": 0,
    "EntityId": 1000652
  },
  {
    "id": 134588,
    "name": "Sankalp Nethralaya And Polyclinic",
    "address": "85/1, 19th Main Hsr Layout Sector 1, Bangalore",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560025",
    "phone": "80-2580466,8884087066",
    "email": "drvinaypatil@yahoo.co.in",
    "isPPN": true,
    "latitude": "12.9131929",
    "longitude": "77.644738",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [],
    "AvgRating": 4,
    "EntityId": 1005499
  },
  {
    "id": 51241,
    "name": "Shanthi Nursing Home",
    "address": "No. 679, 11th Main, 4th Block, 36th Cross, Jayanagar, Bangalore",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560011",
    "phone": "080 - 22446262 / 26346262 / 26341314",
    "email": "shanthinh@gmail.com",
    "isPPN": false,
    "latitude": "12.923965",
    "longitude": "77.587134",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Cardiac & Circulatory Disorder",
      "Dermatology",
      "Endocrinology",
      "ENT",
      "Gastroenterology",
      "Infectious and parasitic diseases",
      "Neurology",
      "Obstetrics",
      "Oncology",
      "Orthopedics",
      "Pediatrics",
      "Pulmonology",
      "Uronephrology"
    ],
    "AvgRating": 0,
    "EntityId": 1000899
  },
  {
    "id": 177967,
    "name": "Shekar Eye Hospital (A Unit Of Varasiddi Hospital)",
    "address": "NO. 633 100 FT. RING ROAD J.P.NAGAR 3RD PHASE",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560078",
    "phone": "26593210/9980562020",
    "email": "tpa@shekareyehospital.com",
    "isPPN": true,
    "latitude": "12.906406",
    "longitude": "77.5958928",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [],
    "AvgRating": 0,
    "EntityId": 1026419
  },
  {
    "id": 51242,
    "name": "Shekhar Hospital ",
    "address": "(A Unit Of Shekhar Nursing Home) No. 942/45, 28th Main, 9th Block, Jayanagar, Bangalore",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560069",
    "phone": "080 - 22454223",
    "email": "shekharhospitaljayanagar@gmail.com",
    "isPPN": true,
    "latitude": "12.917551",
    "longitude": "77.59485",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Cardiac & Circulatory Disorder",
      "Dermatology",
      "Endocrinology",
      "Gastroenterology",
      "Hematology",
      "Infectious and parasitic diseases",
      "Neurology",
      "Obstetrics",
      "Oncology",
      "Orthopedics",
      "Pediatrics",
      "Pulmonology",
      "Uronephrology"
    ],
    "AvgRating": 3,
    "EntityId": 1000900
  },
  {
    "id": 142820,
    "name": "Siddhi Eye Care",
    "address": "229, 7TH CROSS, INDIRANAGAR, 1ST STAGE",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560038",
    "phone": "25257125",
    "email": "SIDDHIEYE@GMAIL.COM",
    "isPPN": true,
    "latitude": "12.9805682",
    "longitude": "77.6397077",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      ""
    ],
    "AvgRating": 0,
    "EntityId": 1032573
  },
  {
    "id": 95407,
    "name": "South City Hospital",
    "address": "53/1(45), Shalini Susheela Road, Lalbagh Upparahalli, Bangalore",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560004",
    "phone": "080 - 26572222",
    "email": "info@southcityhospital.com",
    "isPPN": true,
    "latitude": "12.949731",
    "longitude": "77.580288",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Cardiac & Circulatory Disorder",
      "Dermatology",
      "Endocrinology",
      "Gastroenterology",
      "Hematology",
      "Infectious and parasitic diseases",
      "Medicine",
      "Obstetrics",
      "Oncology",
      "Orthopedics",
      "Pulmonology",
      "Uronephrology"
    ],
    "AvgRating": 4,
    "EntityId": 1003805
  },
  {
    "id": 102878,
    "name": "Sparsh Hospital For Advanced Surgeries",
    "address": "# 146, Infantry Road, Opp To Police Commissioners Office",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560001",
    "phone": "080 - 33282061 / 33282006",
    "email": "insurancehas@sparshhospital.com",
    "isPPN": true,
    "latitude": "12.9809902",
    "longitude": "77.6022359",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Cardiac & Circulatory Disorder",
      "Dermatology",
      "Endocrinology",
      "Gastroenterology",
      "Hematology",
      "Infectious and parasitic diseases",
      "Medicine",
      "Orthopedics"
    ],
    "AvgRating": 4,
    "EntityId": 1004068
  },
  {
    "id": 58182,
    "name": "Sri Jayadeva Institute Of Cardiovascular Sciences And Research",
    "address": "Jayanagar 9th Block, Bannerghatta Road, Bangalore - 560069",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560069",
    "phone": "080 - 22977314",
    "email": "insurance.sjic@gmail.com",
    "isPPN": true,
    "latitude": "12.917944",
    "longitude": "77.59924",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Cardiac & Circulatory Disorder",
      "Endocrinology",
      "Gastroenterology",
      "Hematology",
      "Infectious and parasitic diseases",
      "Medicine",
      "Neurology",
      "Obstetrics",
      "Oncology",
      "Pediatrics",
      "Pulmonology",
      "Uronephrology"
    ],
    "AvgRating": 4,
    "EntityId": 1001080
  },
  {
    "id": 98954,
    "name": "Sri Venkateshwara Hospital",
    "address": "No.86, Hosur Main Road, Madiwala, Bangalore",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560068",
    "phone": "080-40416789 / 41508702",
    "email": "srivenkata_6@hotmail.com",
    "isPPN": false,
    "latitude": "12.926415",
    "longitude": "77.616654",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Cardiac & Circulatory Disorder",
      "Endocrinology",
      "Gastroenterology",
      "Infectious and parasitic diseases",
      "Obstetrics",
      "Orthopedics",
      "Pulmonology",
      "Uronephrology"
    ],
    "AvgRating": 3,
    "EntityId": 1003923
  },
  {
    "id": 51052,
    "name": "Sunayana Eye Hospital",
    "address": "# 1156, 26th Main, 4th T Block, Jayanagar",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560041",
    "phone": "080 - 22442356 / 22453473",
    "email": "info@sunayanaeyehospital.com",
    "isPPN": true,
    "latitude": "12.925528",
    "longitude": "77.593677",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Ophthalomology"
    ],
    "AvgRating": 5,
    "EntityId": 1000770
  },
  {
    "id": 213031,
    "name": "THE LIFE PLUS HOSPITAL ( A UNIT OF ASHRITHA HEALTHCARE)",
    "address": "266/C INDIRANAGAR, 80 FEET ROAD, SIR CV RAMAN HOSPITAL ROAD, NEAR CMH HOSPITAL",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560075",
    "phone": "080 - 25254444 / 25256666",
    "email": "lifeplushospitalinsurance@gmail.com",
    "isPPN": true,
    "latitude": "12.975603",
    "longitude": "77.646964",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      ""
    ],
    "AvgRating": 0,
    "EntityId": 1044565
  },
  {
    "id": 51109,
    "name": "Trinity Hospital And Heart Foundation",
    "address": "Near Rv Teacher College Circle, Basavanagudi, Basavanagudi",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560004",
    "phone": "080 - 26563994 / 26563995",
    "email": "trinityheartfoundation@gmail.com",
    "isPPN": true,
    "latitude": "12.942117",
    "longitude": "77.575361",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Cardiac & Circulatory Disorder",
      "Dermatology",
      "Endocrinology",
      "Gastroenterology",
      "Hematology",
      "Infectious and parasitic diseases",
      "Neurology",
      "Orthopedics",
      "Pulmonology",
      "Uronephrology"
    ],
    "AvgRating": 3,
    "EntityId": 1000811
  },
  {
    "id": 68440,
    "name": "Varalakshmi Hospital",
    "address": "# 38/2, 2nd Main Road, Madiwala New Extention",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560068",
    "phone": "080 - 25539565",
    "email": "VLHOSPITAL@GMAIL.COM",
    "isPPN": false,
    "latitude": "12.924805",
    "longitude": "77.617371",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Cardiac & Circulatory Disorder",
      "Gastroenterology",
      "Infectious and parasitic diseases",
      "Obstetrics",
      "Oncology",
      "Uronephrology"
    ],
    "AvgRating": 3,
    "EntityId": 1002684
  },
  {
    "id": 99406,
    "name": "Vasan Eye Care Hospital",
    "address": "# 28 & 29, 7th Main Diagonal Road, Opp To Maiyas Hotel & Vinayak temple, Jayanagar 4th block , Bangalore-560011.",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560011",
    "phone": "080- 7829996717 / 39890500",
    "email": "jayanagar.ka@vasaneye.in",
    "isPPN": true,
    "latitude": "12.928878",
    "longitude": "77.581995",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Gastroenterology",
      "Ophthalomology",
      "Pediatrics"
    ],
    "AvgRating": 4,
    "EntityId": 1003943
  },
  {
    "id": 115429,
    "name": "Vasan Eye Care Hospital",
    "address": "# 1127/A, 7thsector, Near Bda Complex, Hsr Layout",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560102",
    "phone": "80-25720499",
    "email": "hsrlayout.ka@vasaneye.in",
    "isPPN": true,
    "latitude": "12.912258",
    "longitude": "77.634721",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Gastroenterology",
      "Ophthalomology"
    ],
    "AvgRating": 4,
    "EntityId": 1004566
  },
  {
    "id": 128350,
    "name": "Vasan Eye Care Hospital",
    "address": "Dps Tower No 40 1st Floor Above Icici Bank Ltd Banner Ghatta Road Arekere Bangalore",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560076",
    "phone": "080 - 30404600",
    "email": "bannerghatta.ka@vasaneye.in",
    "isPPN": true,
    "latitude": "12.9099402",
    "longitude": "77.5976734",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Ophthalomology"
    ],
    "AvgRating": 4,
    "EntityId": 1004941
  },
  {
    "id": 115427,
    "name": "Vasan Eye Care Hospital",
    "address": "Sri Murthy Complex, No.43, Garvey Bhav Palya Hongasandra Village Begur, Hobli, Hosur Main Road, Bommanahalli",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560068",
    "phone": "80-39890950",
    "email": "bommanahalli.ka@vasaneye.in",
    "isPPN": true,
    "latitude": "12.936642",
    "longitude": "77.605327",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Ophthalomology"
    ],
    "AvgRating": 4,
    "EntityId": 1004564
  },
  {
    "id": 94044,
    "name": "Vasan Eye Care Hospital",
    "address": "# 897/C, 80 Feet Road, 6th Block Koramangala",
    "state": "Karnataka",
    "city": "Bengaluru",
    "pinCode": "560034",
    "phone": "080 - 39890000",
    "email": "koramangala.ka@vasaneye.in",
    "isPPN": true,
    "latitude": "12.941806",
    "longitude": "77.62322",
    "associatedInsuranceCompanies": [
      {
        "fullName": "The New India Assurance Co. Ltd",
        "shortName": "NIA",
        "Policyname": null,
        "InsCompId": 0
      }
    ],
    "HospSpecialities": [
      "Ophthalomology"
    ],
    "AvgRating": 4,
    "EntityId": 1003767
  }
]

export default DireflowComponent.create({
  component: App,
  configuration: {
    tagname: 'mapmyindia-webcomponent',
    useShadow: false
  },
  properties: {
    // mapSdkKey: '45c6cb9384a365f919646264779a50c4',
    // apiToken: 'bearer f16ec428-836d-40b0-af1f-8e97dbdde507',
    // coordinates: {
    //   lat: 12.9411643, lng: 77.6212899
    // },
    // features: ['search'],
    // multipleMarkers: data,
    // radius: 5 * 1000
    mapSdkKey: '',
    apiToken: 'bearer f16ec428-836d-40b0-af1f-8e97dbdde507',
    coordinates: {},
    multipleMarkers: [],
    radius: 1000,
    features: ['search']
  },
  plugins: [
    {
      name: 'font-loader',
      options: {
        google: {
          families: ['Advent Pro', 'Noto Sans JP'],
        },
      },
    },
  ],
});
