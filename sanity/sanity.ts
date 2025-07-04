import {createClient} from "@sanity/client"
import {SanityImageSource} from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url"

export const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! || "cc4n9isy",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET! || "production",
    useCdn: false,
    apiVersion: '2025-04-09',
    token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN!
})

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImageSource) => builder.image(source);