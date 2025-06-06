
const images = [
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60"
];

let currentImageIndex = 0;

function changeImage(direction) {
  currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
  document.getElementById("carouselImage").src = images[currentImageIndex];
}


const questions = [
  {
    question: "What is the capital of France?",
    options: { A: "Paris", B: "London", C: "Berlin", D: "Madrid" },
    correct: "A"
  },
  {
    question: "Which language is used for styling web pages?",
    options: { A: "HTML", B: "CSS", C: "Python", D: "PHP" },
    correct: "B"
  }
];

let currentQuestion = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;

  const optionsHTML = Object.entries(q.options)
    .map(([key, value]) =>
      `<button onclick="answer('${key}')">${key}: ${value}</button>`
    )
    .join(" ");
  document.getElementById("quiz-options").innerHTML = optionsHTML;
  document.getElementById("result").innerText = "";
}

function answer(option) {
  const correct = questions[currentQuestion].correct;
  document.getElementById("result").innerText =
    option === correct ? " Correct!" : ` Wrong! Correct is: ${correct}`;

  currentQuestion = (currentQuestion + 1) % questions.length;
  setTimeout(loadQuestion, 1500);
}


async function fetchJoke() {
  const jokeEl = document.getElementById("jokeText");
  jokeEl.innerText = "Loading a funny joke... ";

  try {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    jokeEl.innerText = `${data.setup} — ${data.punchline}`;
  } catch (err) {
    jokeEl.innerText = "Oops! Failed to fetch joke. ";
  }
}


loadQuestion();

