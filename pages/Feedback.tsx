import React from 'react';

const Feedback: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Feedback</h2>
          <p className="text-slate-500 mt-1">Review feedback and comments from teachers on your submissions.</p>
        </div>
        <div className="flex bg-white dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
          <button className="px-4 py-1.5 bg-primary/10 text-primary rounded-md text-sm font-medium transition-colors">All</button>
          <button className="px-4 py-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 rounded-md text-sm font-medium transition-colors">Pending</button>
          <button className="px-4 py-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 rounded-md text-sm font-medium transition-colors">Accepted</button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent dark:before:via-slate-700">
        
        {/* Item 1 */}
        <div className="relative flex items-start group">
          <div className="absolute left-8 top-12 h-full w-0.5 bg-transparent md:left-1/2 md:ml-0"></div>
          <div className="flex-shrink-0 absolute left-0 md:left-1/2 md:-ml-6 top-0 mt-2 z-10">
            <div className="h-12 w-12 rounded-full border-4 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 bg-cover bg-center shadow-md" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtoDVA9TpOo2M0JzWP-dFZOHKSzjPn7tgl9mvICxsO98jrJ5aLynomoSh7eM-XlXj3d48YUyWb5TAYMXg0Nj3I25JDvkbB9zbtEIMnXuBlpw8YXkYuODOTiMhqmleTc5g3bWiOOp0tI_8bgk7u9EiZJHu4MAU-Q_oW5nBN6sNcDQCAElqTzEtEHbgYsw5V8qrMBOwWsWYJijpPm3XGReaa_Sk63HRT6TCRLP68EsC_UUkj9dC23iAHWiax01USdHDOfjjsj3XlBJQy')"}}></div>
          </div>
          <div className="ml-16 md:ml-0 md:w-1/2 md:pr-12 md:text-right flex-1">
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl rounded-tl-none md:rounded-tl-2xl md:rounded-tr-none border border-slate-200 dark:border-slate-700 shadow-sm relative">
              <span className="absolute top-4 right-4 md:right-auto md:left-4 inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-amber-100 text-amber-700">Pending</span>
              <div className="mb-3 mt-4 md:mt-2">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-1 block">Eco-Friendly App Proposal</span>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">Prof. Smith</h3>
              </div>
              <div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700/50">
                "Great concept overall, Jane. However, I think the section on the tech stack is a bit vague. Could you please specify which database technologies you intend to use for scaling? Also, consider adding a user flow diagram."
              </div>
              <div className="mt-3 flex items-center justify-end md:justify-start gap-4 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span> 2 hours ago</span>
                <button className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">reply</span> Reply
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="relative flex items-start flex-row-reverse group">
          <div className="absolute left-8 top-12 h-full w-0.5 bg-transparent md:left-1/2 md:ml-0"></div>
          <div className="flex-shrink-0 absolute left-0 md:left-1/2 md:-ml-6 top-0 mt-2 z-10">
            <div className="h-12 w-12 rounded-full border-4 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 bg-cover bg-center shadow-md" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAlfpmU2l9FwkJq2oKqQ_9kKENQu6Tcp9jvqUjZ_P6qsD0DGjW0SRku20omf2mPA1n5WNf8ydyzTjTQbGkfZ9mL3z81ZDK9aTW9JofPe_ZOFFTKOY34v4spu66fhiCm3bP1vyNc5aixgj9rYuJaystR-FCWUQ3p8riHXbtoBbD07YshWPQZFZdA-Kki_5IDEpOttvpmO0vCQpZ_fcaeMpERb8BbLv8ANpKQU8L6dw6hSAzD-wf7oHkePa_J13kOlIpeHbmg0ioxanKy')"}}></div>
          </div>
          <div className="ml-16 md:ml-0 md:w-1/2 md:pl-12 flex-1">
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-700 shadow-sm relative">
              <span className="absolute top-4 right-4 inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-green-100 text-green-700">Accepted</span>
              <div className="mb-3 mt-4 md:mt-2">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-1 block">Library Management System</span>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">Dr. Emily White</h3>
              </div>
              <div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700/50">
                "Excellent work on the requirements analysis. This is exactly what we were looking for. You are approved to move to the development phase. Good luck!"
              </div>
              <div className="mt-3 flex items-center gap-4 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">calendar_today</span> Oct 23, 2023</span>
              </div>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="relative flex items-start group">
          <div className="absolute left-8 top-12 h-full w-0.5 bg-transparent md:left-1/2 md:ml-0"></div>
          <div className="flex-shrink-0 absolute left-0 md:left-1/2 md:-ml-6 top-0 mt-2 z-10">
            <div className="h-12 w-12 rounded-full border-4 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 bg-cover bg-center shadow-md grayscale opacity-80" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsWIlO4XMVZf7yTy6PjJ-9BvmQ_C35JR-nTECgzaF6LpA6xNDCl8yYkrEXwFokIrtrdvuDSOgJpg-1PquCuB_W5AIHwdh88K9aI9UJOIWBehQsFTpq7RAt1ABkll8f3Gv7FMDC0cQNHyUoNAa3685jyxEShUp8IOQswG_-9vjBu5agHOeGcUUjDuwH52lnWen7iyC-l_3rxBO94gInk_mSSMXPGF_3ggMTUqw_FYGNJlgQNRWtymS50XzOpw1V6Tt156FsUIUkeVx0')"}}></div>
          </div>
          <div className="ml-16 md:ml-0 md:w-1/2 md:pr-12 md:text-right flex-1">
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl rounded-tl-none md:rounded-tl-2xl md:rounded-tr-none border border-slate-200 dark:border-slate-700 shadow-sm relative opacity-75">
              <span className="absolute top-4 right-4 md:right-auto md:left-4 inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-red-100 text-red-700">Rejected</span>
              <div className="mb-3 mt-4 md:mt-2">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-1 block">Data Analytics 101</span>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">System Admin</h3>
              </div>
              <div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700/50">
                "This topic is already taken by another group. Please submit a new idea."
              </div>
              <div className="mt-3 flex items-center justify-end md:justify-start gap-4 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">calendar_today</span> Oct 15, 2023</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Feedback;
