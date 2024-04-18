import {Bar, Line} from "react-chartjs-2";
import {chart_3} from "../../data";

const Chart3 = () => {
    return (
        <div className={"chart-container"}>
            <Bar
                data={{
                    labels: chart_3.map((data) => data.label),
                    datasets: [
                        {
                            label: "Ціна бензину, грн.",
                            data: chart_3.map(data => data.price)
                        },
                        {
                            type: "line",
                            label: "Якість бензину, %",
                            data: chart_3.map(data => data.quality)
                        }
                    ]
                }}
                options={
                    {
                        // responsive: true,
                        // maintainAspectRatio: true,
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
                                    if(ctx.dataset.type === "line")
                                        return value + "%";
                                    return value + "грн.";
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
                    }
                }/>
        </div>
    )
}

export default Chart3;