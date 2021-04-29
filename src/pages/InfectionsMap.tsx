import React, { useEffect, useState, ChangeEvent, useCallback } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet'
import Slider from 'react-input-slider'
import HappyMapIcon from '../utils/mapIcon'
import api from '../services/api'
import Mavis from '../images/MAVIS-LOGO.svg'
import '../styles/pages/orphanage-map.css'


interface Infection {
    id: number;
    latitude: number;
    longitude: number;
    desease: {
        name: string
    }
}

interface Desease {
    id: number;
    name: string;
}

function InfectionsMap() {

    const [infections, setInfections] = useState<Infection[]>([])
    const [desease, setDesease] = useState<Desease[]>([])
    const [selectedDesease, setSelectedDesease] = useState<String[]>([])
    const [date, setDate] = useState({ x: 30 })



    const updateInfections = useCallback(() => {
        api.get('infections', {
            params: {
                date: date.x,
                type: selectedDesease.toString()
            }
        }).then((response) => {
            setInfections(response.data)
        })
    }, [date, selectedDesease])

    useEffect(() => {

        api.get('desease').then((response) => {
            setDesease(response.data)
        })

    }, [])

    const handleSetDesease = (e: ChangeEvent) => {
        if (e.target.id) {
            !selectedDesease.includes(e.target.id) ?
                setSelectedDesease([...selectedDesease, e.target.id]) :
                setSelectedDesease(removeFromSelectedDesease(e.target.id))
        }
    }

    const removeFromSelectedDesease = (id: string) => {
        const newArray: String[] = [];
        selectedDesease.map(d => {
            return d !== id && newArray.push(d)
        })

        return newArray;
    }


    return (
        <div id="page-map">
            <aside>
                <img src={Mavis} alt="logo" />
                <header>
                    <p>Utilize os filtros para ver uma informação específica</p>
                </header>

                <div className="filters">
                    <div className="slider">
                        <p>{date.x} {date.x < 2 ? 'dia' : 'dias'}</p>
                        <Slider
                            styles={{
                                active: {
                                    backgroundColor: '#fff'
                                }
                            }}
                            axis="x"
                            xstep={1}
                            xmin={1}
                            xmax={60}
                            x={date.x}
                            onChange={({ x }) => setDate({ x: parseFloat(x.toFixed(2)) })}
                        />
                    </div>
                    <div className="desease-list">
                        <ul>
                            {desease.map(d => {
                                return (
                                    <li key={d.id}>
                                        <label htmlFor={d.name}>
                                            {d.name}

                                            <input type="checkbox" name={d.name} id={String(d.id)} onChange={e => handleSetDesease(e)} />
                                            <span></span>
                                        </label>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>


                <div className="submit">
                    <button type='button' onClick={updateInfections}>Pesquisar</button>
                </div>

                <footer>
                    <strong>Porto Velho</strong>
                    <span>Rondônia</span>
                </footer>
            </aside>
            <Map
                center={[-8.754297, -63.885913]}
                zoom={14}
                maxZoom={16}
                style={{ width: '100%', height: '100%' }}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}

                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

                {infections.map(infection => {
                    return (
                        <Marker
                            icon={HappyMapIcon}
                            position={[infection.latitude, infection.longitude]}
                            key={infection.id}
                        >
                        </Marker>
                    )
                })}

            </Map>


        </div>
    )
}

export default InfectionsMap;
