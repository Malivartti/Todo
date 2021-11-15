const LIST_STATUS = ['To Do', 'In Progress', "Done"];
const LIST_PRIORITY = ['high', 'low'];
let id = 1;
let task;
let list = [];


function addTask(name, status="To Do", priority='low') {
  list.push({id, name, status, priority});
  id++;
};

function changeStatus(name, status, priority) {
  task = list.find(item => (item.name == name));

  if (task) {
    if (status) task.status = status;
    if (priority) task.priority = priority;
  };
};

function deleteTask(name) {
  task = list.find(item => (item.name == name));

  if (task){
    list.splice(list.indexOf(task), 1);
  };
};

function showBy(condition) {
  let listShow = (condition == "status") ? LIST_STATUS : (condition == "priority") ? LIST_PRIORITY : [];

  for (let title of listShow) {
    let paragraph = (list.filter(item => item[condition] == title).length != 0)
    ? list.filter(item => item[condition] == title).map(item => "\n  " + item.name) 
    : ["\n  -"];

    console.log(title + ":" + paragraph.join(''));
  };
};


addTask("first");
addTask("second");
addTask("third");
addTask("fourth");
changeStatus("second", "Done");
changeStatus("third", "In Progress", 'high');
deleteTask("second");
showBy("status");
console.log("-----------------------------");
showBy("priority");
