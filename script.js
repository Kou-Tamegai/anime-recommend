const questions = [
  {
    text: "感動ものが好きですか？",
    options: [
      { label: "はい", nextQuestion: 1 },
      { label: "いいえ", nextQuestion: 4 },
    ],
  },
  {
    text: "人が傷つかない感動が好きですか？",
    options: [
      { label: "はい", nextQuestion: 2 },
      { label: "いいえ", nextQuestion: 3 },
    ],
  },
  {
    text: "青春系の感動が好きですか？",
    options: [
      { label: "はい", anime: "宇宙よりも遠い場所" },
      { label: "いいえ", anime: "青春ブタ野郎はバニーガール先輩の夢を見ない" },
    ],
  },
  {
    text: "のほほんとした話が好きですか？",
    options: [
      { label: "はい", anime: "神達に拾われた男" },
      { label: "いいえ", anime: "鬼滅の刃 無限列車編" },
    ],
  },
  {
    text: "アクションものが好きですか？",
    options: [
      { label: "はい", nextQuestion: 5 },
      { label: "いいえ", nextQuestion: 6 },
    ],
  },
  {
    text: "勧善懲悪なストーリーが好きですか？",
    options: [
      { label: "はい", anime: "僕のヒーローアカデミア" },
      { label: "いいえ", anime: "進撃の巨人" },
    ],
  },
  {
    text: "ミステリーが好きですか？",
    options: [
      { label: "はい", anime: "シュタインズ・ゲート" },
      { label: "いいえ", anime: "ブルーロック" },
    ],
  },
];


const questionText = document.getElementById("questionText");
const options = document.getElementById("options");
const animeTitle = document.getElementById("animeTitle");

const questionContainer = document.getElementById("questionContainer");
const resultContainer = document.getElementById("resultContainer");
const startButton = document.getElementById("startButton");


function startQuiz() {
  startButton.classList.add("hidden");
  questionContainer.classList.remove("hidden");
  showQuestion(0);
}

function showQuestion(index) {
  const question = questions[index];
  questionText.textContent = question.text;
  options.innerHTML = "";

  questionContainer.style.opacity = 0;
  setTimeout(() => {
    questionContainer.style.opacity = 1;
  }, 100);

  function createOptionButton(option) {
    const button = document.createElement("button");
    button.innerHTML = option.label; 
    button.classList.add("option-button");
    button.addEventListener("click", () => {
      if (option.nextQuestion !== undefined) {
        showQuestion(option.nextQuestion);
      } else {
        showResult(option.anime);
      }
    });
    return button;
  }

  question.options.forEach((option) => {
    const button = createOptionButton(option);
    options.appendChild(button);
  });
}

function showResult(anime) {
  questionContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");

  resultContainer.style.opacity = 0;
  setTimeout(() => {
    resultContainer.style.opacity = 1;
  }, 100);

  if (anime === "青春ブタ野郎はバニーガール先輩の夢を見ない") {
    animeTitle.innerHTML = `青春ブタ野郎は<br>バニーガール先輩の夢を見ない`;
  } else {
    animeTitle.textContent = `${anime}`;
  }
  animeTitle.classList.add("animate");

  const animeImage = document.getElementById("animeImage");
  const animeDescription = document.getElementById("animeDescription");
  const animeCharm = document.getElementById("animeCharm");

  // アニメの説明
  showAnimeDescription(anime, animeDescription, animeCharm);


  // アニメごとの画像ファイル名を条件分岐で設定
  let animeImageFilename;
  switch (anime) {
    case "青春ブタ野郎はバニーガール先輩の夢を見ない":
      animeImageFilename = "aobuta.jpg";
      break;
    case "宇宙よりも遠い場所":
      animeImageFilename = "yorimoi.jpg";
      break;
    case "鬼滅の刃 無限列車編":
      animeImageFilename = "mugen.jpg";
      break;
    case "僕のヒーローアカデミア":
      animeImageFilename = "hiroaka.png";
      break;
    case "進撃の巨人":
      animeImageFilename = "shingeki.png";
      break;
    case "シュタインズ・ゲート":
      animeImageFilename = "syutage.jpeg";
      break;
    case "神達に拾われた男":
      animeImageFilename = "kamitati.jpg";
      break;
   case "ブルーロック":
      animeImageFilename = "bluelock.jpg";
      break;
    // default:
    //   animeImageFilename = "default.jpg"; // ここでデフォルトの画像ファイル名を設定してください
  }

  animeImage.src = `img/${animeImageFilename}`; // 画像フォルダと拡張子に合わせて変更
  animeImage.alt = anime;
}

function showAnimeDescription(anime, animeDescription, animeCharm) {
  let descriptionText;
  let charmText;

  switch (anime) {
    case "宇宙よりも遠い場所":
      descriptionText = '『宇宙よりも遠い場所』とは、それぞれの目的から南極を目指す少女たちの姿を描いたアニメ作品。 高校2年生の玉木マリ（キマリ）は、同級生の小淵沢報瀬が“南極で行方を絶った母を追う”ために並みならぬ努力していることを知り、彼女と共に南極に行くことを決意。';
      charmText = '史上最高の青春アニメ。実際に見た人の鬱病が治ったという報告も。疲れた時、元気が出ない時、落ち込んでいる時に、一歩踏み出す勇気をくれるパワフルすぎる作品。今までで一番感動した作品は？とオタクに聞けば、ほとんどは宇宙よりも遠い場所か、ヴァイオレットエヴァーガーデンを挙げることでしょう。';
      break;
    case "青春ブタ野郎はバニーガール先輩の夢を見ない":
      descriptionText = '咲太の高校の上級生にして、活動休止中の人気タレント 桜島麻衣 さくらじままい 先輩だ。 数日前から彼女の姿が周囲の人間に見えないという事象が起こり、図書館でその検証をしていたらしい。 これはネットで噂の不思議現象”思春期症候群”と関係があるのか。 原因を探る名目で舞とお近づきになった咲太は、謎の解決に乗り出す。';
      charmText = 'SF要素満載の全く新しいラブコメ。これを見ると、他のラブコメじゃ満足できない。ラブコメではあるが、人間関係の本質を突いた傑作。';
      break;
     case "神達に拾われた男":
      descriptionText = 'ブラック企業に勤める天涯孤独の中年サラリーマン竹林竜馬は、就寝中のくしゃみが原因であっけなく死亡してしまう。 死後、三柱の神により異世界へと転移することとなり、彼らの手厚い加護を貰ってとりあえず森で一人暮らしを始めるが、公爵家との出会いをきっかけに街で生活することとなる。';
      charmText = '異世界俺TUEE系に飽きた、のんびりして心温まる作品が見たい、人が死ぬ展開はもう嫌だ、そんなあなたにおすすめ。登場人物全員が優しくて、心温まる新感覚の異世界もの。';
      break;
      case "シュタインズ・ゲート":
      descriptionText = '舞台は2010年夏の秋葉原。 厨二病から抜け出せない大学生である岡部倫太郎は未来ガジェット研究所を立ち上げ、用途不明の発明品を日々生み出していた。世紀の発明と興奮を抑えきれず、過去への干渉を繰り返す。その結果、世界を巻き込む大きな悲劇が岡部達に訪れることになるのだが...果たして彼は運命を乗り越えることができるのか？';
      charmText = '最初は何が起きてるのかすら分からない。だけど、中盤以降、怒涛の伏線回収で長年視聴者を虜にするタイムリープものの傑作。序盤で切らないで！中盤以降、面白すぎて不眠症になる人も。';
      break;
      case "鬼滅の刃 無限列車編":
      descriptionText = '大人気アニメ・鬼滅の刃の劇場版。炎柱・煉󠄁獄杏寿郎に、新たな指令が下された。 それは、四十人以上もの行方不明者が出たという「無限列車」——その現地へ赴き、調査を行うというもの。 鬼殺隊本部を後にし、無限列車の任務へと旅立つ煉󠄁獄だったが——。';
      charmText = '言わずと知れた大人気アニメの劇場版。人類の歴史上、日本で最も興行収入の高い作品。100回以上リピートする人もいるほど満足度が高く、テレビでも繰り返し放送されている。作画、ストーリー、音楽、全てが至高の領域。';
      break;
      case "ブルーロック":
      descriptionText = '日本のW杯優勝を請け負った絵心甚八は、全国から優秀な300名の高校生FWを集め、ブルーロックと呼ばれる施設に軟禁する。 世界一のエゴイストでなければ、世界一のストライカーにはなれないというのが持論。彼は日本に必要なのはたった一人の英雄だと主張し、300名の高校生に生き残りをかけた特殊な訓練を課すのだが...';
      charmText = '感動ものもアクションもミステリーも興味がないあなたには、ブルーロックはいかが？スポーツアニメでありながら、デスゲーム要素を盛り込んだ斬新な作品。ハイキューやスラムダンクのようなスポ根が苦手な人におすすめ。';
      break;
      case "進撃の巨人":
      descriptionText = '舞台は人を食らう巨人に追われ、人類は壁のなかで暮らすことを余儀なくされてしまった世界。 巨人に母を殺された少年エレン・イェーガーが復讐を誓い、巨人を倒すための調査兵団へ入団し巨人と戦っていく姿を描くダークファンタジー。 作者諫山創の初連載作品であり代表作。';
      charmText = 'すべてのアニメの中で、最も難解かつ凝った設定といっても過言ではない。伏線に気づかせる気すらない、変態級の伏線の数々に魅了される。巨人と戦うだけのアニメだと思ってる人、勿体無さすぎる。海外で好きなアニメは何かと聞くと、若い人は大抵attack on titan(進撃の巨人)と答えるほど、半端じゃない人気。';
      break;
      case "僕のヒーローアカデミア":
      descriptionText = '舞台は総人口の約8割が何らかの超常能力“個性”を持つ世界。 事故や災害、そして“個性”を悪用する犯罪者・敵＜ヴィラン＞から人々と社会を守る職業・ヒーローになることを目指し、雄英校に通う高校生・緑谷出久とそのクラスメイトたちの成長、戦い、友情のストーリーが繰り広げられていく!';
      charmText = '個性ってなんだろう？と考えさせられる作品。勧善懲悪ものではあるので、水戸黄門チックな話が好きな人にはおすすめ。第7期が制作決定しており、若者中心に人気の高い作品。';
      break;
    default:
      descriptionText = "こちらにアニメの説明文が表示されます。";
  }

  animeDescription.textContent = descriptionText;
  animeCharm.textContent = charmText;
}

// スタート
startButton.addEventListener("click", startQuiz);

// 診断へ戻る
const restartButton = document.getElementById("restartButton");

restartButton.addEventListener("click", function () {
  resultContainer.classList.add("hidden");
  questionContainer.classList.add("hidden"); 
  window.location.reload();
});

