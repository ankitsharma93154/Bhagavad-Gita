import { useId, useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { Menu, Search, Heart, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useSavedQuotes } from "@/hooks/useSavedQuotes"

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/quotes", label: "Quotes" },
  { to: "/themes", label: "Themes" },
  { to: "/about", label: "About" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState("")
  const navigate = useNavigate()
  const { savedIds } = useSavedQuotes()
  const searchFieldId = useId()

  function submitSearch(e: React.FormEvent) {
    e.preventDefault()
    navigate(query.trim() ? `/quotes?q=${encodeURIComponent(query.trim())}` : "/quotes")
    setSearchOpen(false)
    setMobileOpen(false)
    setQuery("")
  }

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "focus-ring rounded-full px-3 py-2 text-base font-medium transition-colors",
      isActive ? "text-clay-deep" : "text-ink-soft hover:text-ink",
    )

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          to="/"
          className="focus-ring shrink-0 rounded-md font-serif text-xl tracking-tight text-ink"
        >
          Bhagavad Gita{" "}
          <span className="bg-gradient-brand bg-clip-text text-transparent">Quotes</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-1 md:flex">
          <form
            onSubmit={submitSearch}
            className={cn(
              "flex items-center overflow-hidden rounded-full border border-transparent bg-transparent transition-[width,background-color,border-color,padding-left] duration-200 focus-within:outline-2 focus-within:outline-clay focus-within:outline-offset-2",
              searchOpen ? "w-56 border-line-strong bg-surface pl-3" : "w-11",
            )}
          >
            <label htmlFor={searchFieldId} className="sr-only">
              Search quotes
            </label>
            {searchOpen && (
              <input
                id={searchFieldId}
                name="q"
                autoFocus
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onBlur={() => !query && setSearchOpen(false)}
                placeholder="Search wisdom…"
                className="w-full bg-transparent py-2 text-sm text-ink outline-none placeholder:text-ink-faint"
              />
            )}
            <button
              type={searchOpen ? "submit" : "button"}
              onClick={() => !searchOpen && setSearchOpen(true)}
              aria-label="Search quotes"
              className="focus-ring inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ink-soft hover:text-ink"
            >
              <Search className="h-[18px] w-[18px]" aria-hidden />
            </button>
          </form>

          <Link
            to="/saved"
            aria-label={`Saved quotes${savedIds.length ? ` (${savedIds.length})` : ""}`}
            className={cn(
              "focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full hover:text-ink",
              savedIds.length > 0 ? "text-clay" : "text-ink-soft",
            )}
          >
            <Heart
              className="h-4.5 w-4.5"
              fill={savedIds.length > 0 ? "currentColor" : "none"}
              aria-hidden
            />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full text-ink md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-line bg-paper md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            <form
              onSubmit={submitSearch}
              className="mb-2 flex items-center rounded-full border border-line-strong bg-surface px-3 focus-within:outline-2 focus-within:outline-clay focus-within:outline-offset-2"
            >
              <label htmlFor={`${searchFieldId}-mobile`} className="sr-only">
                Search quotes
              </label>
              <input
                id={`${searchFieldId}-mobile`}
                name="q"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search wisdom…"
                className="w-full bg-transparent py-2.5 text-sm text-ink outline-none placeholder:text-ink-faint"
              />
              <button type="submit" aria-label="Search" className="focus-ring text-ink-soft">
                <Search className="h-[18px] w-[18px]" aria-hidden />
              </button>
            </form>

            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "focus-ring rounded-lg px-3 py-2.5 text-base font-medium",
                    isActive ? "bg-clay-soft text-clay-deep" : "text-ink hover:bg-surface-soft",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/saved"
              onClick={() => setMobileOpen(false)}
              className="focus-ring flex items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-ink hover:bg-surface-soft"
            >
              Saved
              {savedIds.length > 0 && (
                <span className="rounded-full bg-clay-soft px-2 py-0.5 text-xs font-semibold text-clay-deep">
                  {savedIds.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
