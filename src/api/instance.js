import axios from "axios";

const instance = axios.create({
  baseURL: "https://161cf2e7-79e5-4ed8-ade5-95bc5786b3fc.mock.pstmn.io/",
  timeout: 5000,
});
export { instance };
