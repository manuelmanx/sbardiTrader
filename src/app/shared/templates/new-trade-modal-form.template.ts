export const $emptyNewTradeTemplate = {
    id: null,
    symbol: null,
    percentProfit: null,
    partial: null,
    date: null,
    ongoing: true,
    analisysLink: null,
    checkListElements: [],
}

export const $emptyComboboxCloseTypeTemplate = {
    placeholder: "Seleziona",
    options: [
        {
            id: "TP",
            value: "Take Profit",
            isDisabled: false,
            isSelected: false
        },
        {
            id: "SL",
            value: "Stop Loss",
            isDisabled: false,
            isSelected: false
        },
        {
            id: "Market",
            value: "Mercato",
            isDisabled: false,
            isSelected: false
        }
    ]
};

export const $emptyMultiselectConfirmationCloseTypeTemplate = {
    placeholder: "Seleziona",
    options: []
};