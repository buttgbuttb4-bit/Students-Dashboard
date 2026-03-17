import React, { useState } from 'react';
import { Task } from '../types';

interface AssignTaskProps {
  onAddTask: (task: Task) => void;
  leaderName: string;
  members: string[];
}

const AssignTask: React.FC<AssignTaskProps> = ({ onAddTask, leaderName, members }) => {
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskDate, setNewTaskDate] = useState('');
  const [newTaskAssignee, setNewTaskAssignee] = useState('');

  // Access Control: If no leader set, block access
  if (!leaderName) {
    return (
      <div className="max-w-xl mx-auto mt-20 text-center space-y-4">
        <div className="size-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto">
          <span className="material-symbols-outlined text-4xl">lock</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Access Restricted</h2>
        <p className="text-slate-500">
          Only the Group Leader can assign tasks. Please go to the <strong>Progress Tracking</strong> page and set your name as the Leader first.
        </p>
      </div>
    );
  }

  const handleAddTask = () => {
    if (!newTaskName.trim()) {
      alert("Please enter a Task Description.");
      return;
    }

    if (!newTaskAssignee) {
      alert("Please select a member to assign the task to.");
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      name: newTaskName,
      assignedTo: newTaskAssignee,
      deadline: newTaskDate || 'TBD',
      status: 'Pending', // Default status
      initials: newTaskAssignee.charAt(0).toUpperCase(),
      colorClass: 'bg-slate-200 text-slate-700'
    };
    
    onAddTask(newTask);
    
    // Reset Form
    setNewTaskName('');
    setNewTaskDate('');
    setNewTaskAssignee('');
    
    alert(`Task assigned to ${newTaskAssignee}!`);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Assign New Task</h1>
        <p className="text-slate-500 dark:text-slate-400">
          Logged in as Leader: <span className="font-semibold text-primary">{leaderName}</span>
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-primary/20 shadow-sm overflow-hidden relative">
        <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-primary/5">
          <h2 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">assignment_add</span>
            Task Details
          </h2>
        </div>
        
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Task Name */}
          <div className="md:col-span-2 space-y-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Task Description <span className="text-red-500">*</span>
            </label>
            <input 
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
              className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:border-primary focus:ring-primary py-2.5 px-4" 
              placeholder="e.g. Conduct user interviews" 
              type="text"
            />
          </div>

          {/* Assign To Dropdown */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Assign To <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select 
                value={newTaskAssignee} 
                onChange={(e) => setNewTaskAssignee(e.target.value)}
                className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:border-primary focus:ring-primary py-2.5 px-4 appearance-none"
              >
                <option value="">Select a member...</option>
                <option value={leaderName}>{leaderName} (You)</option>
                {members.map((member, idx) => (
                  <option key={idx} value={member}>{member}</option>
                ))}
              </select>
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500">
                <span className="material-symbols-outlined text-[20px]">expand_more</span>
              </span>
            </div>
          </div>

          {/* Deadline */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Deadline</label>
            <div className="relative">
              <input 
                value={newTaskDate}
                onChange={(e) => setNewTaskDate(e.target.value)}
                className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:border-primary focus:ring-primary pl-10 py-2.5 px-4" 
                type="date"
              />
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-[20px]">calendar_today</span>
            </div>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 pt-6 mt-2 border-t border-slate-100 dark:border-slate-800">
             <button 
              onClick={handleAddTask}
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined text-[20px]">add_task</span>
              Confirm Assignment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignTask;