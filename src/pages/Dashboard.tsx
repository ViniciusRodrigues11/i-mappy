import React from 'react';
import BarChart from '../components/BarChart';
import DonutChart from '../components/DonutChart';
import Sidebar from '../components/Sidebar/Sidebar';

import '../styles/pages/dash.css'

// 



function Dashboard() {

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
                        <BarChart />
                    </div>

                    <div>
                        <p>Percentual de infecção</p>
                        <DonutChart />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard;