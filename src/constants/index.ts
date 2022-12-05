import all_constants from "./constants.json";
const env = process.env.NODE_ENV || "development";
const constants = env === "development" ? all_constants.development : all_constants.production;

export default constants;