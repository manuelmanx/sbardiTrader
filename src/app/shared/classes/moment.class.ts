export class $MomentClass {
    constructor() { }

    public getStartDate(tf: $TimeFrameEnum): Date {
        if (!tf) throw new Error();
        const now: Date = new Date();
        return this._getStartEndDateByTimeframe(tf, now);
    }

    private _getStartEndDateByTimeframe(tf: $TimeFrameEnum, date: Date): Date {
        let startDate = date;
        startDate.setHours(0, 0, 0, 0);
        let moment = {
            '1D': new Date(startDate.setDate(date.getDate() - 1)),
            '1M': new Date(startDate.setMonth(date.getMonth() - 1)),
            '3M': new Date(startDate.setMonth(date.getMonth() - 3)),
            '1Y': new Date(startDate.setFullYear(date.getFullYear() - 1)),
        }
        return moment[tf];
    }

}

export enum $TimeFrameEnum {
    '1D' = '1D',
    '1M' = '1M',
    '3M' = '3M',
    '1Y' = '1Y'
}
export type $TimePeriodType = {
    start: Date,
    end?: Date,
}