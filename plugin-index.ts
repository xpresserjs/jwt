import {DollarSign} from "xpresser/types";

const packageName = '@xpresser/jwt';

export function run(plugin: any, $: DollarSign) {
    $.ifNotConsole(() => {
        if (!$.config.has(packageName)) {
            return $.logErrorAndExit(`Config "@xpresser/jwt" is required!`)
        }

        const config = $.config.path(packageName);


        if (!config.has('secretKey') || !config.get('secretKey')) {
            return $.logErrorAndExit(`secretKey is required in config: "${packageName}"`)
        }

        require('./index')
    });
}