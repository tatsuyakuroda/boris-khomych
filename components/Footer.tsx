export default function Footer() {
  return (
    <footer
      className="border-t border-border/50 py-8"
      role="contentinfo"
    >
      <div className="container-custom flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-muted text-sm m-0">
          © {new Date().getFullYear()} Juan Carlos Rios Gamez. Built with Next.js & Tailwind.
        </p>
        <nav aria-label="Footer links">
          <a
            href="#hero"
            className="text-muted text-sm no-underline transition-colors hover:text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded"
          >
            Back to top
          </a>
        </nav>
      </div>
    </footer>
  );
}
