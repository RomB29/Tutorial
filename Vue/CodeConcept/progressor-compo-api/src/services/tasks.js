let tasks = [];
let storageKey = "tasks-vue-compo-api";

function create(task) {
    if (tasks === null){
        tasks = [];
    }
    tasks = [task, ...tasks]; // ...tasks --> on récupère toutes les tâches 
    save();
    console.log('tasks', tasks);
}

function read() {
    tasks = retrieveTask();
    return tasks
}
function update_task(task){
    const index = tasks.findIndex(t => t.id === task.id);
    console.log("index", index);
    if (index === -1) {
        return 
    }
    tasks[index] = task;
    save();
}

function delete_task(id){
    tasks = tasks.filter(
        (t) => t.id !== id); // on ne garde que les id différent de ce que l'on aura choisit ( et on delete le reste)
    save();
    return tasks
}


// Convertisseur kebab format to User format (kebak format example --> "ok-name"  user format "Ok name")
function convert_case(temporalityKebabCase) {
    let result;
    switch (temporalityKebabCase) {
        case 'short-term':
            result = 'Short term';
            break;
        case 'medium-term':
            result = "Medium term";
            break;
        case 'long-term':
            result = "Long term";
            break;
        default:
            result = temporalityKebabCase;
    }
    return result;
}

function save() {
    localStorage.setItem(storageKey, JSON.stringify(tasks)); // JSON.stringify permet de prendre les objets et de les passer en string
}

function retrieveTask() {
    const fromLocalStorage = localStorage.getItem(storageKey);
    return JSON.parse(fromLocalStorage);
}
export default {
    create,
    read,
    update_task,
    delete_task,
    convert_case,
}
