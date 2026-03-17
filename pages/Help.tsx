import React from 'react';

const Help: React.FC = () => {
  return (
    <div className="max-w-[800px] mx-auto space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Need Assistance?</h1>
        <p className="text-slate-500 dark:text-slate-400">If you are facing any issues with your project or the dashboard, please let us know.</p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-6 md:p-8 space-y-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="size-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <span className="material-symbols-outlined text-3xl">support_agent</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Report an Issue</h2>
              <p className="text-sm text-slate-500 mt-1">Describe your problem in detail so your teacher can understand and help you effectively.</p>
            </div>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="issue-type">
                What type of issue is this?
              </label>
              <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:border-primary focus:ring-primary py-2.5" id="issue-type">
                <option value="">Select an issue category...</option>
                <option value="technical">Technical Problem</option>
                <option value="project">Project Guidance</option>
                <option value="group">Group Conflict</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="issue-description">
                Describe your Issue/Problem
              </label>
              <textarea 
                className="w-full h-48 rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:border-primary focus:ring-primary resize-y p-4 placeholder-slate-400" 
                id="issue-description" 
                placeholder="Please provide specific details about what you're experiencing..."
              ></textarea>
              <p className="text-xs text-slate-400 text-right">0/500 characters</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="text-xs text-slate-500 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">info</span>
                Your teacher will be notified immediately.
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <button type="button" className="flex-1 sm:flex-none px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg text-sm font-medium transition-colors">
                    Cancel
                </button>
                <button type="submit" className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2 bg-primary hover:bg-blue-600 text-white rounded-lg text-sm font-medium shadow-sm shadow-primary/20 transition-all hover:-translate-y-0.5">
                    <span>Submit to Teacher</span>
                    <span className="material-symbols-outlined text-lg">send</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Quick Links:</span>
            <a href="#" className="text-sm text-primary hover:underline">FAQ</a>
            <span className="text-slate-300">•</span>
            <a href="#" className="text-sm text-primary hover:underline">Guidelines PDF</a>
          </div>
          <div className="text-xs text-slate-400">
            Support ID: #STU-8821
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
