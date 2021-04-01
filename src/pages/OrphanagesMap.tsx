import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import HappyMapIcon from '../utils/mapIcon'
import api from '../services/api'

import '../styles/pages/orphanage-map.css'


interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function OrphanagesMap() {

    const [orphanages, setOrphanages] = useState<Orphanage[]>([])

    useEffect(() => {

        api.get('orphanages').then((response) => {
            setOrphanages(response.data)
        })

    }, [])

    return (
        <div id="page-map">
            <aside>
                <header>
                    <p>Utilize os filtros para ver uma informação específica</p>
                </header>

                <footer>
                    <strong>Porto Velho</strong>
                    <span>Rondônia</span>
                </footer>
            </aside>
            <Map
                center={[-8.754297, -63.885913]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}

                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

                {orphanages.map(orphanage => {
                    return (
                        <Marker
                            icon={HappyMapIcon}
                            position={[orphanage.latitude, orphanage.longitude]}
                            key={orphanage.id}
                        >
                            <Popup
                                closeButton={false}
                                minWidth={240}
                                maxWidth={240}
                                className="map-popup"
                            >
                                {orphanage.name}
                                <Link to={`/orphanages/${orphanage.id}`}>
                                    <FiArrowRight size={20} color="#fff" />
                                </Link>

                            </Popup>
                        </Marker>
                    )
                })}

            </Map>


        </div>
    )
}

export default OrphanagesMap;
