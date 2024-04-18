import {Bar} from "react-chartjs-2";
import {chart_12} from "../../data";
import {getGradient} from "../../gradient";

const Chart12 = () => {
    return (
        <div className={"chart-container"}>
            <Bar
                data={
                    {
                        labels: chart_12.map(data => data.name + " " + data.surname),
                        datasets: [
                            {
                                label: "Рейтинг",
                                data: chart_12.map(data => data.rate),
                                backgroundColor: function (context) {
                                    const chart = context.chart;
                                    const {ctx, chartArea} = chart;

                                    if (!chartArea) {
                                        // This case happens on initial chart load
                                        return;
                                    }
                                    return getGradient(ctx, chartArea, "rgb(0,63,192)", "rgb(220,176,255)");
                                }
                            }
                        ]
                    }
                }
                options={
                    {
                        // indexAxis: "y",
                        plugins: {
                            datalabels: {
                                color: 'white',
                                anchor: "center",
                                align: "center",
                                font: {
                                    weight: 'bold',
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
                        }
                    }
                }
            />
        </div>
    )
}

export default Chart12;