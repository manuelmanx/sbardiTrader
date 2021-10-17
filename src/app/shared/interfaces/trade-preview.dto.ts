export type $TradePreviewDataSource = {
    symbol: string,
    percentProfit: number,
    percentTarget: number,
    id: string,
    partial: number,
    date: Date,
    ongoing: boolean,
    closeType?: $TradeCloseType,
}
export type $TradeCloseType = "Take Profit" | "Stop Loss" | "Mercato";