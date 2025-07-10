const questions = [
  {
    text: "你假日最常做什麼？",
    options: ["宅在家", "戶外運動", "逛街購物", "旅行"]
  },
  {
    text: "你偏好的交通方式是？",
    options: ["步行/腳踏車", "大眾運輸", "汽機車", "看心情"]
  },
  {
    text: "你最嚮往的居住環境是？",
    options: ["都市高樓", "郊區平房", "山區木屋", "靠海小鎮"]
  },
  {
    text: "你喜歡的天氣是？",
    options: ["晴天", "陰天", "雨天", "雪天"]
  },
  {
    text: "你的旅遊風格是？",
    options: ["自由行", "跟團", "冒險探索", "美食放空"]
  }
];

let currentQuestion = 0;
const answers = [];

function renderQuestion() {
  const quizContainer = document.getElementById("quiz");
  quizContainer.innerHTML = "";

  if (currentQuestion >= questions.length) {
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
    window.location.href = "result.html";
    return;
  }

  const q = questions[currentQuestion];

  const container = document.createElement("div");
  container.classList.add("question-container", "active");

  const title = document.createElement("h4");
  title.classList.add("mb-4");
  title.textContent = `問題 ${currentQuestion + 1}: ${q.text}`;
  container.appendChild(title);

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.className = "btn btn-primary w-100 mb-2";
    btn.onclick = () => {
      answers.push(opt);
      currentQuestion++;
      renderQuestion();
    };
    container.appendChild(btn);
  });

  quizContainer.appendChild(container);
}

window.onload = renderQuestion;
