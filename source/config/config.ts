import dotenv from "dotenv";

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || 3000;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";

const SERVER_TOKEN_EXPIRE_TIME = process.env.SERVER_TOKEN_EXPIRE_TIME || 3600;//in seconds
const SERVER_TOKEN_SECRET = process.env.SERVER_TOKEN_SECRET || "waltercodeencryptedsecret";
const SERVER_TOKEN_ISSUER = process.env.SERVER_TOKEN_ISSUER || "walterCodeIssuer";

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
  token: {
    expireTime: SERVER_TOKEN_EXPIRE_TIME,
    issuer: SERVER_TOKEN_ISSUER,
    secret: SERVER_TOKEN_SECRET
  }
};

const config = {
  server: SERVER,
};

export default config;
