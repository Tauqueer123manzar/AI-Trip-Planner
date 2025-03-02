import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { LoadScript } from '@react-google-maps/api';
import Footer from '../../components/Footer';

const GOOGLE_API_KEY = import.meta.env.REACT_APP_GOOGLE_API_KEY;

const CreateTrip = () => {
  return (
    <>
      <LoadScript googleMapsApiKey={GOOGLE_API_KEY} libraries={['places']}>
        <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10 h-screen">
          <h2 className="font-bold text-3xl md:px-48">Tell us your travel preferences</h2>
          <p className="mt-4 text-xl text-gray-500 md:px-48">
            Just provide some basic information, and our trip planner will generate a customized itinerary
            <br /> based on your preferences
          </p>

          <div className="mt-10">
            <div className='my-2 md:px-48'>
              <h2 className="font-medium text-xl my-3">What is your destination choice?</h2>
              <GooglePlacesAutocomplete
                selectProps={{
                  placeholder: "Enter a destination...",
                  onChange: (place) => console.log('Selected:', place),
                  styles: {
                    control: (base) => ({
                      ...base,
                      backgroundColor: "#f8f8f8",
                      borderRadius: "8px",
                      padding: "5px"
                    })
                  }
                }}
              />

            </div>
          </div>
        </div>
      </LoadScript>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default CreateTrip;
