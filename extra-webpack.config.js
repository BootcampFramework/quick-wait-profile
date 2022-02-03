const singleSpaAngularWebpack =
  require("single-spa-angular/lib/webpack").default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  // na entry abaixo, "frwk-info" é o nome do .js que vai ser gerado
  // "./src/main-info-sspa.ts" é o caminho até o ts do modulo sspa
  Object.assign(singleSpaWebpackConfig.entry, {
    "frwk-info": "./src/main-info-sspa.ts",
    "frwk-side-nav": "src/app/Components/side-nav/main-side-nav-sspa.ts",
    "frwk-hospital-list":
      "src/app/Components/hospital-list/main-hospital-list-sspa.ts",
  });

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};
