const quotes = [
    {
      quote: "'진정으로 웃으려면 고통을 참아야 하며 나아가 고통을 즐길 줄 알아야 한다'",
      author: "-찰리 채플린-",
    },
    {
      quote: "'성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다'",
      author: "-톰 모나건-",
    },
    {
      quote: "'먼저 자신을 비웃어라 다른 사람이 당신을 비웃기 전에'",
      author: "-엘사 맥스웰-",
    },
    {
      quote: "'좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다'",
      author: "-단테-",
    },
    {
      quote: "'한번 포기하면 습관이 된다. 절대 포기하지 말아라'",
      author: "-마이클 조던-",
    },
    {
      quote: "'성공은 꿈꾸고, 믿고, 대담해지고, 실천하는데서 오는 것이다'",
      author: "-존 디줄리어스 3세-",
    },
    {
      quote: "'오늘 죽을 것처럼 행동하고 영원히 살 것처럼 배워라'",
      author: "-마하트마 간디-",
    },
    {
      quote: "'가장 어두운 밤도 언젠간 끝나고 해는 떠오를 것이다'",
      author: "-반 고흐-",
    },
    {
      quote: "'이 세상에 보장된 것은 아무것도 없으며 오직 기회만 있을 뿐이다'",
      author: "-더글라스 맥아더-",
    },
    {
      quote: "'죽기로 싸우면 살 것이요, 살고자 꾀하면 죽을 것이다'",
      author: "-충무공 이순신-",
    },
  ];

  console.log(quotes)
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;