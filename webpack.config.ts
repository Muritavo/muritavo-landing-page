import { createBaseConfiguration } from "@muritavo/webpack-microfrontend-scripts/bin/react/scripts/_webpackConfiguration"
process.env.NODE_ENV = "development"
module.exports = createBaseConfiguration(__dirname, "test")