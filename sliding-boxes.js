/* =========================================================
   TARANKAN EXIM LLP — Sliding Product Boxes
   -----------------------------------------------------------
   Add or remove image paths from row1 / row2 below to control
   what appears in the two infinite sliding rows on index.html.
   Each entry is { src, label }. label is optional (used as a
   small caption on the tile) — leave it as "" to hide it.
   ========================================================= */

const row1 = [
  { src: "Assets/Products/screw.png", label: "Screws" },
  { src: "Assets/Products/wires.png", label: "Wires" },
  { src: "Assets/Products/bearings.png", label: "Bearings" },
  { src: "Assets/Products/electric-motor.png", label: "Electric Motors" },
  { src: "Assets/Products/cables.png", label: "Cables" },
];

const row2 = [
  { src: "Assets/Products/compressors.png", label: "Compressors" },
  { src: "Assets/Products/machine-parts.png", label: "Machine Parts" },
  { src: "Assets/Products/agri-produce.png", label: "Agri Produce" },
  { src: "Assets/Products/screw.png", label: "Fasteners" },
  { src: "Assets/Products/wires.png", label: "Industrial Wires" },
];

function buildSlideBox(item) {
  const box = document.createElement("div");
  box.className = "slide-box";
  if (item.label) box.setAttribute("data-label", item.label);
  const img = document.createElement("img");
  img.src = item.src;
  img.alt = item.label || "Tarankan Exim product";
  img.loading = "lazy";
  box.appendChild(img);
  return box;
}

function renderMarqueeRow(rowEl, items) {
  if (!rowEl) return;
  rowEl.innerHTML = "";
  // duplicate the set once so the CSS -50% translate loops seamlessly
  const repeated = items.concat(items, items, items, items);
  repeated.forEach((item) => rowEl.appendChild(buildSlideBox(item)));
}

document.addEventListener("DOMContentLoaded", () => {
  renderMarqueeRow(document.getElementById("marquee-row-top"), row1);
  renderMarqueeRow(document.getElementById("marquee-row-bottom"), row2);
});
