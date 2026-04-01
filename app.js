// ═══ AUTH ═══
const PASS_HASH = "a]kP2x!9vR"; // simple obfuscation — not military-grade, just keeps casual visitors out
const CORRECT = "Maketugc111";

document.getElementById('login-form').addEventListener('submit', e => {
  e.preventDefault();
  const pw = document.getElementById('password-input').value;
  if (pw === CORRECT) {
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
    initDashboard();
  } else {
    document.getElementById('login-error').textContent = 'Incorrect password';
    document.getElementById('password-input').value = '';
  }
});

// ═══ TABS ═══
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
  });
});

// ═══ HELPERS ═══
const fmt = n => n == null ? 'N/A' : n.toLocaleString();
const fmtMoney = n => n == null ? 'N/A' : '$' + n.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
const fmtViews = n => {
  if (n == null) return 'N/A';
  if (n >= 1000000) return (n/1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n/1000).toFixed(1) + 'K';
  return n.toString();
};

function statusBadge(status) {
  const labels = { star: 'Star', active: 'Active', watch: 'Watch', 'at-risk': 'At Risk', fire: 'Fire' };
  return `<span class="badge badge-${status}">${labels[status] || status}</span>`;
}

function trendIcon(trend) {
  const icons = { up: '&#9650;', down: '&#9660;', stable: '&#9654;', new: '&#9733;', none: '&mdash;' };
  return `<span class="trend-${trend}">${icons[trend] || ''}</span>`;
}

function priorityBadge(p) {
  const colors = { high: 'rc-priority-high', medium: 'rc-priority-medium', low: 'rc-priority-low' };
  return `<span class="rc-priority ${colors[p]}">${p}</span>`;
}

// ═══ INIT ═══
function initDashboard() {
  const D = DASHBOARD_DATA;
  document.getElementById('last-updated').textContent = `Updated: ${D.lastUpdated} | Week ${D.weekNumber}`;
  renderMetrics(D);
  renderCharts(D);
  renderCreators(D);
  renderHooks(D);
  renderTesting(D);
  renderDecisions(D);
  renderResearch(D);
  renderPriorityActions(D);
}

// ═══ METRICS ═══
function renderMetrics(D) {
  const s = D.summary;
  const metrics = [
    { label: 'Total Spend', value: fmtMoney(s.totalSpend), sub: `${fmt(s.videosPaid)} videos paid` },
    { label: 'Total Views', value: fmtViews(s.totalViews), sub: `${fmt(s.totalPosts)} posts` },
    { label: 'Avg CPM', value: fmtMoney(s.avgCPM), sub: 'Cost per 1K views' },
    { label: 'Total Owed', value: fmtMoney(s.totalOwed), sub: 'Pending payouts' },
    { label: 'Active Creators', value: D.creators.filter(c => c.status !== 'fire').length, sub: `${D.creators.length} total` },
    { label: 'Avg Views/Video', value: fmtViews(Math.round(s.totalViews / s.videosPaid)), sub: 'Across all creators' },
  ];
  document.getElementById('metrics-grid').innerHTML = metrics.map(m => `
    <div class="metric-card">
      <div class="label">${m.label}</div>
      <div class="value">${m.value}</div>
      <div class="sub">${m.sub}</div>
    </div>
  `).join('');
}

// ═══ CHARTS ═══
function renderCharts(D) {
  const creators = D.creators.filter(c => c.views > 0);
  const chartDefaults = { responsive: true, plugins: { legend: { labels: { color: '#888', font: { size: 11 } } } } };

  // Creator Views Bar
  new Chart(document.getElementById('chart-creator-views'), {
    type: 'bar',
    data: {
      labels: creators.map(c => c.name.split(' ')[0]),
      datasets: [{
        label: 'Total Views',
        data: creators.map(c => c.views),
        backgroundColor: creators.map(c => {
          if (c.status === 'star') return 'rgba(16,185,129,0.6)';
          if (c.status === 'active') return 'rgba(59,130,246,0.6)';
          if (c.status === 'watch') return 'rgba(245,158,11,0.6)';
          return 'rgba(249,115,22,0.6)';
        }),
        borderRadius: 6,
      }]
    },
    options: { ...chartDefaults, indexAxis: 'y', scales: { x: { ticks: { color: '#666', callback: v => fmtViews(v) }, grid: { color: 'rgba(255,255,255,0.04)' } }, y: { ticks: { color: '#ccc' }, grid: { display: false } } } }
  });

  // CPM Bar
  const cpmCreators = creators.filter(c => c.cpm != null).sort((a,b) => a.cpm - b.cpm);
  new Chart(document.getElementById('chart-cpm'), {
    type: 'bar',
    data: {
      labels: cpmCreators.map(c => c.name.split(' ')[0]),
      datasets: [{
        label: 'CPM ($)',
        data: cpmCreators.map(c => c.cpm),
        backgroundColor: cpmCreators.map(c => c.cpm < 1 ? 'rgba(16,185,129,0.6)' : c.cpm < 3 ? 'rgba(245,158,11,0.6)' : 'rgba(239,68,68,0.6)'),
        borderRadius: 6,
      }]
    },
    options: { ...chartDefaults, scales: { y: { ticks: { color: '#666', callback: v => '$'+v }, grid: { color: 'rgba(255,255,255,0.04)' } }, x: { ticks: { color: '#ccc' }, grid: { display: false } } } }
  });

  // Status Doughnut
  const statusCounts = {};
  D.creators.forEach(c => { statusCounts[c.status] = (statusCounts[c.status] || 0) + 1; });
  const statusColors = { star: '#34d399', active: '#60a5fa', watch: '#fbbf24', 'at-risk': '#fb923c', fire: '#f87171' };
  new Chart(document.getElementById('chart-status'), {
    type: 'doughnut',
    data: {
      labels: Object.keys(statusCounts).map(s => s.charAt(0).toUpperCase() + s.slice(1).replace('-',' ')),
      datasets: [{ data: Object.values(statusCounts), backgroundColor: Object.keys(statusCounts).map(s => statusColors[s]) }]
    },
    options: { ...chartDefaults, cutout: '65%' }
  });

  // Delivery Bar
  new Chart(document.getElementById('chart-delivery'), {
    type: 'bar',
    data: {
      labels: D.creators.map(c => c.name.split(' ')[0]),
      datasets: [
        { label: 'Delivered', data: D.creators.map(c => parseInt(c.delivered.split('/')[0])), backgroundColor: 'rgba(16,185,129,0.6)', borderRadius: 6 },
        { label: 'Expected', data: D.creators.map(c => parseInt(c.delivered.split('/')[1])), backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 6 }
      ]
    },
    options: { ...chartDefaults, scales: { y: { ticks: { color: '#666' }, grid: { color: 'rgba(255,255,255,0.04)' } }, x: { ticks: { color: '#ccc', font: { size: 9 } }, grid: { display: false } } } }
  });
}

// ═══ CREATORS ═══
function renderCreators(D) {
  const container = document.getElementById('creators-grid');
  function render(filter) {
    const filtered = filter === 'all' ? D.creators : D.creators.filter(c => c.status === filter);
    container.innerHTML = filtered.map((c, i) => `
      <div class="creator-card" onclick="this.classList.toggle('expanded')">
        <div class="creator-top">
          <div>
            <div class="creator-name">${c.name} ${trendIcon(c.trend)}</div>
            <div class="creator-handles">${c.handles.join(' / ')}</div>
          </div>
          ${statusBadge(c.status)}
        </div>
        <div class="creator-stats">
          <div class="stat"><div class="stat-val">${fmtViews(c.views)}</div><div class="stat-label">Views</div></div>
          <div class="stat"><div class="stat-val">${fmtViews(c.engagement)}</div><div class="stat-label">Engagement</div></div>
          <div class="stat"><div class="stat-val">${fmt(c.posts)}</div><div class="stat-label">Posts</div></div>
          <div class="stat"><div class="stat-val">${fmtViews(c.avgViews)}</div><div class="stat-label">Avg Views</div></div>
          <div class="stat"><div class="stat-val">${c.cpm != null ? '$'+c.cpm.toFixed(2) : 'N/A'}</div><div class="stat-label">CPM</div></div>
          <div class="stat"><div class="stat-val">${fmtMoney(c.owed)}</div><div class="stat-label">Owed</div></div>
        </div>
        <div class="action-text">${c.action}</div>
        <div class="creator-details">
          <div class="detail-row">
            <div class="detail-label">Delivery</div>
            <div class="detail-value">${c.delivered} posts delivered</div>
          </div>
          ${c.topHook ? `<div class="detail-row">
            <div class="detail-label">Top Hook</div>
            <div class="detail-value">"${c.topHook}" &mdash; ${fmtViews(c.topHookViews)} views</div>
          </div>` : ''}
          <div class="detail-row">
            <div class="detail-label">Analysis</div>
            <div class="detail-value">${c.notes}</div>
          </div>
        </div>
      </div>
    `).join('');
  }

  render('all');

  document.querySelectorAll('#tab-creators .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#tab-creators .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render(btn.dataset.filter);
    });
  });
}

// ═══ HOOKS ═══
function renderHooks(D) {
  const container = document.getElementById('hook-categories');
  container.innerHTML = D.hookCategories.map(cat => `
    <div class="hook-cat" onclick="this.classList.toggle('expanded')">
      <div class="hook-cat-top">
        <div>
          <span class="hook-cat-name">${cat.name}</span>
          <span class="badge badge-${cat.status === 'proven' ? 'active' : cat.status === 'under-tested' ? 'watch' : cat.status === 'high-potential' ? 'star' : 'at-risk'}" style="margin-left:10px">${cat.status.replace('-',' ')}</span>
        </div>
        <div class="hook-cat-stats">
          <span>Avg: ${fmtViews(cat.avgViews)}</span>
          <span>Used: ${cat.timesUsed}x</span>
          <span>Best: ${fmtViews(cat.bestViews)}</span>
        </div>
      </div>
      <div class="hook-cat-details">
        <div class="detail-row">
          <div class="detail-label">Best Example</div>
          <div class="hook-example">"${cat.bestExample}"</div>
        </div>
        <div class="research-box">
          <div class="rb-label">Why This Hook Works</div>
          <p>${cat.whyItWorks}</p>
        </div>
        <div class="research-box" style="border-left-color: #10b981; background: rgba(16,185,129,0.08);">
          <div class="rb-label" style="color: #10b981;">Research Backing</div>
          <p>${cat.researchBacking}</p>
        </div>
        <div class="detail-row" style="margin-top:16px">
          <div class="detail-label">Next Tests</div>
          ${cat.nextTests.map(t => `<div class="hook-example">${t}</div>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// ═══ TESTING PIPELINE ═══
function renderTesting(D) {
  const container = document.getElementById('testing-pipeline');
  function render(filter) {
    const filtered = filter === 'all' ? D.hooksToTest : D.hooksToTest.filter(h => h.priority === filter);
    container.innerHTML = filtered.map(h => `
      <div class="test-card priority-${h.priority}" onclick="this.classList.toggle('expanded')">
        <div class="test-hook">${h.hook}</div>
        <div class="test-meta">
          <span>${statusBadge(h.priority === 'high' ? 'fire' : h.priority === 'medium' ? 'watch' : 'active')} ${h.priority.toUpperCase()}</span>
          <span>&#128100; ${h.assignTo}</span>
          <span>&#128247; ${h.platform}</span>
          <span>&#127991; ${h.category}</span>
        </div>
        <div class="test-details">
          <div class="research-box">
            <div class="rb-label">Why Test This Hook</div>
            <p>${h.rationale}</p>
          </div>
          <div class="research-box" style="border-left-color: #10b981; background: rgba(16,185,129,0.08);">
            <div class="rb-label" style="color: #10b981;">Research Basis</div>
            <p>${h.researchBasis}</p>
          </div>
        </div>
      </div>
    `).join('');
  }

  render('all');

  document.querySelectorAll('#tab-testing .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#tab-testing .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render(btn.dataset.filter);
    });
  });
}

// ═══ DECISIONS ═══
function renderDecisions(D) {
  const container = document.getElementById('decisions-log');
  container.innerHTML = D.weeklyDecisions.map(week => `
    <div class="decision-week card">
      <h3>Week ${week.week} &mdash; ${week.date}</h3>
      ${week.decisions.map(d => `
        <div class="decision-item">
          <div>${statusBadge(d.type === 'fire' ? 'fire' : d.type === 'test' ? 'active' : d.type === 'scale' ? 'star' : d.type === 'watch' ? 'watch' : 'at-risk')}</div>
          <div>
            <strong style="color:#fff">${d.creator}</strong><br>
            <span style="font-size:13px;color:#ccc">${d.action}</span>
          </div>
          <div>
            <div class="reasoning">${d.reasoning}</div>
            ${d.outcome ? `<div class="outcome">${d.outcome}</div>` : ''}
            ${d.result ? `<div style="color:#34d399;font-size:12px;margin-top:4px">Result: ${d.result}</div>` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');
}

// ═══ RESEARCH ═══
function renderResearch(D) {
  const container = document.getElementById('research-notes');
  container.innerHTML = D.trendResearch.map(r => `
    <div class="research-card">
      <h4>${r.title} ${priorityBadge(r.priority)}</h4>
      <div class="rc-source">${r.source} &mdash; ${r.date}</div>
      <div class="rc-summary">${r.summary}</div>
      <div class="rc-action">${r.actionable}</div>
    </div>
  `).join('');
}

// ═══ PRIORITY ACTIONS ═══
function renderPriorityActions(D) {
  const actions = [
    { text: '<strong>TERMINATE Ihasmim Amorim</strong> — 0 posts, 0 views, 0 engagement. Immediate cut.' },
    { text: '<strong>Brief Teya on storytelling origin hook</strong> — "The contractor who saved my $40K renovation..." Her 7.19% eng rate + emotional delivery = best candidate for the #1 hook category.' },
    { text: '<strong>Brief Dominik on storytelling origin hook</strong> — His $0.26 CPM means any view increase has massive ROI leverage.' },
    { text: '<strong>Refresh Jett\'s hooks</strong> — Retire "goated" (12+ uses, fatigued). Assign "broken floor plan" trend + competitor contrast angles.' },
    { text: '<strong>Give Julian & David final hook tests</strong> — Both have 1 week. $6.10 and $7.48 CPM are unsustainable. If no improvement, cut both.' },
    { text: '<strong>Brief ALL creators on layered hook strategy</strong> — Visual interrupt (0-1s) + text overlay (1-2s) + verbal hook (2-3s). Single hooks cap at 60% retention; layered hits 90%.' },
  ];
  document.getElementById('priority-actions').innerHTML = actions.map((a, i) => `
    <div class="priority-item">
      <div class="priority-num">${i + 1}</div>
      <div class="priority-text">${a.text}</div>
    </div>
  `).join('');
}
