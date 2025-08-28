import Image from "next/image";

const projects = [
  {
    title: "Travel Packages",
    image: "/media/Packages.a3e093642a6a48a79d5d.png",
    description:
      "Searchable, filterable travel package UI with responsive cards.",
    tag: "Travel",
  },
  {
    title: "Admin Users",
    image: "/media/admin_userpage.464f431472e8b5d9e340.png",
    description: "Admin user management dashboard and analytics.",
    tag: "Dashboard",
  },
  {
    title: "Cart & Checkout",
    image: "/media/cart_page.a77f37116c7330a1529f.png",
    description: "Smooth cart experience with order summary and payment.",
    tag: "Commerce",
  },
  {
    title: "Account & Login",
    image: "/media/Login.5067d471cfbbb1a66fb4.png",
    description: "Secure auth with modern UI and profile management.",
    tag: "Auth",
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-12 sm:py-20 fade-in">
      <div className="mx-auto max-w-6xl px-2 sm:px-4">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Projects
        </h1>
        <p className="mt-2 text-black/70 dark:text-white/70">
          A selection of recent work. More available on request.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-black/5 dark:border-white/10 overflow-hidden bg-white/70 dark:bg-black/20 backdrop-blur card"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute left-3 top-3 text-xs px-2 py-1 rounded-full bg-white/80 dark:bg-black/50 border border-black/10 dark:border-white/10">
                  {p.tag}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-medium tracking-tight">{p.title}</h3>
                <p className="mt-1 text-sm text-black/70 dark:text-white/70">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
