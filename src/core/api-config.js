export const fetchTasks = {
  path: '/api/books',
  method: 'GET'
};

export const createTask = {
  path: '/api/v001/tasks',
  method: 'POST'
};

export const deleteTasks = {
  path: '/api/tasks/:id',
  method: 'DELETE'
};

// create Request (deleteTasks, {id:'001'})
