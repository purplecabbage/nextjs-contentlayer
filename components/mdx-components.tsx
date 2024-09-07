import Image from "next/image"
import Link from "next/link"
import { useMDXComponent } from "next-contentlayer/hooks"

const components = {
  Image, Link
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
