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
export const signJwt = createSigner({key: secretKey, ...signerConfig});
export const verifyJwt = createVerifier({key: secretKey, ...verifierConfig});
