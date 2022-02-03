const singleSpaAngularWebpack =
  require("single-spa-angular/lib/webpack").default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  // na entry abaixo, "frwk-info" é o nome do .js que vai ser gerado
  // "./src/main-info-sspa.ts" é o caminho até o ts do modulo sspa
  Object.assign(singleSpaWebpackConfig.entry, {
    "frwk-info": "./src/main-info-sspa.ts",
  });

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};
