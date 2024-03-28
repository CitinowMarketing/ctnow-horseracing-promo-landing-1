import { builder, BuilderComponent } from '@builder.io/react'

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!)

export const getStaticProps = async (context) => {
  // Dynamically fetch latest content from Builder.io API
  const content = await builder.get('hero-section', { url: context.resolvedUrl });
  return { props: { content } }
}

// View full integration and docs: https://builder.io/c/docs/developers
export default function MyComponent(props) {
  return <BuilderComponent content={props.content} model="hero-section" />
}
