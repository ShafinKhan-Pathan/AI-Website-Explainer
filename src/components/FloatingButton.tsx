type FloatingButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export function FloatingButton({ isOpen, onClick }: FloatingButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-label={isOpen ? 'Close AI Website Explainer' : 'Open AI Website Explainer'}
      className="group fixed bottom-5 right-5 z-[999998] inline-flex h-14 items-center gap-3 rounded-full border border-white/30 bg-slate-900 px-5 text-sm font-semibold text-white shadow-soft transition duration-200 hover:-translate-y-1 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 sm:bottom-6 sm:right-6"
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-lg">💡</span>
      <span className="hidden sm:inline">{isOpen ? 'Close explainer' : 'Explain this page'}</span>
    </button>
  );
}
