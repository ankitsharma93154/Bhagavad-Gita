import { Link } from "react-router-dom"
import { themes } from "@/data/themes"

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper-dim">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link to="/" className="focus-ring flex items-center gap-2 font-serif text-lg text-ink">
            <img src="/logo-mark.webp" alt="" width={28} height={28} className="h-7 w-7" />
            <span>
              Bhagavad Gita{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Quotes</span>
            </span>
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
            A small, calm collection of verses from the Bhagavad Gita, presented with
            Sanskrit, plain translation, and simple meaning, for a few quiet minutes each day.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-wide text-ink-faint uppercase">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to="/quotes" className="focus-ring rounded text-ink-soft hover:text-clay-deep">
                All quotes
              </Link>
            </li>
            <li>
              <Link to="/themes" className="focus-ring rounded text-ink-soft hover:text-clay-deep">
                Browse themes
              </Link>
            </li>
            <li>
              <Link
                to="/languages/hindi"
                className="focus-ring rounded text-ink-soft hover:text-clay-deep"
              >
                Hindi quotes
              </Link>
            </li>
            <li>
              <Link to="/saved" className="focus-ring rounded text-ink-soft hover:text-clay-deep">
                Saved quotes
              </Link>
            </li>
            <li>
              <Link to="/about" className="focus-ring rounded text-ink-soft hover:text-clay-deep">
                About this project
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-wide text-ink-faint uppercase">Popular themes</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {themes.slice(0, 5).map((theme) => (
              <li key={theme.slug}>
                <Link
                  to={`/themes/${theme.slug}`}
                  className="focus-ring rounded text-ink-soft hover:text-clay-deep"
                >
                  {theme.title} quotes
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Bhagavad Gita Quotes. Verses shared for reflection.</p>
          <p>Translations are simplified renderings. See the about page for context.</p>
        </div>
      </div>
    </footer>
  )
}
