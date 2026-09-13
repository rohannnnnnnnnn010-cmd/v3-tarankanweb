/* =========================================================
   TARANKAN EXIM LLP — Shared site interactions
   Desktop hover dropdowns + mobile sidebar menu
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* ---------- Desktop hover dropdowns ---------- */
  const hoverMap = [
    { link: "about-us-link", box: "about-us-hover-box" },
    { link: "products-link", box: "products-hover-box" },
    { link: "export-markets-link", box: "export-markets-hover-box" },
  ];

  hoverMap.forEach(({ link, box }) => {
    const linkEl = document.getElementById(link);
    const boxEl = document.getElementById(box);
    if (!linkEl || !boxEl) return;

    let hideTimer = null;

    const openBox = () => {
      clearTimeout(hideTimer);
      document.querySelectorAll(".hover-box.is-open").forEach((el) => {
        if (el !== boxEl) el.classList.remove("is-open");
      });
      boxEl.classList.add("is-open");
    };

    const scheduleClose = () => {
      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => boxEl.classList.remove("is-open"), 140);
    };

    linkEl.addEventListener("mouseenter", openBox);
    linkEl.addEventListener("mouseleave", scheduleClose);
    boxEl.addEventListener("mouseenter", () => clearTimeout(hideTimer));
    boxEl.addEventListener("mouseleave", scheduleClose);
  });

  /* ---------- Mobile sidebar ---------- */
  const menuIcon = document.getElementById("mobile-menu-icon");
  const sidebar = document.getElementById("mobile-sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const closeBtn = document.getElementById("mobile-sidebar-close");

  const openSidebar = () => {
    sidebar?.classList.add("is-open");
    overlay?.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };
  const closeSidebar = () => {
    sidebar?.classList.remove("is-open");
    overlay?.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  menuIcon?.addEventListener("click", openSidebar);
  closeBtn?.addEventListener("click", closeSidebar);
  overlay?.addEventListener("click", closeSidebar);
});
