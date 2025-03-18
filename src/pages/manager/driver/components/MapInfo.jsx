import React, { useState } from "react";
import { useMap } from "react-leaflet";
import Input from "../../../../components/shared/small/Input";
import CustomMap from "./CustomMap";

// Custom component to update the map position dynamically
function UpdateMapCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function MapInfo({ currentStep, handleNext, handlePrevious, handleCancel }) {
  const [latitude, setLatitude] = useState(51.505);
  const [longitude, setLongitude] = useState(-0.09);
  const position = [latitude, longitude];

  const handleLatitudeChange = (e) => {
    setLatitude(parseFloat(e.target.value) || 0);
  };

  const handleLongitudeChange = (e) => {
    setLongitude(parseFloat(e.target.value) || 0);
  };

  return (
    <div className="flex flex-col items-center w-full  justify-center p-4 md:p-8">
      <section className="space-y-4 w-full">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Input
            placeholder="Latitude"
            value={latitude}
            onChange={handleLatitudeChange}
          />
          <Input
            placeholder="Longitude"
            value={longitude}
            onChange={handleLongitudeChange}
          />
        </section>

        <section className="flex justify-center h-[200px] bg-red-300">
          <CustomMap longitude={longitude} latitude={latitude} />
        </section>
      </section>

      <section className="flex pt-4 w-full  justify-center mt-4 space-x-2 p-2 rounded-lg">
        {currentStep > 1 && (
          <button
            className="px-4 py-2 border border-primary text-primary rounded-lg"
            onClick={handlePrevious}
          >
            Previous
          </button>
        )}
        {currentStep < 3 ? (
          <button
            className="px-4 py-2 bg-primary text-white rounded-lg"
            onClick={handleNext}
          >
            Next
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-primary text-white rounded-lg"
            onClick={handleCancel}
          >
            Confirm
          </button>
        )}
      </section>
    </div>
  );
}

export default MapInfo;
