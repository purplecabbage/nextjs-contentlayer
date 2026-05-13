import Image from "next/image"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"

const components = {
  Image, 
  Link,
  // Add custom components for MDX here
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-bold mt-4 mb-2" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="my-4" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-blue-600 dark:text-blue-400 underline" {...props} />
  ),
}

interface MdxProps {
  content: string
}

export function Mdx({ content }: MdxProps) {
  return <MDXRemote source={content} components={components} />
}
