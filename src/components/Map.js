import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
import { useState } from 'react'

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)
    
    const markers = eventData.map(ev => {
        if(ev.categories[0].id === 8){
            return <LocationMarker
                        key={ev.id} 
                        lat={ev.geometries[0].coordinates[1]} 
                        lng={ev.geometries[0].coordinates[0]} 
                        onClick={() => setLocationInfo({ id: ev.id, title: ev.title})}
                        />
        }
        return null
    })
    console.log(eventData)
    
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyD3b2PhiPsuFxDqyK6HGEUg2LJkDhdeR1M'}}
                defaultCenter={ center }
                defaultZoom= { zoom }

            >
                {markers}

            </GoogleMapReact>

            {locationInfo && <LocationInfoBox info={ locationInfo } />}
            
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 39.7392,
        lng: -104.9903
    },
    zoom: 6
}

export default Map
