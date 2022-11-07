import './style.css'
import javascriptLogo from './javascript.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
     <a href="https://wwilsman.github.io/Datepicker.js/" target="_blank">
      <img src="datepicker.png" class="logo vanilla" alt="datepicker"/>
    </a>
    <h1>Hello DatePicker!</h1>
    <div class="card">
        <div>
            <input type="text" id="datepicker">
        </div>
    </div>
  </div>
`

const arr = [
    new Date('2022-11-11'),
    new Date('2022-11-24'),
    new Date('2022-11-15'),
];

var datepicker = new Datepicker('#datepicker',{
    within:arr,
});

