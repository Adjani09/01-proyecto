export default interface Code {
    codeId: string;
    code: string;
    points: number;
    expirationDate: string;
    notes: string;
};

export default interface Retiro {
    withdrawalsId: string;
    userId: string;
    fecha: string;
    selectedCoin: string;
    status: string;
    ip: string;
    email: string;
    withdrawalEmail: string;
    points: number;
    coins: string;
    usd: string;
    usdPrice: string;
    SatoshiSend: string;
    conversion: string;
    withdrawalNumber: number;
    videoAdsSum: number;
    WalletName: string;
    note: string;
    note2: string;
};

export default interface User {
    userId: string;
    code: string;
    fecha: string;
    lastDate: string;
    email: string;
    country: string;
    points: number;
    numberW: number;
    ads: number;
    videoads: number;
    userStateId: number;
}
