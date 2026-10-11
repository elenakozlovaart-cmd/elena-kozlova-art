import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import { bracelets, braceletPhotos, braceletPhotoAlts, type BraceletSpecs } from "@/data/bracelets";
import braceletCss from "@/bracelets.css?url";

const TG_LINK = "https://t.me/ElenaKozlovaArt";
const MAX_LINK = "https://max.ru/join/2XSGUWjyi4zS_lLZENNtohJvgO086bGV9ka7Il06jYQ";
const PAGE_URL = "https://elenakozlovaart.ru/bracelets";
const TITLE = "Браслеты из натуральных камней — Елена Козлова";
const DESCRIPTION =
  "Браслеты с аквамарином, аметистом, цитрином, бериллом, гранатом, гематитом и лунным камнем. Фотографии, описания, размеры и цены. Заказ в Telegram или MAX.";
const price = (value: number) => `${new Intl.NumberFormat("ru-RU").format(value)} ₽`;
const telegramOrder = (choice = "") =>
  `${TG_LINK}?text=${encodeURIComponent(
    `Здравствуйте, Елена! ${choice ? `Мне понравилось украшение «${choice}».` : "Хочу выбрать браслет из натуральных камней."} Подскажите, пожалуйста, наличие и условия доставки. Обхват моего запястья — … см. Город доставки — …`,
  )}`;

export const Route = createFileRoute("/bracelets")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:image", content: `https://elenakozlovaart.ru${braceletPhotos[12].src}` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: braceletCss },
      { rel: "canonical", href: PAGE_URL },
    ],
  }),
  component: BraceletsPage,
});

function Photo({
  index,
  eager = false,
  sizes = "(max-width: 650px) 100vw, 33vw",
}: {
  index: number;
  eager?: boolean;
  sizes?: string;
}) {
  const image = braceletPhotos[index];
  return (
    <img
      src={image.src}
      srcSet={`${image.small} 540w, ${image.src} 1080w`}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={braceletPhotoAlts[index]}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : "auto"}
    />
  );
}

function Specs({ specs }: { specs: BraceletSpecs }) {
  const rows = [
    ["Материалы", specs.materials],
    ["Размер запястья", specs.size],
    ["Диаметр бусин", specs.beads],
    ["Стоимость", price(specs.price)],
    ["Наличие", specs.status],
  ];
  return (
    <dl className="b-specs">
      {rows.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function OrderLinks({ choice = "" }: { choice?: string }) {
  return (
    <div className="b-order-actions">
      <a
        className="b-primary"
        href={telegramOrder(choice)}
        target="_blank"
        rel="noopener noreferrer"
      >
        Написать в Telegram <ArrowUpRight size={16} aria-hidden="true" />
      </a>
      <a className="b-secondary" href={MAX_LINK} target="_blank" rel="noopener noreferrer">
        Написать в MAX <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </div>
  );
}

function BraceletsPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [enlarged, setEnlarged] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [orderChoice, setOrderChoice] = useState("");
  const detailRef = useRef<HTMLElement>(null);
  const detailTitleRef = useRef<HTMLHeadingElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const selected = bracelets.find((item) => item.id === selectedId);

  function closeDetails() {
    setSelectedId(null);
    triggerRef.current?.focus({ preventScroll: true });
  }
  useEffect(() => {
    if (!selectedId) return;
    detailTitleRef.current?.focus({ preventScroll: true });
    detailRef.current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
      block: "start",
    });
  }, [selectedId]);
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (menuOpen) setMenuOpen(false);
      else if (selectedId) closeDetails();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedId, menuOpen]);
  function openDetails(id: string, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setPhotoIndex(0);
    setEnlarged(false);
    if (selectedId === id) detailRef.current?.scrollIntoView({ block: "start" });
    setSelectedId(id);
  }

  return (
    <div className="bracelets-page">
      <div className="b-page">
        <header className="b-header">
          <Link className="b-brand" to="/" aria-label="Елена Козлова — главная страница">
            Елена Козлова
          </Link>
          <nav className="b-nav" aria-label="Меню страницы">
            <Link to="/">Главная</Link>
            <a href="#b-collection">Браслеты</a>
            <a href="#b-pairs">Сочетания</a>
            <a href="#b-order">Как заказать</a>
          </nav>
          <button
            className="b-menu"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="bracelet-mobile-nav"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </header>
        <nav
          className="b-mobile-nav"
          id="bracelet-mobile-nav"
          aria-label="Мобильное меню"
          hidden={!menuOpen}
        >
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Главная
          </Link>
          <a href="#b-collection" onClick={() => setMenuOpen(false)}>
            Браслеты
          </a>
          <a href="#b-pairs" onClick={() => setMenuOpen(false)}>
            Сочетания
          </a>
          <a href="#b-order" onClick={() => setMenuOpen(false)}>
            Как заказать
          </a>
        </nav>
        <main id="b-top">
          <section className="b-hero b-wrap">
            <div>
              <p className="b-eyebrow">Украшения · Елена Козлова</p>
              <h1>
                Браслеты из
                <br />
                натуральных
                <br />
                камней
              </h1>
              <p className="b-lead">
                Цвет, фактура и мягкое сияние природных камней. Украшения со своим характером — и
                историями, которые хочется носить с собой.
              </p>
              <div className="b-hero-actions">
                <a className="b-primary" href="#b-collection">
                  Выбрать браслет <ArrowDown size={16} aria-hidden="true" />
                </a>
                <a className="b-secondary" href="#b-order">
                  Как заказать
                </a>
              </div>
            </div>
            <div>
              <div className="b-hero-photo">
                <Photo index={12} eager sizes="(max-width: 650px) 100vw, 50vw" />
              </div>
              <p className="b-hero-note">Аквамарин · гематит · лунный камень · серебро</p>
            </div>
          </section>
          <div className="b-intro-line">
            <span>Красота природных оттенков</span>
            <span>Выразительные серебряные детали</span>
            <span>Помогу выбрать сочетание</span>
          </div>
          <section className="b-collection b-wrap" id="b-collection">
            <div className="b-section-head">
              <h2>Выберите своё настроение</h2>
              <p>Пять историй в цвете. Рассмотрите детали и то, как украшения выглядят на руке.</p>
            </div>
            <div className="b-grid">
              {bracelets.map((item) => (
                <article key={item.id}>
                  <button
                    className="b-card-photo"
                    type="button"
                    onClick={(event) => openDetails(item.id, event.currentTarget)}
                    aria-expanded={selectedId === item.id}
                    aria-controls="b-detail"
                    aria-label={`Рассмотреть браслет ${item.title}`}
                  >
                    <Photo index={item.cover} />
                  </button>
                  <div className="b-card-meta">
                    <h3>{item.title}</h3>
                    <p className="b-materials">{item.materials}</p>
                    <p className="b-card-story">{item.short}</p>
                    <p className="b-card-price">
                      <span>{price(item.price)}</span>
                      <span className="b-status">{item.status}</span>
                    </p>
                    <div className="b-card-actions">
                      <button
                        className="b-secondary"
                        type="button"
                        onClick={(event) => openDetails(item.id, event.currentTarget)}
                        aria-expanded={selectedId === item.id}
                        aria-controls="b-detail"
                      >
                        Подробнее
                      </button>
                      <a
                        className="b-primary"
                        href="#b-order"
                        onClick={() => setOrderChoice(item.title)}
                      >
                        Заказать <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <section
              className="b-detail"
              id="b-detail"
              ref={detailRef}
              aria-label="Подробности украшения"
              hidden={!selected}
            >
              {selected && (
                <>
                  <div className="b-detail-head">
                    <h2 ref={detailTitleRef} tabIndex={-1}>
                      Рассмотреть ближе
                    </h2>
                    <button
                      className="b-close"
                      type="button"
                      onClick={closeDetails}
                      aria-label="Закрыть подробный просмотр"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <div className="b-detail-grid">
                    <div>
                      <button
                        className={`b-detail-image${enlarged ? " enlarged" : ""}`}
                        type="button"
                        onClick={() => setEnlarged(!enlarged)}
                        aria-label={enlarged ? "Уменьшить фотографию" : "Увеличить фотографию"}
                      >
                        <Photo
                          index={selected.photos[photoIndex]}
                          eager
                          sizes="(max-width: 650px) 100vw, 60vw"
                        />
                      </button>
                      <div className="b-thumbs" aria-label="Фотографии украшения">
                        {selected.photos.map((index, i) => (
                          <button
                            className="b-thumb"
                            type="button"
                            key={index}
                            onClick={() => setPhotoIndex(i)}
                            aria-pressed={i === photoIndex}
                            aria-label={braceletPhotoAlts[index]}
                          >
                            <Photo index={index} sizes="62px" />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="b-detail-text">
                      <h3>{selected.title}</h3>
                      {selected.story.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                      <Specs specs={selected} />
                      <OrderLinks choice={selected.title} />
                      {selected.companion && (
                        <section className="b-companion">
                          <h3>
                            {selected.id === "water"
                              ? "Гематит и лунный камень"
                              : "Лунное отражение"}
                          </h3>
                          {selected.companion.story.map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                          ))}
                          <Specs specs={selected.companion} />
                          <OrderLinks
                            choice={`Гематит и лунный камень — сочетание с «${selected.title}», бусины ${selected.companion.beads}`}
                          />
                        </section>
                      )}
                    </div>
                  </div>
                </>
              )}
            </section>
          </section>
          <section className="b-pairs b-wrap" id="b-pairs">
            <div className="b-pair-photos">
              <figure>
                <Photo index={2} sizes="(max-width: 650px) 50vw, 25vw" />
                <figcaption>Аквамарин и лунное сияние</figcaption>
              </figure>
              <figure>
                <Photo index={8} sizes="(max-width: 650px) 50vw, 25vw" />
                <figcaption>Лавандовый свет и графитовый блеск</figcaption>
              </figure>
            </div>
            <div className="b-pairs-copy">
              <p className="b-eyebrow">Искусство сочетаний</p>
              <h2>
                Два браслета.
                <br />
                Одна история.
              </h2>
              <p>
                Каждый браслет обладает собственным характером, но вместе они рассказывают одну
                историю — о гармонии противоположностей, о равновесии между силой и нежностью, о
                свете, который мы носим внутри себя.
              </p>
              {bracelets
                .filter((item) => item.companion)
                .map((item) => (
                  <div className="b-pair-item" key={item.id}>
                    <p>
                      Гематит и лунный камень к «{item.title}» · {price(item.companion!.price)}
                      <br />
                      Запястье {item.companion!.size} · бусины {item.companion!.beads} ·{" "}
                      {item.companion!.status.toLowerCase()}
                    </p>
                  </div>
                ))}
              <a
                className="b-secondary"
                style={{ marginTop: 25 }}
                href="#b-order"
                onClick={() => setOrderChoice("Сочетание браслетов")}
              >
                Обсудить сочетание <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </section>
          <section className="b-order b-wrap" id="b-order">
            <p className="b-eyebrow">Личное общение</p>
            <h2 style={{ marginTop: 17 }}>Ваш браслет начинается с выбора</h2>
            <div className="b-steps">
              <div>
                <div className="b-step-number">01</div>
                <p className="b-step-title">Выберите украшение</p>
                <p className="b-step-desc">
                  Откройте фотографии, рассмотрите камни и найдите близкое вам сочетание.
                </p>
              </div>
              <div>
                <div className="b-step-number">02</div>
                <p className="b-step-title">Напишите мне</p>
                <p className="b-step-desc">
                  Подтвердим наличие и размер браслета для вашего запястья.
                </p>
              </div>
              <div>
                <div className="b-step-number">03</div>
                <p className="b-step-title">Договоримся о получении</p>
                <p className="b-step-desc">Условия оплаты и доставки обсудим в Telegram или MAX.</p>
              </div>
            </div>
            {orderChoice && (
              <p className="b-order-choice" aria-live="polite">
                Вы выбрали: {orderChoice}
              </p>
            )}
            <OrderLinks choice={orderChoice} />
            <div className="b-info">
              <section>
                <h3>Доставка</h3>
                <p>
                  Напишите мне в Telegram или MAX — обсудим удобный способ доставки, её стоимость и
                  сроки для вашего города.
                </p>
              </section>
              <section>
                <h3>Уход за украшением</h3>
                <ul className="b-care-list">
                  <li>
                    Храните браслет отдельно от других украшений в мягком мешочке или коробочке.
                  </li>
                  <li>
                    Берегите камни от ударов, падений, сильного нагрева и резких перепадов
                    температуры. Не оставляйте браслет надолго под прямыми солнечными лучами.
                  </li>
                  <li>
                    Снимайте украшение перед душем, плаванием, спортом и уборкой. Избегайте контакта
                    с духами, кремами и бытовой химией.
                  </li>
                  <li>
                    После ношения протирайте браслет мягкой сухой салфеткой без ворса. При
                    загрязнении используйте слегка влажную салфетку и сразу вытирайте насухо; не
                    замачивайте украшение.
                  </li>
                  <li>
                    Не используйте абразивы, ультразвуковую или паровую чистку. Для чистки
                    серебряных деталей избегайте попадания специальных средств на камни.
                  </li>
                </ul>
              </section>
            </div>
          </section>
        </main>
        <footer className="b-footer">
          <span>Елена Козлова · украшения из натуральных камней</span>
          <Link to="/">На главную</Link>
          <a href="#b-top">Наверх ↑</a>
        </footer>
      </div>
    </div>
  );
}
