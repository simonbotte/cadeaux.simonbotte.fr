import axios from "axios";

export default defineEventHandler(async (event) => {
    let gifts = null;
    const runtimeConfig = useRuntimeConfig()
    const token = runtimeConfig.apiToken;
    
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    return new Promise((resolve, reject) => {
        axios
            .get("https://api.simonbotte.fr/api/gifts?populate=%2A&sort=order", config)
            .then((res) => {
                gifts = res.data;
                resolve(gifts);
            })
            .catch((error) => {
                reject(error);
            });
    });
});
