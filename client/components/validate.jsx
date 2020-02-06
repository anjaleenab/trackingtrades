
export default function Validate(props, name) {
  console.log(document.querySelector('input').getAttribute('style'));
  let errorDiv = document.getElementById('errorMessage');
  errorDiv.textContent = '';
  if (!event.target.value) {
    event.target.closest('.data-row-input').setAttribute('className', 'error');
    showError();
    // let width = event.target.getAttribute('style');
    // event.target.setAttribute('style', width + ' backgroundColor: #FFA98F');
  } else {
    if (name === 'Date') {
      const date = new Date();
      if (event.target.value.length === 10) {
        const values = event.target.value.split('');
        const numbers = values.map(value => {
          if (value === '-' || value === '/') {
            return typeof (value);
          } else {
            let validNum = /^[0-9]/;
            let number = parseInt(value);
            if (validNum.test(number)) {
              return typeof (number);
            } else {
              errorDiv.textContent += 'Date must be in date format Ex: 01-01-' + date.getFullYear() +
                ' or Ex: 01/01/' + date.getFullYear();
              showError();
            }
          }
        });
        let valid = ['number', 'number', 'string', 'number', 'number', 'string', 'number', 'number', 'number', 'number'];
        if (numbers.join('') !== valid.join('')) {
          errorDiv.textContent += 'Date must be in date format Ex: 01-01-' + date.getFullYear() +
            ' or Ex: 01/01/' + date.getFullYear();
          showError();
        } else {
          errorDiv.textContent = '';
        }
      } else if (event.target.value.length !== 10) {
        errorDiv.textContent += 'Date must be in date format Ex: 01-01-' + date.getFullYear() +
          ' or Ex: 01/01/' + date.getFullYear();
        showError();
      }
    } else if (name === 'Quantity') {
      let letters = /[A-z]/;
      let symbols = /[\\/!@#$%^&*(){}`"'~|><;:/ = +]+/;
      let word = event.target.value[event.target.value.length - 1];
      if (letters.test(word) || symbols.test(word)) {
        event.target.value = event.target.value.substring(0, word);
      }
    }
  }
}

// console.log(event.target.closest('.data-row-input'));
// console.log(event.target.closest('.data-row-input').setAttribute('className', 'error'));

function showError() {
  let width = event.target.getAttribute('style');
  event.target.setAttribute('style', width + 'background-color: #FFA98F;');
}
