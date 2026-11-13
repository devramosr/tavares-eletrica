import { useState } from "react";
import qrcode from "qrcode-generator";
import { content, site, visitFee, urgencyFee, servicePrice } from "./data.js";

const PAGES = { pt: "/", en: "/en/" };

function money(n, lang) {
  const v = Math.round(n);
  const sep = lang === "en" ? "," : ".";
  const s = String(v).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
  return lang === "en" ? `R$${s}` : `R$ ${s}`;
}

const wa = (text) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

function Icon({ name, size = 22 }) {
  const p = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", focusable: "false" };
  const paths = {
    whatsapp: <><path d="M4 20l1.3-4.1A8 8 0 1 1 8.2 18.8L4 20Z" /><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-.8-.4-1.8-1.4-2.2-2.2l.8-1-1-2L9 8.5Z" /></>,
    phone: <path d="M5 4h4l1.5 4-2 1.3a11 11 0 0 0 5.2 5.2L15 12.500l4 1.500v4a2 2 0 0 1-2 2A13 13 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
    save: <><path d="M12 4v11" /><path d="M7.500 10.500 12 15l4.500-4.500" /><path d="M5 19h14" /></>,
    share: <><circle cx="6" cy="12" r="2.200" /><circle cx="18" cy="6" r="2.200" /><circle cx="18" cy="18" r="2.200" /><path d="m8 11 8-4M8 13l8 4" /></>,
    insta: <><rect x="4" y="4" width="16" height="16" rx="5" /><circle cx="12" cy="12" r="3.600" /><circle cx="17" cy="7" r=".6" fill="currentColor" /></>,
    plug: <><path d="M9 3v5M15 3v5" /><path d="M6 8h12v3a6 6 0 0 1-12 0V8Z" /><path d="M12 17v4" /></>,
    drop: <path d="M12 3s6 6.500 6 11a6 6 0 0 1-12 0c0-4.500 6-11 6-11Z" />,
    panel: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h2M13 8h2M9 12h2M13 12h2M9 16h6" /></>,
    bulb: <><path d="M9 18h6M10 21h4" /><path d="M12 3a6 6 0 0 0-3.500 10.900c.700.600 1 1.300 1 2.100h5c0-.800.300-1.500 1-2.100A6 6 0 0 0 12 3Z" /></>,
    snow: <path d="M12 3v18M4.200 7.500l15.600 9M19.800 7.500l-15.600 9" />,
    wrench: <path d="M14.500 6.500a4 4 0 0 0 5 5L10 21a2.100 2.100 0 0 1-3-3l9.500-9.500a4 4 0 0 0-2-2Z" />,
    shield: <><path d="M12 3l7 3v5c0 5-3 8.500-7 10-4-1.500-7-5-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></>,
    check: <><circle cx="12" cy="12" r="9" /><path d="m8.500 12.200 2.500 2.500 4.500-5" /></>,
    bolt: <path d="M13 3 6 14h5l-1 7 8-12h-5l0-6Z" />,
    pin: <><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.500" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    card: <><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M3 10h18" /></>,
    star: <path d="m12 3.500 2.600 5.300 5.800.800-4.200 4.100 1 5.800L12 16.800l-5.200 2.700 1-5.800-4.200-4.100 5.800-.800L12 3.500Z" />,
  };
  return <svg {...p}>{paths[name]}</svg>;
}

function QR({ value, label }) {
  const qr = qrcode(0, "M");
  qr.addData(value);
  qr.make();
  const n = qr.getModuleCount();
  let d = "";
  for (let r = 0; r < n; r++)
    for (let c = 0; c < n; c++) if (qr.isDark(r, c)) d += `M${c} ${r}h1v1h-1z`;
  return (
    <svg className="qr__svg" viewBox={`-2 -2 ${n + 4} ${n + 4}`} role="img" aria-label={label} shapeRendering="crispEdges">
      <rect x="-2" y="-2" width={n + 4} height={n + 4} fill="#fff" />
      <path d={d} fill="#0E1A2F" />
    </svg>
  );
}

function vcard(t) {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${site.person}`,
    `N:Tavares;Marcos;;;`,
    `ORG:${site.brand}`,
    `TITLE:${t.profile.role}`,
    `TEL;TYPE=CELL,VOICE:+${site.phone}`,
    `TEL;TYPE=WORK:+${site.whatsapp}`,
    `ADR;TYPE=WORK:;;;São Paulo;SP;;BR`,
    `NOTE:${t.profile.vcardNote}`,
  ];
  if (site.url) lines.push(`URL:${site.url}`);
  lines.push(`X-SOCIALPROFILE;TYPE=instagram:https://instagram.com/${site.instagram}`, "END:VCARD");
  return lines.join("\r\n");
}

function Header({ lang, t }) {
  const other = lang === "pt" ? "en" : "pt";
  return (
    <header className="topbar">
      <span className="topbar__brand">
        <span className="topbar__logo" aria-hidden="true"><Icon name="bolt" size={16} /></span>
        {site.brand}
      </span>
      <nav className="lang" aria-label={t.langLabel}>
        <a href={PAGES[other]} hrefLang={other === "pt" ? "pt-BR" : "en"} lang={other === "pt" ? "pt-BR" : "en"}>
          {other.toUpperCase()}
        </a>
      </nav>
    </header>
  );
}

function Profile({ t }) {
  const [msg, setMsg] = useState("");
  const p = t.profile;

  const save = () => {
    const blob = new Blob([vcard(t)], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "marcos-tavares.vcf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: t.meta.title, text: p.shareText, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setMsg(p.shared);
    } catch (e) {
      if (e && e.name === "AbortError") return;
      setMsg(p.shareFail);
    }
    setTimeout(() => setMsg(""), 3500);
  };

  return (
    <section className="profile" aria-labelledby="nome">
      <div className="profile__avatar" aria-hidden="true">{site.initials}</div>
      <p className="profile__badge"><span className="dot" aria-hidden="true" />{p.badge}</p>
      <h1 id="nome" className="profile__name">{site.person}</h1>
      <p className="profile__role">{p.role}</p>
      <p className="profile__place"><Icon name="pin" size={16} />{p.place}</p>
      <p className="profile__about">{p.about}</p>

      <div className="actions">
        <a className="btn btn--wa" href={wa(p.waMessage)} target="_blank" rel="noopener noreferrer">
          <Icon name="whatsapp" />{p.actions.whatsapp}
        </a>
        <a className="btn btn--call" href={`tel:+${site.phone}`}>
          <Icon name="phone" />{p.actions.call}
        </a>
        <button type="button" className="btn btn--ghost" onClick={save}>
          <Icon name="save" />{p.actions.save}
        </button>
        <button type="button" className="btn btn--ghost" onClick={share}>
          <Icon name="share" />{p.actions.share}
        </button>
      </div>
      <p className="toast" role="status" aria-live="polite">{msg}</p>
      <a className="insta" href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer">
        <Icon name="insta" size={18} />@{site.instagram}
      </a>
    </section>
  );
}

function Quote({ lang, t }) {
  const q = t.quote;
  const [service, setService] = useState("shower");
  const [urgency, setUrgency] = useState("today");
  const [place, setPlace] = useState("home");
  const [hood, setHood] = useState("");

  const fee = urgencyFee[urgency];
  const total = visitFee + fee;
  const label = (list, id) => list.find((i) => i.id === id).label;
  const message = q.waMessage({
    service: label(q.services, service),
    urgency: label(q.urgencies, urgency),
    place: label(q.places, place),
    hood: hood.trim(),
    total: money(total, lang),
  });

  const Group = ({ legend, items, value, set, cols = "" }) => (
    <fieldset className="field">
      <legend>{legend}</legend>
      <div className={`choices ${cols}`}>
        {items.map((i) => (
          <button key={i.id} type="button" className="choice" aria-pressed={value === i.id} onClick={() => set(i.id)}>
            <span className="choice__label">{i.label}</span>
            {i.text && <span className="choice__text">{i.text}</span>}
          </button>
        ))}
      </div>
    </fieldset>
  );

  return (
    <section className="block" id={q.id} aria-labelledby="orc-t">
      <p className="eyebrow">{q.eyebrow}</p>
      <h2 id="orc-t">{q.title}</h2>
      <p className="lead">{q.intro}</p>

      <div className="quote">
        <div className="quote__form">
          <Group legend={q.serviceLabel} items={q.services} value={service} set={setService} cols="choices--2" />
          <Group legend={q.urgencyLabel} items={q.urgencies} value={urgency} set={setUrgency} />
          {urgency === "now" && <p className="tip" role="note">{q.emergencyTip}</p>}
          <Group legend={q.placeLabel} items={q.places} value={place} set={setPlace} cols="choices--3" />
          <div className="field">
            <label htmlFor="hood">{q.hoodLabel}</label>
            <input id="hood" type="text" value={hood} maxLength={40} placeholder={q.hoodPlaceholder} onChange={(e) => setHood(e.target.value)} autoComplete="off" />
          </div>
        </div>

        <aside className="summary" aria-label={q.summaryTitle}>
          <h3>{q.summaryTitle}</h3>
          <dl>
            <div><dt>{q.serviceWord}</dt><dd>{label(q.services, service)}</dd></div>
            <div><dt>{q.urgencyWord}</dt><dd>{label(q.urgencies, urgency)}</dd></div>
            <div><dt>{q.placeWord}</dt><dd>{label(q.places, place)}{hood.trim() ? ` · ${hood.trim()}` : ""}</dd></div>
            <div><dt>{q.visit}</dt><dd>{money(visitFee, lang)}</dd></div>
            <div><dt>{q.urgency}</dt><dd>{fee ? `+ ${money(fee, lang)}` : q.free}</dd></div>
          </dl>
          <p className="summary__total"><span>{q.total}</span><strong>{money(total, lang)}</strong></p>
          <a className="btn btn--wa btn--block" href={wa(message)} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" />{q.cta}
          </a>
          <p className="note">{q.visitNote}</p>
        </aside>
      </div>
    </section>
  );
}

function Services({ lang, t }) {
  const s = t.services;
  return (
    <section className="block" id={s.id} aria-labelledby="serv-t">
      <p className="eyebrow">{s.eyebrow}</p>
      <h2 id="serv-t">{s.title}</h2>
      <ul className="cards">
        {s.items.map((i) => {
          const price = servicePrice[i.id];
          return (
            <li key={i.id} className="card">
              <span className="card__icon"><Icon name={i.icon} /></span>
              <h3>{i.title}</h3>
              <p>{i.text}</p>
              <p className="card__price">{price ? <>{s.from} <strong>{money(price, lang)}</strong></> : s.onRequest}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Trust({ t }) {
  const x = t.trust;
  return (
    <section className="block" aria-labelledby="trust-t">
      <p className="eyebrow">{x.eyebrow}</p>
      <h2 id="trust-t">{x.title}</h2>
      <ul className="trust">
        {x.items.map((i) => (
          <li key={i.title}>
            <span className="card__icon"><Icon name={i.icon} /></span>
            <div><h3>{i.title}</h3><p>{i.text}</p></div>
          </li>
        ))}
      </ul>
      <h3 className="sub">{x.reviewsTitle}</h3>
      <ul className="reviews">
        {x.reviews.map((r) => (
          <li key={r.name}>
            <p className="stars" role="img" aria-label="5/5">
              {[0, 1, 2, 3, 4].map((k) => <Icon key={k} name="star" size={16} />)}
            </p>
            <blockquote>{r.text}</blockquote>
            <p className="who"><strong>{r.name}</strong> · {r.role}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Info({ t }) {
  const i = t.info;
  return (
    <section className="block" id={i.id} aria-labelledby="info-t">
      <p className="eyebrow">{i.eyebrow}</p>
      <h2 id="info-t">{i.title}</h2>
      <div className="info">
        <div>
          <h3><Icon name="pin" size={18} />{i.areasLabel}</h3>
          <ul className="chips">{i.areas.map((a) => <li key={a}>{a}</li>)}</ul>
        </div>
        <div>
          <h3><Icon name="clock" size={18} />{i.hoursLabel}</h3>
          <p>{i.hours}</p>
        </div>
        <div>
          <h3><Icon name="card" size={18} />{i.payLabel}</h3>
          <p>{i.pay}</p>
        </div>
      </div>
    </section>
  );
}

function QrBlock({ t }) {
  const q = t.qr;
  const value = site.url ? site.url : site.qrFallback;
  return (
    <section className="block qr" id={q.id} aria-labelledby="qr-t">
      <div className="qr__box"><QR value={value} label={q.alt} /></div>
      <div>
        <h2 id="qr-t">{q.title}</h2>
        <p className="lead">{q.text}</p>
        {!site.url && <p className="note">{q.demo}</p>}
      </div>
    </section>
  );
}

export default function App({ lang = "pt" }) {
  const t = content[lang];
  return (
    <>
      <a className="skip" href="#orcamento">{t.skip}</a>
      <p className="demo">{t.demoNotice}</p>
      <Header lang={lang} t={t} />
      <main>
        <Profile t={t} />
        <Quote lang={lang} t={t} />
        <Services lang={lang} t={t} />
        <Trust t={t} />
        <Info t={t} />
        <QrBlock t={t} />
      </main>
      <footer className="footer">
        <p>{t.footer}</p>
        <a className="btn btn--wa" href={wa(t.profile.waMessage)} target="_blank" rel="noopener noreferrer">
          <Icon name="whatsapp" />{t.profile.actions.whatsapp}
        </a>
      </footer>
      <a className="fab" href={wa(t.profile.waMessage)} target="_blank" rel="noopener noreferrer" aria-label={t.profile.actions.whatsapp}>
        <Icon name="whatsapp" size={26} />
      </a>
    </>
  );
}
