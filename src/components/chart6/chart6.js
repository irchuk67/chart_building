import {Line} from "react-chartjs-2";
import {Chart} from "chart.js";
import {chart_6} from "../../data";

const Chart6 = () => {
    return (
        <div className={"chart-container"}>
            <Line
                data={{
                    labels: chart_6.map((data) => data.work_experience),
                    datasets: [{
                        label: "Надбавка до зарплати в залежності від досвіду роботи, %",
                        data: chart_6.map((data) => data.premium),
                        borderColor: "rgb(8,86,164)",
                        pointBackgroundColor: "rgba(8,86,164, .3)",
                        pointStyle: 'circle',
                        pointRadius: 10,
                        pointHoverRadius: 15
                    }]
                }}
                options={
                    {
                        responsive: true,
                        maintainAspectRatio: true,
                        plugins: {
                            datalabels: {
                                display: true,
                                color: 'gray',
                                anchor: "center",
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
                            x: {
                                display: true,
                                title: {
                                    display: true,
                                    text: "Досвід роботи",
                                    font: {
                                        size: 14
                                    }
                                }
                            },
                            y: {
                                display: true,
                                title: {
                                    display: true,
                                    text: "Надбавка до зарплати",
                                    font: {
                                        size: 14
                                    }
                                },
                                min: 0,
                                max: 100
                            }
                        }
                    }
                }
            />
        </div>
    )
}

export default Chart6;