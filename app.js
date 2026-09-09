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

    const centerById = Object.fromEntries(
      LIFE_MAP_DATA.parts.filter((p) => p.group === "center").map((p) => [p.id, p])
    );
    const centerFrame = el("section", "center-frame");
    centerFrame.style.gridArea = "center";
    centerFrame.appendChild(el("p", "center-frame__eyebrow", "Mục tiêu cuộc đời"));

    const values = el("div", "center-frame__values");
    const topRow = el("div", "center-frame__values-top");
    topRow.appendChild(
      textButton(centerById.tudo.label, null, "text-button--value", () => openModal(centerById.tudo))
    );
    const bottomRow = el("div", "center-frame__values-bottom");
    bottomRow.appendChild(
      textButton(centerById.doclap.label, null, "text-button--value", () => openModal(centerById.doclap))
    );
    bottomRow.appendChild(
      textButton(centerById.hanhphuc.label, null, "text-button--value text-button--value-dot", () =>
        openModal(centerById.hanhphuc)
      )
    );
    values.appendChild(topRow);
    values.appendChild(bottomRow);
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

  function renderBackFooter(label, onBack) {
    const footer = el("footer", "detail-footer");
    footer.appendChild(textButton(`← ${label}`, null, "text-button--back", onBack));
    return footer;
  }

  // ---------- Sự nghiệp: thuyết con nhóm (3 vòng tròn lồng nhau) ----------
  function renderCareerVenn(part) {
    const wrap = el("div", "venn-wrap");
    const diagram = el("div", "venn");
    const spots = ["a", "b", "c"];

    part.sections.forEach((section, index) => {
      const circle = el("div", `venn__circle venn__circle--${spots[index] || "a"}`);
      const label = el("div", "venn__label");
      label.appendChild(
        textButton(section.title, section.items.length, "text-button--venn", () =>
          goTo(`#/phan/${part.id}/muc/${index}`)
        )
      );
      circle.appendChild(label);
      diagram.appendChild(circle);
    });

    wrap.appendChild(diagram);
    return wrap;
  }

  function renderPart(partId) {
    const part = partsById[partId];
    const view = el("div", "view view--part");

    if (!part) {
      view.appendChild(el("p", "empty-state", "Không tìm thấy phần này."));
      view.appendChild(renderBackFooter("Về bản đồ", () => goTo("#/")));
      return view;
    }

    const title = el("h1", "detail-title", part.label);
    view.appendChild(title);

    if (part.layout === "venn") {
      view.appendChild(
        el("p", "detail-subtitle", "3 vòng tròn giao nhau — chọn 1 vòng để xem chi tiết")
      );
      view.appendChild(renderCareerVenn(part));
      view.appendChild(renderBackFooter("Bản đồ cuộc đời", () => goTo("#/")));
      return view;
    }

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
    view.appendChild(renderBackFooter("Bản đồ cuộc đời", () => goTo("#/")));

    return view;
  }

  function renderSection(partId, sectionIndex) {
    const part = partsById[partId];
    const section = part && part.sections[sectionIndex];
    const view = el("div", "view view--section");

    if (!part || !section) {
      view.appendChild(el("p", "empty-state", "Không tìm thấy mục này."));
      view.appendChild(renderBackFooter("Về bản đồ", () => goTo("#/")));
      return view;
    }

    view.appendChild(el("p", "detail-eyebrow", part.label));
    view.appendChild(el("h1", "detail-title", section.title));

    if (section.items.length === 0) {
      if (section.detail && section.detail.length > 0) {
        const fields = el("ul", "detail-fields");
        section.detail.forEach((field) => {
          const li = el("li", "detail-field");
          li.appendChild(el("p", "detail-field__label", field.label));
          li.appendChild(el("p", "detail-field__text", field.text));
          fields.appendChild(li);
        });
        view.appendChild(fields);
      } else {
        view.appendChild(el("p", "empty-state", "Chưa có nội dung. Sẽ bổ sung sau."));
      }
      view.appendChild(renderBackFooter(part.label, () => goTo(`#/phan/${part.id}`)));
      return view;
    }

    const list = el("ul", "item-list");
    section.items.forEach((text, index) => {
      const item = el("li", "item-list__item");
      item.appendChild(
        textButton(text, null, "text-button--item", () =>
          goTo(`#/phan/${part.id}/muc/${sectionIndex}/con/${index}`)
        )
      );
      list.appendChild(item);
    });
    view.appendChild(list);
    view.appendChild(renderBackFooter(part.label, () => goTo(`#/phan/${part.id}`)));

    return view;
  }

  function renderItem(partId, sectionIndex, itemIndex) {
    const part = partsById[partId];
    const section = part && part.sections[sectionIndex];
    const text = section && section.items[itemIndex];
    const view = el("div", "view view--item");

    if (!part || !section || text == null) {
      view.appendChild(el("p", "empty-state", "Không tìm thấy mục này."));
      view.appendChild(renderBackFooter("Về bản đồ", () => goTo("#/")));
      return view;
    }

    view.appendChild(el("p", "detail-eyebrow", `${part.label} · ${section.title}`));
    view.appendChild(el("h1", "detail-title", text));
    view.appendChild(el("p", "empty-state", "Nội dung sẽ được bổ sung sau."));
    view.appendChild(
      renderBackFooter(section.title, () => goTo(`#/phan/${part.id}/muc/${sectionIndex}`))
    );

    return view;
  }

  function parseHash() {
    const hash = location.hash.replace(/^#\/?/, "");
    const segments = hash.split("/").filter(Boolean);
    // segments: [] | ["phan", id] | ["phan", id, "muc", index] | ["phan", id, "muc", index, "con", itemIndex]
    if (
      segments[0] === "phan" &&
      segments[1] &&
      segments[2] === "muc" &&
      segments[3] != null &&
      segments[4] === "con" &&
      segments[5] != null
    ) {
      return {
        view: "item",
        partId: segments[1],
        sectionIndex: Number(segments[3]),
        itemIndex: Number(segments[5])
      };
    }
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
    } else if (route.view === "item") {
      node = renderItem(route.partId, route.sectionIndex, route.itemIndex);
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
