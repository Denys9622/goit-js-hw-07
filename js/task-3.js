document.getElementById('name-input').addEventListener('input', function () {
  var input = this.value.trim();
  var outputSpan = document.getElementById('name-output');
  if (input === '') {
    outputSpan.textContent = 'Anonymous';
  } else {
    outputSpan.textContent = input;
  }
});
