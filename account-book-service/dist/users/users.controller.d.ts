import { AuthService } from '../auth/auth.service';
export declare class UsersController {
    private readonly authService;
    constructor(authService: AuthService);
    systemAccess(req: any): Promise<{
        accessToken: string;
        isNew: any;
    }>;
}
