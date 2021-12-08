const dev = {
  webSocket: {
    lobbyUrl: `ws://localhost:8080/lobby`,
    serverUrl: `ws://localhost:8080`,
  },
};

const prod = {
  webSocket: {
    lobbyUrl: `ws://localhost:8080/lobby`,
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
