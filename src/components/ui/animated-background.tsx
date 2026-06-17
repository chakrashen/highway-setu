export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-blue/20 blur-[120px] animate-blob" />
      <div
        className="absolute right-0 top-40 h-[26rem] w-[26rem] rounded-full bg-purple/20 blur-[120px] animate-blob"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-emerald/15 blur-[120px] animate-blob"
        style={{ animationDelay: "-12s" }}
      />
    </div>
  );
}
