import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["./src/*/index.tsx"],
  format: ["cjs"],
  dts: true,
  clean: false,
  external: ["react", "@repo/utils"],
  // banner: {
  //   js: "'use client'",
  // },
  ...options,
}));
