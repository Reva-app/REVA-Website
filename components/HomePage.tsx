// Placeholder — wordt later gebouwd
export const HomePage: React.FC = () => {
  return (
    <div
      className="h-[100dvh] flex items-center justify-center"
      style={{ background: "#f8f7f4" }}
    >
      <div className="text-center space-y-3">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto"
          style={{ background: "#e8632a" }}
        >
          <span className="text-white font-bold text-xl leading-none">R</span>
        </div>
        <p className="text-sm font-medium" style={{ color: "#1a1a1a" }}>
          Homepage komt binnenkort
        </p>
        <p className="text-xs" style={{ color: "#9ca3af" }}>
          Zet NEXT_PUBLIC_LAUNCH_MODE=true om de launch pagina te tonen
        </p>
      </div>
    </div>
  );
};
