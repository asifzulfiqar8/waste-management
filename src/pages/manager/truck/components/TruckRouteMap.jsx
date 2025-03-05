import React, { useState } from 'react'
import CustomMap from '../../bin/components/CustomMap'

function TruckRouteMap() {
    const [latitude, setLatitude] = useState(51.505)
    const [longitude, setLongitude] = useState(-0.09)
    const position = [latitude, longitude]
    return (
        <div className="flex flex-col justify-center h-[300px] lg:h-full ">
            <h3 className="text-base p-3 font-semibold"> Map Viewv</h3>
            <CustomMap longitude={longitude} latitude={latitude} />

        </div>
    )
}

export default TruckRouteMap