
export default function Validate(props, name) {
  let errorDiv = document.getElementById('errorMessage');
  if (!event.target.value) {
    showError();
  } else if (event.target.value) {
    if (name === 'Date') {
      let letters = /[A-z]/;
      let symbols = /[\\/!@#$%^&*(){}`"'~|><;:/ = +]+/;
      let word = event.target.value[event.target.value.length - 1];
      const date = new Date();
      if (letters.test(word) || symbols.test(word)) {
        errorDiv.textContent = event.target.name + ' cannot have letters or symbols';
        showError();
      } else if (event.target.value.length === 10) {
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
              errorDiv.textContent = 'Date must be in date format Ex: 01-01-' + date.getFullYear() +
                ' or Ex: 01/01/' + date.getFullYear();
              showError();
            }
          }
        });
        let valid = ['number', 'number', 'string', 'number', 'number', 'string', 'number', 'number', 'number', 'number'];
        if (numbers.join('') !== valid.join('')) {
          errorDiv.textContent = 'Date must be in date format Ex: 01-01-' + date.getFullYear() +
            ' or Ex: 01/01/' + date.getFullYear();
          showError();
        } else {
          showError('#FFFFFF;');
        }
      } else if (event.target.value.length !== 10) {
        errorDiv.textContent = 'Date must be in date format Ex: 01-01-' + date.getFullYear() +
          ' or Ex: 01/01/' + date.getFullYear();
        showError();
      }
    } else if (name === 'Quantity' || name === 'Price-Bought' || name === 'Price-Sold' || name === 'Profit-Loss') {
      let letters = /[A-z]/;
      let symbols = /[\\/!@#$%^&*(){}`"'~|><;:/ = +]+/;
      let word = event.target.value[event.target.value.length - 1];
      if (letters.test(word) || symbols.test(word)) {
        errorDiv.textContent = event.target.name + ' cannot have letters or symbols that are not commas or decimals';
        showError();
      } else {
        showError('#FFFFFF;');
      }
    }
  }
}

function showError(color = '#FFA98F;') {
  let width = event.target.getAttribute('style');
  event.target.setAttribute('style', width + 'background-color:' + color);
  if (color === '#FFFFFF;') {
    document.getElementById('errorMessage').textContent = '';
  }
}
