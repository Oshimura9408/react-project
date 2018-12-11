import React from 'react';
import Task from './task/task';

const tasks = [
  {
    id: '1',
    text: 'React',
    isCompleted: true
  },
  {
    id: '2',
    text: 'Create components',
    isCompleted: true
  },
  {
    id: '3',
    text: 'Props',
    isCompleted: true
  },
  {
    id: '4',
    text: 'React Router',
    isCompleted: false
  },
  {
    id: '5',
    text: 'State',
    isCompleted: false
  }
];

function Tasks() {
  return (
    <div className="tasks">
      Тут будет много компонентов задач:
      {tasks.map(data => (
        <Task data={data} key={data.id} />
      ))}
    </div>
  );
}

export default Tasks;
