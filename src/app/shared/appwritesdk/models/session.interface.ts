export interface IAppSession {
    $id: string;
    userId: string;
    expire: number;
    provider: string;
    providerUid: string;
    providerToken: string;
    ip: string;
    osCode: string;
    osName: string;
    osVersion: string;
    clientType: string;
    clientCode: string;
    clientName: string;
    clientVersion: number;
    clientEngine: string;
    clientEngineVersion: string;
    deviceName: string;
    deviceBrand: string;
    deviceModel: string;
    countryCode: string;
    countryName: string;
    current: boolean;
}