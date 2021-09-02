const dev = {
  webSocket: {
    serverUrl: `ws://localhost:8080`,
  },
};

const prod = {
  webSocket: {
    serverUrl: `ws://localhost:8080`,
  },
};

const Configuration = process.env.REACT_APP_STAGE === "production" ? prod : dev;

const config = {
  // Add common config values here
  port: 8080,
  ...Configuration,
};

export default config;
