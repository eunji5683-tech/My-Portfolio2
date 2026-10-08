/* ==========================================================================
   포트폴리오 2 - 움직이는 부분
   1) 카드를 눌렀을 때 가는 주소 정하기
   2) 코일(스프링) 그림 그리기
   3) 마우스를 따라 살짝 움직이는 깊이감
   ========================================================================== */

/* ---------- ★ 고치는 곳: 카드를 누르면 가는 주소 ----------
   github : 인터넷(GitHub)에 올려 둔 프로젝트 주소
   local  : 내 컴퓨터에서 바로 열어 볼 수 있는 파일 위치 (없으면 null)
   - 인터넷에 올린 진짜 사이트 주소(예: GitHub Pages)가 생기면 github 자리에 그 주소를 넣으세요. */
// ※ promo(홍보자동생성기)는 이 폴더 안의 promo.html 로 가요. 그 페이지 맨 아래에 GitHub 코드 보기 버튼이 있어요.
const PROJECTS = {
  promo: {
    github: "https://github.com/eunji5683-tech/auto-generate-app",
    local: null,                                  // 파이썬 도구라서 열어 볼 앱 화면이 없어요
    page: "promo.html"                            // 대신 이 폴더 안의 '결과물 소개 페이지'를 열어요 (어디서 열어도 돼요)
  },
  menu: {
    github: "https://github.com/eunji5683-tech/Menu-board-app",
    live: "https://eunji5683-tech.github.io/Menu-board-app/",       // 인터넷에서 바로 열리는 진짜 사이트 주소
    local: "../메뉴판/index.html"
  },
  stamp: {
    github: "https://github.com/eunji5683-tech/Stamp-plus-app",
    live: "https://eunji5683-tech.github.io/Stamp-plus-app/",      // 인터넷에서 바로 열리는 진짜 사이트 주소
    local: "../단골 적립 스탬프/index.html"
  }
};

/* true  = 내 컴퓨터에서 파일을 직접 열었을 때, 컴퓨터 안의 앱 화면을 바로 열어요 (옆에 다른 프로젝트 폴더가 있을 때만 돼요)
           인터넷 사이트로 열었을 때는 자동으로 위의 live(진짜 사이트) 주소로 가요. 오류가 나지 않아요.
   false = 항상 인터넷 주소(live 또는 GitHub)로 가요 */
const USE_LOCAL_LINKS = true;

/* ---------- 1) 카드 주소 넣기 ---------- */
const IS_FILE = location.protocol === "file:";    // 내 컴퓨터에서 파일을 직접 열었는지
document.querySelectorAll(".card[data-key]").forEach(card => {
  const p = PROJECTS[card.dataset.key];
  if (!p) return;
  if (p.page) {
    card.href = p.page;                           // 이 포트폴리오 안의 소개 페이지
    card.removeAttribute("target");               // 같은 창에서 열어요
  } else if (USE_LOCAL_LINKS && IS_FILE && p.local) {
    // 내 컴퓨터에서 파일을 직접 열었을 때만 컴퓨터 안의 화면으로 가요.
    // (인터넷 사이트로 열었을 때는 그런 폴더가 없어서 오류가 나기 때문이에요.)
    card.href = encodeURI(p.local);               // 한글과 띄어쓰기가 있어도 열리게 바꿔요
    card.removeAttribute("target");               // 같은 창에서 열어요
  } else {
    // 인터넷에서 열었을 때: 진짜 사이트 주소(live)가 있으면 그곳으로, 없으면 GitHub 저장소로 가요.
    card.href = p.live || p.github;
  }
});

/* ---------- 2) 코일(스프링) 그리기 ----------
   타원 모양 고리를 위아래로 겹쳐서 스프링처럼 보이게 해요.
   뒤쪽 줄기는 어둡게, 앞쪽 줄기는 밝게 그려서 입체감을 줘요. */
function buildCoil(el, colors) {
  const id = "coil" + Math.random().toString(36).slice(2, 7);
  const W = 240, H = 250, cx = 120, rx = 70, ry = 22, pitch = 27, turns = 7, top = 46;
  const L = cx - rx, R = cx + rx;
  let back = "", front = "", shine = "";

  for (let i = 0; i < turns; i++) {
    const y = top + i * pitch;
    // 뒤쪽 줄기: 오른쪽에서 왼쪽으로, 위를 지나 한 칸 아래로 이어져요
    // (맨 마지막 줄기는 아래로 삐져나가지 않게 그리지 않아요)
    if (i < turns - 1) back += `<path d="M${R} ${y} A${rx} ${ry} 0 0 0 ${L} ${y + pitch}" />`;
    // 앞쪽 줄기: 왼쪽에서 오른쪽으로, 아래를 지나가요
    front += `<path d="M${L} ${y} A${rx} ${ry} 0 0 0 ${R} ${y}" />`;
    // 앞쪽 줄기 위의 반짝이는 빛
    shine += `<path d="M${L + 14} ${y + 2} A${rx - 14} ${ry - 5} 0 0 0 ${R - 22} ${y + 3}" />`;
  }

  el.innerHTML = `
    <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="">
      <defs>
        <linearGradient id="${id}b" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="${colors[2]}"/>
          <stop offset="1" stop-color="${colors[1]}"/>
        </linearGradient>
        <linearGradient id="${id}f" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${colors[0]}"/>
          <stop offset="0.55" stop-color="${colors[1]}"/>
          <stop offset="1" stop-color="${colors[2]}"/>
        </linearGradient>
      </defs>
      <g transform="rotate(-9 ${cx} ${H / 2})" fill="none" stroke-linecap="round">
        <g stroke="url(#${id}b)" stroke-width="15" opacity="0.88">${back}</g>
        <g stroke="url(#${id}f)" stroke-width="17">${front}</g>
        <g stroke="#fff" stroke-opacity="0.55" stroke-width="3.2">${shine}</g>
      </g>
    </svg>`;
}

document.querySelectorAll("[data-coil]").forEach(el => {
  // [고치는 곳] 밝은색, 중간색, 어두운색 순서예요
  buildCoil(el, ["#BDF4FF", "#4AA8FF", "#6A3FE0"]);
});

/* ---------- 3) 마우스를 따라 살짝 움직이는 깊이감 ----------
   손가락으로 쓰는 화면(휴대폰)이나 '움직임 줄이기'를 켠 기기에서는 꺼요. */
const canMove = window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
                !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (canMove) {
  let raf = 0;
  window.addEventListener("pointermove", e => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      // 화면 가운데를 0, 양 끝을 -1 ~ 1 로 계산해요
      const px = (e.clientX / window.innerWidth - 0.5) * 2;
      const py = (e.clientY / window.innerHeight - 0.5) * 2;
      document.querySelectorAll(".stage").forEach(s => {
        s.style.setProperty("--px", px.toFixed(3));
        s.style.setProperty("--py", py.toFixed(3));
      });
    });
  });

  // 카드 위에 마우스를 올리면 카드가 살짝 기울어져요
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("pointermove", e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.setProperty("--ry", (x * 7).toFixed(2) + "deg");
      card.style.setProperty("--rx", (-y * 7).toFixed(2) + "deg");
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });
  });
}
