import React from 'react';
import { Switch } from "react-foundation";
import "./scss/index.css";

const TodosView = ({
  className = "",
  tasks = [],
  onTaskChange,
  toggleDisplayStatus
}) => (
  <div className={`Todos ${className} grid-x`}>
    <div className={`Todos-title cell small-6`}>To Do List</div>
    <div className={`Todos-switch cell small-6 grid-x`}>
      <span className={`Todos-text cell small-11`}>Display Completed</span>
      <Switch className={`Todos-control cell align-right auto`} onChange={() => toggleDisplayStatus()}/>
    </div>
    <div className={`Todos-tasks cell small-12 grid-x`}>
      {
         tasks.map(({ name = "", status = false }) =>
          <div className={`Todos-task cell small-12`}>
            <label className={`Todos-label`}>
              <input
                onChange={() => onTaskChange(tasks, name)}
                type="checkbox" name={name}
                defaultChecked={status}
              />
              {name}
            </label>
          </div>
          )
      }
    </div>
  </div>
);

export { TodosView };
