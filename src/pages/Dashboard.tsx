import React, { useState, useEffect } from 'react';
import BarChart from '../components/BarChart';
import DonutChart from '../components/DonutChart';
import Sidebar from '../components/Sidebar/Sidebar';
import api from '../services/api'

import '../styles/pages/dash.css'

// 

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
    description: string;
}

function Dashboard() {
    const [deseaseChartData, setDeseaseChartData] = useState<String[]>([])

    useEffect(() => {
        api
            .get('/desease')
            .then((response) => {
                api
                    .get('/infections', {
                        params: {
                            date: 365,
                            type: response.data.map((d: Desease) => { return d.id.toString() })
                        }
                    })
                    .then((response) => {
                        setDeseaseChartData(response.data.map((i: Infection) => { return i.desease.name }))
                    })
            })
    }, [])

    return (
        <div className="container-dashboard">

            < Sidebar />
            <div className="container-charts">
                <div className="titles">
                    <h1>Dashboard</h1>
                    <h4>Confira abaixo os principais dados</h4>
                </div>
                <div className="charts">
                    <div>
                        <p>Quantidade por doença</p>
                        <BarChart data={deseaseChartData} />
                    </div>

                    <div>
                        <p>Percentual de infecção</p>
                        <DonutChart data={deseaseChartData} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard;