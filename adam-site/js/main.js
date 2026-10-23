/* Shared behavior for every page. Content lives in js/data.js. */
(function () {
  const $ = (s) => document.querySelector(s);
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const here = location.pathname.split("/").pop() || "index.html";

  // Header
  $("#site-header").innerHTML =
    `<nav><a class="logo" href="index.html">${esc(SITE.name)}</a><ul>` +
      NAV.map((n) => `<li><a class="l${n.href === here ? " on" : ""}" style="--c:var(${n.color})" href="${n.href}"${n.href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${esc(n.label)}</a></li>`).join("") +
    `</ul></nav>`;

  // Sponsor banner (list is repeated twice for a seamless loop)
  const item = (s, dup) =>
    `<li${dup ? ' class="dup" aria-hidden="true"' : ""}><a href="${esc(s.url)}" ${dup ? 'tabindex="-1"' : ""} target="_blank" rel="noopener">` +
    (s.logo ? `<img src="${esc(s.logo)}" alt="${esc(s.name)}">` : esc(s.name)) + `</a></li>`;
  const sp = $("#sponsors");
  if (sp && SPONSORS.length) {
    sp.innerHTML = `<h2>Thank you to our sponsors</h2><div class="marquee"><ul class="track" id="track">` +
      SPONSORS.map((s) => item(s, false)).join("") + SPONSORS.map((s) => item(s, true)).join("") + `</ul></div>`;
    const t = $("#track");
    t.style.setProperty("--dur", Math.max(10, (t.scrollWidth / 2) / SPONSOR_SPEED) + "s");
  }

  // Footer
  $("#site-footer").textContent = SITE.footer;

  // Home: contour lines
  const topo = $("#topo");
  if (topo) {
    let d = "";
    [[260, 260, 9], [900, 200, 7], [1000, 640, 8], [220, 640, 6]].forEach(([cx, cy, n], k) => {
      for (let i = 1; i <= n; i++) {
        const r = i * 34 + 10, pts = [];
        for (let a = 0; a <= 64; a++) {
          const t = (a / 64) * 6.2832, w = 1 + 0.22 * Math.sin(3 * t + k + i * 0.12) + 0.12 * Math.sin(5 * t + k * 2);
          pts.push((cx + Math.cos(t) * r * w * 1.3).toFixed(1) + " " + (cy + Math.sin(t) * r * w).toFixed(1));
        }
        d += `<path pathLength="1" style="animation-delay:${(k * 0.25 + i * 0.08).toFixed(2)}s" d="M${pts.join("L")}Z"/>`;
      }
    });
    topo.innerHTML = d;
  }

  // Project: parts list
  const pl = $("#plist"), pd = $("#pdetail");
  if (pl && pd) {
    const pick = (i) => {
      const p = PARTS[i];
      pd.style.setProperty("--c", `var(${p.color})`);
      pd.innerHTML = `<h3>${esc(p.name)}</h3><p>${esc(p.text)}</p><small>${esc(p.detail)}</small>`;
      [...pl.children].forEach((b, j) => b.setAttribute("aria-selected", j === i));
    };
    PARTS.forEach((p, i) => {
      const b = document.createElement("button");
      b.setAttribute("role", "tab");
      b.textContent = p.name;
      b.style.setProperty("--c", `var(${p.color})`);
      b.onclick = () => pick(i);
      pl.appendChild(b);
    });
    pick(3);
  }

  // Design log
  const log = $("#log-list");
  if (log) log.innerHTML = LOG.map((e) => `<li><time>${esc(e.date)}</time><h3>${esc(e.title)}</h3><p>${esc(e.text)}</p></li>`).join("");

  // About
  const team = $("#team-grid");
  if (team) team.innerHTML = TEAM.map((m) =>
    `<div class="person" style="--c:var(${m.color})"><div class="ph">${m.photo ? `<img src="${esc(m.photo)}" alt="${esc(m.name)}">` : esc(m.name.charAt(0))}</div><h3>${esc(m.name)}</h3><p>${esc(m.role)}</p></div>`).join("");

  // Contact
  const mail = $("#mail");
  if (mail) { mail.href = "mailto:" + SITE.email; mail.textContent = SITE.email; }
})();
