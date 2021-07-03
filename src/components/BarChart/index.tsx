import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

interface BarChartProps {
    data: String[]
}

const BarChart: React.FC<BarChartProps> = ( data ) => {
    const [categories, setCategories] = useState<String[]>([])
    const [chartData, setChartData] = useState<Number[]>([])

    function prepareChartData(data: String[]) {
        let dataSet = new Set(data)
        let headers: String[] = []
        let values: Number[] = []

        dataSet.forEach((d: String) => {
            headers.push(d)
            values.push(data.filter((value) => { return value === d }).length)
        })

        return { headers, values }
    }

    useEffect(() => {
        let { headers, values } = prepareChartData(data.data)
        setCategories(headers)
        setChartData(values)
    }, [data])

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
            categories: categories
        },
        // gráfico de barra a series é uma lista.
        series: [
            // Pode ter mais de um conjunto de dados.
            {
                name: "Número de casos",
                data: chartData
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
            style={{minWidth: 720}}
        />
    );
}

export default BarChart;