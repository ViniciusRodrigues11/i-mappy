import React from 'react';
import Chart from 'react-apexcharts';

const DonutChart = () => {

    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            // macete 3 pontinhos. pega todo mundo do options e pode incluir mais coisas nesse objeto
            // labels pegam a const mock e o atributo labels
            options={{ ...options, labels: mockData.labels }}
            // series são os números de cada um 
            series={mockData.series}
            // tipo do gráfico
            type="donut"
            height="240"
            style={{minWidth: 720}}
        />
    );
}

export default DonutChart;