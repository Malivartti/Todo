
import { UI_ELEMENTS } from './view.js';


function deleteTaskUI() {
	this.parentElement.remove();
}

function checkBoxTaskUI() {
	this.parentElement.parentElement.classList.toggle('active');
}

function addTaskUI() {
	let cloneEl = tmpl.content.cloneNode(true)
	cloneEl.querySelector('.todo__delete-icon').addEventListener('click', deleteTaskUI)
	cloneEl.querySelector('.todo__checkbox').addEventListener('click', checkBoxTaskUI)
	
	const emptyString = !this.firstElementChild.value.trim().length
	if (emptyString) return false
	cloneEl.querySelector('.todo__text').textContent = this.firstElementChild.value
	UI_ELEMENTS.INPUT_BTN.forEach(item => item.form.reset());
	
	this.parentElement.lastElementChild.append(cloneEl)
	return false
}

UI_ELEMENTS.ADD_FORM.forEach(item => item.onsubmit = addTaskUI)