import { createBaseConfiguration } from "@muritavo/webpack-microfrontend-scripts/bin/react/scripts/_webpackConfiguration"
process.env.NODE_ENV = "development"
const config = createBaseConfiguration(__dirname, "test")
config.output!.publicPath = "/__cypress/src/"
module.exports = config