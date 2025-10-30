import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "v796c7qi",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
