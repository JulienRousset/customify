import { Link } from 'react-router-dom'
import { Instagram } from 'lucide-react'
import { FacebookLogo, LinkedInLogo } from '../icons'
import { openConsentSettings } from '../../analytics/consent'
import { useLang } from '../../lang'

export default function VerticalFooter() {
  const { t } = useLang()
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
              <Link to="/" className="hover:text-fg transition-colors">{t.footerLinks.home}</Link>
              <Link to="/offer" className="hover:text-fg transition-colors">{t.footerLinks.pricing}</Link>
              <Link to="/faq" className="hover:text-fg transition-colors">{t.footerLinks.faq}</Link>
              <Link to="/#contact" className="hover:text-fg transition-colors">{t.footerLinks.contact}</Link>
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
          <div>© {new Date().getFullYear()} Customy Studio · {t.contact.footerRemote}</div>
          <div className="flex flex-wrap items-center gap-5">
            <a href="/review.html" className="hover:text-fg transition-colors">{t.footerLinks.leaveReview}</a>
            <button type="button" onClick={openConsentSettings} className="hover:text-fg transition-colors">
              {t.cookies.manage}
            </button>
            <a href="/privacy.html" className="hover:text-fg transition-colors">{t.contact.privacyLabel}</a>
            <a href="/terms.html" className="hover:text-fg transition-colors">{t.contact.termsLabel}</a>
            <a href="mailto:customyagency@gmail.com" className="hover:text-fg transition-colors">customyagency@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
