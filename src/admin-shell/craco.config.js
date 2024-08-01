// File: craco.config.js
// Description: Call the ModuleFederationPlugin to create a federated module for the admin shell application.

// Import the ModuleFederationPlugin
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const deps = require('./package.json').dependencies;

// Import the dotenv package
const dotenv = require('dotenv');
dotenv.config();

// Access environment variables
const APP_GET_USERS = process.env.REACT_APP_GET_USERS;
const APP_EDIT_USERS = process.env.REACT_APP_EDIT_USERS;
const APP_GET_TASKS = process.env.REACT_APP_GET_TASKS;
const APP_EDIT_TASKS = process.env.REACT_APP_EDIT_TASKS;
const APP_GET_REPORTS = process.env.REACT_APP_GET_REPORTS;
const APP_EDIT_REPORTS = process.env.REACT_APP_EDIT_REPORTS;

// Export the craco configuration
module.exports = {
    stats: 'verbose',
    plugins: [
        {
            plugin: {
                overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }) => { return cracoConfig; },
                overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => { 
                  webpackConfig.plugins = [
                    ...webpackConfig.plugins,
                    new ModuleFederationPlugin({
                      name: "app",
                      remotes: {
                        getUsers: `getUsers@${APP_GET_USERS}`,
                        editUsers: `editUsers@${APP_EDIT_USERS}`,
                        getTasks: `getTasks@${APP_GET_TASKS}`,
                        getReports: `getReports@${APP_GET_REPORTS}`,
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