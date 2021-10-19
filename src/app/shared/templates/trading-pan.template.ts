import { $UserTradingPlanType } from "../interfaces/database.dto";

export const $emptyTradingPlanTemplate1: $UserTradingPlanType = {
    strategyName: "RR",
    maxDailyTrades: 3,
    maxOngoingTrades: 4,
    maxStopLossPerDay: 1,
    maxPercentRiskPerTrade: -2,
    minPercentProfitPerTrade: 4,
    montlyPercentGoal: 15,
    takePartials: true,
    maxPartializationPerTrade: 3,
    minPartializationPerTrade: 1,
    entryCheckList: null
}
export const $emptyTradingPlanTemplate: $UserTradingPlanType = {
    strategyName: null,
    maxDailyTrades: null,
    maxOngoingTrades: null,
    maxStopLossPerDay: null,
    maxPercentRiskPerTrade: null,
    minPercentProfitPerTrade: null,
    montlyPercentGoal: null,
    takePartials: false,
    maxPartializationPerTrade: null,
    minPartializationPerTrade: null,
    entryCheckList: null
}