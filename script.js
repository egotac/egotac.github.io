const copyButton = document.querySelector('.copy-button');
const bibtex = document.querySelector('#bibtex');

copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(bibtex.textContent);
    copyButton.textContent = 'Copied';
    window.setTimeout(() => { copyButton.textContent = 'Copy BibTeX'; }, 2000);
  } catch {
    copyButton.textContent = 'Select and copy below';
  }
});
