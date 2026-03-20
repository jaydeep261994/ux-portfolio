export default function TopBar() {
  return (
    <header className="sticky top-0 z-20 bg-[var(--color-bg-sidebar)]">
      {/* Top navigation */}
      <div className="flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-[6px]">
          <img src="/images/icons/house.svg" alt="" className="w-[19px] h-[19px]" />
          <span className="text-[13px] text-[var(--color-text-nav)] leading-5 tracking-[-0.13px]">
            Home
          </span>
        </div>
        <button
          className="flex items-center gap-[6px] bg-[var(--color-bg-button)] px-[10px] py-1 rounded-[6px] transition-colors hover:bg-white/10"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
          }}
        >
          <img src="/images/icons/link.svg" alt="" className="w-[19px] h-[19px]" />
          <span className="text-[13px] text-[var(--color-text-nav)] leading-5 tracking-[-0.13px]">
            Copy link
          </span>
        </button>
      </div>

      {/* Status badge */}
      <div className="flex justify-center py-[7px] bg-[var(--color-bg-elevated)]">
        <div className="flex items-center gap-2 bg-[var(--color-bg-badge)] rounded-full px-[7px] py-[5px]">
          <img src="/images/icons/dot-green.svg" alt="" className="w-[6px] h-[6px]" />
          <span className="text-xs text-[var(--color-text-status)] leading-[14px]">
            looking for my next role
          </span>
        </div>
      </div>
    </header>
  );
}
