import { DynamicModule } from '@nestjs/common';
export declare class UsecasesProxyModule {
    static LOGIN_USECASES_PROXY: string;
    static IS_AUTHENTICATED_USECASES_PROXY: string;
    static LOGOUT_USECASES_PROXY: string;
    static GET_POST_USECASES_PROXY: string;
    static GET_POSTS_USECASES_PROXY: string;
    static CREATE_POST_USECASES_PROXY: string;
    static DELETE_POST_USECASES_PROXY: string;
    static GET_USERS_USECASES_PROXY: string;
    static GET_USER_BY_ID_USECASES_PROXY: string;
    static CREATE_USER_USECASES_PROXY: string;
    static register(): DynamicModule;
}
