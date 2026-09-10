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

  // Mục con (item) có thể là chuỗi thường (chưa có nội dung) hoặc object
  // { title, articles: [{ title, body }] } khi đã có bài viết chi tiết.
  function itemTitle(item) {
    return typeof item === "string" ? item : item.title;
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
      if (section.items.length === 0 && section.detail && section.detail.length > 0) {
        const fields = el("ul", "detail-fields");
        section.detail.forEach((field) => {
          const li = el("li", "detail-field");
          li.appendChild(el("p", "detail-field__label", field.label));
          li.appendChild(el("p", "detail-field__text", field.text));
          fields.appendChild(li);
        });
        inner.appendChild(fields);
      } else if (section.items.length === 0 && section.note) {
        inner.appendChild(el("p", "modal-section__note", section.note));
      } else {
        const ul = el("ul", "modal-item-list");
        section.items.forEach((text) => ul.appendChild(el("li", null, text)));
        inner.appendChild(ul);
      }

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
        const count = part.tabs
          ? part.tabs.reduce((sum, tab) => sum + tab.sections.length, 0)
          : part.sections.length;
        const wrap = el("div", `pillar pillar--${part.edge}`);
        wrap.style.gridArea = part.edge;
        wrap.appendChild(
          textButton(part.label, count, "text-button--pillar", () => goTo(`#/phan/${part.id}`))
        );
        map.appendChild(wrap);
      });

    view.appendChild(map);

    const footer = el("footer", "page-footer");
    footer.appendChild(el("p", null, "Bản đồ này dẫn đến kho báu của cuộc đời mày."));
    footer.appendChild(el("p", null, "Hãy đảm bảo rằng mày sẽ theo sát nó bằng cả tính mạng mình."));
    view.appendChild(footer);

    return view;
  }

  function renderBackFooter(label, onBack) {
    const footer = el("footer", "detail-footer");
    footer.appendChild(textButton(`← ${label}`, null, "text-button--back", onBack));
    return footer;
  }

  // ---------- Thuyết con nhím: 3 vòng tròn lồng nhau + 3 vùng giao đôi + 1 tâm ----------
  // Mỗi section cần field "spot": "top" | "left" | "right" (vòng chính),
  // "top-left" | "top-right" | "bottom" (giao đôi), "center" (giao cả 3).
  const VENN_MAIN_SPOTS = ["top", "left", "right"];

  function renderCareerVenn(partId, tabId, sections) {
    const wrap = el("div", "venn-wrap");
    const diagram = el("div", "venn");

    // Lượt 1: vẽ hết các "hình" (3 vòng tròn + vùng giao vàng) trước.
    sections.forEach((section) => {
      const spot = section.spot;
      if (VENN_MAIN_SPOTS.includes(spot)) {
        diagram.appendChild(el("div", `venn__circle venn__circle--${spot}`));
      } else if (spot === "center") {
        // Vùng giao cả 3 vòng ("sweet spot") — 3 lớp clip-path lồng nhau, xem style.css.
        const centerA = el("div", "venn__center");
        const centerB = el("div", "venn__center-b");
        const centerC = el("div", "venn__center-c");
        centerB.appendChild(centerC);
        centerA.appendChild(centerB);
        diagram.appendChild(centerA);
      }
    });

    // Lượt 2: đặt hết chữ lên sau cùng — nhờ vậy chữ luôn nổi trên mọi vòng tròn,
    // kể cả ở những chỗ 2-3 vòng đè lên nhau, bất kể vòng nào vẽ trước/sau.
    sections.forEach((section, index) => {
      const spot = section.spot;
      const goToSection = () => goTo(`#/phan/${partId}/tab/${tabId}/muc/${index}`);

      if (VENN_MAIN_SPOTS.includes(spot)) {
        const anchor = el("div", `venn__label-anchor venn__label-anchor--${spot}`);
        const label = el("div", "venn__label");
        label.appendChild(
          textButton(section.title, section.items.length, "text-button--venn", goToSection)
        );
        anchor.appendChild(label);
        diagram.appendChild(anchor);
      } else if (spot === "center") {
        const centerLabel = el("div", "venn__center-label");
        centerLabel.appendChild(textButton(section.title, null, "text-button--venn-center", goToSection));
        diagram.appendChild(centerLabel);
      } else {
        // Vùng giao đôi chỉ là chú thích mô tả, không dẫn tới đâu — không phải nút bấm.
        const overlap = el("div", `venn__overlap venn__overlap--${spot}`);
        overlap.appendChild(el("p", "venn__overlap-text", section.title));
        diagram.appendChild(overlap);
      }
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

    if (part.tabs) {
      view.appendChild(el("p", "detail-subtitle", `${part.tabs.length} phần`));

      const tabList = el("ul", "section-list");
      part.tabs.forEach((tab) => {
        const item = el("li", "section-list__item");
        item.appendChild(
          textButton(tab.label, tab.sections.length, "text-button--section", () =>
            goTo(`#/phan/${part.id}/tab/${tab.id}`)
          )
        );
        tabList.appendChild(item);
      });
      view.appendChild(tabList);
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

  function renderTab(partId, tabId) {
    const part = partsById[partId];
    const tab = part && part.tabs && part.tabs.find((t) => t.id === tabId);
    const view = el("div", "view view--part");

    if (!part || !tab) {
      view.appendChild(el("p", "empty-state", "Không tìm thấy phần này."));
      view.appendChild(renderBackFooter("Về bản đồ", () => goTo("#/")));
      return view;
    }

    view.appendChild(el("p", "detail-eyebrow", part.label));
    view.appendChild(el("h1", "detail-title", tab.label));

    if (tab.layout === "venn") {
      view.appendChild(el("p", "detail-subtitle", "Chạm vào từng vùng để xem chi tiết"));
      view.appendChild(renderCareerVenn(part.id, tab.id, tab.sections));
      view.appendChild(renderBackFooter(part.label, () => goTo(`#/phan/${part.id}`)));
      return view;
    }

    if (tab.sections.length === 0) {
      view.appendChild(el("p", "empty-state", "Chưa có nội dung. Sẽ bổ sung sau."));
      view.appendChild(renderBackFooter(part.label, () => goTo(`#/phan/${part.id}`)));
      return view;
    }

    view.appendChild(el("p", "detail-subtitle", `${tab.sections.length} mục nhỏ`));

    const list = el("ul", "section-list");
    tab.sections.forEach((section, index) => {
      const item = el("li", "section-list__item");
      item.appendChild(
        textButton(section.title, section.items.length, "text-button--section", () =>
          goTo(`#/phan/${part.id}/tab/${tab.id}/muc/${index}`)
        )
      );
      list.appendChild(item);
    });
    view.appendChild(list);
    view.appendChild(renderBackFooter(part.label, () => goTo(`#/phan/${part.id}`)));

    return view;
  }

  // Gom logic tra cứu sections dùng chung cho renderSection/renderItem — hoạt động cho cả
  // Phần thường (part.sections) lẫn Phần có tab (part.tabs[].sections, khi có tabId).
  function getSectionsContext(partId, tabId) {
    const part = partsById[partId];
    if (!part) return null;

    if (tabId) {
      const tab = part.tabs && part.tabs.find((t) => t.id === tabId);
      if (!tab) return null;
      return {
        sections: tab.sections,
        eyebrow: `${part.label} · ${tab.label}`,
        backLabel: tab.label,
        backHash: `#/phan/${partId}/tab/${tabId}`,
        basePath: `#/phan/${partId}/tab/${tabId}`
      };
    }

    return {
      sections: part.sections,
      eyebrow: part.label,
      backLabel: part.label,
      backHash: `#/phan/${partId}`,
      basePath: `#/phan/${partId}`
    };
  }

  function renderSection(partId, tabId, sectionIndex) {
    const ctx = getSectionsContext(partId, tabId);
    const section = ctx && ctx.sections[sectionIndex];
    const view = el("div", "view view--section");

    if (!ctx || !section) {
      view.appendChild(el("p", "empty-state", "Không tìm thấy mục này."));
      view.appendChild(renderBackFooter("Về bản đồ", () => goTo("#/")));
      return view;
    }

    view.appendChild(el("p", "detail-eyebrow", ctx.eyebrow));
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
      view.appendChild(renderBackFooter(ctx.backLabel, () => goTo(ctx.backHash)));
      return view;
    }

    const list = el("ul", "item-list");
    section.items.forEach((entry, index) => {
      const item = el("li", "item-list__item");
      item.appendChild(
        textButton(itemTitle(entry), null, "text-button--item", () =>
          goTo(`${ctx.basePath}/muc/${sectionIndex}/con/${index}`)
        )
      );
      list.appendChild(item);
    });
    view.appendChild(list);
    view.appendChild(renderBackFooter(ctx.backLabel, () => goTo(ctx.backHash)));

    return view;
  }

  function renderItem(partId, tabId, sectionIndex, itemIndex) {
    const ctx = getSectionsContext(partId, tabId);
    const section = ctx && ctx.sections[sectionIndex];
    const entry = section && section.items[itemIndex];
    const view = el("div", "view view--item");

    if (!ctx || !section || entry == null) {
      view.appendChild(el("p", "empty-state", "Không tìm thấy mục này."));
      view.appendChild(renderBackFooter("Về bản đồ", () => goTo("#/")));
      return view;
    }

    view.appendChild(el("p", "detail-eyebrow", `${ctx.eyebrow} · ${section.title}`));
    view.appendChild(el("h1", "detail-title", itemTitle(entry)));

    const articles = typeof entry === "object" && entry.articles ? entry.articles : [];
    if (articles.length === 0) {
      view.appendChild(el("p", "empty-state", "Chưa có nội dung. Sẽ bổ sung sau."));
    } else {
      const list = el("ul", "item-list");
      articles.forEach((article, articleIndex) => {
        const li = el("li", "item-list__item");
        li.appendChild(
          textButton(article.title, null, "text-button--item", () =>
            goTo(`${ctx.basePath}/muc/${sectionIndex}/con/${itemIndex}/bai/${articleIndex}`)
          )
        );
        list.appendChild(li);
      });
      view.appendChild(list);
    }

    view.appendChild(
      renderBackFooter(section.title, () => goTo(`${ctx.basePath}/muc/${sectionIndex}`))
    );

    return view;
  }

  // headingRefs (tuỳ chọn): mảng để gom { id, text } của các block "heading" —
  // dùng làm mục lục (xem renderArticleToc), mỗi heading được gắn id để scroll tới.
  function renderArticleBody(container, body, headingRefs) {
    body.forEach((block) => {
      if (block.type === "heading") {
        const heading = el("h2", "article-heading", block.text);
        if (headingRefs) {
          const id = `toc-heading-${headingRefs.length}`;
          heading.id = id;
          headingRefs.push({ id, text: block.text });
        }
        container.appendChild(heading);
      } else if (block.type === "subheading") {
        container.appendChild(el("h3", "article-subheading", block.text));
      } else if (block.type === "paragraph") {
        container.appendChild(el("p", "article-paragraph", block.text));
      } else if (block.type === "note") {
        container.appendChild(el("p", "article-note", block.text));
      } else if (block.type === "list") {
        const ul = el("ul", "article-list");
        block.items.forEach((entry) => {
          const li = el("li", "article-list__item");
          if (typeof entry === "string") {
            li.textContent = entry;
          } else {
            li.appendChild(el("strong", "article-list__label", `${entry.label}: `));
            li.appendChild(document.createTextNode(entry.text));
          }
          ul.appendChild(li);
        });
        container.appendChild(ul);
      }
    });
  }

  // Nút mục lục nhỏ (3 gạch) ở góc phải trên bài viết — bấm để bung danh sách
  // heading, chọn 1 mục để cuộn tới đúng vị trí trong bài.
  function renderArticleToc(headingRefs) {
    const wrap = el("div", "toc");

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "toc-toggle";
    toggle.setAttribute("aria-label", "Mục lục");
    toggle.appendChild(el("span", "toc-toggle__line"));
    toggle.appendChild(el("span", "toc-toggle__line"));
    toggle.appendChild(el("span", "toc-toggle__line"));

    let outsideClickHandler = null;

    function closePanel() {
      wrap.classList.remove("is-open");
      if (outsideClickHandler) {
        document.removeEventListener("click", outsideClickHandler);
        outsideClickHandler = null;
      }
    }

    function openPanel() {
      wrap.classList.add("is-open");
      outsideClickHandler = (event) => {
        if (!wrap.isConnected) {
          document.removeEventListener("click", outsideClickHandler);
          outsideClickHandler = null;
          return;
        }
        if (!wrap.contains(event.target)) closePanel();
      };
      document.addEventListener("click", outsideClickHandler);
    }

    withClickAnimation(toggle, () => {
      if (wrap.classList.contains("is-open")) closePanel();
      else openPanel();
    });

    const panel = el("div", "toc-panel");
    const list = el("ul", "toc-list");
    headingRefs.forEach((ref) => {
      const li = el("li", "toc-list__item");
      li.appendChild(
        textButton(ref.text, null, "text-button--toc", () => {
          closePanel();
          const target = document.getElementById(ref.id);
          if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        })
      );
      list.appendChild(li);
    });
    panel.appendChild(list);

    wrap.appendChild(toggle);
    wrap.appendChild(panel);
    return wrap;
  }

  function renderArticle(partId, tabId, sectionIndex, itemIndex, articleIndex) {
    const ctx = getSectionsContext(partId, tabId);
    const section = ctx && ctx.sections[sectionIndex];
    const entry = section && section.items[itemIndex];
    const articles = entry && typeof entry === "object" ? entry.articles : null;
    const article = articles && articles[articleIndex];
    const view = el("div", "view view--article");

    if (!ctx || !section || !entry || !article) {
      view.appendChild(el("p", "empty-state", "Không tìm thấy bài viết này."));
      view.appendChild(renderBackFooter("Về bản đồ", () => goTo("#/")));
      return view;
    }

    view.appendChild(el("p", "detail-eyebrow", `${ctx.eyebrow} · ${section.title} · ${itemTitle(entry)}`));
    view.appendChild(el("h1", "detail-title", article.title));

    const headingRefs = [];
    const body = el("div", "article-body");
    renderArticleBody(body, article.body || [], headingRefs);
    view.appendChild(body);

    if (headingRefs.length > 0) {
      view.appendChild(renderArticleToc(headingRefs));
    }

    view.appendChild(
      renderBackFooter(itemTitle(entry), () =>
        goTo(`${ctx.basePath}/muc/${sectionIndex}/con/${itemIndex}`)
      )
    );

    return view;
  }

  function parseHash() {
    const hash = location.hash.replace(/^#\/?/, "");
    const segments = hash.split("/").filter(Boolean);
    // segments: [] | ["phan", id] | ["phan", id, "muc", idx] | ["phan", id, "muc", idx, "con", itemIdx]
    //   | ["phan", id, "tab", tabId] | ["phan", id, "tab", tabId, "muc", idx]
    //   | ["phan", id, "tab", tabId, "muc", idx, "con", itemIdx]
    if (segments[0] !== "phan" || !segments[1]) {
      return { view: "home" };
    }

    const partId = segments[1];

    if (segments[2] === "tab" && segments[3]) {
      const tabId = segments[3];
      if (
        segments[4] === "muc" &&
        segments[5] != null &&
        segments[6] === "con" &&
        segments[7] != null &&
        segments[8] === "bai" &&
        segments[9] != null
      ) {
        return {
          view: "article",
          partId,
          tabId,
          sectionIndex: Number(segments[5]),
          itemIndex: Number(segments[7]),
          articleIndex: Number(segments[9])
        };
      }
      if (segments[4] === "muc" && segments[5] != null && segments[6] === "con" && segments[7] != null) {
        return {
          view: "item",
          partId,
          tabId,
          sectionIndex: Number(segments[5]),
          itemIndex: Number(segments[7])
        };
      }
      if (segments[4] === "muc" && segments[5] != null) {
        return { view: "section", partId, tabId, sectionIndex: Number(segments[5]) };
      }
      return { view: "tab", partId, tabId };
    }

    if (
      segments[2] === "muc" &&
      segments[3] != null &&
      segments[4] === "con" &&
      segments[5] != null &&
      segments[6] === "bai" &&
      segments[7] != null
    ) {
      return {
        view: "article",
        partId,
        tabId: null,
        sectionIndex: Number(segments[3]),
        itemIndex: Number(segments[5]),
        articleIndex: Number(segments[7])
      };
    }
    if (segments[2] === "muc" && segments[3] != null && segments[4] === "con" && segments[5] != null) {
      return {
        view: "item",
        partId,
        tabId: null,
        sectionIndex: Number(segments[3]),
        itemIndex: Number(segments[5])
      };
    }
    if (segments[2] === "muc" && segments[3] != null) {
      return { view: "section", partId, tabId: null, sectionIndex: Number(segments[3]) };
    }

    return { view: "part", partId };
  }

  function render() {
    closeModal();
    const route = parseHash();
    let node;
    if (route.view === "part") {
      node = renderPart(route.partId);
    } else if (route.view === "tab") {
      node = renderTab(route.partId, route.tabId);
    } else if (route.view === "section") {
      node = renderSection(route.partId, route.tabId, route.sectionIndex);
    } else if (route.view === "item") {
      node = renderItem(route.partId, route.tabId, route.sectionIndex, route.itemIndex);
    } else if (route.view === "article") {
      node = renderArticle(
        route.partId,
        route.tabId,
        route.sectionIndex,
        route.itemIndex,
        route.articleIndex
      );
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
