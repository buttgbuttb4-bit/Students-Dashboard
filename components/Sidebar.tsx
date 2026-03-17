import React from 'react';
import { Page } from '../types';

interface SidebarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, onNavigate, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  // Determine context based on active page
  const isEduDashContext = activePage === 'progress' || activePage === 'help' || activePage === 'assign-task';

  const NavItem = ({ page, icon, label, filled = false }: { page: Page; icon: string; label: string; filled?: boolean }) => {
    const isActive = activePage === page;
    return (
      <button
        onClick={() => {
          onNavigate(page);
          setIsMobileMenuOpen(false);
        }}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
          isActive
            ? 'bg-primary/10 text-primary'
            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
        }`}
      >
        <span className={`material-symbols-outlined text-[20px] ${filled && isActive ? 'fill-1' : ''}`}>{icon}</span>
        <span className="text-sm">{label}</span>
      </button>
    );
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <aside className={`
        fixed lg:static inset-y-0 left-0 z-30 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col transition-transform duration-300 transform
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-lg text-primary">
            <span className="material-symbols-outlined text-3xl">school</span>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              {isEduDashContext ? 'EduDash' : 'StudentHub'}
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              {isEduDashContext ? 'Project Alpha' : 'Student Portal'}
            </p>
          </div>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          {!isEduDashContext ? (
            // StudentHub Context (General)
            <>
              <NavItem page="dashboard" icon="dashboard" label="Dashboard" />
              <NavItem page="submit" icon="add_circle" label="Submit Idea" />
              <NavItem page="files" icon="folder_open" label="See Files" />
              <NavItem page="feedback" icon="forum" label="Feedback" />
              
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Projects</p>
                <button
                  onClick={() => onNavigate('progress')}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                  <span className="text-sm">Project Alpha (EduDash)</span>
                </button>
              </div>
            </>
          ) : (
            // EduDash Context (Project Specific)
            <>
              <div className="mb-2 px-4">
                 <button onClick={() => onNavigate('dashboard')} className="text-xs text-slate-500 hover:text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">arrow_back</span> Back to Portal
                 </button>
              </div>
              
              <NavItem page="progress" icon="trending_up" label="Progress Tracking" filled />
              <NavItem page="assign-task" icon="assignment_add" label="Assign Task" filled />
              <NavItem page="help" icon="help" label="Help" filled />
            </>
          )}
        </nav>

        <div className="p-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors">
            <div 
              className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center" 
              style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD1BuHSGMA5SPPEOePgmEWbpXrU03O2pXG8VBj1c53ytiOj4qC2ShkbN1ND7LoCbSesIQC_WIX4VSWeRbMsj9LcR58BZGe45NhLQrv5bjfM48E3S_GtrpEyeU80RHXE80kvJcFb7VC3KJSHQxlv-fiVZB43bL587Kf1LHg_3l2dKHI-KktX08ca-4kk7EhDvoUVlH1RIm0n0SmDiAaXoI9a6Ts3ZnL3p-9GjNVgDbhURVpdJgStxI2EQFPaS4fXQVYyN7YYcZj0wylB')"}}
            ></div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">Jane Doe</p>
              <p className="text-xs text-slate-500 truncate">jane.doe@uni.edu</p>
            </div>
            <span className="material-symbols-outlined text-slate-400 text-sm">more_vert</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;