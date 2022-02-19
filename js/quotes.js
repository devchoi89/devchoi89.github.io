const quotes = [
  {
    quote:
      '"지금 공부 안하면 더울 때 더운 데서 일하고 추울 때 추운 데서 일한다."',
    author: "- 박명수 -",
  },
  {
    quote: '"늦었다고 생각할 때가 늦었다."',
    author: "- 박명수 -",
  },
  {
    quote: '"“내 너 그럴 줄 알았다” 알았으면 제발 미리 말 해줘라."',
    author: "- 박명수 -",
  },
  {
    quote: '"어려운 길은 길이 아니다."',
    author: "- 박명수 -",
  },
  {
    quote: '"즐길 수 없으면 피하라."',
    author: "- 박명수 -",
  },
  {
    quote: '"성공은 1% 재능과 99%의 빽."',
    author: "- 박명수 -",
  },
  {
    quote: '"가는 말이 고우면 얕본다."',
    author: "- 박명수 -",
  },
  {
    quote: '"고생 끝에 골병 난다."',
    author: "- 박명수 -",
  },
  {
    quote: '"참을 인 세 번이면 호구."',
    author: "- 박명수 -",
  },
  {
    quote: '"티끌 모아 티끌."',
    author: "- 박명수 -",
  },
  {
    quote: '"원수는 회사에서 만난다."',
    author: "- 박명수 -",
  },
  {
    quote: '"헌신하면 헌신 짝 된다."',
    author: "- 박명수 -",
  },
  {
    quote: '"죽음과 결혼은 뒤로 미룰수록 좋다."',
    author: "- 박명수 -",
  },
  {
    quote: '"One cat just leads to another."',
    author: "- Ernest Hemingway -",
  },
  {
    quote:
      '"The cat has complete emotional honesty - an attribute not often found in humans."',
    author: "- Ernest Hemingway -",
  },
  {
    quote: "When I hear of Schrödinger's cat, I reach for my gun.",
    author: "- Stephen Hawking -",
  },
  {
    quote: '"What greater gift than the love of a cat."',
    author: "- Charles Dickens -",
  },
];

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
