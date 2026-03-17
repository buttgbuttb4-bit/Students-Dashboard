import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import SubmitIdea from './pages/SubmitIdea';
import Files from './pages/Files';
import Feedback from './pages/Feedback';
import ProgressTracking from './pages/ProgressTracking';
import AssignTask from './pages/AssignTask';
import Help from './pages/Help';
import { Page, Task } from './types';

function App() {
  const [activePage, setActivePage] = useState<Page>('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Real Data State (Empty by default)
  const [tasks, setTasks] = useState<Task[]>([]);
  const [leaderName, setLeaderName] = useState('');
  const [members, setMembers] = useState<string[]>([]);

  const handleAddTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
    // Optional: Auto-navigate to progress to see the new task
    // setActivePage('progress');
  };

  const handleToggleTask = (taskId: number) => {
    setTasks(tasks.map(t => 
      t.id === taskId 
        ? { ...t, status: t.status === 'Completed' ? 'Pending' : 'Completed' }
        : t
    ));
  };

  const handleAddMember = (name: string) => {
    if (name && !members.includes(name)) {
      setMembers([...members, name]);
    }
  };

  const handleRemoveMember = (name: string) => {
    setMembers(members.filter(m => m !== name));
  };

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'submit':
        return <SubmitIdea />;
      case 'files':
        return <Files />;
      case 'feedback':
        return <Feedback />;
      case 'progress':
        return (
          <ProgressTracking 
            tasks={tasks} 
            leaderName={leaderName}
            setLeaderName={setLeaderName}
            members={members}
            addMember={handleAddMember}
            removeMember={handleRemoveMember}
            onToggleTask={handleToggleTask}
          />
        );
      case 'assign-task':
        return (
          <AssignTask 
            onAddTask={handleAddTask} 
            leaderName={leaderName}
            members={members}
          />
        );
      case 'help':
        return <Help />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-background-light dark:bg-background-dark font-display">
      <Sidebar 
        activePage={activePage} 
        onNavigate={setActivePage} 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">school</span>
            <span className="font-bold text-lg text-slate-900 dark:text-white">StudentHub</span>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
           {renderContent()}
           <div className="h-10"></div>
        </div>
      </main>
    </div>
  );
}

export default App;