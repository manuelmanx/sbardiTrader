export type $ComboOptionsDataSource = {
    placeholder: string;
    options: $ComboOptionType[];
};
export type $ComboOptionType = {
    id: string;
    value: string;
    isDisabled: boolean;
    isSelected: boolean;
};
export type $TabsDataSourceType = {
    key: string;
    label: string;
    isActive?: boolean;
    isDisabled?: boolean;
};
export type $CalculatorSetting = {
    countSize?: { [key: string]: number };
    profitSize?: { [key: string]: number };
    activeTabName?: $CalculatorTabsType;
};
export type $CalculatorTabsType = 'percent_calc' | 'value_calc';

export type $SnackBarDataSourceType = {
    title: string;
    subtitle?: string;
    autoDestroySeconds?: number;
}
