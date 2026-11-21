if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      const passedViewport = entry.rootBounds && entry.boundingClientRect.bottom <= entry.rootBounds.top;
      if (entry.isIntersecting || passedViewport) {
        entry.target.classList.remove("awaiting-reveal");
        observer.unobserve(entry.target);
      }
    }
  }, { rootMargin: "0px 0px -9% 0px" });

  for (const block of document.querySelectorAll("[data-enter], [data-reveal]")) {
    block.classList.add("awaiting-reveal");
    observer.observe(block);
  }
}
