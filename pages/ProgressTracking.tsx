import React, { useState } from 'react';
import { Task } from '../types';

interface ProgressTrackingProps {
  tasks: Task[];
  leaderName: string;
  setLeaderName: (name: string) => void;
  members: string[];
  addMember: (name: string) => void;
  removeMember: (name: string) => void;
  onToggleTask: (id: number) => void;
}

const ProgressTracking: React.FC<ProgressTrackingProps> = ({ 
  tasks, 
  leaderName, 
  setLeaderName, 
  members, 
  addMember, 
  removeMember,
  onToggleTask
}) => {
  const [newMemberName, setNewMemberName] = useState('');

  const handleAddMemberClick = () => {
    if (newMemberName.trim()) {
      addMember(newMemberName.trim());
      setNewMemberName('');
    }
  };

  // Calculations
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.status === 'Completed').length;
  const progressPercentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
  
  // Calculate member stats
  const allPeople = leaderName ? [leaderName, ...members] : [...members];
  const memberStats = allPeople.map(person => {
    const personTasks = tasks.filter(t => t.assignedTo === person);
    const personTotal = personTasks.length;
    const personCompleted = personTasks.filter(t => t.status === 'Completed').length;
    const personProgress = personTotal === 0 ? 0 : Math.round((personCompleted / personTotal) * 100);
    return { name: person, total: personTotal, completed: personCompleted, progress: personProgress };
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Progress Tracking</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Configure your group and track task completion.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="xl:col-span-2 space-y-6">
          
          {/* Group Configuration Card */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
              <h2 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">groups</span>
                Group Setup
              </h2>
            </div>
            <div className="p-6 grid gap-6 sm:grid-cols-2">
              
              {/* Leader Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Leader Name (You)</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-primary text-[20px]">person_check</span>
                  </span>
                  <input 
                    type="text"
                    value={leaderName}
                    onChange={(e) => setLeaderName(e.target.value)}
                    placeholder="Type your name here..."
                    className="pl-10 w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:border-primary focus:ring-primary py-2.5"
                  />
                </div>
                <p className="text-xs text-slate-500">Setting this enables "Assign Task" access.</p>
              </div>

              {/* Members Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Add Team Members</label>
                <div className="flex gap-2">
                  <input 
                    type="text"
                    value={newMemberName}
                    onChange={(e) => setNewMemberName(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddMemberClick()}
                    placeholder="Enter member name"
                    className="flex-1 w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:border-primary focus:ring-primary py-2.5 px-3"
                  />
                  <button 
                    onClick={handleAddMemberClick}
                    className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg px-3 py-2 flex items-center justify-center transition-colors"
                  >
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                
                {/* Member Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {members.map((member, idx) => (
                    <div key={idx} className="inline-flex items-center gap-1 pl-2.5 pr-1 py-1 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{member}</span>
                      <button 
                        onClick={() => removeMember(member)}
                        className="p-0.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full text-slate-400 hover:text-red-500 transition-colors"
                      >
                        <span className="material-symbols-outlined text-[16px]">close</span>
                      </button>
                    </div>
                  ))}
                  {members.length === 0 && <span className="text-xs text-slate-400 italic">No members added yet.</span>}
                </div>
              </div>
            </div>
          </div>

          {/* Task List */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <h2 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">list_alt</span>
                All Tasks
              </h2>
              <div className="flex gap-2">
                 <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium">
                   {tasks.length} Total
                 </span>
              </div>
            </div>
            
            {tasks.length === 0 ? (
              <div className="p-12 text-center text-slate-500">
                <span className="material-symbols-outlined text-4xl mb-2 text-slate-300">assignment</span>
                <p>No tasks assigned yet.</p>
                <p className="text-sm mt-1">Go to "Assign Task" to start.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 font-medium border-b border-slate-200 dark:border-slate-700">
                    <tr>
                      <th className="px-6 py-3 w-10">Done</th>
                      <th className="px-6 py-3">Task Name</th>
                      <th className="px-6 py-3">Assigned To</th>
                      <th className="px-6 py-3">Deadline</th>
                      <th className="px-6 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {tasks.map((task) => (
                      <tr key={task.id} className={`transition-colors group ${task.status === 'Completed' ? 'bg-slate-50/50 dark:bg-slate-800/20' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>
                        <td className="px-6 py-4">
                          <button 
                            onClick={() => onToggleTask(task.id)}
                            className={`size-5 rounded border flex items-center justify-center transition-colors ${
                              task.status === 'Completed' 
                                ? 'bg-green-500 border-green-500 text-white' 
                                : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 hover:border-primary'
                            }`}
                          >
                            {task.status === 'Completed' && <span className="material-symbols-outlined text-[16px]">check</span>}
                          </button>
                        </td>
                        <td className={`px-6 py-4 font-medium transition-all ${task.status === 'Completed' ? 'text-slate-400 line-through' : 'text-slate-900 dark:text-white'}`}>
                          {task.name}
                        </td>
                        <td className="px-6 py-4">
                          <div className={`flex items-center gap-2 ${task.status === 'Completed' ? 'opacity-50' : ''}`}>
                            <div className="size-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center text-[10px] font-bold">
                              {task.assignedTo.charAt(0).toUpperCase()}
                            </div>
                            <span>{task.assignedTo === leaderName ? `${task.assignedTo} (You)` : task.assignedTo}</span>
                          </div>
                        </td>
                        <td className={`px-6 py-4 ${task.status === 'Completed' ? 'text-slate-400' : 'text-slate-500'}`}>{task.deadline}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium 
                            ${task.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                            {task.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Analytics */}
        <div className="xl:col-span-1 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 relative overflow-hidden">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">analytics</span>
              Overall Progress
            </h3>
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="relative size-40">
                <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                  <path className="text-slate-100 dark:text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                  <path 
                    className="text-primary transition-all duration-1000 ease-out drop-shadow-lg" 
                    strokeDasharray={`${progressPercentage}, 100`} 
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeWidth="3"
                  ></path>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-slate-900 dark:text-white">{progressPercentage}%</span>
                  <span className="text-xs text-slate-500 uppercase font-semibold tracking-wide">Complete</span>
                </div>
              </div>
            </div>
            <div className="text-center text-sm text-slate-500">
               {completedTasks} of {totalTasks} tasks completed
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Member Contributions</h3>
            <div className="space-y-5">
              {memberStats.length === 0 ? (
                <p className="text-sm text-slate-400 italic">Add members to see stats.</p>
              ) : (
                memberStats.map((stat, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center text-[10px] font-bold">
                          {stat.name.charAt(0).toUpperCase()}
                        </div>
                        <span className="font-medium text-slate-700 dark:text-slate-200 truncate max-w-[120px]">
                          {stat.name === leaderName ? `${stat.name} (You)` : stat.name}
                        </span>
                      </div>
                      <span className="text-xs text-slate-500">
                        {stat.completed}/{stat.total} Done
                      </span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-500" 
                        style={{width: `${stat.total === 0 ? 0 : (stat.completed / stat.total) * 100}%`}}
                      ></div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracking;