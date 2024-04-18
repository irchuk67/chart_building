import {Bar} from "react-chartjs-2";
import {chart_11} from "../../data";
const Chart11 = () => {
    return(
        <div className={"chart-container"}>
            <Bar
                data={
                    {
                        labels: chart_11.map(data => data.name),
                        datasets: [
                            {
                                label: "Заробітна плата, тис. грн.",
                                data: chart_11.map(data => data.salary/1000),
                                backgroundColor: "rgba(25, 10, 45, 0.8)",
                                borderColor: "rgb(25, 10, 45)"
                            },
                            {
                                label: "Доходи, тис. грн.",
                                data: chart_11.map(data => data.income/1000),
                                backgroundColor: "rgba(0,119,7,0.8)",
                                borderColor: "rgb(0,107,8)"
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
                                anchor: "end",
                                align: "end",
                                font: {
                                    weight: 'bold',
                                },
                                formatter: (value) => {
                                    return value + "тис. грн.";
                                },
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
                            }
                        },
                        indexAxis: "y",
                        scales: {
                            x: {
                                min: 0,
                                max: 30
                            }
                        }
                    }}
            />
        </div>
    )
}

export default Chart11;