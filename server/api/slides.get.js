import axios from "axios";

export default defineEventHandler(async (event) => {
    let slides = null;
    const runtimeConfig = useRuntimeConfig()
    const token = runtimeConfig.apiToken;

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    return new Promise((resolve, reject) => {
        axios
            .get("https://api.simonbotte.fr/api/slides?populate=%2A", config)
            .then((res) => {
                slides = res.data;
                resolve(slides);
            })
            .catch((error) => {
                reject(error);
            });
    });
});
