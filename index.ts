// Import stylesheets
import './style.css';

let aPrintModule  = require('./printModule');
aPrintModule.printMessage1('This is one');
aPrintModule.printMessage2('This is message Two');

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;