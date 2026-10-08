/* ==========================================================================
   홍보자동생성기 소개 페이지 - 움직이는 부분
   1) 문구 보여주기 (느낌 3가지 × 채널 3가지)
   2) 복사하기 버튼
   3) 사진 크게 보기
   ========================================================================== */

/* ---------- ★ 고치는 곳: 만들어진 문구 ----------
   홍보자동화 프로그램이 만들어 준 문구(홍보문구.txt)를 그대로 옮겨 놓았어요.
   글자를 바꾸고 싶으면 따옴표(백틱 ` `) 안의 글자만 고치세요. */
const STYLES = [
  {
    name: "감성형",
    items: [
      {
        channel: "인스타그램",
        text: `흑임자를 직접 갈아서 라떼를 만들어봤습니다.

생각보다 고소하고, 많이 달지는 않습니다.

오전 11시 전에 오시면 아메리카노도 500원 할인해드립니다.

#광주카페 #북구카페 #비엔날레지구카페 #광주커피 #스페셜티커피 #로스터리카페 #흑임자라떼 #아메리카노 #광주흑임자라떼 #북구맛집`
      },
      {
        channel: "네이버 블로그",
        text: `브릿지 커피는 광주 북구 비엔날레 지구에 있는 작은 카페입니다. 원두는 매장에서 직접 로스팅합니다. 손이 많이 가는 일이지만, 그래야 저희가 원하는 맛이 나옵니다. 이번 주에는 국산 흑임자를 직접 갈아 넣은 라떼를 새로 만들어봤습니다. 많이 달지 않고 고소한 쪽에 가깝습니다. 조용히 앉아서 쉴 수 있는 1인석도 몇 자리 마련해두었습니다. 오전 11시 이전에 방문해주시면 아메리카노는 500원 할인해드립니다. 잠깐 들러 쉬었다 가셔도 좋을 것 같습니다.`
      },
      {
        channel: "카카오톡 단골 공지",
        text: `안녕하세요, 브릿지 커피입니다.
흑임자 라떼를 새로 만들어봤습니다.
오전 11시 전엔 아메리카노도 500원 할인해드립니다.`
      }
    ]
  },
  {
    name: "정보형",
    items: [
      {
        channel: "인스타그램",
        text: `이번 주 소식입니다.

신메뉴 흑임자 라떼, 5,500원입니다.
국산 흑임자를 직접 갈아 넣었습니다.

오전 11시 이전 방문 시 아메리카노 500원 할인됩니다.

위치는 광주 북구 비엔날레 지구입니다.

#광주카페 #북구카페 #비엔날레지구카페 #광주커피 #스페셜티커피 #로스터리카페 #흑임자라떼 #아메리카노 #광주흑임자라떼 #북구맛집`
      },
      {
        channel: "네이버 블로그",
        text: `브릿지 커피 이번 주 소식을 전해드립니다. 신메뉴로 흑임자 라떼를 새로 만들었습니다. 국산 흑임자를 매장에서 직접 갈아 넣었고, 가격은 5,500원입니다. 많이 달지 않고 고소한 맛에 가깝습니다. 오전 11시 이전에 방문해주시는 분들께는 아메리카노를 500원 할인해드리고 있습니다. 매장은 광주 북구 비엔날레 지구에 있습니다. 조용히 앉아 계실 수 있는 1인석도 넉넉히 마련해두었습니다. 편하게 들러주시기 바랍니다.`
      },
      {
        channel: "카카오톡 단골 공지",
        text: `안녕하세요, 브릿지 커피입니다.
신메뉴 흑임자 라떼(5,500원)를 출시했습니다.
오전 11시 이전 방문 시 아메리카노 500원 할인됩니다.`
      }
    ]
  },
  {
    name: "이벤트형",
    items: [
      {
        channel: "인스타그램",
        text: `오전 11시 이전 방문 시 아메리카노를 500원 할인해드립니다.

이번 주 새로 나온 흑임자 라떼(5,500원)도 함께 안내드립니다.

조용히 쉬다 가기 좋은 1인석도 마련되어 있습니다.

#광주카페 #북구카페 #비엔날레지구카페 #광주커피 #스페셜티커피 #로스터리카페 #흑임자라떼 #아메리카노 #광주흑임자라떼 #북구맛집`
      },
      {
        channel: "네이버 블로그",
        text: `이번 주 브릿지 커피에서 작은 할인을 진행합니다. 오전 11시 이전에 방문해주시는 분들께는 아메리카노를 500원 할인해드리고 있습니다. 큰 혜택은 아니지만, 이른 오전에 들르시는 분들께 도움이 되었으면 하는 마음으로 준비했습니다. 함께 이번 주에 새로 나온 흑임자 라떼(5,500원)도 안내드립니다. 국산 흑임자를 직접 갈아 넣어 고소한 맛을 냈습니다. 매장은 광주 북구 비엔날레 지구에 있고, 조용히 앉아 쉬실 수 있는 1인석도 마련되어 있습니다. 편하게 들러주시기 바랍니다.`
      },
      {
        channel: "카카오톡 단골 공지",
        text: `안녕하세요, 브릿지 커피입니다.
오전 11시 이전 방문 시 아메리카노 500원 할인해드립니다.
신메뉴 흑임자 라떼(5,500원)도 함께 안내드립니다.`
      }
    ]
  }
];

const segEl = document.getElementById("seg");
const copiesEl = document.getElementById("copies");

/* ---------- 1) 문구 보여주기 ---------- */
function showStyle(index) {
  copiesEl.innerHTML = "";

  STYLES[index].items.forEach(item => {
    const card = document.createElement("article");
    card.className = "copy-card";

    const head = document.createElement("div");
    head.className = "copy-head";

    const label = document.createElement("span");
    label.className = "copy-label";
    label.textContent = item.channel;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "copy-btn";
    btn.textContent = "복사하기";
    btn.addEventListener("click", () => copyText(item.text, btn));

    head.append(label, btn);

    const body = document.createElement("p");
    body.className = "copy-text";
    // 줄바꿈은 CSS(white-space: pre-line)가 살려 줘요.
    // 해시태그(#광주카페)는 한 덩어리로 묶어서, '#'만 윗줄에 남는 일이 없게 해요.
    item.text.split("\n").forEach((line, i, all) => {
      if (line.startsWith("#")) {
        line.split(" ").forEach((tag, j) => {
          if (j > 0) body.append(" ");
          const chip = document.createElement("span");
          chip.className = "hash";
          chip.textContent = tag;
          body.appendChild(chip);
        });
      } else {
        body.append(line);
      }
      if (i < all.length - 1) body.append("\n");
    });

    card.append(head, body);
    copiesEl.appendChild(card);
  });

  segEl.querySelectorAll("button").forEach((b, i) => {
    b.classList.toggle("active", i === index);
    b.setAttribute("aria-selected", i === index ? "true" : "false");
  });
}

STYLES.forEach((s, i) => {
  const b = document.createElement("button");
  b.type = "button";
  b.setAttribute("role", "tab");
  b.textContent = s.name;
  b.addEventListener("click", () => showStyle(i));
  segEl.appendChild(b);
});
showStyle(0);

/* ---------- 2) 복사하기 ---------- */
async function copyText(text, btn) {
  let done = false;
  try {
    await navigator.clipboard.writeText(text);
    done = true;
  } catch (e) {
    // 복사 기능을 막아 둔 환경(파일로 직접 열기 등)에서는 예전 방식으로 한 번 더 시도해요
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.cssText = "position:fixed;opacity:0;";
    document.body.appendChild(ta);
    ta.select();
    try { done = document.execCommand("copy"); } catch (e2) {}
    ta.remove();
  }
  const old = "복사하기";
  btn.textContent = done ? "복사했어요 ✓" : "복사가 안 됐어요";
  btn.classList.toggle("done", done);
  setTimeout(() => { btn.textContent = old; btn.classList.remove("done"); }, 1800);
}

/* ---------- 3) 사진 크게 보기 ---------- */
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");

document.querySelectorAll(".shot").forEach(btn => {
  btn.addEventListener("click", () => {
    viewerImg.src = btn.dataset.src;
    viewerImg.alt = btn.querySelector("img").alt;
    if (typeof viewer.showModal === "function") viewer.showModal();
    else window.open(btn.dataset.src, "_blank");
  });
});
document.getElementById("viewerClose").addEventListener("click", () => viewer.close());
// 어두운 바깥을 눌러도 닫혀요
viewer.addEventListener("click", e => { if (e.target === viewer) viewer.close(); });
