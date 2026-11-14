// Instância compartilhada do Lenis para navegação entre slides/seções
export const lenisRef = { current: null };

export function scrollToY(y, duration = 1.2) {
  if (lenisRef.current) lenisRef.current.scrollTo(y, { duration });
  else window.scrollTo({ top: y, behavior: "smooth" });
}

export function scrollToId(id) {
  const el = document.querySelector(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 16;
  scrollToY(y);
}
