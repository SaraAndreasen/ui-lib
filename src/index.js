import Tooltip from './ninja-ui/tooltip.js'
import Dropdown from './ninja-ui/dropdown.js';
import Tabs from './ninja-ui/tabs.js';
import Snackbar from './ninja-ui/snackbar.js';

//create tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();


//Create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
})

//create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();


//Create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', () => {
    snackbar.show('You clicked me :)');
});





console.log('test');
