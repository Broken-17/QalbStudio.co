import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, X } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from './Icons';
import { site } from '../config/site';
import { useI18n } from '../i18n';
import { liveCategories } from '../lib/categories';
import { waLink } from '../lib/whatsapp';

/* "Coming soon" popup for a category that has no products yet. */
export default function ComingSoon({ category, onClose }) {
  const { t, cat } = useI18n();
  const name = cat(category);
  const live = liveCategories.map((c) => cat(c.name)).join(' · ');

  useEffect(() => {
    const k = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', k);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', k);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="soon-wrap" onClick={onClose}>
      <div className="soon" role="dialog" aria-modal="true" aria-label={t('soon.eyebrow')} onClick={(e) => e.stopPropagation()}>
        <i className="soon-ring" aria-hidden="true" />
        <i className="soon-ring r2" aria-hidden="true" />
        <span className="soon-ar" lang="ar" aria-hidden="true">{site.arabic}</span>
        <button className="icon-btn soon-x" data-tip={t('tip.close')} aria-label={t('tip.close')} onClick={onClose}><X size={20} /></button>

        <p className="soon-tag"><Sparkles size={14} /> {t('soon.eyebrow')}</p>
        <h2 className="soon-cat">{name}</h2>
        <p className="soon-title serif">{t('soon.title')}</p>
        <p className="muted">{t('soon.text', { c: name })}</p>
        {live && <p className="soon-live">{t('soon.live', { live })}</p>}

        <div className="soon-btns">
          <a className="btn btn-wa" href={waLink(t('soon.msg', { c: name }))} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={18} /> {t('soon.notify')}</a>
          <Link className="btn btn-ghost" to="/shop" onClick={onClose}>{t('soon.explore')}</Link>
        </div>
        {site.instagram && (
          <a className="soon-ig" href={`https://www.instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer"><InstagramIcon size={15} /> {t('soon.follow')} · @{site.instagram}</a>
        )}
      </div>
    </div>
  );
}
