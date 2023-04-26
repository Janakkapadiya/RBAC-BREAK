declare enum Environment {
    Development = "development",
    Production = "production",
    Local = "local",
    Test = "test"
}
declare class EnvironmentVariables {
    NODE_ENV: Environment;
    JWT_SECRET: string;
    EMAIL_SENDER: string;
    EMAIL_HOST: string;
    EMAIL_PORT: number;
    EMAIL_SECRET: string;
    DATABASE_HOST: string;
    DATABASE_PORT: number;
    DATABASE_USER: string;
    DATABASE_PASSWORD: string;
    DATABASE_NAME: string;
    DATABASE_SYNCHRONIZE: boolean;
}
export declare function validate(config: Record<string, unknown>): EnvironmentVariables;
export {};
