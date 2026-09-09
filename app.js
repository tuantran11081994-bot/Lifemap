(function () {
  const appEl = document.getElementById("app");
  const partsById = Object.fromEntries(LIFE_MAP_DATA.parts.map((p) => [p.id, p]));

  // Điều hướng: mọi phần tử bấm được phải "diễn" animation trước khi chuyển màn hình.
  function goTo(hash) {
    location.hash = hash;
  }

  function withClickAnimation(el, onDone) {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      el.classList.remove("is-pulsing");
      void el.offsetWidth; // reflow để animation retrigger được khi bấm liên tiếp
      el.classList.add("is-pulsing");
      window.setTimeout(onDone, 140);
    });
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function textButton(label, count, className, onClick) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `text-button ${className || ""}`.trim();
    const labelSpan = el("span", "text-button__label", label);
    btn.appendChild(labelSpan);
    if (count != null) {
      btn.appendChild(el("span", "text-button__count", String(count)));
    }
    withClickAnimation(btn, onClick);
    return btn;
  }

  // ---------- Pop-up chi tiết cho 3 chữ trong khung trung tâm ----------
  let activeOverlay = null;
  let activeKeyHandler = null;

  function closeModal() {
    if (!activeOverlay) return;
    const overlay = activeOverlay;
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
    window.setTimeout(() => overlay.remove(), 220);
    activeOverlay = null;
    if (activeKeyHandler) {
      document.removeEventListener("keydown", activeKeyHandler);
      activeKeyHandler = null;
    }
  }

  function openModal(part) {
    closeModal();

    const overlay = el("div", "modal-overlay");
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) closeModal();
    });

    const card = el("div", "modal-card");
    card.setAttribute("role", "dialog");
    card.setAttribute("aria-modal", "true");

    const header = el("div", "modal-header");
    header.appendChild(el("h2", "modal-title", part.label));
    const closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "text-button text-button--close";
    closeBtn.textContent = "✕";
    withClickAnimation(closeBtn, closeModal);
    header.appendChild(closeBtn);
    card.appendChild(header);

    const list = el("div", "modal-section-list");
    part.sections.forEach((section) => {
      const row = el("div", "modal-section");

      const inner = el("div", "modal-section__body-inner");
      const ul = el("ul", "modal-item-list");
      section.items.forEach((text) => ul.appendChild(el("li", null, text)));
      inner.appendChild(ul);

      const body = el("div", "modal-section__body");
      body.appendChild(inner);

      const toggle = textButton(section.title, section.items.length, "text-button--modal-section", () =>
        row.classList.toggle("is-open")
      );

      row.appendChild(toggle);
      row.appendChild(body);
      list.appendChild(row);
    });
    card.appendChild(list);

    overlay.appendChild(card);
    document.body.appendChild(overlay);
    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => overlay.classList.add("is-open"));

    activeOverlay = overlay;
    activeKeyHandler = (event) => {
      if (event.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", activeKeyHandler);
  }

  function renderHome() {
    const view = el("div", "view view--home");

    const header = el("header", "page-header");
    header.appendChild(el("p", "eyebrow", "Bản đồ cuộc đời"));
    header.appendChild(el("h1", null, "Trần Nhật Tuấn"));
    view.appendChild(header);

    const map = el("main", "map");

    const centerParts = LIFE_MAP_DATA.parts.filter((p) => p.group === "center");
    const centerFrame = el("section", "center-frame");
    centerFrame.style.gridArea = "center";
    centerFrame.appendChild(el("p", "center-frame__eyebrow", "Mục tiêu cuộc đời"));
    const values = el("div", "center-frame__values");
    centerParts.forEach((part, index) => {
      const className = `text-button--value${index > 0 ? " text-button--value-dot" : ""}`;
      values.appendChild(textButton(part.label, null, className, () => openModal(part)));
    });
    centerFrame.appendChild(values);
    map.appendChild(centerFrame);

    LIFE_MAP_DATA.parts
      .filter((p) => p.group === "pillar")
      .forEach((part) => {
        const wrap = el("div", `pillar pillar--${part.edge}`);
        wrap.style.gridArea = part.edge;
        wrap.appendChild(
          textButton(part.label, part.sections.length, "text-button--pillar", () => goTo(`#/phan/${part.id}`))
        );
        map.appendChild(wrap);
      });

    view.appendChild(map);

    const footer = el("footer", "page-footer");
    footer.appendChild(el("p", null, "Cập nhật mỗi ngày · Nhìn lại mục tiêu · Bước tiếp con đường của bạn"));
    view.appendChild(footer);

    return view;
  }

  function renderBackHeader(label, onBack) {
    const header = el("header", "detail-header");
    header.appendChild(textButton(`← ${label}`, null, "text-button--back", onBack));
    return header;
  }

  function renderPart(partId) {
    const part = partsById[partId];
    const view = el("div", "view view--part");

    if (!part) {
      view.appendChild(renderBackHeader("Về bản đồ", () => goTo("#/")));
      view.appendChild(el("p", "empty-state", "Không tìm thấy phần này."));
      return view;
    }

    view.appendChild(renderBackHeader("Bản đồ cuộc đời", () => goTo("#/")));

    const title = el("h1", "detail-title", part.label);
    view.appendChild(title);
    view.appendChild(
      el("p", "detail-subtitle", `${part.sections.length} mục nhỏ`)
    );

    const list = el("ul", "section-list");
    part.sections.forEach((section, index) => {
      const item = el("li", "section-list__item");
      item.appendChild(
        textButton(section.title, section.items.length, "text-button--section", () =>
          goTo(`#/phan/${part.id}/muc/${index}`)
        )
      );
      list.appendChild(item);
    });
    view.appendChild(list);

    return view;
  }

  function renderSection(partId, sectionIndex) {
    const part = partsById[partId];
    const section = part && part.sections[sectionIndex];
    const view = el("div", "view view--section");

    if (!part || !section) {
      view.appendChild(renderBackHeader("Về bản đồ", () => goTo("#/")));
      view.appendChild(el("p", "empty-state", "Không tìm thấy mục này."));
      return view;
    }

    view.appendChild(renderBackHeader(part.label, () => goTo(`#/phan/${part.id}`)));

    view.appendChild(el("p", "detail-eyebrow", part.label));
    view.appendChild(el("h1", "detail-title", section.title));

    const list = el("ul", "item-list");
    section.items.forEach((text) => {
      const item = el("li", "item-list__item", text);
      list.appendChild(item);
    });
    view.appendChild(list);

    return view;
  }

  function parseHash() {
    const hash = location.hash.replace(/^#\/?/, "");
    const segments = hash.split("/").filter(Boolean);
    // segments: [] | ["phan", id] | ["phan", id, "muc", index]
    if (segments[0] === "phan" && segments[1] && segments[2] === "muc" && segments[3] != null) {
      return { view: "section", partId: segments[1], sectionIndex: Number(segments[3]) };
    }
    if (segments[0] === "phan" && segments[1]) {
      return { view: "part", partId: segments[1] };
    }
    return { view: "home" };
  }

  function render() {
    closeModal();
    const route = parseHash();
    let node;
    if (route.view === "part") {
      node = renderPart(route.partId);
    } else if (route.view === "section") {
      node = renderSection(route.partId, route.sectionIndex);
    } else {
      node = renderHome();
    }

    node.classList.add("view-enter");
    appEl.innerHTML = "";
    appEl.appendChild(node);
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", render);
  render();
})();
