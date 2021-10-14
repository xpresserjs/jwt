import {init} from "xpresser";

/**
 * Initialize Xpresser.
 */
const $ = init({
    name: "Test Jwt Plugin",
    env: "development",

    // Set Paths
    paths: {
        base: __dirname,
        // Set backend folder as base.
        backend: __dirname
    },

    // Plugin Config
    "@xpresser/jwt": {
        secretKey: "My Secret Key!",
        signer: {
            expiresIn: 3_600_000 // in 1 hour
        },
        verifier: {cache: true}
    }

}).initializeTypescript(__filename);

/**
 * Add Route.
 */
$.on.boot((next) => {
    // Set index route
    $.router.get('/', 'App@index');

    return next();
})

/**
 * Optional Message.
 */
$.on.serverBooted(next => {
    $.logInfo("Visit server url to view test result.");

    return next();
})

/**
 * Boot.
 */
$.boot()