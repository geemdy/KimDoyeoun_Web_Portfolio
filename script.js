// script.js
document.addEventListener("DOMContentLoaded", function () {
  // 모든 프로젝트의 탭 처리
  document.querySelectorAll(".meta").forEach(function (meta) {
    const tabs = meta.querySelectorAll(".meta-tab");
    const panels = meta.querySelectorAll(".meta-panel");

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        const target = tab.dataset.target;

        // 1) 탭 스타일 바꾸기 (색 진하게 + 두껍게)
        tabs.forEach(function (t) {
          t.classList.remove("active");
        });
        tab.classList.add("active");

        // 2) 아래 문장 바꾸기
        panels.forEach(function (panel) {
          panel.classList.toggle("active", panel.dataset.name === target);
        });

        // 3) 만약 data-link가 있으면 새 탭으로 링크 열기
        if (tab.dataset.link) {
          window.open(tab.dataset.link, "_blank");
        }
      });
    });
  });
});
