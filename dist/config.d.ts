declare const _default: (() => {
    AWS_ACCESS_KEY_ID: string;
    AWS_SECRET_ACCESS_KEY: string;
    DYNAMODB_ENDPOINT: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    AWS_ACCESS_KEY_ID: string;
    AWS_SECRET_ACCESS_KEY: string;
    DYNAMODB_ENDPOINT: string;
}>;
export default _default;
