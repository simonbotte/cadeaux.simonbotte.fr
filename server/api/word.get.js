import axios from "axios";

export default defineEventHandler(async (event) => {
    let word = null;
    const runtimeConfig = useRuntimeConfig()
    const token = runtimeConfig.apiToken;
    
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    return new Promise((resolve, reject) => {
        axios
            .get("https://api.simonbotte.fr/api/word", config)
            .then((res) => {
                word = res.data;
                resolve(word);
            })
            .catch((error) => {
                reject(error);
            });
    });
});
