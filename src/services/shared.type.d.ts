

export interface LoginParams {
    email: string;
    password: string;
}

export interface RegisterParams {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface VerifyEmailParams {
    email: string;
    token: string;
}

export interface Verify2FAParams {
    email: string;
    code: string;
}