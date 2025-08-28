import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="py-10 sm:py-20 fade-in">
      <div className="mx-auto max-w-7xl px-2 sm:px-4">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-2xl border border-black/5 dark:border-white/10 p-8 sm:p-12 bg-white/70 dark:bg-black/20 backdrop-blur">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/20 to-rose-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-400/20 to-cyan-400/20 blur-3xl" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs tracking-wide uppercase bg-white/60 dark:bg-black/30">
                Available for freelance
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs tracking-wide uppercase bg-white/60 dark:bg-black/30">
                Backend-focused · Full‑stack capable
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
                Akash Diwakar — Full‑stack Developer & UI Engineer
              </h1>
              <p className="text-base sm:text-lg text-black/70 dark:text-white/70 max-w-prose">
                Focused on clear UX, performance, and smooth micro‑interactions.
                React, Next.js, animations, and delightful UI polish.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90"
                >
                  View Projects
                </Link>
                <a
                  href="/media/Akash_diwakar_CV.pdf"
                  target="_blank"
                  className="rounded-full border px-5 py-2.5 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10"
                >
                  Download Resume
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-xl overflow-hidden border border-black/5 dark:border-white/10 card">
              <Image
                src="/media/HomePage.d861db86b411b1736c0a.png"
                alt="Showcase"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Logos marquee */}
        <div className="mt-12 sm:mt-16">
          <div className="marquee overflow-hidden py-3">
            <div className="marquee-track">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Node",
                "Prisma",
                "Postgres",
                "Vercel",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-sm sm:text-base text-black/60 dark:text-white/60"
                >
                  {tech}
                </span>
              ))}
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Node",
                "Prisma",
                "Postgres",
                "Vercel",
              ].map((tech) => (
                <span
                  key={`${tech}-dupe`}
                  className="text-sm sm:text-base text-black/60 dark:text-white/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* About */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border border-black/5 dark:border-white/10">
              <Image
                src="/media/ProfilePic.png"
                alt="Akash Diwakar"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold tracking-tight">About</h2>
            <p className="mt-3 text-black/70 dark:text-white/70 leading-relaxed">
              I’m a full‑stack developer who loves shipping pixel‑perfect,
              accessible, and fast web apps. I work across the stack with React,
              Next.js, Node, and modern tooling, bringing strong UX
              sensibilities and product thinking.
            </p>
            <p className="mt-2 text-black/70 dark:text-white/70 leading-relaxed">
              From admin dashboards and commerce flows to real‑time chat and
              complex forms, I care about craft, maintainability, and clear
              communication.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "Tailwind CSS",
              "Node.js",
              "Express",
              "Prisma",
              "PostgreSQL",
              "MongoDB",
              "Redis",
              "Docker",
              "Git",
              "Vercel",
            ].map((s) => (
              <span
                key={s}
                className="text-xs sm:text-sm rounded-full border px-3 py-1.5 bg-white/70 dark:bg-black/20 backdrop-blur"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Focus: Backend expertise + Frontend proficiency */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/80 dark:bg-black/20 backdrop-blur p-6">
            <h3 className="text-lg font-semibold tracking-tight">
              Backend Expertise
            </h3>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">
              APIs, services, data models, and infrastructure.
            </p>
            <ul className="mt-3 text-sm list-disc pl-5 space-y-1 text-black/80 dark:text-white/80">
              <li>Node.js, Express, REST/GraphQL APIs</li>
              <li>PostgreSQL, MongoDB, Prisma ORM</li>
              <li>Auth, RBAC, file uploads, background jobs</li>
              <li>Performance, caching (Redis), pagination</li>
              <li>CI/CD and deployments (Vercel, Docker)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/80 dark:bg-black/20 backdrop-blur p-6">
            <h3 className="text-lg font-semibold tracking-tight">
              Frontend Proficiency
            </h3>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">
              Product‑oriented UIs with performance and UX polish.
            </p>
            <ul className="mt-3 text-sm list-disc pl-5 space-y-1 text-black/80 dark:text-white/80">
              <li>React, Next.js (App Router)</li>
              <li>TypeScript, Tailwind CSS, responsive design</li>
              <li>Forms, validation, accessibility (a11y)</li>
              <li>Animations, micro‑interactions</li>
              <li>SEO/meta, static export</li>
            </ul>
          </div>
        </div>

        {/* Career Roadmap */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            Career Roadmap
          </h2>
          <div className="mt-6 relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-black/10 dark:bg-white/15" />
            <div className="space-y-6">
              {/* CIMET */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1.5 h-8 w-8 rounded-full border border-black/10 dark:border-white/15 bg-white/70 dark:bg-black/20 overflow-hidden flex items-center justify-center">
                  <Image
                    src="/media/cimet.8a527930e3c066c35456ac09929c9bf8.svg"
                    alt="CIMET"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/20 backdrop-blur p-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <p className="text-sm text-black/60 dark:text-white/60">
                        CIMET · Full-time
                      </p>
                      <h3 className="text-lg font-medium">
                        Software Developer
                      </h3>
                    </div>
                    <div className="text-sm text-black/60 dark:text-white/60">
                      Nov 2024 – Present · Jaipur, Rajasthan · On-site
                    </div>
                  </div>
                </div>
              </div>

              {/* Hub2Technologies - Software Developer */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1.5 h-8 w-8 rounded-full border border-black/10 dark:border-white/15 bg-white/70 dark:bg-black/20 overflow-hidden flex items-center justify-center text-[10px] font-medium">
                  H2T
                </div>
                <div className="rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/20 backdrop-blur p-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <p className="text-sm text-black/60 dark:text-white/60">
                        Hub2Technologies · Full-time
                      </p>
                      <h3 className="text-lg font-medium">
                        Software Developer
                      </h3>
                    </div>
                    <div className="text-sm text-black/60 dark:text-white/60">
                      Jan 2023 – Jun 2024 · 1 yr 6 mos · Jaipur, Rajasthan ·
                      On-site
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                    Experienced Software Developer | Passionate about building
                    innovative solutions. CSS, Node.js and +16 skills.
                  </p>
                </div>
              </div>

              {/* Hub2Technologies - Trainee */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1.5 h-8 w-8 rounded-full border border-black/10 dark:border-white/15 bg-white/70 dark:bg-black/20 overflow-hidden flex items-center justify-center text-[10px] font-medium">
                  H2T
                </div>
                <div className="rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/20 backdrop-blur p-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <p className="text-sm text-black/60 dark:text-white/60">
                        Hub2Technologies · Trainee
                      </p>
                      <h3 className="text-lg font-medium">
                        Full Stack Developer
                      </h3>
                    </div>
                    <div className="text-sm text-black/60 dark:text-white/60">
                      Jul 2022 – Dec 2022 · 6 mos
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured work */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              src: "/media/admin_dashboard.4666f54dcec59a033202.png",
              title: "Admin Dashboard",
              tag: "Analytics",
            },
            {
              src: "/media/product_page_1.3e6907aa70f50ef98a98.png",
              title: "E‑commerce Product",
              tag: "Commerce",
            },
            {
              src: "/media/checkoutpage.576ca873048d76c8f81e.png",
              title: "Checkout Flow",
              tag: "Payments",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl border border-black/5 dark:border-white/10 overflow-hidden bg-white/70 dark:bg-black/20 backdrop-blur card"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={card.src}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute left-3 top-3 text-xs px-2 py-1 rounded-full bg-white/80 dark:bg-black/50 border border-black/10 dark:border-white/10">
                  {card.tag}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-medium tracking-tight">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 sm:mt-20">
          <div className="rounded-2xl border border-black/5 dark:border-white/10 p-8 sm:p-10 bg-gradient-to-r from-indigo-500/10 via-rose-500/10 to-emerald-500/10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                  Have a project in mind?
                </h2>
                <p className="text-black/70 dark:text-white/70 mt-1">
                  Let’s collaborate to build something exceptional.
                </p>
              </div>
              <a
                href="mailto:akashdiwakar575@gmail.com"
                className="rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
