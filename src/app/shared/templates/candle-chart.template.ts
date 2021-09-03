export const $CandleChartDataTemplate = {
    series: [
        {
            name: "candle",
            type: "candlestick",
            data: [

            ]
        }
    ],
    chart: {
        type: "line"
    },
    title: {
        text: "",
        align: "left"
    },
    stroke: {
        width: [3, 1]
    },
    xaxis: {
        type: "datetime"
    },
    plotOptions: {
        candlestick: {
            colors: {
                upward: '#5b9cf6',
                downward: '#e57373'
            }
        }
    }
}
