import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from './Icons';
import { site } from '../config/site';
import { useI18n } from '../i18n';
import { liveCategories } from '../lib/categories';
import { waLink } from '../lib/whatsapp';

/* "Coming soon" panel shown in the product area of the Shop page for a category with no products yet.
   It is part of the normal page (no overlay), so header, filters and footer behave as usual. */
export default function ComingSoon({ category }) {
  const { t, cat } = useI18n();
  const name = cat(category);
  const live = liveCategories.map((c) => cat(c.name)).join(' · ');

  return (
    <div className="soon" role="status">
      <i className="soon-ring" aria-hidden="true" />
      <i className="soon-ring r2" aria-hidden="true" />
      <span className="soon-ar" lang="ar" aria-hidden="true">{site.arabic}</span>

      <p className="soon-tag"><Sparkles size={14} /> {t('soon.eyebrow')}</p>
      <h2 className="soon-cat">{name}</h2>
      <p className="soon-title serif">{t('soon.title')}</p>
      <p className="muted">{t('soon.text', { c: name })}</p>
      {live && <p className="soon-live">{t('soon.live', { live })}</p>}

      <div className="soon-btns">
        <a className="btn btn-wa" href={waLink(t('soon.msg', { c: name }))} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={18} /> {t('soon.notify')}</a>
        <Link className="btn btn-ghost" to="/shop">{t('soon.explore')}</Link>
      </div>
      {site.instagram && (
        <a className="soon-ig" href={`https://www.instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer"><InstagramIcon size={15} /> {t('soon.follow')} · @{site.instagram}</a>
      )}
    </div>
  );
}
