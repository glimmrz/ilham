export function CardView({ children }) {
  return (
    <div className="grid md:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-2">
      {children}
    </div>
  );
}
