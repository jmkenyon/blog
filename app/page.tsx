export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-transparent to-cyan-500/20" />
        <div className="relative mx-auto max-w-6xl px-6 py-32">
          <p className="mb-4 text-sm uppercase tracking-widest text-neutral-400">
            Joshua Kenyon · Product Engineer
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">
            I build production-ready systems <br />
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              teams actually rely on
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            Internal tools, SaaS platforms, and applied AI systems — shipped
            end-to-end. From dashboards and support tooling to payments, auth,
            and operational workflows.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://calendly.com/joshuakenyon1/30min"
              target="_blank"
              className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-200"
            >
              Book a call
            </a>
            <a
              href="#work"
              className="rounded-xl border border-neutral-800 px-6 py-3 text-sm text-neutral-300 transition hover:bg-neutral-900"
            >
              See selected work
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-semibold">
          Most teams are slowed down by their own systems
        </h2>
        <p className="mt-4 max-w-3xl text-neutral-300">
          Internal support noise, operational blind spots, and half-finished
          tooling quietly drain time and focus. The problem isn’t lack of
          software — it’s software that wasn’t built for real usage.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            "Where does this live?",
            "Who owns this system?",
            "Why is this still manual?",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 text-neutral-300"
            >
              “{item}”
            </div>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="border-t border-neutral-900 bg-neutral-900/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-3xl font-semibold">
            Built for reality, not demos
          </h2>
          <p className="mt-4 max-w-3xl text-neutral-300">
            I focus on systems that survive real users, evolving requirements,
            and operational constraints — clean architecture, pragmatic
            trade-offs, and fast feedback loops.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <ul className="space-y-4 text-neutral-300">
              <li>• Internal tools for support & ops teams</li>
              <li>• SaaS platforms with auth, billing, and multi-tenancy</li>
              <li>• Dashboards for visibility and coordination</li>
              <li>• AI systems grounded in real data</li>
            </ul>
            <ul className="space-y-4 text-neutral-300">
              <li>• Next.js, TypeScript, Node.js, Python</li>
              <li>• Stripe, roles, permissions, subscriptions</li>
              <li>• MongoDB, Prisma, production deployments</li>
              <li>• Designed to be maintained, not rewritten</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-semibold">Selected work</h2>

        {/* FEATURED PROJECT */}
        <div className="mt-12 rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-10">
          <div className="max-w-3xl">
            <p className="mb-2 text-xs uppercase tracking-widest text-neutral-400">
              Featured · In Progress
            </p>
            <h3 className="text-2xl font-medium">
              Internal AI Support & Operations Assistant
            </h3>
            <p className="mt-4 text-neutral-300">
              An internal AI-powered system designed to help employees find
              accurate answers across documentation, runbooks, and operational
              history — reducing repetitive internal support requests and
              interruptions.
            </p>

            <ul className="mt-6 space-y-2 text-neutral-400">
              <li>• Built for support, ops, and engineering teams</li>
              <li>• Grounds responses in internal docs and systems</li>
              <li>• Designed for trust, traceability, and real-world usage</li>
              <li>
                • Currently built and demoed in an internal fintech environment
              </li>
            </ul>

            <p className="mt-6 text-sm text-neutral-500">
              Private internal tool · Public demo coming soon
            </p>
          </div>
        </div>

        {/* SECONDARY PROJECTS */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {/* BJJ Desk */}
          <a
            href="https://bjjdesk.com"
            target="_blank"
            className="group rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6 transition hover:border-neutral-700"
          >
            <h3 className="font-medium">BJJ Desk — SaaS Platform</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Multi-tenant SaaS for gyms with subscriptions, role-based access,
              Stripe billing, and operational tooling.
            </p>
            <p className="mt-4 text-sm text-indigo-400 group-hover:underline">
              Visit site →
            </p>
          </a>

          {/* AlugaVaga */}
          <a
            href="https://alugavaga.com.br"
            target="_blank"
            className="group rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6 transition hover:border-neutral-700"
          >
            <h3 className="font-medium">AlugaVaga — Marketplace</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Two-sided marketplace with real users, listings, messaging, and
              shared web + mobile backend.
            </p>
            <p className="mt-4 text-sm text-indigo-400 group-hover:underline">
              Visit site →
            </p>
          </a>

          {/* Laura Consoni */}
          <a
            href="https://lauraconsoni.com.br"
            target="_blank"
            className="group rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6 transition hover:border-neutral-700"
          >
            <h3 className="font-medium">Laura Consoni — Portfolio Site</h3>
            <p className="mt-2 text-sm text-neutral-400">
              High-polish client site focused on performance, SEO, animations,
              and internationalisation.
            </p>
            <p className="mt-4 text-sm text-indigo-400 group-hover:underline">
              Visit site →
            </p>
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-neutral-900 bg-neutral-900/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-3xl font-semibold">What I do</h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Internal Tools & Platforms",
                desc: "Dashboards, admin tools, and systems that reduce operational friction.",
              },
              {
                title: "SaaS & Payments",
                desc: "End-to-end SaaS builds with auth, billing, and multi-tenant architecture.",
              },
              {
                title: "Applied AI Systems",
                desc: "AI features integrated into real products and workflows.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6"
              >
                <h3 className="font-medium">{service.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-32">
        <div className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-12 text-center">
          <h2 className="text-3xl font-semibold">
            Need something built properly?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-300">
            If you’re building internal tooling, a SaaS product, or applied AI —
            and want someone who can take it from idea to production — let’s
            talk.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://calendly.com/joshuakenyon1/30min"
              target="_blank"
              className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-200"
            >
              Book a call
            </a>
            <a
              href="mailto:joshuakenyon1@gmail.com"
              className="rounded-xl border border-neutral-800 px-6 py-3 text-sm text-neutral-300 transition hover:bg-neutral-900"
            >
              Email me
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-900 py-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Joshua Kenyon · joshuakenyon.dev
      </footer>
    </main>
  );
}
