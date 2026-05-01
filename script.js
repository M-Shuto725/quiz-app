//クイズデータ
let quizzes = [
  {
    question: "日本の首都はどこ？",
    choices: ["大阪","東京","福岡"],
    answer: 1
  },
  {
    question: "2 + 2 =",
    choices: ["3","4","5"],
    answer: 1
  },
  {
    question: "空は何色？",
    choices: ["青","赤","緑"],
    answer: 0
  }
];

let currentIndex = 0;
let score = 0;

//問題表示関数
function showQuiz() {
  let quiz = quizzes[currentIndex];

  document.getElementById("question").textContent = quiz.question;

  //選択肢表示
  for (let i = 0; i < 3; i++) {
  document.getElementById("btn" + i).textContent = quiz.choices[i];
  document.getElementById("btn" + i).style.display = "inline"; //再表示用
  }

  document.getElementById("result").textContent = ""; //result表示を消してる
}

//回答チェック
function checkAnswer(index) {
  let quiz = quizzes[currentIndex];

  if (index === quiz.answer) {
    document.getElementById("result").textContent = "正解！";
    score++; //カウント
  } else {
    document.getElementById("result").textContent = "不正解！";
  }

  //次の問題へ
  currentIndex++;

  //最後の処理
  if (currentIndex < quizzes.length) {
    setTimeout(showQuiz, 1000);//1000 = 1s
  } else {
    setTimeout(function () {
      document.getElementById("question").textContent = "終了！";
      document.getElementById("result").textContent = 
        quizzes.length + "問中" + score + "問正解！";

      for (let i = 0; i < 3; i++) {
        document.getElementById("btn" + i).style.display = "none"; //選択肢を消去
      }

      document.getElementById("restartBtn").style.display = "inline";
    }, 1000);
  }
}

//リスタート
function restartQuiz() {
  currentIndex = 0;
  score = 0;

  document.getElementById("restartBtn").style.display = "none";

  showQuiz();
}

//一番最初の表示
showQuiz();