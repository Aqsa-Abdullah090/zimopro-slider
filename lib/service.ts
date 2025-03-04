import axios from "axios";

export const request_lamda1 = axios.create({
  baseURL:
    "https://shjyrco6wbm2ny47y2ee5bk2ee0uheil.lambda-url.eu-west-2.on.aws",
  headers: {
    "api-key": "$5hGM&89sL#",
  },
  timeout: 15000, // 15s
});

export const zpBackend = axios.create({
  baseURL: "https://zimopro-backend-offcial-213279879410.us-central1.run.app",
  headers: {
    "api-key": "#9QYxNr6",
  },
  // timeout: 15000, // 15s
});
