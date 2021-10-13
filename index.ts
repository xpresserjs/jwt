import {createSigner, createVerifier} from "fast-jwt";
import {getInstance} from "xpresser";

const $ = getInstance();

// Get config
const config = $.config.path('@xpresser/jwt');

// Jwt Expires in value.
const signerConfig = config.get('signer');
const verifierConfig = config.get('verifier');

// Jwt SecretKey value.
const secretKey = config.get('secretKey');

// Sync style
// const
export const signJwt: ((token: Buffer | Record<any, any>) => string) = createSigner({key: secretKey, ...signerConfig}) as any;
export const verifyJwt: ((token: string | Buffer) => any) = createVerifier({key: secretKey, ...verifierConfig}) as any;
