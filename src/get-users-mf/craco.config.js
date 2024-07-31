// File: craco.config.js
// Description: Craco configuration file for the Get Users module.

// Dependencies
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const deps = require('./package.json').dependencies;

// Module Exports
module.exports = {
    plugins: [
      {
          plugin: {
              overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }) => { return cracoConfig; },
              overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => { 
                webpackConfig.output.publicPath = "auto";
                webpackConfig.plugins = [
                  ...webpackConfig.plugins,
                  new ModuleFederationPlugin({
                    name: "getUsers",
                    filename: "remoteEntry.js",
                    exposes: {
                      "./GetUsersModule": "./src/bootstrap",
                    },
                    shared:{
                        ...deps,
                      'react-dom': {
                          singleton: true,
                          eager:true
                        },
                        react: {
                          singleton: true,
                          eager:true
                        },
                    }
                  }),
                ] 
                return webpackConfig;
              },
              overrideDevServerConfig: ({ devServerConfig, cracoConfig, pluginOptions, context: { env, paths, proxy, allowedHost } }) => { return devServerConfig; },
              overrideJestConfig: ({ jestConfig, cracoConfig, pluginOptions, context: { env, paths, resolve, rootDir } }) => { return jestConfig },
          },
      }
  ]
};