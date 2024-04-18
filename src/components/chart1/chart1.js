import {Bar} from "react-chartjs-2";
import {chart_1} from "../../data";
import {getGradient} from "../../gradient";

const Chart1 = () => {
    return (
        <div className={"chart-container"}>
            <Bar
                data={{
                    labels: chart_1.map((data) => data.label),
                    datasets: [
                        {
                            label: "Прогнозована кількість навчальних закладів",
                            data: chart_1.map(data => data.value),
                            backgroundColor: function (context) {
                                const chart = context.chart;
                                const {ctx, chartArea} = chart;

                                if (!chartArea) {
                                    // This case happens on initial chart load
                                    return;
                                }
                                return getGradient(ctx, chartArea, "rgb(120,251,255)", "rgb(227,196,253)");
                            }
                        }
                    ]
                }}
                options={
                    {
                        plugins: {
                            datalabels: {
                                display: false
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

                        }
                    }}
            />
        </div>
    )
}

export default Chart1;