import {Bar} from "react-chartjs-2";
import {chart_7} from "../../data";

const Chart7 = () => {
    return (
        <div className={"chart-container"}>
            <Bar
                data={
                    {
                        labels: chart_7.map(data => data.groupAge),
                        datasets: [
                            {
                                label: "Плинність кадрів у віковій групі",
                                data: chart_7.map(data => data.personnelTurnover),
                                backgroundColor: [
                                    'rgba(194,250,181,0.5)',
                                    'rgba(149,255,126,0.5)',
                                    'rgba(122,253,91,0.5)',
                                    'rgba(108,255,71,0.5)',
                                    'rgba(29,252,74,0.5)',
                                ],
                                borderColor: [
                                    'rgba(194,250,181,1)',
                                    'rgba(149,255,126,1)',
                                    'rgba(122,253,91,1)',
                                    'rgba(108,255,71,1)',
                                    'rgba(29,252,74,1)',
                                ],
                                borderWidth: 2
                            }
                        ]
                    }
                }

                options={
                    {
                        responsive: true,
                        maintainAspectRatio: true,
                        plugins: {
                            datalabels: {
                                display: true,
                                color: 'gray',
                                anchor: "end" ,
                                align: "end",
                                font: {
                                    weight: 'bold',
                                },
                                formatter: (value, ctx) => {
                                    return value + "%";
                                },
                            },
                            legend: {
                                position: "bottom",
                                color: "lightslategray",
                                labels: {
                                    font: {
                                        size: 15
                                    }
                                }
                            }
                        },
                        scales: {
                            x: {},
                            y: {
                                min: 0,
                                max: 45
                            }
                        }
                    }
                }
            />
        </div>
    )
}

export default Chart7;