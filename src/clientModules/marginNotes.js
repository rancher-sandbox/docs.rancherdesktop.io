// Render a blog post's footnotes as margin notes on wide viewports. Each note
// sits beside its reference marker, sliding down to avoid overlap when markers
// crowd together. This browser-only enhancement sits over the standard GFM
// footnotes, so the ordinary bottom-of-post list renders unchanged below the
// breakpoint and wherever scripts don't run (RSS, reader mode, no JavaScript).

const MIN_VIEWPORT = 997; // px; matches the 996px sidebar breakpoint, below which
                          // the grid collapses and the bottom footnote list returns
const MARKER_OFFSET = 6; // px a note rises toward its marker
const STACK_GAP = 16; // px minimum gap between stacked notes

function getContainer() {
  const container = document.getElementById('__blog-post-container');
  return container?.querySelector('section[data-footnotes]') ? container : null;
}

function teardown(container) {
  container.querySelector('.margin-note-rail')?.remove();
  container.classList.remove('margin-notes-active');
}

function build(container) {
  const refs = [...container.querySelectorAll('[data-footnote-ref]')];
  if (!refs.length) return;

  const rail = document.createElement('aside');
  rail.className = 'margin-note-rail';
  rail.setAttribute('aria-hidden', 'true'); // the bottom list stays the accessible copy
  container.appendChild(rail);

  const containerTop = container.getBoundingClientRect().top + window.scrollY;
  let previousBottom = 0;

  refs.forEach((ref) => {
    const id = ref.getAttribute('href').slice(1);
    const definition = document.getElementById(id);
    if (!definition) return;

    const clone = definition.cloneNode(true);
    clone.querySelectorAll('[data-footnote-backref]').forEach((el) => el.remove());
    // A one-paragraph note unwraps so its number sits inline with the text.
    const soleParagraph =
      clone.children.length === 1 && clone.firstElementChild.tagName === 'P'
        ? clone.firstElementChild
        : clone;

    const note = document.createElement('div');
    note.className = 'margin-note';
    note.innerHTML = `<span class="margin-note-number">${ref.textContent}.</span>${soleParagraph.innerHTML.trim()}`;
    rail.appendChild(note);

    const marker = ref.closest('sup') || ref;
    const highlight = (on) => {
      note.classList.toggle('is-highlighted', on);
      ref.classList.toggle('is-highlighted', on);
    };
    [note, marker].forEach((el) => {
      el.addEventListener('pointerenter', () => highlight(true));
      el.addEventListener('pointerleave', () => highlight(false));
    });

    const refTop = marker.getBoundingClientRect().top + window.scrollY - containerTop;
    const top = Math.max(
      refTop - MARKER_OFFSET,
      previousBottom ? previousBottom + STACK_GAP : 0,
    );
    note.style.top = `${top}px`;
    previousBottom = top + note.offsetHeight;
  });

  container.classList.add('margin-notes-active');
}

function layout() {
  const container = getContainer();
  if (!container) return;
  teardown(container);
  if (window.matchMedia(`(min-width: ${MIN_VIEWPORT}px)`).matches) {
    build(container);
  }
}

export function onRouteDidUpdate() {
  // Two frames: let the new route paint so getBoundingClientRect is accurate.
  requestAnimationFrame(() => requestAnimationFrame(layout));
}

if (typeof window !== 'undefined') {
  let frame = 0;
  const relayout = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(layout);
  };
  window.addEventListener('resize', relayout);
  window.addEventListener('load', relayout);
  // Web fonts change line heights, which shifts marker positions.
  document.fonts?.ready.then(relayout);

  // A marker links to the bottom footnote list, hidden while the rail is
  // active, so clicking it would scroll to that invisible target. The note
  // already sits beside the marker and highlights on hover, so just cancel the
  // jump.
  document.addEventListener('click', (event) => {
    const ref = event.target.closest?.('[data-footnote-ref]');
    const container = ref?.closest('#__blog-post-container');
    if (container?.classList.contains('margin-notes-active')) {
      event.preventDefault();
    }
  });
}
