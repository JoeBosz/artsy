import dotenv from "dotenv";

dotenv.config({ path: new URL("../.env", import.meta.url) });

export default {
  jwt: {
    expiresIn:
      process.env.JWT_EXPIRES_IN ||
      // 1h = 1 hour. Keep it low if using `localStorage` to store the token on client.
      "1h",
    secret: process.env.JWT_SECRET,
  },

  // https://www.mongodb.com/docs/atlas/access/manage-teams-in-orgs/#create-a-team
  mongoURL: process.env.MONGO_URL || "mongodb://127.0.0.1:27017/art-collection",
  port: process.env.PORT || 4000,
  saltRounds: process.env.SALT_ROUNDS || 10,
};
