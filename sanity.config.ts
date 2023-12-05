import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schema from "./sanity/schemas";
import { visionTool } from '@sanity/vision';

const config = defineConfig({
    projectId: "vv9fr68r",
    dataset: "production",
    title: "my personal blog",
    apiVersion: "2022-03-07",
    basePath: "/admin",
    plugins: [deskTool(), visionTool()],
    schema: { types: schema },
});
export default config;