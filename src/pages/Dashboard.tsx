import React from 'react';
import BarChart from '../components/BarChart';
import DonutChart from '../components/DonutChart';
import Sidebar from '../components/Sidebar';

import '../styles/pages/landing.css'

// 



function Landing() {

    return (
        <>

            < Sidebar />
            <div className="container_dash">
                <h1 className="text-primary text-center py-3">Estatisticas das Doenças</h1>

                <div className="row px-3">

                    <div className="col-md-6">
                        <h5 className="text-center text-danger">Doenças </h5>
                        <BarChart />

                    </div>


                    <div className="col-md-6">
                        <h5 className="text-center text-danger">Doenças</h5>
                        <DonutChart />
                    </div>


                </div>

            </div>



        </>
    )
}

export default Landing;