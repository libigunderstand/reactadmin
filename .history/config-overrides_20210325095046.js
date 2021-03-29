const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addBundleVisualizer,
  overrideDevServer,
  addWebpackAlias,
  adjustWorkbox
} = require("customize-cra");
const path = require("path");

module.exports = {
    webpack: override(
        // enable legacy decorators babel plugin
        addDecoratorsLegacy(),

        // disable eslint in webpack
        disableEsLint(),

        // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
        process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),

        // add an alias for "ag-grid-react" imports
        addWebpackAlias({
            ["ag-grid-react$"]: path.resolve(__dirname, "src/shared/agGridWrapper.js"),
            ["@"]: path.resolve(__dirname, "src"),
            ["_pages"]: path.resolve(__dirname, "src/pages"),
            ["_router"]: path.resolve(__dirname, "src/router"),
            ["_assets"]: path.resolve(__dirname, "src/assets"),
            ["_g"]: path.resolve(__dirname, "src/components"),
        }),

        // adjust the underlying workbox
        adjustWorkbox((wb) =>
            Object.assign(wb, {
            skipWaiting: true,
            exclude: (wb.exclude || []).concat("index.html"),
            exclude: (wb.exclude || []).concat("index.html"),
        })),
    ),
    // devServer: overrideDevServer(()=> {
    //     return {
    //         proxy: {
    //             '/api': {
    //                 target: 'http://localhost:4000/',
    //                 changeOrigin: true,
    //                 secure: false
    //             },
    //         }
    //     }
    // })
}
