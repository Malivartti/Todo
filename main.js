const list = {};

function addTask(task) {
  if (!(task in list)) {
    list[task] = 'To Do';
  } else console.log("Задача " + task + " уже существует");
};

function changeStatus(task, status) {
  if (task in list) {
    if (["To Do", "In Progress", "Done"].indexOf(status) != -1) {
      list[task] = status;
    } else console.log("Статуса " + status + " не существует");
  } else console.log("Задачи " + task + " не существует"); 
};

function deleteTask(task) {
  if (task in list) {
    delete list[task]; 
  } else console.log("Задачи " + task + " не существует");
};

function showList() {
  let toDo = 'To Do: \n';
  let inProgress = 'In Progress: \n';
  let done = 'Done: \n';
  for (let key in list) {
    if (list[key] == 'To Do') {
      toDo += ` "${key}",\n`;
    } else if (list[key] == 'In Progress') {
      inProgress += ` "${key}",\n`;
    } else done += ` "${key}",\n`;
  }
  if (toDo == 'To Do: \n') toDo += ' -\n';
  if (inProgress == 'In Progress: \n') inProgress += ' -\n';
  if (done == 'Done: \n') done += ' -\n';
  console.log(toDo + inProgress + done);
}

addTask("first");
addTask("second");
addTask("third");
changeStatus("second", "Done");
changeStatus("third", "In Progress");
deleteTask("second");
showList();