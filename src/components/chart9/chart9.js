import {chart_6, chart_9} from "../../data";
import {Line} from "react-chartjs-2";
const Chart9 = () => {
    const down = (ctx, value) => ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;
    const up = (ctx, value) => ctx.p0.parsed.y < ctx.p1.parsed.y ? value : undefined;
    return(
        <div className={"chart-container"}>
            <Line
                data={{
                    labels: chart_9.map((data) => data.year),
                    datasets: [{
                        label: "Рівень прибутковості акцій, %",
                        data: chart_9.map((data) => data.stockReturns),
                        segment: {
                            backgroundColor: ctx => down(ctx, 'rgb(176,0,0)') || up(ctx, 'rgb(0,176,11)'),
                            borderColor: ctx => down(ctx, 'rgb(176,0,0)') || up(ctx, 'rgb(0,176,11)'),
                        },
                        pointBackgroundColor: "rgb(131,130,130)",
                        pointBorderWidth: 0
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
                                anchor: "end",
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
                            y: {
                                min: 0,
                                max: 150,

                            }
                        }
                    }
                }
            />
        </div>
    )
}

export default Chart9;