import {Controller, Http} from "xpresser/types/http";
import {signJwt, verifyJwt} from "../../index";

/**
 * AppController
 */
export = <Controller.Object>{
    // Controller Name
    name: "AppController",

    // Controller Default Error Handler.
    e: (http: Http, error: string) => http.status(401).json({error}),


    /**
     * Example Action.
     * To show functions are used.
     * @param http - Current Http Instance
     */
    index(http) {

        const data = {userId: 12376, name: 'Squid Ward'};
        const encoded = signJwt(data);
        const decoded = verifyJwt(encoded);

        return {data, encoded, decoded}
    }
};
