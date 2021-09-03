export interface $DataCandleInterface {
    close: number;
    date: string;
    high: number;
    low: number;
    open: number;
    volume: number;
}

export interface $ForexDataRetrivingParamsInterface {
    apikey: string,
    pair: string,
    timeframe: $ForexTimeframeEnum,
}

export enum $ForexTimeframeEnum {
    "1min" = "1min",
    "5min" = "5min",
    "15min" = "15min",
    "1hour" = "1hour",
    "2hour" = "2hour",
    "4hour" = "4hour",
}