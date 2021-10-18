export type $UserInterface = {
    uid: string;
    email: string;
    photoURL: string;
    displayName: string;
    emailVerified: boolean;
    refreshToken: string;
}

export type $AccountSetupCheckListType = {
    displayName: boolean;
    tradingPlan: boolean;
    emailVerification: boolean;
    photoURL: boolean;
}