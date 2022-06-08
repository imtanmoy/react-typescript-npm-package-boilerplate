import del from "rollup-plugin-delete";
import typescript from "rollup-plugin-typescript2";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import analyze from "rollup-plugin-analyzer";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json";

const input = "src/index.tsx";
const globals = {
  react: "React",
  "react-dom": "ReactDOM",
};

const plugins = [
  del({ targets: "dist/*", runOnce: true }),
  typescript({ useTsconfigDeclarationDir: true }),
  external(),
  resolve(),
  replace({ __VERSION__: `'${pkg.version}'`, preventAssignment: true }),
  analyze({ summaryOnly: true }),
  commonjs(),
];

export default [
  {
    input,
    output: [
      {
        file: pkg.main,
        format: "cjs",
        exports: "named",
        sourcemap: true,
        globals,
      },
      {
        file: pkg.module,
        format: "esm",
        exports: "named",
        sourcemap: true,
        globals,
      },
    ],
    plugins: plugins,
  },
];