import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = () => {

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    const mockData = {
        // Dados estáticos por enquanto.
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        // gráfico de barra a series é uma lista.
        series: [
            // Pode ter mais de um conjunto de dados.
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]
            }
        ]
    };

    return (
        <Chart
            // macete 3 pontinhos. pega todo mundo do options e pode incluir mais coisas nesse objeto
            // xaxis - eixo X
            options={{ ...options, xaxis: mockData.labels }}
            series={mockData.series}
            // tipo do gráfico
            type="bar"
            height="240"
        />
    );
}

export default BarChart;