import { $TradeCloseType } from "./trade-preview.dto"

export type $DBUserDataType = {
    lastLogin?: string;
    tradingPlan?: $UserTradingPlanType;
    tradeList?: $UserTradeOperationType;
}

export type $UserTradingPlanType = {
    strategyName: string;
    maxDailyTrades: number;
    maxOngoingTrades: number;
    maxStopLossPerDay: number;
    maxPercentRiskPerTrade: number,
    minPercentProfitPerTrade: number;
    entryCheckList: $GenericEntryChecklistType[];
}

export type $UserTradeOperationType = {
    id: string,
    symbol: string,
    percentProfit: number,
    partial: number,
    date: Date,
    ongoing: boolean,
    closeType?: $TradeCloseType,
}

export type $GenericEntryChecklistType = {
    [key: string]: string
}