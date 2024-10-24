const tsConfigPathFile = require("./tsconfig.paths.json");
const tsConfig = require("./tsconfig.json");
const tsConfigPaths = require("tsconfig-paths");

const baseUrl = "./" + (tsConfig.compilerOptions.outDir || "dist");
tsConfigPaths.register({
  baseUrl,
  paths: tsConfigPathFile.compilerOptions.paths,
});
