import {Chart} from "chart.js/auto";
import {Bar} from "react-chartjs-2";
import ChartDataLables from 'chartjs-plugin-datalabels';
import {chart_4} from "../../data";

Chart.register(ChartDataLables);
const Chart4 = () => {

    return (
        <div className={"chart-container"}>
            <Bar
                data={{
                    labels: chart_4.map((data) => data.label),
                    datasets: [
                        {
                            label: "Рівень плинності кадрів(%)",
                            data: chart_4.map(data => data.value),
                            backgroundColor: 'rgb(0,3,91)',
                            borderColor: 'rgb(181,180,255)'
                        }
                    ]
                }}
                options={
                    {
                        responsive: true,
                        maintainAspectRatio: true,
                        plugins: {
                            datalabels: {
                                display: true,
                                color: 'white',
                                font: {
                                    weight: 'bold',
                                },
                                formatter: (value) => {
                                    return value + "%";
                                }
                            },
                            legend: {
                                display: true,
                                position: "bottom",
                                color: "lightslategray",
                                labels: {
                                    font: {
                                        size: 15
                                    }
                                }
                            },
                        },
                        scales: {
                            y: {
                                max: 20
                            }
                        }
                    }
                }
            />
        </div>
    )
}

export default Chart4;