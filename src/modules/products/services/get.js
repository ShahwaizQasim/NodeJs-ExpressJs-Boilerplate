import { getData } from "../db/index.js";

const getAllData = async () => {
    return await getData();
}

export default getAllData;