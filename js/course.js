/* ============================================================
   VIDEOGRAPHY FUNDAMENTALS — COURSE ENGINE
   ============================================================ */

// ---- Course Data ----

const COURSE = {
  title: 'Videography Fundamentals',
  subtitle: 'A practical training course for independent field production',
  modules: [
    {
      num: 1,
      slug: '01-camera-fundamentals',
      title: 'Camera Fundamentals',
      description: 'Make the camera predictable and controllable before adding the complexity of interviews, events, lighting, or audio.',
      lessons: [
        { slug: '01-body-orientation', title: 'Camera Body Orientation' },
        { slug: '02-exposure-triangle', title: 'The Exposure Triangle' },
        { slug: '03-frame-rates-shutter', title: 'Frame Rates and Shutter' },
        { slug: '04-resolution-codecs-wb', title: 'Resolution, Codecs, and White Balance' },
        { slug: '05-picture-profiles', title: 'Picture Profiles and Log' },
        { slug: '06-focus-modes', title: 'Focus Modes' },
        { slug: '07-lenses', title: 'Lenses and Focal Length' },
        { slug: '08-stabilization-support', title: 'Stabilization and Support' },
        { slug: '09-monitoring', title: 'Monitoring Exposure and Focus' },
      ]
    },
    {
      num: 2,
      slug: '02-composition',
      title: 'Composition and Visual Framing',
      description: 'Build the visual judgment needed to create clean, intentional, and usable footage.',
      lessons: [
        { slug: '01-fundamental-rules', title: 'Fundamental Framing Rules' },
        { slug: '02-interview-framing', title: 'Interview Framing' },
        { slug: '03-eyeline-background', title: 'Eye Line and Background Control' },
        { slug: '04-depth-perspective', title: 'Depth, Perspective, and Camera Height' },
        { slug: '05-aspect-ratios', title: 'Aspect Ratios and Safe Framing' },
        { slug: '06-movement-static', title: 'Movement Versus Static Shots' },
      ]
    },
    {
      num: 3,
      slug: '03-audio-fundamentals',
      title: 'Audio Fundamentals',
      description: 'Prioritize clean dialogue and usable sound — poor audio can make otherwise acceptable footage unusable.',
      lessons: [
        { slug: '01-why-audio-matters', title: 'Why Audio Quality Matters' },
        { slug: '02-microphone-types', title: 'Microphone Types' },
        { slug: '03-recording-workflow', title: 'Recording Workflow' },
        { slug: '04-levels-monitoring', title: 'Setting Levels and Monitoring' },
        { slug: '05-mic-placement', title: 'Microphone Placement' },
        { slug: '06-room-tone-ambient', title: 'Room Tone and Ambient Sound' },
        { slug: '07-common-problems', title: 'Common Audio Problems' },
        { slug: '08-event-audio', title: 'Event Audio' },
      ]
    },
    {
      num: 4,
      slug: '04-lighting-fundamentals',
      title: 'Lighting Fundamentals',
      description: 'Enable clean, flattering lighting with a minimal portable kit.',
      lessons: [
        { slug: '01-qualities-of-light', title: 'Qualities of Light' },
        { slug: '02-natural-vs-artificial', title: 'Natural Versus Artificial Light' },
        { slug: '03-three-point-lighting', title: 'Three-Point Lighting' },
        { slug: '04-one-two-light-setups', title: 'One-Light and Two-Light Setups' },
        { slug: '05-windows-color-temp', title: 'Windows and Color Temperature' },
        { slug: '06-light-shaping', title: 'Shaping and Controlling Light' },
        { slug: '07-challenging-situations', title: 'Challenging Lighting Situations' },
        { slug: '08-minimal-kit', title: 'Minimal Kit Setup' },
      ]
    },
    {
      num: 5,
      slug: '05-shot-strategy',
      title: 'Shot Strategy and Coverage',
      description: 'Think beyond simply recording what is happening — capture intentional, editable footage.',
      lessons: [
        { slug: '01-thinking-like-editor', title: 'Thinking Like an Editor' },
        { slug: '02-shot-types', title: 'Shot Types and Sequences' },
        { slug: '03-interview-coverage', title: 'Interview Coverage' },
        { slug: '04-event-coverage', title: 'Event Coverage' },
        { slug: '05-broll-strategy', title: 'B-Roll Strategy' },
        { slug: '06-shooting-for-edit', title: 'Shooting for the Edit' },
      ]
    },
    {
      num: 6,
      slug: '06-production-foundations',
      title: 'Production Foundations',
      description: 'Establish the habits, vocabulary, and workflow discipline needed to work predictably in a team production environment.',
      lessons: [
        { slug: '01-roles-phases', title: 'Production Roles and Phases' },
        { slug: '02-project-types', title: 'Types of Video Projects' },
        { slug: '03-reading-brief', title: 'Reading a Brief and Planning Shots' },
        { slug: '04-etiquette', title: 'Production Etiquette' },
        { slug: '05-file-organization', title: 'File Organization and Media Handoff' },
        { slug: '06-releases-policy', title: 'Releases and Institutional Policy' },
      ]
    },
    {
      num: 7,
      slug: '07-minimal-kit',
      title: 'Minimal Kit Operation',
      description: 'Become competent with the actual equipment you are likely to use in the field.',
      lessons: [
        { slug: '01-camera-lens', title: 'Camera and Lens' },
        { slug: '02-support', title: 'Tripod, Gimbal, and Support' },
        { slug: '03-lighting-kit', title: 'Lighting Kit' },
        { slug: '04-audio-kit', title: 'Audio Kit' },
        { slug: '05-power-media', title: 'Power, Media, and Consumables' },
        { slug: '06-packing-workflow', title: 'Packing and Case Workflow' },
      ]
    },
    {
      num: 8,
      slug: '08-shoot-planning',
      title: 'Shoot Planning and Checklists',
      description: 'Convert technical skill into repeatable operational reliability.',
      lessons: [
        { slug: '01-intake-scouting', title: 'Intake Questions and Location Scouting' },
        { slug: '02-technical-scouting', title: 'Technical Scouting' },
        { slug: '03-shot-lists-schedules', title: 'Shot Lists and Production Schedules' },
        { slug: '04-preshoot-prep', title: 'Pre-Shoot Preparation' },
        { slug: '05-file-naming-backup', title: 'File Naming and Backup Workflow' },
        { slug: '06-checklists', title: 'Day-Of and End-Of-Shoot Checklists' },
      ]
    },
    {
      num: 9,
      slug: '09-field-troubleshooting',
      title: 'Field Troubleshooting',
      description: 'Prepare for real institutional production conditions where locations, schedules, and technical variables are rarely ideal.',
      lessons: [
        { slug: '01-visual-problems', title: 'Diagnosing Visual Problems' },
        { slug: '02-audio-problems', title: 'Fixing Audio Problems' },
        { slug: '03-logistical-challenges', title: 'Logistical Challenges' },
        { slug: '04-equipment-failures', title: 'Equipment Failures' },
        { slug: '05-when-to-stop', title: 'When to Stop Versus Keep Recording' },
        { slug: '06-communicating-issues', title: 'Communicating Issues Diplomatically' },
      ]
    },
    {
      num: 10,
      slug: '10-post-production',
      title: 'Post-Production Awareness',
      description: 'Understand what editors need so you can shoot with post-production in mind.',
      lessons: [
        { slug: '01-how-footage-gets-used', title: 'How Footage Gets Used' },
        { slug: '02-audio-in-post', title: 'Audio in Post-Production' },
        { slug: '03-coverage-color', title: 'Coverage and Color Correction Awareness' },
        { slug: '04-file-naming-structure', title: 'File Naming and Folder Structure' },
        { slug: '05-reviewing-footage', title: 'Reviewing Your Footage' },
        { slug: '06-editor-frustrations', title: 'Common Editor Frustrations' },
      ]
    },
  ]
};

// ---- Progress Tracking ----

const Progress = {
  KEY: 'vg-course-progress',
  get() { return JSON.parse(localStorage.getItem(this.KEY) || '{}'); },
  set(data) { localStorage.setItem(this.KEY, JSON.stringify(data)); },
  markComplete(id) { const p = this.get(); p[id] = Date.now(); this.set(p); },
  isComplete(id) { return Boolean(this.get()[id]); },
  completedCount() { return Object.keys(this.get()).length; },
  totalLessons() {
    return COURSE.modules.reduce((sum, m) => sum + m.lessons.length, 0);
  },
  getLastVisited() { return localStorage.getItem('vg-last-visited') || null; },
  setLastVisited(url) { localStorage.setItem('vg-last-visited', url); },
};

// ---- URL / Page Detection ----

function getCurrentPage() {
  const path = window.location.pathname;
  const segments = path.split('/').filter(Boolean);

  // Find modules/ in path
  const modIdx = segments.indexOf('modules');
  if (modIdx === -1) {
    return { type: 'root' };
  }

  const moduleSlug = segments[modIdx + 1];
  const pageFile = segments[modIdx + 2];

  if (!pageFile || pageFile === 'index.html') {
    return { type: 'module', moduleSlug };
  }
  if (pageFile === 'quiz.html') {
    return { type: 'quiz', moduleSlug };
  }
  const lessonSlug = pageFile.replace('.html', '');
  return { type: 'lesson', moduleSlug, lessonSlug };
}

function getModule(slug) {
  return COURSE.modules.find(m => m.slug === slug) || null;
}

function getLessonIndex(mod, lessonSlug) {
  return mod.lessons.findIndex(l => l.slug === lessonSlug);
}

function urlFor(type, moduleSlug, lessonSlug) {
  const page = getCurrentPage();
  const fromRoot = page.type === 'root';
  const prefix = fromRoot ? 'modules/' : '../';

  if (type === 'module') return `${prefix}${moduleSlug}/index.html`;
  if (type === 'quiz') return `${prefix}${moduleSlug}/quiz.html`;
  if (type === 'lesson') {
    if (page.type !== 'root' && page.moduleSlug === moduleSlug) {
      return `${lessonSlug}.html`;
    }
    return `${prefix}${moduleSlug}/${lessonSlug}.html`;
  }
  if (type === 'root') return fromRoot ? 'index.html' : '../../index.html';
  return '#';
}

// ---- Sidebar ----

function buildSidebar() {
  const container = document.getElementById('sidebar-nav');
  if (!container) return;

  const page = getCurrentPage();
  const completed = Progress.get();
  let html = '';

  COURSE.modules.forEach(mod => {
    const isActiveModule = page.moduleSlug === mod.slug;
    const allDone = mod.lessons.every(l => Progress.isComplete(mod.slug + '-' + l.slug));

    html += `<div class="nav-module">
      <button class="nav-module-btn ${isActiveModule ? 'active-module' : ''} ${allDone ? 'module-done' : ''} ${isActiveModule ? 'open' : ''}"
              data-module="${mod.slug}" aria-expanded="${isActiveModule}">
        <span class="nav-module-num">${allDone ? '✓' : mod.num}</span>
        <span>${mod.title}</span>
        <span class="nav-module-chevron">▶</span>
      </button>
      <div class="nav-lessons ${isActiveModule ? 'open' : ''}">`;

    mod.lessons.forEach(lesson => {
      const isActive = page.lessonSlug === lesson.slug && page.moduleSlug === mod.slug;
      const isDone = Progress.isComplete(mod.slug + '-' + lesson.slug);
      const href = isActiveModule && page.type !== 'root'
        ? lesson.slug + '.html'
        : `../${mod.slug}/${lesson.slug}.html`;
      const finalHref = page.type === 'root'
        ? `modules/${mod.slug}/${lesson.slug}.html`
        : (page.moduleSlug === mod.slug ? lesson.slug + '.html' : `../${mod.slug}/${lesson.slug}.html`);

      html += `<a href="${finalHref}" class="nav-lesson ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}">
        <span class="nav-lesson-indicator">${isDone ? '✓' : ''}</span>
        ${lesson.title}
      </a>`;
    });

    const quizActive = page.type === 'quiz' && page.moduleSlug === mod.slug;
    const quizHref = page.type === 'root'
      ? `modules/${mod.slug}/quiz.html`
      : (page.moduleSlug === mod.slug ? 'quiz.html' : `../${mod.slug}/quiz.html`);

    html += `<a href="${quizHref}" class="nav-lesson nav-lesson-quiz ${quizActive ? 'active' : ''}">
      <span class="nav-lesson-indicator">≡</span>
      Module Quiz
    </a>`;

    html += `</div></div>`;
  });

  container.innerHTML = html;

  // Accordion toggle
  container.querySelectorAll('.nav-module-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const slug = btn.dataset.module;
      const lessonsEl = btn.nextElementSibling;
      const isOpen = lessonsEl.classList.contains('open');
      lessonsEl.classList.toggle('open', !isOpen);
      btn.classList.toggle('open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });
}

function buildProgressBar() {
  const fill = document.getElementById('sidebar-progress-fill');
  const count = document.getElementById('sidebar-progress-count');
  if (!fill) return;
  const done = Progress.completedCount();
  const total = Progress.totalLessons();
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  fill.style.width = pct + '%';
  if (count) count.textContent = `${done} of ${total} lessons complete`;
}

// ---- Breadcrumb ----

function buildBreadcrumb() {
  const el = document.getElementById('breadcrumb');
  if (!el) return;
  const page = getCurrentPage();
  const rootUrl = page.type === 'root' ? 'index.html' : '../../index.html';
  let html = `<a href="${rootUrl}">Course Home</a>`;

  if (page.type !== 'root') {
    const mod = getModule(page.moduleSlug);
    if (mod) {
      const modUrl = page.type === 'module' ? 'index.html' : 'index.html';
      html += `<span class="sep">›</span>`;
      if (page.type !== 'module') {
        html += `<a href="${modUrl}">${mod.title}</a>`;
      } else {
        html += `<span class="current">${mod.title}</span>`;
      }

      if (page.type === 'lesson') {
        const lesson = mod.lessons.find(l => l.slug === page.lessonSlug);
        if (lesson) html += `<span class="sep">›</span><span class="current">${lesson.title}</span>`;
      } else if (page.type === 'quiz') {
        html += `<span class="sep">›</span><span class="current">Module Quiz</span>`;
      }
    }
  }

  el.innerHTML = html;
}

// ---- Lesson Nav (prev/next) ----

function buildLessonNav() {
  const container = document.getElementById('lesson-nav');
  if (!container) return;
  const page = getCurrentPage();
  if (page.type !== 'lesson' && page.type !== 'quiz' && page.type !== 'module') return;

  const mod = getModule(page.moduleSlug);
  if (!mod) return;

  const modIdx = COURSE.modules.indexOf(mod);
  let prevHref = '', prevLabel = '';
  let nextHref = '', nextLabel = '';

  if (page.type === 'module') {
    if (modIdx > 0) {
      const prevMod = COURSE.modules[modIdx - 1];
      prevHref = `../${prevMod.slug}/index.html`;
      prevLabel = prevMod.title;
    } else {
      prevHref = '../../index.html';
      prevLabel = 'Course Home';
    }
    const firstLesson = mod.lessons[0];
    nextHref = firstLesson.slug + '.html';
    nextLabel = firstLesson.title;
  } else if (page.type === 'lesson') {
    const lessonIdx = getLessonIndex(mod, page.lessonSlug);
    if (lessonIdx > 0) {
      prevHref = mod.lessons[lessonIdx - 1].slug + '.html';
      prevLabel = mod.lessons[lessonIdx - 1].title;
    } else {
      prevHref = 'index.html';
      prevLabel = 'Module Overview';
    }
    if (lessonIdx < mod.lessons.length - 1) {
      nextHref = mod.lessons[lessonIdx + 1].slug + '.html';
      nextLabel = mod.lessons[lessonIdx + 1].title;
    } else {
      nextHref = 'quiz.html';
      nextLabel = 'Module Quiz';
    }
  } else if (page.type === 'quiz') {
    const lastLesson = mod.lessons[mod.lessons.length - 1];
    prevHref = lastLesson.slug + '.html';
    prevLabel = lastLesson.title;
    if (modIdx < COURSE.modules.length - 1) {
      const nextMod = COURSE.modules[modIdx + 1];
      nextHref = `../${nextMod.slug}/index.html`;
      nextLabel = `Next: ${nextMod.title}`;
    }
  }

  let html = '';
  if (prevHref) {
    html += `<a href="${prevHref}" class="btn btn-secondary">← ${prevLabel}</a>`;
  }

  // Complete button (only for lesson pages)
  if (page.type === 'lesson') {
    const lessonId = page.moduleSlug + '-' + page.lessonSlug;
    const done = Progress.isComplete(lessonId);
    html += `<button class="btn btn-complete ${done ? 'completed' : ''}" id="mark-complete-btn" data-lesson-id="${lessonId}">
      ${done ? '✓ Completed' : 'Mark Complete'}
    </button>`;
  }

  html += '<span class="spacer"></span>';
  if (nextHref) {
    html += `<a href="${nextHref}" class="btn btn-primary">${nextLabel} →</a>`;
  }

  container.innerHTML = html;

  // Wire up mark complete button
  const btn = document.getElementById('mark-complete-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      const id = btn.dataset.lessonId;
      Progress.markComplete(id);
      btn.textContent = '✓ Completed';
      btn.classList.add('completed');
      buildSidebar();
      buildProgressBar();
      showToast('Lesson marked complete!');
    });
  }
}

// ---- Knowledge Check Quizzes ----

function initKnowledgeChecks() {
  document.querySelectorAll('.knowledge-check').forEach(kc => {
    const options = kc.querySelectorAll('.kc-option');
    const feedback = kc.querySelector('.kc-feedback');
    const resetBtn = kc.querySelector('.kc-reset');
    let answered = false;

    options.forEach(opt => {
      opt.addEventListener('click', () => {
        if (answered) return;
        answered = true;

        const isCorrect = opt.dataset.correct === 'true';

        options.forEach(o => {
          o.disabled = true;
          if (o.dataset.correct === 'true') {
            o.classList.add(isCorrect ? 'correct' : 'revealed-correct');
          } else if (o === opt) {
            o.classList.add('incorrect');
          }
        });

        if (feedback) {
          feedback.className = 'kc-feedback ' + (isCorrect ? 'correct' : 'incorrect');
          feedback.textContent = isCorrect
            ? '✓ Correct!'
            : '✗ Not quite — the correct answer is highlighted above.';
        }
      });
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        answered = false;
        options.forEach(o => {
          o.disabled = false;
          o.classList.remove('correct', 'incorrect', 'revealed-correct');
        });
        if (feedback) feedback.className = 'kc-feedback';
      });
    }
  });
}

// ---- Module Quiz Engine ----

function initModuleQuiz() {
  const quiz = document.getElementById('module-quiz');
  if (!quiz) return;

  const questions = quiz.querySelectorAll('.quiz-question');
  const submitBtn = document.getElementById('quiz-submit');
  const retryBtn = document.getElementById('quiz-retry');
  const results = document.getElementById('quiz-results');
  const progressFill = quiz.querySelector('.quiz-progress-fill');
  const progressLabel = quiz.querySelector('.quiz-progress-label');

  const totalQ = questions.length;
  let answered = 0;

  function updateProgress() {
    const pct = totalQ > 0 ? Math.round((answered / totalQ) * 100) : 0;
    if (progressFill) progressFill.style.width = pct + '%';
    if (progressLabel) progressLabel.textContent = `${answered} of ${totalQ} answered`;
    if (submitBtn) submitBtn.disabled = answered < totalQ;
  }

  questions.forEach((qEl, idx) => {
    const options = qEl.querySelectorAll('.quiz-option');
    let qAnswered = false;

    options.forEach((opt, optIdx) => {
      opt.addEventListener('click', () => {
        if (qAnswered) return;
        options.forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');

        if (!qAnswered) {
          qAnswered = true;
          answered++;
          updateProgress();
        }
      });
    });
  });

  updateProgress();

  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      let correct = 0;

      questions.forEach(qEl => {
        const correctIdx = parseInt(qEl.dataset.correct);
        const options = qEl.querySelectorAll('.quiz-option');
        const explanation = qEl.querySelector('.quiz-explanation');
        let userChoice = -1;

        options.forEach((opt, idx) => {
          if (opt.classList.contains('selected')) userChoice = idx;
        });

        options.forEach((opt, idx) => {
          opt.disabled = true;
          if (idx === correctIdx) {
            if (userChoice === idx) {
              opt.classList.add('graded-correct');
              correct++;
            } else {
              opt.classList.add('graded-missed');
            }
          } else if (idx === userChoice) {
            opt.classList.add('graded-wrong');
          }
        });

        if (explanation) explanation.classList.add('show');
      });

      submitBtn.style.display = 'none';

      const page = getCurrentPage();
      const mod = getModule(page.moduleSlug);
      const scoreCircle = document.getElementById('quiz-score-circle');
      const scoreNum = document.getElementById('quiz-score-num');
      const resultMsg = document.getElementById('quiz-result-msg');
      const resultSub = document.getElementById('quiz-result-sub');

      if (scoreNum) scoreNum.textContent = `${correct}/${totalQ}`;
      const pct = Math.round((correct / totalQ) * 100);
      const pass = pct >= 70;

      if (scoreCircle) scoreCircle.classList.add(pass ? 'pass' : 'fail');
      if (resultMsg) {
        resultMsg.textContent = pass
          ? 'Well done! You passed this module quiz.'
          : 'Keep reviewing — you can retry when ready.';
      }
      if (resultSub) {
        resultSub.textContent = pass
          ? `You answered ${correct} of ${totalQ} questions correctly (${pct}%).`
          : `You answered ${correct} of ${totalQ} correctly. Aim for 70% or better.`;
      }

      if (results) results.classList.add('show');
      results.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  if (retryBtn) {
    retryBtn.addEventListener('click', () => {
      questions.forEach(qEl => {
        const options = qEl.querySelectorAll('.quiz-option');
        const explanation = qEl.querySelector('.quiz-explanation');
        options.forEach(opt => {
          opt.disabled = false;
          opt.classList.remove('selected', 'graded-correct', 'graded-wrong', 'graded-missed');
        });
        if (explanation) explanation.classList.remove('show');
      });

      answered = 0;
      if (submitBtn) { submitBtn.style.display = ''; submitBtn.disabled = true; }
      if (results) results.classList.remove('show');
      const scoreCircle = document.getElementById('quiz-score-circle');
      if (scoreCircle) scoreCircle.classList.remove('pass', 'fail');
      updateProgress();
      quiz.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}

// ---- Dashboard ----

function initDashboard() {
  const page = getCurrentPage();
  if (page.type !== 'root') return;

  const totalLessons = Progress.totalLessons();
  const done = Progress.completedCount();
  const pct = totalLessons > 0 ? Math.round((done / totalLessons) * 100) : 0;

  const fill = document.getElementById('hero-progress-fill');
  const countEl = document.getElementById('hero-progress-count');
  const statEl = document.getElementById('hero-stat-done');

  if (fill) fill.style.width = pct + '%';
  if (countEl) countEl.textContent = `${done} of ${totalLessons} lessons complete`;
  if (statEl) statEl.textContent = done;

  const continueBtn = document.getElementById('continue-btn');
  if (continueBtn) {
    const last = Progress.getLastVisited();
    if (last && done > 0) {
      continueBtn.href = last;
      continueBtn.style.display = 'inline-flex';
    }
  }

  // Module cards progress
  COURSE.modules.forEach(mod => {
    const card = document.querySelector(`[data-module-card="${mod.slug}"]`);
    if (!card) return;

    const modDone = mod.lessons.filter(l => Progress.isComplete(mod.slug + '-' + l.slug)).length;
    const modPct = Math.round((modDone / mod.lessons.length) * 100);

    const bar = card.querySelector('.module-card-bar-fill');
    const prog = card.querySelector('.module-card-progress');
    if (bar) bar.style.width = modPct + '%';
    if (prog) prog.textContent = `${modDone}/${mod.lessons.length}`;

    if (modDone === mod.lessons.length) {
      card.classList.add('complete');
      const badge = card.querySelector('.module-card-badge');
      if (badge) badge.style.display = 'flex';
    }
  });
}

// ---- Toast notification ----

function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ---- Mobile sidebar toggle ----

function initMobileSidebar() {
  const toggle = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');

  if (!toggle || !sidebar) return;

  let overlay = document.getElementById('sidebar-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'sidebar-overlay';
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);
  }

  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
  });
}

// ---- Last visited tracking ----

function trackVisit() {
  const page = getCurrentPage();
  if (page.type === 'lesson' || page.type === 'module') {
    Progress.setLastVisited(window.location.href);
  }
}

// ---- Init ----

document.addEventListener('DOMContentLoaded', () => {
  buildSidebar();
  buildProgressBar();
  buildBreadcrumb();
  buildLessonNav();
  initKnowledgeChecks();
  initModuleQuiz();
  initDashboard();
  initMobileSidebar();
  trackVisit();
});
