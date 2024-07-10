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
    fecha: number;
    selectedCoin: number;
    status: string;
    ip: number;
    email: string;
    withdrawalEmail: string;
    points: number;
    coins: number;
    usd: number;
    usdPrice: number;
    satoshiSend: number;
    conversion: number;
    withdrawalNumber: number;
    videoAdsSum: number;
    sumADS: number;
    walletName: string;
    note: string;
    note2: string;
};

export default interface User {
    userId: string;
    code: string;
    fecha: number;
    lastDate: number;
    email: string;
    country: string;
    points: number;
    numberW: number;
    ads: number;
    videoads: number;
    userStateId: number;
}
