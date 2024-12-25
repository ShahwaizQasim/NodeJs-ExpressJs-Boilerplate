import 'dotenv/config'

const ENV = (process.env || {});

const DELETE_DATA_MESSAGE = "data deleted successfully";
const UPDATE_DATA_MESSAGE = "data updated successfully";
const INTERNAL_SERVER_MESSAGE = "Internal server error";
const POST_DATA_MESSAGE = "data added successfully";
const GET_DATA_MESSAGE = "data fetch successfully";

export {
    ENV,
    DELETE_DATA_MESSAGE,
    UPDATE_DATA_MESSAGE,
    INTERNAL_SERVER_MESSAGE,
    POST_DATA_MESSAGE,
    GET_DATA_MESSAGE
}