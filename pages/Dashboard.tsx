import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-slate-900 text-white min-h-[180px] flex items-end shadow-lg">
        <div 
          className="absolute inset-0 z-0 opacity-60 bg-cover bg-center" 
          style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZOAkHwo3o9KnO8-LyQWXOL47RdVVfmSDXj6bbBQM6AcRTDwr6VII0_UDLOwwqHEOJ7ErGGBz08Kfm55H50v-u2M_NEKy23EillxdCJCYygjtPy16bkAcxdge6oDzIEfPrppyD3Zjodqc_r_eqwFo-kQ_yedQ4YqtxPpeU--FMGI4wy40qYngQOSrkPpTkA2TmUD82zptG3YWWePlq_BnXAMTB8pieL8Z-LdJyGnGEQbWMVw_6WSWtXJT3QRXqN6Bw0LoRr7Cs-TRN')"}}
        ></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
        <div className="relative z-20 p-6 md:p-8">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Welcome back, Jane!</h2>
          <p className="text-slate-300">You have 2 pending feedback items to review today.</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between h-48 group hover:border-primary/50 transition-all">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary">
              <span className="material-symbols-outlined text-2xl">lightbulb</span>
            </div>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">+1 this week</span>
          </div>
          <div>
            <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Ideas</h3>
            <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">5</p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between h-48 group hover:border-primary/50 transition-all">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-amber-600">
              <span className="material-symbols-outlined text-2xl">chat_bubble</span>
            </div>
            <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded-full">Action Needed</span>
          </div>
          <div>
            <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">Pending Feedback</h3>
            <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">2</p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col h-48 group hover:border-primary/50 transition-all">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">Latest File Uploads</h3>
            <span className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold px-2 py-1 rounded-full">Recent</span>
          </div>
          <div className="flex-1 overflow-hidden space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-1.5 bg-red-50 dark:bg-red-900/20 rounded text-red-500 mt-0.5">
                <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-slate-900 dark:text-white truncate">Project_Proposal_v2.pdf</p>
                <p className="text-xs text-slate-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-1.5 bg-blue-50 dark:bg-blue-900/20 rounded text-blue-500 mt-0.5">
                <span className="material-symbols-outlined text-[20px]">description</span>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-slate-900 dark:text-white truncate">Requirements_Doc.docx</p>
                <p className="text-xs text-slate-500">Yesterday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
