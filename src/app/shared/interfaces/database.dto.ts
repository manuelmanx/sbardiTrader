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
    montlyPercentGoal: number;
    takePartials: boolean;
    maxPartializationPerTrade: number;
    minPartializationPerTrade: number;
    entryCheckList: string[];
}

export type $UserTradeOperationType = {
    id: string,
    symbol: string,
    percentProfit?: number,
    partial: number,
    date: string,
    ongoing: boolean,
    percentTarget?: number,
    closeType?: $TradeCloseType,
    canBePartialized?: boolean,
    partializzations?: number,
    checkListElements?: string[],
    analisysLink?: string,
    warnings?: $UserTradeWarningsType[],
    description?: string;
    _key?: string;
    _deltaPercentProfit?: number;
}

export type $UserTradeWarningsType = {
    key: string,
    description: string,
}