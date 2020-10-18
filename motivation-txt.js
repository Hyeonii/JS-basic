const txt = document.querySelector("h3");

const TXT_NUMBER = 10;

const motivationTxt = new Array(10);

motivationTxt[0] = `그냥 해보자`;
motivationTxt[1] = `지친 직장인과 미친 직장인은 종이 한 장 차이`;
motivationTxt[2] = `밥은 먹고 다니냐`;
motivationTxt[3] = `잠이 안 오면 그냥 불 켜고 하던 일을 하라`;
motivationTxt[4] = `실수한 나에게 박수 세 번 👏🏼👏🏼👏🏼`;
motivationTxt[5] = ` 🤸🏼‍♀️ 잠시 스트레칭 타임 🧘🏽‍♀️`;
motivationTxt[6] = `무슨 영화 좋아하세요? 저는 부귀영화요`;
motivationTxt[7] = `아프리카 청추니다`;
motivationTxt[8] = `순간이 시간이 되고, 시간이 세월이 되고, 세월이 추억이 된다 `;
motivationTxt[9] = `하면 어찌저찌 된다`;

function paintTXT(randomNum) {
  const randomTxt = motivationTxt[randomNum];
  txt.innerText = randomTxt;
}

function getRandom() {
  const randomNum = Math.floor(Math.random() * TXT_NUMBER);
  return randomNum;
}

function init() {
  const randomNum = getRandom();
  paintTXT(randomNum);
}

init();
