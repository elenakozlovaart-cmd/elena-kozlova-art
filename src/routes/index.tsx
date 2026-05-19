import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpeg";
import portrait from "@/assets/artist-portrait.jpg";
import w1 from "@/assets/work-01.jpeg";
import w2 from "@/assets/work-02.jpeg";
import w3 from "@/assets/work-03.jpeg";
import w4 from "@/assets/work-04.jpeg";
import w5 from "@/assets/work-05.jpg";
import w6 from "@/assets/work-06.jpeg";
import w7 from "@/assets/work-07.jpeg";
import w8 from "@/assets/work-08.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elena Kozlova — Watercolor Artist" },
      { name: "description", content: "Original watercolor paintings of landscapes, architecture, and quiet moments by Elena Kozlova." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Karla:wght@300;400;500&display=swap" },
    ],
  }),
  component: Index,
});

const works = [
  { src: w1, title: "Mountain Village", place: "Dilijan" },
  { src: w2, title: "Stone Chapel", place: "Noratus" },
  { src: w3, title: "Lake Sevan", place: "Armenia" },
  { src: w4, title: "Republic Square", place: "Yerevan" },
  { src: w5, title: "Old Facade", place: "Gyumri" },
  { src: w6, title: "Motherland Calls I", place: "Volgograd" },
  { src: w7, title: "Motherland Calls II", place: "Volgograd" },
  { src: w8, title: "Through the Rain", place: "Study" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Karla', sans-serif" }}>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          <a href="#top" className="tracking-[0.3em] text-xs uppercase">Elena Kozlova</a>
          <div className="hidden md:flex gap-10 text-xs uppercase tracking-[0.25em]">
            <a href="#works" className="hover:text-primary transition-colors">Works</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="relative min-h-screen flex items-end pt-24">
        <div className="absolute inset-0 grid md:grid-cols-12">
          <div className="md:col-span-7 md:col-start-6 relative h-[60vh] md:h-screen">
            <img src={hero} alt="Portrait of the artist" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent md:bg-gradient-to-r md:from-background md:via-transparent md:to-transparent" />
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pb-20 md:pb-32 w-full">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">Watercolor · 2018 — Present</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-8xl leading-[0.95] max-w-3xl">
            Paintings of <em className="text-primary">quiet</em> places,<br />and the light that holds them.
          </h1>
          <p className="mt-8 max-w-md text-muted-foreground text-base leading-relaxed">
            Original works on paper — architecture, landscape, and small atmospheric studies. Each piece begins as a single wet wash.
          </p>
          <a href="#works" className="inline-block mt-10 text-xs uppercase tracking-[0.3em] border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors">
            View the collection
          </a>
        </div>
      </section>

      {/* Works */}
      <section id="works" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-20 border-b border-border pb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4">Selected Works</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl md:text-6xl">The Collection</h2>
          </div>
          <p className="hidden md:block text-sm text-muted-foreground">Eight pieces</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-16">
          {works.map((w, i) => {
            const layouts = [
              "md:col-span-7",
              "md:col-span-5 md:mt-32",
              "md:col-span-5",
              "md:col-span-7 md:mt-20",
              "md:col-span-6",
              "md:col-span-6 md:mt-24",
              "md:col-span-5",
              "md:col-span-7 md:mt-16",
            ];
            return (
              <figure key={i} className={`group ${layouts[i]}`}>
                <div className="overflow-hidden bg-secondary">
                  <img
                    src={w.src}
                    alt={w.title}
                    className="w-full h-auto object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-4 flex justify-between items-baseline">
                  <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-xl italic">{w.title}</span>
                  <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{w.place}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6 lg:px-12 bg-secondary/40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <img src={portrait} alt="Elena Kozlova in her studio" className="w-full h-auto object-cover" />
          </div>
          <div className="md:col-span-7 md:pl-8">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">About the Artist</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl md:text-6xl leading-tight mb-8">
              "I paint what I want to remember slowly."
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-foreground/80 max-w-xl">
              <p>
                Elena Kozlova is a watercolorist working from observation and memory. Her practice moves between
                architectural studies — chapels, façades, courtyards — and looser atmospheric pieces where weather
                becomes the subject.
              </p>
              <p>
                Each painting is built in a small number of decisive washes on cotton paper, then left alone. The
                work is about restraint as much as color: knowing when a passage is finished, and stopping there.
              </p>
              <p className="pt-4 text-sm text-muted-foreground">
                Based between Yerevan and the road. Available for commissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">Get in touch</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl md:text-6xl mb-10">
            Studio enquiries &<br />commissions
          </h2>
          <a href="mailto:hello@elenakozlova.art" className="text-2xl md:text-3xl italic text-primary hover:underline underline-offset-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            hello@elenakozlova.art
          </a>
          <p className="mt-6 text-sm text-muted-foreground">Replies within a few days.</p>
        </div>
      </section>

      <footer className="border-t border-border py-10 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span>© {new Date().getFullYear()} Elena Kozlova</span>
          <span>Watercolor on cotton paper</span>
        </div>
      </footer>
    </div>
  );
}
