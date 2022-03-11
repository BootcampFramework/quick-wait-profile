const singleSpaAngularWebpack =
    require("single-spa-angular/lib/webpack").default;
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (config, options) => {
    const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

    // na entry abaixo, "frwk-side-nav" é o nome do .js que vai ser gerado
    // "src/app/Components/side-nav/main-side-nav-sspa.ts" é o caminho até o ts do modulo sspa
    Object.assign(singleSpaWebpackConfig.entry, {
        "frwk-side-nav": "src/app/Components/side-nav/main-side-nav-sspa.ts",
        "frwk-hospital-list": "src/app/Components/hospital-list/main-hospital-list-sspa.ts",
        "frwk-shared-side-nav": "src/app/Components/shared-side-nav/shared-side-nav-sspa.ts",
    });
    singleSpaWebpackConfig.plugins.push(
        new CopyPlugin({
            patterns: [{ from: "src/assets", to: "assets" }],
        })
    );

    // Feel free to modify this webpack config however you'd like to
    return singleSpaWebpackConfig;
};