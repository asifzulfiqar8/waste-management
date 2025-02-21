import React, { useState } from 'react'
import Input from '../../../../components/shared/small/Input'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import CustomMap from './CustomMap'

// Custom component to update the map position dynamically
function UpdateMapCenter({ position }) {
    const map = useMap()
    map.setView(position)
    return null
}

function MapInfo({ currentStep, handleNext, handlePrevious, handleCancel }) {
    const [latitude, setLatitude] = useState(51.505)
    const [longitude, setLongitude] = useState(-0.09)
    const position = [latitude, longitude]

    const handleLatitudeChange = (e) => {
        setLatitude(parseFloat(e.target.value) || 0)
    }

    const handleLongitudeChange = (e) => {
        setLongitude(parseFloat(e.target.value) || 0)
    }

    return (
        <div className="flex flex-col items-center w-full lg:w-[1060px] justify-center p-4 md:p-8">
            <section className="space-y-4 w-full max-w-5xl">
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

            <section className="flex  w-full justify-end mt-4 space-x-2 p-2 rounded-lg">
                {currentStep > 1 && (
                    <button
                        className="px-4 py-2 bg-gray-400 text-white rounded-lg"
                        onClick={handlePrevious}
                    >
                        Previous
                    </button>
                )}
                {currentStep < 3 ? (
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                        onClick={handleNext}
                    >
                        Next
                    </button>
                ) : (
                    <button
                        className="px-4 py-2 bg-green-500 text-white rounded-lg"
                        onClick={handleCancel}
                    >
                        Confirm
                    </button>
                )}
            </section>
        </div>
    )
}

export default MapInfo
