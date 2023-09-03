function copyToClipboard(elementId, copiedTextId) {
    const textElement = document.getElementById(elementId);
    const copiedTextElement = document.getElementById(copiedTextId);

    const textToCopy = textElement.innerText;

    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    copiedTextElement.style.display = 'inline';
    copiedTextElement.classList.add('show');
    setTimeout(function() {
      copiedTextElement.classList.remove('show');
      setTimeout(function() {
        copiedTextElement.style.display = 'none';
      }, 300);
    }, 2000);
  }