export default function SectionShell({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section-container py-12 sm:py-16">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
        {subtitle && <p className="mt-2 text-sm text-slate-400">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}
