export default function Grid({ children }) {
  return (
    <section className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {children}
    </section>
  );
}
