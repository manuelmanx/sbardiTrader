export type $ComboOptionsDataSource = {
    placeholder: string;
    options: $ComboOptionType[];
}
export type $ComboOptionType = {
    id: string;
    value: string;
    isDisabled: boolean;
    isSelected: boolean;
}
export type $TabsDataSourceType = {
    key: string;
    label: string;
    isActive?: boolean;
    isDisabled?: boolean;
}