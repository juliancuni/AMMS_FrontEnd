export interface Account {
    $id: string;
    email: string;
    emailVerification: boolean;
    name: string;
    registration: number;
    status: number;
    prefs: object;
};