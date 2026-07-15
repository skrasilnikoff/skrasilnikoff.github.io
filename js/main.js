document.addEventListener('DOMContentLoaded', () => {
  const detailText = document.getElementById('skill-detail-text');
  const statusEl = document.getElementById('skill-status');
  const moduleEl = document.getElementById('skill-module');
  const bootContainer = document.getElementById('boot-sequence');
  const dossierContent = document.getElementById('dossier-content');
  const operatorId = document.getElementById('operator-id');
  const vignette = document.querySelector('.crt-vignette');
  const forkSvg = document.getElementById('fork-svg');
  const treeCore = document.getElementById('tree-core');
  const branchWp = document.getElementById('branch-wp');
  const branchLv = document.getElementById('branch-lv');
  const skillNodes = document.querySelectorAll('.skill-node[data-detail]');

  const defaultDetail = 'Hover or focus a skill node to inspect module.';
  const bootLines = [
    'INIT OPERATOR_CORE...',
    'LOAD MODULES: WP, LARAVEL... OK',
    'AUTH: REMOTE // UA',
    'READY',
  ];

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let clearTimer = null;

  if (!reducedMotion && vignette) {
    vignette.classList.add('crt-flicker');
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        if (e.target.id === 'skill-section' && forkSvg && !reducedMotion) {
          forkSvg.classList.add('drawn');
        }
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

  function revealConsoleBlocks() {
    document.querySelectorAll('.console-block').forEach((block, i) => {
      block.removeAttribute('hidden');
      block.style.transitionDelay = `${i * 0.07}s`;
      io.observe(block);
    });
  }

  function typeBootLine(line, container) {
    return new Promise((resolve) => {
      const el = document.createElement('span');
      el.className = 'boot-line-item';
      container.appendChild(el);

      if (reducedMotion) {
        el.textContent = line;
        resolve();
        return;
      }

      let i = 0;
      const tick = () => {
        if (i < line.length) {
          el.textContent += line[i++];
          setTimeout(tick, 28);
        } else {
          resolve();
        }
      };
      tick();
    });
  }

  async function runBoot() {
    if (!bootContainer) return;

    for (const line of bootLines) {
      await typeBootLine(line, bootContainer);
      await delay(reducedMotion ? 0 : 280);
    }

    if (!reducedMotion) {
      const cursor = document.createElement('span');
      cursor.className = 'boot-cursor-line';
      cursor.textContent = '_';
      bootContainer.appendChild(cursor);
      await delay(400);
    }

    if (dossierContent) {
      dossierContent.removeAttribute('hidden');
      requestAnimationFrame(() => dossierContent.classList.add('revealed'));
    }

    if (statusEl) statusEl.textContent = 'STANDBY';
    if (detailText) detailText.textContent = defaultDetail;

    revealConsoleBlocks();
  }

  function delay(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }

  if (reducedMotion) {
    bootLines.forEach((line) => {
      const el = document.createElement('span');
      el.className = 'boot-line-item';
      el.textContent = line;
      bootContainer?.appendChild(el);
    });
    dossierContent?.removeAttribute('hidden');
    dossierContent?.classList.add('revealed');
    if (statusEl) statusEl.textContent = 'STANDBY';
    if (detailText) detailText.textContent = defaultDetail;
    revealConsoleBlocks();
    if (forkSvg) forkSvg.classList.add('drawn');
  } else {
    runBoot();
  }

  function clearChain() {
    skillNodes.forEach((n) => n.classList.remove('chain-lit'));
    treeCore?.classList.remove('chain-lit');
    branchWp?.classList.remove('chain-lit');
    branchLv?.classList.remove('chain-lit');
  }

  function highlightChain(node) {
    clearChain();
    const activeChain = node.dataset.chain || '';
    if (!activeChain) return;

    const parts = activeChain.split(',');

    if (parts.includes('php')) treeCore?.classList.add('chain-lit');
    if (parts.includes('wp')) branchWp?.classList.add('chain-lit');
    if (parts.includes('lv')) branchLv?.classList.add('chain-lit');

    skillNodes.forEach((n) => {
      const nc = n.dataset.chain || '';
      if (activeChain === nc || activeChain.startsWith(`${nc},`)) {
        n.classList.add('chain-lit');
      }
    });
  }

  function setActiveNode(node) {
    if (clearTimer) {
      clearTimeout(clearTimer);
      clearTimer = null;
    }

    skillNodes.forEach((n) => n.classList.remove('is-active'));
    clearChain();

    if (node) {
      node.classList.add('is-active');
      highlightChain(node);

      const module = node.dataset.module || '—';
      if (detailText) detailText.textContent = node.dataset.detail || defaultDetail;
      if (statusEl) statusEl.textContent = 'UNLOCKED';
      if (moduleEl) moduleEl.textContent = module;
    }
  }

  function clearActiveNode() {
    skillNodes.forEach((n) => n.classList.remove('is-active'));
    clearChain();
    if (detailText) detailText.textContent = defaultDetail;
    if (statusEl) statusEl.textContent = 'STANDBY';
    if (moduleEl) moduleEl.textContent = '—';
  }

  function scheduleClear(node) {
    if (clearTimer) clearTimeout(clearTimer);
    clearTimer = setTimeout(() => {
      if (!node.matches(':hover') && !node.matches(':focus')) {
        clearActiveNode();
      }
      clearTimer = null;
    }, 40);
  }

  skillNodes.forEach((node) => {
    node.addEventListener('mouseenter', () => setActiveNode(node));
    node.addEventListener('focus', () => setActiveNode(node));
    node.addEventListener('mouseleave', () => scheduleClear(node));
    node.addEventListener('blur', () => scheduleClear(node));
  });

  if (operatorId && !reducedMotion) {
    const original = operatorId.textContent;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ_';

    operatorId.addEventListener('mouseenter', () => {
      const scrambled = original.split('');
      const indices = [];
      while (indices.length < 2) {
        const idx = Math.floor(Math.random() * scrambled.length);
        if (!indices.includes(idx)) indices.push(idx);
      }
      indices.forEach((i) => {
        scrambled[i] = chars[Math.floor(Math.random() * chars.length)];
      });
      operatorId.textContent = scrambled.join('');
      setTimeout(() => { operatorId.textContent = original; }, 200);
    });
  }
});
