const form = document.querySelector('#quizForm');
const resultBox = document.querySelector('#resultBox');
const filter = document.querySelector('#filterLesson');
const levelFilter = document.querySelector('#filterLevel');
const restart = document.querySelector('#restartBtn');
const amountInput = document.querySelector('#amountInput');
const practiceBox = document.querySelector('#practiceBox');
let current = [];

function shuffle(arr){ return [...arr].sort(() => Math.random() - 0.5); }
function levelsFor(lesson){
  const arr = questions.filter(q => lesson === 'all' || q.lesson === lesson).map(q => q.level);
  return ['all', ...Array.from(new Set(arr))];
}
function syncLevels(){
  const keep = levelFilter.value;
  levelFilter.innerHTML = levelsFor(filter.value).map(x => `<option value="${x}">${x === 'all' ? 'Tất cả dạng' : x}</option>`).join('');
  if ([...levelFilter.options].some(o => o.value === keep)) levelFilter.value = keep;
}
function renderQuiz(){
  syncLevels();
  const lesson = filter.value;
  const level = levelFilter.value;
  const amount = Number(amountInput.value || 20);
  const pool = questions.filter(q => (lesson === 'all' || q.lesson === lesson) && (level === 'all' || q.level === level));
  current = shuffle(pool).slice(0, Math.min(amount, pool.length));
  form.innerHTML = current.map((q, idx) => `<article class="quiz-card" data-idx="${idx}">
    <div class="study-top"><span class="tag">${q.lesson === 'bai2' ? 'Bài 2' : 'Bài 5'} • ${q.level}</span><span>Câu ${idx+1}/${current.length}</span></div>
    <h3>${q.q}</h3>
    ${q.a.map((ans, i) => `<label><input type="radio" name="q${idx}" value="${i}" required> ${String.fromCharCode(65+i)}. ${ans}</label>`).join('')}
  </article>`).join('') + '<button class="btn submit" type="submit">Nộp bài và xem câu sai</button>';
  resultBox.classList.add('hidden');
}
function renderPractice(){
  if (!practiceBox) return;
  practiceBox.innerHTML = practiceSets.map(set => `<section class="practice-set"><h2>${set.title}</h2>${set.items.map((it, idx) => `<details class="study-card"><summary><b>${idx+1}. ${it.name}</b> — ${it.task}</summary><div class="answer ok"><b>Lời giải:</b><br>${it.solution}</div></details>`).join('')}</section>`).join('');
}
form.addEventListener('submit', e => {
  e.preventDefault();
  const fd = new FormData(form);
  let score = 0;
  const details = current.map((q, idx) => {
    const raw = fd.get('q' + idx);
    const choice = raw === null ? -1 : Number(raw);
    const ok = choice === q.correct;
    if (ok) score++;
    const chosen = choice >= 0 ? `${String.fromCharCode(65+choice)}. ${q.a[choice]}` : 'Chưa chọn';
    return `<div class="answer ${ok ? 'ok' : 'bad'}"><b>Câu ${idx+1}: ${ok ? 'Đúng ✅' : 'Sai ❌'}</b><br>Bạn chọn: ${chosen}<br>Đáp án đúng: ${String.fromCharCode(65+q.correct)}. ${q.a[q.correct]}<br><small>${q.explain}</small></div>`;
  }).join('');
  const percent = Math.round(score / current.length * 100);
  const key = `bestScore-${filter.value}-${levelFilter.value}`;
  const best = Math.max(Number(localStorage.getItem(key) || 0), percent);
  localStorage.setItem(key, best);
  resultBox.innerHTML = `<h2>Kết quả: ${score}/${current.length} (${percent}%)</h2><p>Điểm cao nhất bộ lọc này: ${best}%</p><div class="scorebar"><i style="width:${percent}%"></i></div><h3>Câu đúng/sai và giải thích</h3>${details}`;
  resultBox.classList.remove('hidden');
  resultBox.scrollIntoView({behavior:'smooth'});
});
filter.addEventListener('change', renderQuiz);
levelFilter.addEventListener('change', renderQuiz);
amountInput.addEventListener('change', renderQuiz);
restart.addEventListener('click', renderQuiz);
renderQuiz();
renderPractice();
