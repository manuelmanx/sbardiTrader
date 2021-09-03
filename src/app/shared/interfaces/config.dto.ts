export interface $SystemConfigurationInterface {
    apiKey: string;
    language: $LanguageListEnum;
    i18n: $I18nInterface[];
}

export enum $LanguageListEnum {
    "it" = "it",
    "en" = "en"
}
export interface $I18nInterface {
    [key: string]: {
        short: string;
    }
}