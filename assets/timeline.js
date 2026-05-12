(function () {
  const icons = {
    clinical:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="#4273b5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3v5a4 4 0 0 0 8 0V3"/><path d="M4 3h4"/><path d="M12 3h4"/><path d="M10 12v3a5 5 0 0 0 10 0v-2"/><circle cx="20" cy="11" r="2"/></svg>',
    data:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="#4273b5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 19V9"/><path d="M12 19V5"/><path d="M19 19v-7"/><path d="M3 19h18"/></svg>',
    degree:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="#4273b5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8l9-4 9 4-9 4-9-4Z"/><path d="M7 10v5c2.8 2 7.2 2 10 0v-5"/></svg>',
    future:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="#4273b5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/><path d="M5 18h.01"/><path d="M5 6h.01"/></svg>',
    research:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="#4273b5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 4h4"/><path d="M12 4v5"/><path d="M9 9h6l-1.5 4.5a3.2 3.2 0 0 1-3 2.2H8"/><path d="M7 18h10"/><path d="M9 16l-2 2"/><path d="M15 12l4 6"/></svg>',
  };

  const dataEl = document.getElementById("timeline-data");
  const timeline = document.getElementById("timeline");

  if (!dataEl || !timeline) return;

  let items = [];
  try {
    items = JSON.parse(dataEl.textContent || "[]");
  } catch (error) {
    timeline.textContent = "Timeline data could not be loaded.";
    return;
  }

  if (!Array.isArray(items) || items.length === 0) return;

  const lastComplete = items.reduce((last, item, index) => {
    return item.complete === false ? last : index;
  }, -1);
  const denominator = Math.max(items.length - 1, 1);
  const progress = Math.max(0, Math.min(100, (lastComplete / denominator) * 100));

  timeline.style.setProperty("--timeline-count", String(items.length));
  timeline.style.setProperty("--timeline-progress", `${progress}%`);

  for (const item of items) {
    const node = document.createElement("div");
    node.className = `timeline-item${item.complete === false ? " future" : ""}`;

    const icon = document.createElement("span");
    icon.className = "timeline-icon";
    icon.innerHTML = icons[item.icon] || icons.research;

    const date = document.createElement("span");
    date.className = "timeline-date";
    date.textContent = item.date || "";

    const role = document.createElement("span");
    role.className = "timeline-role";
    role.textContent = item.role || "";

    const place = document.createElement("span");
    place.className = "timeline-place";
    place.textContent = item.place || "\u00a0";

    node.append(icon, date, role, place);
    timeline.appendChild(node);
  }
})();
