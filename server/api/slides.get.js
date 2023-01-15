import axios from "axios";

export default defineEventHandler(async (event) => {
    let slides = null;
    //const token = "24ee8d8278e66d927d954df7fc875981c71224b2f708adae17f066b9af6301bc1bbd5536023fbe7a2281cbfd1bc93f53623cd3043eff81ede0c6a81efa06d47dbb255825907ba8f25b8af1d7771f2d277fa47ad155e7673e11b2aed6672f602e1496244180bed142fbc2f46059231bf70c866f321d96ccef3dd4667aafa2d5c2";
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
