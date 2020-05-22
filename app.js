const hourForm = document.querySelector('#hour-form')
const remainingHoursSpan = document.querySelector('.remaining-hours');
const hourInputs = document.querySelectorAll('.hour-input');
const TOTHOURS = 24;

function calcTotalHours(hourFields) {
  
} 

function handleKeyEvent(e) {
  if(!Number(e.key)) { return };

  const hourInputsArr = Array.from(hourInputs);
  const totInputHours = hourInputsArr.reduce((acc, cur) => {
    return acc += Number(cur.value);
  }, 0);

  remainingHoursSpan.innerText = `${TOTHOURS - totInputHours}` 

  // console.log(totInputHours);

  // console.log(hourInputsArr);

  // console.log(e.key);
  
  // const categoryHours = Number(categoryField.value);
  
}

hourForm.addEventListener('keyup', handleKeyEvent);
