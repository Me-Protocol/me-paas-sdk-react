import postcss from "rollup-plugin-postcss";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
  ],
  plugins: [
    typescript(),
    postcss({
      modules: true,
      extract: "dist/styles.css",
    }),
  ],
  external: ["react", "react-dom"],
};
