document$.subscribe(() => {
  document.querySelectorAll(".md-typeset code").forEach((el) => {
    if (el.closest("pre")) return;
    const text = el.textContent.trim();
    if (/^(['"]).*\1$/.test(text)) el.classList.add("doc-string");
  });
});
