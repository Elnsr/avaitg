export const config = {
  development: false,
  debug: true,
  appKey: "crash-0.1.0",
  api: `${process.env.REACT_APP_API_URL}/api`,
  wss: process.env.REACT_APP_API_URL as string,
};
