const remainingHoursSpan = document.querySelector('.remainingHours');
const categoryField = document.querySelector('input[name="category"]');
const TOTHOURS = 24;

function handleKeyEvent(e) {
  const categoryHours = Number(categoryField.value);
  remainingHoursSpan.innerText = `${TOTHOURS - categoryHours}` 
}

categoryField.addEventListener('keyup', handleKeyEvent);
