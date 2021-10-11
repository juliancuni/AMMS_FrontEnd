export interface IAccount {
    $id: string;
    email: string;
    emailVerification: boolean;
    name: string;
    registration: number;
    status: number;
    prefs: object;
};