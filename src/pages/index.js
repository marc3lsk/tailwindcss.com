import { DocumentationLayout } from '@/layouts/DocumentationLayout'
export default function DocsLandingPage() {
  return (
    <div className="px-4 sm:px-6 xl:px-8 pt-10 pb-16">
      <h1 className="text-5xl leading-none font-extrabold text-gray-900 tracking-tight mb-4">
        Getting started with Tailwind CSS
      </h1>
      <p className="text-2xl tracking-tight mb-10">
        Learn Tailwind the way that best matches your learning style.
      </p>
    </div>
  )
}

DocsLandingPage.layoutProps = {
  meta: {
    title: 'Documentation',
  },
  Layout: DocumentationLayout,
}
