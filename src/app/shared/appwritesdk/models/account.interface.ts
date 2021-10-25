export interface IAccount {
    $id: string;
    email: string;
    emailVerification: boolean;
    name: string;
    registration: number;
    status: number;
    prefs: Prefs;
};

interface Prefs {
    ndermarrje: string
}