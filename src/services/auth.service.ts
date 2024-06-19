import { publicRequest } from "./axiosConfig";
import { LoginParams, RegisterParams, Verify2FAParams, VerifyEmailParams } from "./shared.type";
class AuthService {
    static async login(data:LoginParams) {
        return await publicRequest.post('/auth/login',data);
    }

    static async register(data: RegisterParams) {
        return await publicRequest.post('/auth/register',data);
    }

    static async verifyEmail(data: VerifyEmailParams) {
        return await publicRequest.post('/auth/verify-email', data);
    }

    static async verify2FA(data: Verify2FAParams) {
        return await publicRequest.post('/auth/verify-mfa', data);
    }

}

export default AuthService