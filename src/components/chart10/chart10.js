import {Pie} from "react-chartjs-2";
import {chart_10} from "../../data";

const Chart10 = () => {
    return (
        <div className={"chart-container__circle chart-container"}>
            <Pie
                data={
                    {
                        labels: chart_10.map(data => data.department),
                        datasets: [
                            {
                                label: "Частка фондів вкладених у відділ, %",
                                data: chart_10.map(data => data.fondPart)
                            }
                        ]
                    }
            }
                options={
                    {
                        plugins: {
                            datalabels: {
                                display: true,
                                color: 'gray',
                                anchor: "center",
                                align: "center",
                                font: {
                                    weight: 'bold',
                                },
                                formatter: (value, ctx) => {
                                    return value + "%";
                                },
                            },
                            legend: {
                                display: true,
                                position: "right",
                                color: "lightslategray",
                                labels: {
                                    font: {
                                        size: 15
                                    }
                                }
                            }
                        },
                    }}
            />
                    </div>
                    )
                }

export default Chart10;