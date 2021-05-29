import React, { useEffect, useState, FormEvent } from "react";
import { useHistory } from 'react-router-dom'
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet'
import Sidebar from '../components/Sidebar'
import HappyMapIcon from '../utils/mapIcon'

import '../styles/pages/new-infection.css';
import api from "../services/api";
interface Desease {
    id: string;
    name: string;
    description: string;
}

function NewInfection() {

    const history = useHistory()

    const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
    const [desease, setDesease] = useState('')
    const [deseaseList, setDeseaseList] = useState<Desease[]>([])

    useEffect(() => {
        api
            .get("/desease")
            .then((response) => {
                setDeseaseList(response.data);
            })
            .catch((error) => {
                alert("Ocorreu um erro ao buscar os items");
            })
    }, [])

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()

        const { latitude, longitude } = position;

        const data = new FormData();

        data.append('latitude', String(latitude))
        data.append('longitude', String(longitude))
        data.append('desease_id', desease)

        try {
            await api.post('infections/new-infection', data)
            alert('Cadastro finalizado com sucesso!')
            history.push('/dashboard')
        } catch (error) {
            console.log(data.get('latitude'))
            console.log(data.get('longitude'))
            console.log(data.get('desease_id'))

            console.log(error)
            alert('Ocorreu um erro ao enviar as informações')
        }
    }


    function handleMapClick(event: LeafletMouseEvent) {
        const { lat, lng } = event.latlng;

        setPosition({
            latitude: lat,
            longitude: lng
        })
        console.log(position)
    }

    return (
        <div className="container-new-infection">

            < Sidebar />

            <main>
                <form onSubmit={handleSubmit} className="new-infection-form">
                    <fieldset>
                        <legend>Dados</legend>

                        <Map
                            center={[-8.758728, -63.885993]}
                            style={{ width: '100%', height: 280 }}
                            zoom={14}
                            onclick={handleMapClick}
                        >
                            <TileLayer
                                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                            />

                            {position.latitude !== 0 && (
                                <Marker
                                    interactive={false}
                                    icon={HappyMapIcon}
                                    position={[position.latitude, position.longitude]}
                                />
                            )}
                        </Map>

                        <div className="input-block">
                            <label htmlFor="desease">Doença</label>
                            <select
                                id="desease"
                                onChange={event => { setDesease(event.target.value); console.log(event.target.value) }}
                                required
                            >
                                <option value="" hidden>Selecione uma doença</option>
                                {deseaseList.map((desease: Desease) => (
                                    <option key={desease.id} value={desease.id}>
                                        {desease.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </fieldset>
                    <button className="confirm-button" type="submit">
                        Confirmar
                    </button>
                </form>
            </main>

        </div>
    )
}

export default NewInfection;