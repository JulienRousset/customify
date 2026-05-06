import { Link } from 'react-router-dom'
import { Instagram } from 'lucide-react'
import { FacebookLogo, LinkedInLogo } from '../icons'

export default function VerticalFooter() {
  return (
    <footer className="relative border-t border-hair">
      <div className="container-xl py-12 md:py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-hair">
          <Link to="/" className="flex items-center gap-3 font-display font-semibold text-[24px] md:text-[28px] tracking-tight">
            <img
              src="/customy_logo.webp"
              alt=""
              aria-hidden
              width={36}
              height={36}
              className="h-8 w-8 md:h-9 md:w-9 object-contain rounded-md"
            />
            Customy
          </Link>
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-[13.5px] text-fg2">
              <Link to="/" className="hover:text-fg transition-colors">Home</Link>
              <Link to="/whatwebuild" className="hover:text-fg transition-colors">What we build</Link>
              <Link to="/whatwebuild/restaurants" className="hover:text-fg transition-colors">Restaurants</Link>
              <Link to="/whatwebuild/spa-wellness" className="hover:text-fg transition-colors">Spa</Link>
              <Link to="/whatwebuild/hotels" className="hover:text-fg transition-colors">Hotels</Link>
              <Link to="/whatwebuild/creators" className="hover:text-fg transition-colors">Creators</Link>
              <Link to="/whatwebuild/trades-services" className="hover:text-fg transition-colors">Trades</Link>
            </nav>
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/customy.agency/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-hair flex items-center justify-center text-sub hover:text-fg hover:border-fg/30 transition-colors"
              >
                <Instagram size={16} strokeWidth={1.8} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61562923021804"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-hair flex items-center justify-center text-sub hover:text-fg hover:border-fg/30 transition-colors"
              >
                <FacebookLogo size={16} />
              </a>
              <a
                href="https://www.linkedin.com/company/customyagency"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-hair flex items-center justify-center text-sub hover:text-fg hover:border-fg/30 transition-colors"
              >
                <LinkedInLogo size={16} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 mt-6 text-[12px] text-sub">
          <div>© {new Date().getFullYear()} Customy Studio · Remote worldwide</div>
          <div className="flex items-center gap-5">
            <a href="/review.html" className="hover:text-fg transition-colors">Leave a review</a>
            <a href="/privacy.html" className="hover:text-fg transition-colors">Privacy</a>
            <a href="/terms.html" className="hover:text-fg transition-colors">Terms</a>
            <a href="mailto:customyagency@gmail.com" className="hover:text-fg transition-colors">customyagency@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
