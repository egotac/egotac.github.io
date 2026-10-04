const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav-links');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('is-open', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open navigation');
  document.body.style.overflow = '';
}));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px' });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

document.querySelectorAll('.video-shell').forEach((shell) => {
  const video = shell.querySelector('video');
  const button = shell.querySelector('.play-button');
  const toggleVideo = () => {
    if (video.paused) {
      video.play();
      shell.classList.add('is-playing');
    } else {
      video.pause();
      shell.classList.remove('is-playing');
    }
  };
  button.addEventListener('click', toggleVideo);
  video.addEventListener('click', toggleVideo);
});

const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      const video = entry.target.querySelector('video');
      video.pause();
      entry.target.classList.remove('is-playing');
    }
  });
}, { threshold: 0.05 });
document.querySelectorAll('.video-shell').forEach((shell) => videoObserver.observe(shell));

const copyButton = document.querySelector('.copy-button');
copyButton?.addEventListener('click', async () => {
  const citation = document.querySelector('#bibtex').textContent;
  try {
    await navigator.clipboard.writeText(citation);
    copyButton.textContent = 'Copied';
    setTimeout(() => { copyButton.textContent = 'Copy'; }, 1800);
  } catch {
    copyButton.textContent = 'Select text';
  }
});
