import { Button } from "@/components/ui/Button"
import { Seo } from "@/lib/seo"

export function NotFound() {
  return (
    <div className="container-page flex flex-col items-center py-24 text-center">
      <Seo
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        noindex
      />
      <p className="font-serif text-6xl text-clay-soft">404</p>
      <h1 className="mt-4 font-serif text-2xl text-ink">This page has wandered off.</h1>
      <p className="mt-2 max-w-sm text-ink-soft">
        The page you're looking for doesn't exist, or may have moved.
      </p>
      <div className="mt-6">
        <Button href="/">Return home</Button>
      </div>
    </div>
  )
}
