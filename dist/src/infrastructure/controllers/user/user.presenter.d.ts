import { UserM } from 'src/domain/model/UserM';
export declare class UserPresenter {
    id: number;
    name: string;
    email: string;
    role: string;
    password: string;
    constructor(user: UserM);
}
