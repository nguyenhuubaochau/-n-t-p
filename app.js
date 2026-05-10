const $ = (s) => document.querySelector(s);
const body = document.body;
const savedTheme = localStorage.getItem('theme') || 'dark';
body.classList.toggle('light', savedTheme === 'light');
$('#themeBtn')?.addEventListener('click', () => {
  body.classList.toggle('light');
  localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark');
});

function renderLesson() {
  const key = body.dataset.lesson;
  if (!key || typeof lessons === 'undefined') return;
  const data = lessons[key];
  const box = $('#lessonContent');
  const tagBox = $('#tagBox');
  let activeTag = 'all';
  let done = JSON.parse(localStorage.getItem('done-' + key) || '[]');

  function paint() {
    const term = ($('#searchBox')?.value || '').toLowerCase();
    const filtered = data.sections.filter(s => (activeTag === 'all' || s.tag === activeTag) && (s.title + s.body + (s.formula || '')).toLowerCase().includes(term));
    box.innerHTML = filtered.map((s, i) => {
      const id = data.sections.indexOf(s);
      return `<article class="study-card ${done.includes(id) ? 'done' : ''}">
        <div class="study-top"><span class="tag">${s.tag}</span><button data-id="${id}" class="check">${done.includes(id) ? '✓ Đã học' : 'Đánh dấu học xong'}</button></div>
        <h2>${s.title}</h2><p>${s.body}</p>${s.formula ? `<pre class="formula">${s.formula}</pre>` : ''}
      </article>`;
    }).join('');
    box.querySelectorAll('.check').forEach(btn => btn.onclick = () => {
      const id = Number(btn.dataset.id);
      done = done.includes(id) ? done.filter(x => x !== id) : [...done, id];
      localStorage.setItem('done-' + key, JSON.stringify(done));
      updateProgress(); paint();
    });
    updateProgress();
  }

  function updateProgress(){
    const percent = Math.round(done.length / data.sections.length * 100);
    $('#progressText').textContent = percent + '% đã học';
    $('#progressBar').style.width = percent + '%';
  }

  tagBox.innerHTML = ['all', ...data.tags].map(t => `<button class="pill ${t==='all'?'active':''}" data-tag="${t}">${t==='all'?'Tất cả':t}</button>`).join('');
  tagBox.querySelectorAll('button').forEach(b => b.onclick = () => { activeTag = b.dataset.tag; tagBox.querySelectorAll('button').forEach(x=>x.classList.remove('active')); b.classList.add('active'); paint(); });
  $('#searchBox')?.addEventListener('input', paint);
  paint();
}
renderLesson();
