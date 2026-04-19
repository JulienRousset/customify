export default function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[90] opacity-[0.06] mix-blend-overlay"
      style={{ isolation: 'isolate' }}
    >
      <div
        className="absolute -inset-[50%] bg-grain animate-grain"
        style={{ backgroundSize: '180px 180px' }}
      />
    </div>
  )
}
