export const SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "https://scary-glasses-fish.cyclic.app"
    : "http://localhost:5001";
