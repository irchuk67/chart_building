import {chart_8} from "../../data";
import {Bar} from "react-chartjs-2";

const Chart8 = () => {
    return (
        <div className={"chart-container"}>
            <Bar
                data={
                    {
                        labels: chart_8.map(data => data.region),
                        datasets: [
                            {
                                label: "Рівень народжуваності в регіоні, %",
                                data: chart_8.map(data => data.birthRate),
                                backgroundColor: [
                                    'rgba(199,157,252,0.5)',
                                    'rgba(178,118,253,0.5)',
                                    'rgba(149,70,250,0.5)',
                                    'rgba(126,30,246,0.5)',
                                    'rgba(111,0,252,0.5)',
                                ],
                                borderColor: [
                                    'rgba(199,157,252,1)',
                                    'rgba(178,118,253,1)',
                                    'rgba(149,70,250,1)',
                                    'rgba(126,30,246,1)',
                                    'rgba(111,0,252,1)',
                                ],
                                borderWidth: 1,
                            }
                        ],

                    }
                }
                options={
                {
                    indexAxis: "y",
                    plugins: {
                        datalabels: {
                            display: true,
                            color: 'rgb(41,16,73)',
                            anchor: "center" ,
                            align: "center",
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
                }
                }
            />
        </div>
    )
}

export default Chart8;