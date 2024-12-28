import { defineDocumentType, makeSource } from "contentlayer/source-files"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  }
}

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
  },
  computedFields,
}))

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    coverImage: {
      type: "string",
      required: false,
    }
  },
  computedFields,
}))

export const PressRelease = defineDocumentType(() => ({
  name: "Press",
  filePathPattern: `pr/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: false
    },
    date: {
      type: "date",
      required: true,
    },
    coverImage: {
      type: "string",
      required: false,
    }
  },
  computedFields,
}))

export const Song = defineDocumentType(() => ({
  name: "Song",
  filePathPattern: `songs/**/*.json`,
  contentType: "data",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    visibility: {
      type: "enum",
      options: ['private', 'protected', 'public'],
      default: 'private',
    },
    appleMusicLink: {
      type: "string",
      required: false
    },
    spotifyLink: {
      type: "string",
      required: false
    },  
    amazonMusicLink: {
      type: "string",
      required: false
    },
    streamUrl: {
      type: "string",
      required: false
    },
    discoTrackId: {
      type: "string",
      required: false
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post, Page, Song, PressRelease],
})
