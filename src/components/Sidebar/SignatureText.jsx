export default function SignatureText() {
  return (
    <div className="mt-4">
      {/* Replace with your jaydeep.svg once added to src/assets/ */}
      <span
        className="font-bold tracking-tight"
        style={{ fontSize: "clamp(1rem, 0.9rem + 0.5vw, 1.25rem)" }}
      >
        Jaydeep
      </span>
      <p
        className="mt-1"
        style={{
          color: "var(--color-text-secondary)",
          fontSize: "clamp(0.75rem, 0.7rem + 0.2vw, 0.875rem)",
        }}
      >
        UI/UX Designer
      </p>
    </div>
  );
}
