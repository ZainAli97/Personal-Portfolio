import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
export const client = createClient({
    projectId: "kqky5apz",
    dataset: "production",
    apiVersion: "2023-02-27",
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: string) => builder.image(source);