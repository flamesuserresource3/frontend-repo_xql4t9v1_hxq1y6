export default function PastelCard({ children, className = '' }) {
  return (
    <div className={`rounded-3xl bg-white/80 backdrop-blur border border-pink-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] ${className}`}>
      {children}
    </div>
  );
}
