import React from 'react';
import { FileItem } from '../types';

const FILES: FileItem[] = [
  { name: "Project_Proposal_v2.pdf", type: "PDF", size: "2.4 MB", date: "2 hours ago", author: "Prof. Smith", icon: "picture_as_pdf", colorClass: "text-red-500 bg-red-50 dark:bg-red-900/20" },
  { name: "Requirements_Doc.docx", type: "DOCX", size: "1.1 MB", date: "Yesterday", author: "Dr. Emily White", icon: "description", colorClass: "text-blue-500 bg-blue-50 dark:bg-blue-900/20" },
  { name: "Architecture_Diagram.png", type: "PNG", size: "4.2 MB", date: "3 days ago", author: "Prof. Smith", icon: "image", colorClass: "text-green-600 bg-green-50 dark:bg-green-900/20" },
  { name: "Source_Code_Archive.zip", type: "ZIP", size: "15 MB", date: "1 week ago", author: "System Admin", icon: "folder_zip", colorClass: "text-amber-500 bg-amber-50 dark:bg-amber-900/20" }
];

const Files: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Project Files</h2>
          <p className="text-slate-500 mt-1">Manage documents related to your submissions.</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400">search</span>
            <input 
              className="pl-10 rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary shadow-sm" 
              placeholder="Search files..." 
              type="text"
            />
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-[20px]">upload_file</span>
            Upload
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FILES.map((file, index) => (
          <div key={index} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all group flex flex-col">
            <div className="p-5 flex-1">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg ${file.colorClass}`}>
                  <span className="material-symbols-outlined text-3xl">{file.icon}</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 py-1 px-2 rounded">{file.type}</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white truncate mb-1 text-lg" title={file.name}>{file.name}</h3>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="material-symbols-outlined text-[16px]">person</span>
                  <span>By: <span className="font-medium text-slate-700 dark:text-slate-300">{file.author}</span></span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                  <span>{file.date}</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-3 border-t border-slate-100 dark:border-slate-700 grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors rounded-lg hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                <span className="material-symbols-outlined text-[18px]">visibility</span> View
              </button>
              <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors rounded-lg hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                <span className="material-symbols-outlined text-[18px]">download</span> Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Files;
