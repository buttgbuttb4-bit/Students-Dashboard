import React, { useState } from 'react';

const SubmitIdea: React.FC = () => {
  const [leaderName, setLeaderName] = useState('');
  const [members, setMembers] = useState<string[]>([]);
  const [memberInput, setMemberInput] = useState('');

  const handleAddMember = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (memberInput.trim()) {
        setMembers([...members, memberInput.trim()]);
        setMemberInput('');
      }
    }
  };

  const removeMember = (index: number) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Submit Project Idea</h2>
          <p className="text-slate-500 mt-1">Share your innovation with the faculty for review.</p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Progress Steps */}
        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 border-b border-slate-100 dark:border-slate-700">
          <div className="flex items-center justify-center w-full max-w-2xl mx-auto">
            <div className="flex items-center text-primary">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-sm">1</div>
              <span className="ml-2 text-sm font-semibold hidden sm:inline">Idea Details</span>
            </div>
            <div className="h-1 w-16 bg-slate-200 dark:bg-slate-600 mx-3 rounded-full"></div>
            <div className="flex items-center text-slate-400">
              <div className="w-8 h-8 rounded-full border-2 border-slate-300 dark:border-slate-600 flex items-center justify-center text-sm font-bold bg-white dark:bg-slate-800">2</div>
              <span className="ml-2 text-sm font-medium hidden sm:inline">Team Info</span>
            </div>
            <div className="h-1 w-16 bg-slate-200 dark:bg-slate-600 mx-3 rounded-full"></div>
            <div className="flex items-center text-slate-400">
              <div className="w-8 h-8 rounded-full border-2 border-slate-300 dark:border-slate-600 flex items-center justify-center text-sm font-bold bg-white dark:bg-slate-800">3</div>
              <span className="ml-2 text-sm font-medium hidden sm:inline">Review</span>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 md:p-8 space-y-6 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Project Idea Name</label>
              <input 
                className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-primary focus:border-primary shadow-sm py-2.5" 
                placeholder="e.g. AI-Powered Recycling Bin" 
                type="text"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Session</label>
              <div className="relative">
                <select className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-primary focus:border-primary shadow-sm appearance-none py-2.5">
                  <option>Morning Session (09:00 - 12:00)</option>
                  <option>Evening Session (14:00 - 17:00)</option>
                </select>
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500">
                  <span className="material-symbols-outlined text-[20px]">expand_more</span>
                </span>
              </div>
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Leader Name</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-400 text-[20px]">person</span>
                </span>
                <input 
                  className="pl-10 w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-primary focus:border-primary shadow-sm py-2.5" 
                  placeholder="Enter your name"
                  type="text" 
                  value={leaderName}
                  onChange={(e) => setLeaderName(e.target.value)}
                />
              </div>
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Description</label>
              <textarea 
                className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-primary focus:border-primary shadow-sm" 
                placeholder="Describe the core problem, your proposed solution, and the technologies you plan to use..." 
                rows={5}
              ></textarea>
              <p className="text-xs text-slate-500 mt-1.5 text-right">0 / 500 words</p>
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Team Members</label>
              <div className="p-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 flex flex-wrap gap-2 focus-within:ring-2 focus-within:ring-primary focus-within:ring-opacity-50 focus-within:border-primary shadow-sm min-h-[50px]">
                {members.map((member, idx) => (
                  <div key={idx} className="inline-flex items-center bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200 border border-blue-100 dark:border-blue-800 rounded-md px-2 py-1 text-sm font-medium">
                    {member}
                    <button 
                      onClick={() => removeMember(idx)}
                      className="ml-1.5 hover:text-blue-900 dark:hover:text-blue-100 flex items-center"
                    >
                      <span className="material-symbols-outlined text-[16px]">close</span>
                    </button>
                  </div>
                ))}
                <input 
                  className="border-none focus:ring-0 p-1 text-sm bg-transparent flex-1 min-w-[140px] text-slate-900 dark:text-white" 
                  placeholder="Type name & press Enter..." 
                  type="text"
                  value={memberInput}
                  onChange={(e) => setMemberInput(e.target.value)}
                  onKeyDown={handleAddMember}
                />
              </div>
              <p className="text-xs text-slate-500 mt-1.5 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">info</span>
                Press Enter to add a member. Add up to 4 additional members.
              </p>
            </div>
          </div>
          <div className="pt-6 flex items-center justify-between border-t border-slate-100 dark:border-slate-700 mt-2">
            <button className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 font-medium text-sm">Cancel</button>
            <div className="flex gap-3">
              <button className="px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Save Draft</button>
              <button className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold shadow-md shadow-primary/20 transition-all flex items-center gap-2 transform active:scale-95">
                <span className="material-symbols-outlined text-[20px]">send</span>
                Submit Project Idea
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitIdea;