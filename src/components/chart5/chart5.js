import {Doughnut} from "react-chartjs-2";
import {chart_5} from "../../data";

const Chart5 = () => {
    return (
        <div className={"chart-container chart-container__circle"}>
            <Doughnut
                data={{
                    labels: chart_5.map((data) => data.label),
                    datasets: [
                        {
                            label: "Робочий час продовця магазину",
                            data: chart_5.map(data => data.value),
                            backgroundColor: [
                                "lightslategray",
                                "rgb(77,117,148)",
                                "rgb(40,100,159)",
                                "rgb(2,81,161)"
                            ]
                        }
                    ]
                }}
                options={
                    {
                        responsive: true,
                        maintainAspectRatio: true,
                        layout: {
                            autoPadding: true
                        },
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
                                position: "right",
                                color: "lightslategray",
                                labels: {
                                    font: {
                                        size: 15
                                    }
                                }
                            }
                        }
                    }
                }/>
        </div>
    )
}

export default Chart5;