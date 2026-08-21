import { defineConfig } from "astro/config";

const configuredSite = process.env.SITE_URL?.trim();
const configuredBase = process.env.BASE_PATH?.trim();

const base =
  !configuredBase || configuredBase === "/"
    ? "/"
    : `/${configuredBase.replace(/^\/+|\/+$/g, "")}`;

export default defineConfig({
  output: "static",
  trailingSlash: "always",
  base,
  ...(configuredSite ? { site: configuredSite } : {}),
});

