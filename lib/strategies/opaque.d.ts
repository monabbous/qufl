import { StoreFacade } from "../store";
export declare class OpaqueTokenNotFound extends Error {
    message: string;
    code: number;
}
export declare class OpaqueStrategy<Identity> {
    private store;
    private mapToId;
    constructor(store: StoreFacade, mapToId?: (data: any) => Identity);
    issueToken: (data: Identity) => Promise<string>;
    authenticateToken: (token: string) => Promise<Identity>;
    invalidateToken: (token: string) => Promise<void>;
}