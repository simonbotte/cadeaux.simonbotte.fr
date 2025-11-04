// plugins/snowflakes.client.ts
import Snowflakes from "magic-snowflakes";

export default defineNuxtPlugin(() => {
    let instance: any = null;

    const start = (options = {}) => {
        if (instance) return instance; // déjà active
        instance = new Snowflakes(options);
        return instance;
    };

    const stop = () => {
        if (instance) {
            instance.destroy(); // stoppe et supprime les flocons
            instance = null;
        }
    };

    return {
        provide: {
            snow: {
                start,
                stop,
                get active() {
                    return !!instance;
                },
            },
        },
    };
});
