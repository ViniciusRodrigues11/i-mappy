import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

interface DonutChartProps {
    data: String[]
}

const DonutChart: React.FC<DonutChartProps> = (data) => {
    const [categories, setCategories] = useState<string[]>([])
    const [chartData, setChartData] = useState<Number[]>([])

    function prepareChartData(data: String[]) {
        let dataSet = new Set(data)
        let headers: string[] = []
        let values: Number[] = []

        dataSet.forEach((d: String) => {
            headers.push(d.toString())
            values.push(data.filter((value) => { return value === d }).length)
        })

        return { headers, values }
    }

    useEffect(() => {
        let { headers, values } = prepareChartData(data.data)
        setCategories(headers)
        setChartData(values)
    }, [data])

    const mockData = {
        series: chartData,
        labels: categories
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