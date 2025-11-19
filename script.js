document.addEventListener("DOMContentLoaded", () => {
  const allMeta = document.querySelectorAll(".meta");

  allMeta.forEach((meta) => {
    const tabs = meta.querySelectorAll(".meta-tab");
    const panels = meta.querySelectorAll(".meta-panel");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.target; // "website" 또는 "process"

        // 탭 active 적용
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        // 패널 변경
        panels.forEach((panel) => {
          panel.classList.toggle("active", panel.dataset.name === target);
        });
      });
    });
  });
});
