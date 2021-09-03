import {
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexTitleSubtitle,
    ApexYAxis,
    ApexTooltip,
    ApexPlotOptions,
    ApexStroke
} from "ng-apexcharts";

export interface $ChartOptionsInterface {
    series?: ApexAxisChartSeries;
    chart?: ApexChart;
    xaxis?: ApexXAxis;
    yaxis?: ApexYAxis;
    title?: ApexTitleSubtitle;
    tooltip?: ApexTooltip;
    stroke?: ApexStroke;
    plotOptions?: ApexPlotOptions;
};