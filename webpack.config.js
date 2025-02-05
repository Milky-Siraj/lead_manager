import { resolve } from "path";

export const entry = "./leadmanager/frontend/src/index.js";
export const output = {
  path: resolve(__dirname, "leadmanager/frontend/static/frontend"),
  filename: "main.js", // Output file
};
export const mode = "development";
export const module = {
  rules: [
    {
      test: /\.js$/, // Regex to target .js files
      exclude: /node_modules/, // Exclude node_modules
      use: {
        loader: "babel-loader", // Use babel-loader
      },
    },
  ],
};
