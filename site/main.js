// MeepLab.gg landing: language (English / Spanish), the night sky over Targon, and the download button.

const I18N = {
  en: {
    "nav.lab": "The Lab", "nav.clash": "Clash", "nav.faq": "FAQ", "nav.download": "Download",
    "hero.eyebrow": "✦ A League of Legends lab · macOS & Windows",
    "hero.title": 'Read the draft<br>like the <span class="glow">stars</span> do.',
    "hero.lead": "MeepLab.gg watches your champ select and tells you what the draft really says: your team's odds, the picks that fit, the bans that hurt them, who swapped lanes, and a plan for the game. Free, local, and it updates itself.",
    "card.favored": "FAVORED", "card.level": "Level", "card.comfort": "Comfort", "card.early": "Early", "card.mid": "Mid", "card.late": "Late",
    "card.swap": "⇄ SWAP · Gwen top, Smolder bot",
    "lab.title": "Inside the Lab",
    "lab.lead": "Everything is computed on your computer from the League client itself and public meta data. No AI, no accounts, nothing about you is sent anywhere.",
    "f1.t": "The draft's real odds", "f1.d": "Your team's win chance from millions of high-elo games, corrected by your own results. Early, mid and late game strength at a glance.",
    "f2.t": "Picks and bans that fit", "f2.d": "The best champions for this exact draft, your own pool first. Click one to show it to your team, click again to lock it in.",
    "f3.t": "Lane swaps and flex picks", "f3.d": "Spots the enemy player who went to a lane they never play, and who took theirs, before the loading screen does.",
    "f4.t": "A plan for the game", "f4.d": "When your draft wins, what to watch in your lane and the right summoner spells, shown before the game starts.",
    "f5.t": "A clean overlay", "f5.d": "Lanes, your build and the next item, Baron and Elder timers. Facts only, the way Riot's rules want it.",
    "f6.t": "Learns from every game", "f6.d": "After each game it shows what decided it, minute by minute, and tunes itself to how you actually play.",
    "clash.title": "Clash, scouted",
    "clash.lead": "Your next opponent's pools before champ select: what each player mains, their rank, how they've played lately, and the bans that take their comfort picks away.",
    "clash.t1": "Ranks as Riot shows them, both teams", "clash.t2": "Ban priority that updates as picks lock",
    "clash.t3": "Each teammate's best pick from their own pool", "clash.t4": "Every Clash day saved: bracket, results and scouting",
    "cc.ban": "Ban first", "cc.sub": "their comfort picks", "cc.r1": "Top · 54 games, 63% won", "cc.r2": "Jungle · 31 games, 58% won",
    "cc.r3": "Mid · 22 games · lately 6 of 20", "cc.foot": "FAVORED · 57%",
    "faq.title": "Questions from the summit",
    "q1": "Is it allowed?", "a1": "MeepLab.gg only reads what the League client and the game already show you, through Riot's own local interfaces. It doesn't read the game's memory, doesn't track enemy cooldowns and never tells you what to do mid-game.",
    "q2": "Do I need an account or an API key?", "a2": "No. Open League and MeepLab.gg connects on its own and imports your recent games. A Riot API key is optional, only to import older games.",
    "q3": "How do updates work?", "a3": "The app checks for new versions every few hours and installs them by itself. Every update is signed and checked before it's installed. Want to try new things first? Turn on \"Get beta versions\" in Settings → Updates.",
    "q4": "macOS says it can't check the app", "a4": "MeepLab.gg isn't sold on the App Store. The first time, open it once, then go to System Settings → Privacy & Security and click Open Anyway. After that it opens normally and updates itself.",
    "q5": "Windows shows \"Windows protected your PC\"", "a5": "That's SmartScreen for new apps. Click \"More info\", then \"Run anyway\". It's a single portable file: no installer, nothing else to set up.",
    "final.title": "Ready when the stars align.", "final.free": "Free",
    "footer.versions": "All versions",
    "footer.legal": "MeepLab.gg isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.",
    "dl.generic": "Download MeepLab.gg", "dl.for": "Download for {os}", "dl.free": "Free · macOS and Windows",
    "dl.anyOs": "For macOS and Windows computers", "dl.otherNote": "MeepLab.gg runs on a Mac or a Windows PC, next to the League client.",
    "dl.soon": "{os} version coming soon", "dl.follow": "Follow the releases", "dl.all": "All versions",
    "dl.macReq": "macOS 15+, Apple Silicon & Intel", "dl.winReq": "Windows 10 and 11", "dl.beta": "beta",
    "dl.macDmg": "Open the .dmg and drag MeepLab.gg to Applications. The first time you open the app, go to System Settings → Privacy & Security and click Open Anyway.",
    "dl.macZip": "Unzip it and move MeepLab.gg to Applications. The first time you open the app, go to System Settings → Privacy & Security and click Open Anyway.",
    "dl.win": "One portable file, no installer. If SmartScreen appears: More info → Run anyway.",
    "dl.tryBeta": "Want the newest? <a href=\"{url}\">Try the beta {v}</a>, then turn on \"Get beta versions\" in Settings → Updates.",
  },
  es: {
    "nav.lab": "El Lab", "nav.clash": "Clash", "nav.faq": "Preguntas", "nav.download": "Descargar",
    "hero.eyebrow": "✦ Un laboratorio de League of Legends · macOS y Windows",
    "hero.title": 'Lee el draft<br>como lo leen las <span class="glow">estrellas</span>.',
    "hero.lead": "MeepLab.gg mira tu selección de campeones y te dice lo que el draft dice de verdad: las probabilidades de tu equipo, los picks que encajan, los bans que más les duelen, quién cambió de línea y un plan para la partida. Gratis, en tu computador, y se actualiza solo.",
    "card.favored": "FAVORITO", "card.level": "Nivel", "card.comfort": "Comodidad", "card.early": "Inicio", "card.mid": "Medio", "card.late": "Final",
    "card.swap": "⇄ CAMBIO · Gwen top, Smolder bot",
    "lab.title": "Dentro del Lab",
    "lab.lead": "Todo se calcula en tu computador, con el cliente de League y datos públicos del meta. Sin IA, sin cuentas, nada tuyo sale de tu equipo.",
    "f1.t": "Las probabilidades reales", "f1.d": "La probabilidad de ganar de tu equipo según millones de partidas de elo alto, ajustada con tus propios resultados. La fuerza al inicio, en el medio y al final, de un vistazo.",
    "f2.t": "Picks y bans que encajan", "f2.d": "Los mejores campeones para este draft exacto, primero los de tu pool. Un clic para mostrárselo a tu equipo, otro clic para fijarlo.",
    "f3.t": "Cambios de línea y flex", "f3.d": "Detecta al rival que se fue a una línea que nunca juega, y a quién tomó la suya, antes que la pantalla de carga.",
    "f4.t": "Un plan para la partida", "f4.d": "Cuando tu draft gana: qué vigilar en tu línea y los hechizos correctos, antes de que empiece la partida.",
    "f5.t": "Un overlay limpio", "f5.d": "Líneas, tu build y el siguiente objeto, tiempos de Barón y Anciano. Solo datos, como lo piden las reglas de Riot.",
    "f6.t": "Aprende de cada partida", "f6.d": "Después de cada partida te muestra qué la decidió, minuto a minuto, y se ajusta a cómo juegas de verdad.",
    "clash.title": "Clash, explorado",
    "clash.lead": "Los campeones de tu próximo rival antes de la selección: qué mainea cada jugador, su rango, cómo ha jugado últimamente y los bans que le quitan sus picks de confianza.",
    "clash.t1": "Rangos como los muestra Riot, de ambos equipos", "clash.t2": "Prioridad de bans que cambia con cada pick",
    "clash.t3": "El mejor pick de cada compañero, de su propio pool", "clash.t4": "Cada día de Clash guardado: llave, resultados y exploración",
    "cc.ban": "Banea primero", "cc.sub": "sus picks de confianza", "cc.r1": "Top · 54 partidas, 63% ganadas", "cc.r2": "Jungla · 31 partidas, 58% ganadas",
    "cc.r3": "Mid · 22 partidas · últimamente 6 de 20", "cc.foot": "FAVORITO · 57%",
    "faq.title": "Preguntas desde la cima",
    "q1": "¿Está permitido?", "a1": "MeepLab.gg solo lee lo que el cliente de League y el juego ya te muestran, por las interfaces locales de Riot. No lee la memoria del juego, no cuenta los tiempos de los rivales y nunca te dice qué hacer durante la partida.",
    "q2": "¿Necesito una cuenta o una API key?", "a2": "No. Abre League y MeepLab.gg se conecta solo e importa tus partidas recientes. La API key de Riot es opcional, solo para importar partidas más antiguas.",
    "q3": "¿Cómo se actualiza?", "a3": "La app busca versiones nuevas cada pocas horas y las instala sola. Cada actualización viene firmada y se verifica antes de instalarse. ¿Quieres probar lo nuevo primero? Activa \"Get beta versions\" en Settings → Updates.",
    "q4": "macOS dice que no puede verificar la app", "a4": "MeepLab.gg no se vende en la App Store. La primera vez, ábrela una vez y luego ve a Ajustes del Sistema → Privacidad y seguridad y pulsa \"Abrir igualmente\". Después abre normal y se actualiza sola.",
    "q5": "Windows muestra \"Windows protegió su PC\"", "a5": "Es SmartScreen con las apps nuevas. Pulsa \"Más información\" y luego \"Ejecutar de todas formas\". Es un solo archivo portable: sin instalador, nada más que configurar.",
    "final.title": "Lista cuando se alineen las estrellas.", "final.free": "Gratis",
    "footer.versions": "Todas las versiones",
    "footer.legal": "MeepLab.gg no está respaldado por Riot Games y no refleja las opiniones de Riot Games ni de nadie oficialmente involucrado en producir o administrar las propiedades de Riot Games. Riot Games y todas las propiedades asociadas son marcas comerciales o marcas registradas de Riot Games, Inc.",
    "dl.generic": "Descargar MeepLab.gg", "dl.for": "Descargar para {os}", "dl.free": "Gratis · macOS y Windows",
    "dl.anyOs": "Para computadores con macOS y Windows", "dl.otherNote": "MeepLab.gg funciona en un Mac o un PC con Windows, junto al cliente de League.",
    "dl.soon": "Versión para {os} muy pronto", "dl.follow": "Sigue las versiones", "dl.all": "Todas las versiones",
    "dl.macReq": "macOS 15+, Apple Silicon e Intel", "dl.winReq": "Windows 10 y 11", "dl.beta": "beta",
    "dl.macDmg": "Abre el .dmg y arrastra MeepLab.gg a Aplicaciones. La primera vez que abras la app, ve a Ajustes del Sistema → Privacidad y seguridad y pulsa \"Abrir igualmente\".",
    "dl.macZip": "Descomprímelo y mueve MeepLab.gg a Aplicaciones. La primera vez que abras la app, ve a Ajustes del Sistema → Privacidad y seguridad y pulsa \"Abrir igualmente\".",
    "dl.win": "Un solo archivo portable, sin instalador. Si aparece SmartScreen: Más información → Ejecutar de todas formas.",
    "dl.tryBeta": "¿Quieres lo más nuevo? <a href=\"{url}\">Prueba la beta {v}</a> y activa \"Get beta versions\" en Settings → Updates.",
  },
};

let lang = localStorage.getItem("lang") || ((navigator.language || "en").toLowerCase().startsWith("es") ? "es" : "en");
const t = (key, vars = {}) => (I18N[lang][key] ?? I18N.en[key] ?? key).replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "");
const onLang = [];

function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
  document.querySelectorAll("[data-i18n-html]").forEach((el) => (el.innerHTML = t(el.dataset.i18nHtml)));
  document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  onLang.forEach((f) => f());
}
document.querySelectorAll(".lang button").forEach((b) =>
  b.addEventListener("click", () => {
    lang = b.dataset.lang;
    localStorage.setItem("lang", lang);
    applyLang();
  })
);
applyLang();

// The sky: twinkling stars, constellations that slowly breathe, comets, and starlight rising from the summit.
(() => {
  const canvas = document.getElementById("sky");
  const ctx = canvas.getContext("2d");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let W = 0, H = 0, stars = [], groups = [], comets = [], motes = [], last = 0, nextComet = 1500;
  const rnd = (a, b) => a + Math.random() * (b - a);

  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    stars = Array.from({ length: Math.round((W * H) / 3600) }, () => ({
      x: rnd(0, W), y: rnd(0, H), r: Math.random() ** 2 * 1.6 + 0.25, p: rnd(0, 6.3), s: rnd(0.4, 1.8), gold: Math.random() < 0.14,
    }));
    // Constellations spread on a loose grid so they don't pile up.
    groups = [];
    const cols = Math.max(3, Math.round(W / 360)), rows = Math.max(2, Math.round(H / 320));
    for (let c = 0; c < cols; c++)
      for (let r = 0; r < rows; r++) {
        if (Math.random() < 0.35) continue;
        const cx = ((c + rnd(0.2, 0.8)) * W) / cols, cy = ((r + rnd(0.2, 0.8)) * H) / rows;
        let x = cx, y = cy;
        const pts = [[x, y]];
        for (let i = 0; i < 3 + Math.floor(rnd(0, 4)); i++) {
          const a = rnd(0, 6.3), d = rnd(40, 95);
          x += Math.cos(a) * d; y += Math.sin(a) * d * 0.7;
          pts.push([x, y]);
        }
        groups.push({ pts, p: rnd(0, 6.3), s: rnd(0.15, 0.35) });
      }
  }

  function comet() {
    const fromLeft = Math.random() < 0.5;
    const x = fromLeft ? rnd(-100, W * 0.5) : rnd(W * 0.5, W + 100);
    const speed = rnd(0.7, 1.2);
    comets.push({ x, y: rnd(-40, H * 0.35), vx: (fromLeft ? 1 : -1) * speed, vy: speed * rnd(0.35, 0.6), life: 0, max: rnd(900, 1500), len: rnd(120, 220) });
  }

  function draw(now) {
    const dt = Math.min(64, now - (last || now));
    last = now;
    ctx.clearRect(0, 0, W, H);
    const tt = now / 1000;

    for (const g of groups) {
      const a = 0.08 + 0.12 * (0.5 + 0.5 * Math.sin(g.p + tt * g.s));
      ctx.strokeStyle = `rgba(205,184,255,${a})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      g.pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
      ctx.stroke();
      g.pts.forEach(([x, y], i) => {
        ctx.fillStyle = `rgba(255,217,138,${0.55 + a})`;
        ctx.beginPath();
        ctx.arc(x, y, i === 0 ? 2.4 : 1.7, 0, 6.3);
        ctx.fill();
      });
    }

    for (const s of stars) {
      const a = reduce ? 0.7 : 0.25 + 0.75 * Math.abs(Math.sin(s.p + tt * s.s));
      ctx.fillStyle = s.gold ? `rgba(255,217,138,${a})` : `rgba(236,231,255,${a})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, 6.3);
      ctx.fill();
      if (s.r > 1.4 && a > 0.85) {
        ctx.strokeStyle = `rgba(255,241,201,${(a - 0.85) * 3})`;
        ctx.beginPath();
        ctx.moveTo(s.x - 6, s.y); ctx.lineTo(s.x + 6, s.y);
        ctx.moveTo(s.x, s.y - 6); ctx.lineTo(s.x, s.y + 6);
        ctx.stroke();
      }
    }

    if (!reduce) {
      nextComet -= dt;
      if (nextComet <= 0) { comet(); nextComet = rnd(2500, 6000); }
      comets = comets.filter((c) => c.life < c.max);
      for (const c of comets) {
        c.life += dt; c.x += c.vx * dt; c.y += c.vy * dt;
        const fade = Math.sin((c.life / c.max) * Math.PI);
        const n = Math.hypot(c.vx, c.vy), tx = c.x - (c.vx / n) * c.len, ty = c.y - (c.vy / n) * c.len;
        const grad = ctx.createLinearGradient(c.x, c.y, tx, ty);
        grad.addColorStop(0, `rgba(255,246,218,${0.95 * fade})`);
        grad.addColorStop(0.3, `rgba(255,217,138,${0.45 * fade})`);
        grad.addColorStop(1, "rgba(180,140,255,0)");
        ctx.strokeStyle = grad; ctx.lineWidth = 2; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(c.x, c.y); ctx.lineTo(tx, ty); ctx.stroke();
        ctx.fillStyle = `rgba(255,250,235,${fade})`;
        ctx.beginPath(); ctx.arc(c.x, c.y, 2.2, 0, 6.3); ctx.fill();
      }

      // Starlight motes drift up from the summit while the hero is on screen.
      if (scrollY < H && motes.length < 70 && Math.random() < 0.5)
        motes.push({ x: W / 2 + rnd(-W * 0.18, W * 0.18), y: H + rnd(0, 30) - scrollY * 0.2, vy: rnd(0.02, 0.06), vx: rnd(-0.01, 0.01), r: rnd(0.6, 2), life: 0, max: rnd(5000, 9000) });
      motes = motes.filter((m) => m.life < m.max);
      for (const m of motes) {
        m.life += dt; m.y -= m.vy * dt; m.x += m.vx * dt + Math.sin((m.life + m.x) / 600) * 0.15;
        const a = Math.sin((m.life / m.max) * Math.PI) * 0.8;
        ctx.fillStyle = `rgba(255,226,150,${a})`;
        ctx.beginPath(); ctx.arc(m.x, m.y, m.r, 0, 6.3); ctx.fill();
      }
      requestAnimationFrame(draw);
    }
  }
  addEventListener("resize", resize);
  resize();
  requestAnimationFrame(draw);
})();

// Download button: the newest stable release for the visitor's system (the .dmg on macOS, the .exe on Windows),
// and the newest beta when it's newer.
(async () => {
  const REPO = "13rianVargas/MeepLab.gg";
  const page = `https://github.com/${REPO}/releases`;
  const ua = navigator.userAgent;
  const os = /Mac/i.test(navigator.platform) || /Mac OS X/.test(ua) ? "mac" : /Win/i.test(navigator.platform) || /Windows/.test(ua) ? "windows" : "other";
  const $ = (id) => document.getElementById(id);
  const names = { mac: "macOS", windows: "Windows" };

  const pick = (assets, kind) =>
    kind === "mac"
      ? assets.find((a) => a.name === "MeepLab.gg-macOS.dmg") || assets.find((a) => /macOS\.dmg$/i.test(a.name)) ||
        assets.find((a) => a.name === "MeepLab.gg-macOS.zip") || assets.find((a) => /macOS\.zip$/i.test(a.name))
      : assets.find((a) => a.name === "MeepLab.gg-Windows.exe") || assets.find((a) => /\.exe$/i.test(a.name));

  let latest = null, beta = null;
  try {
    const r = await fetch(`https://api.github.com/repos/${REPO}/releases?per_page=15`);
    const list = (r.ok ? await r.json() : []).filter((x) => !x.draft && /^v\d/.test(x.tag_name));
    latest = list.find((x) => !x.prerelease) || null;
    beta = list.find((x) => x.prerelease) || null;
    if (beta && latest && new Date(beta.published_at) < new Date(latest.published_at)) beta = null;
  } catch (e) {}

  const link = (kind) => {
    const stable = latest && pick(latest.assets, kind);
    if (stable) return { url: stable.browser_download_url, version: latest.tag_name, beta: false };
    const b = beta && pick(beta.assets, kind);
    if (b) return { url: b.browser_download_url, version: beta.tag_name, beta: true };
    return null;
  };

  function render() {
    const main = $("dl-main"), other = $("dl-other"), note = $("dl-note"), finalBtn = $("dl-final"), betaNote = $("dl-beta");
    betaNote.hidden = true;
    if (os === "other") {
      $("dl-label").textContent = t("dl.generic");
      $("dl-sub").textContent = t("dl.anyOs");
      $("dl-final-label").textContent = t("dl.generic");
      main.href = finalBtn.href = page;
      other.style.display = "none";
      note.textContent = t("dl.otherNote");
      return;
    }
    const mine = link(os), theirsKind = os === "mac" ? "windows" : "mac", theirs = link(theirsKind);
    $("dl-icon").textContent = os === "mac" ? "✦" : "⊞";
    if (mine) {
      $("dl-label").textContent = $("dl-final-label").textContent = t("dl.for", { os: names[os] });
      $("dl-sub").textContent = `${mine.version}${mine.beta ? " · " + t("dl.beta") : ""} · ${t(os === "mac" ? "dl.macReq" : "dl.winReq")}`;
      main.href = finalBtn.href = mine.url;
      note.textContent = os === "mac" ? t(mine.url.endsWith(".dmg") ? "dl.macDmg" : "dl.macZip") : t("dl.win");
      const b = beta && !mine.beta && pick(beta.assets, os);
      if (b) {
        betaNote.innerHTML = t("dl.tryBeta", { url: b.browser_download_url, v: beta.tag_name });
        betaNote.hidden = false;
      }
    } else {
      $("dl-label").textContent = $("dl-final-label").textContent = t("dl.soon", { os: names[os] });
      $("dl-sub").textContent = t("dl.follow");
      main.href = finalBtn.href = page;
      note.textContent = "";
    }
    other.textContent = theirs ? t("dl.for", { os: names[theirsKind] }) : t("dl.all");
    other.href = theirs ? theirs.url : page;
  }
  onLang.push(render);
  render();
})();
