import {Bar} from "react-chartjs-2";
import {chart_2} from "../../data";

const Chart2 = () => {
    return (
        <div className={"chart-container"}>
            <Bar
                data={{
                    labels: chart_2.map((data) => data.label),
                    datasets: [
                        {
                            label: "Заробітна плата працівників компанії",
                            data: chart_2.map(data => data.value),
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 205, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                            ],
                            borderColor: [
                                'rgb(255, 99, 132)',
                                'rgb(255, 205, 86)',
                                'rgb(75, 192, 192)',
                                'rgb(54, 162, 235)',
                                'rgb(153, 102, 255)',
                            ],
                        }
                    ]
                }}
                options={
                    {
                        plugins: {
                            datalabels: {
                                display: true,
                                color: 'gray',
                                anchor: "center" ,
                                align: "end",
                                font: {
                                    weight: 'bold',
                                },
                                formatter: (value, ctx) => {
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
                                }                            },

                        }
                    }}
            />
        </div>
    )
}

export default Chart2;