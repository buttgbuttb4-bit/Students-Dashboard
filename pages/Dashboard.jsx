import React from 'react';

const Dashboard = () => {
  return (
    <div className="dash-container">
      {/* Welcome Banner */}
      <div className="dash-welcome-banner">
        <div 
          className="dash-welcome-bg" 
          style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZOAkHwo3o9KnO8-LyQWXOL47RdVVfmSDXj6bbBQM6AcRTDwr6VII0_UDLOwwqHEOJ7ErGGBz08Kfm55H50v-u2M_NEKy23EillxdCJCYygjtPy16bkAcxdge6oDzIEfPrppyD3Zjodqc_r_eqwFo-kQ_yedQ4YqtxPpeU--FMGI4wy40qYngQOSrkPpTkA2TmUD82zptG3YWWePlq_BnXAMTB8pieL8Z-LdJyGnGEQbWMVw_6WSWtXJT3QRXqN6Bw0LoRr7Cs-TRN')"}}
        ></div>
        <div className="dash-welcome-overlay"></div>
        <div className="dash-welcome-content">
          <h2 className="dash-welcome-title">Welcome back, Jane!</h2>
          <p className="dash-welcome-subtitle">You have 2 pending feedback items to review today.</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="dash-stats-grid">
        <div className="dash-stat-card">
          <div className="dash-stat-header">
            <div className="dash-stat-icon dash-stat-icon-blue">
              <span className="material-symbols-outlined text-2xl">lightbulb</span>
            </div>
            <span className="dash-stat-badge dash-stat-badge-green">+1 this week</span>
          </div>
          <div className="dash-stat-content">
            <h3 className="dash-stat-label">Total Ideas</h3>
            <p className="dash-stat-value">5</p>
          </div>
        </div>

        <div className="dash-stat-card">
          <div className="dash-stat-header">
            <div className="dash-stat-icon dash-stat-icon-amber">
              <span className="material-symbols-outlined text-2xl">chat_bubble</span>
            </div>
            <span className="dash-stat-badge dash-stat-badge-amber">Action Needed</span>
          </div>
          <div className="dash-stat-content">
            <h3 className="dash-stat-label">Pending Feedback</h3>
            <p className="dash-stat-value">2</p>
          </div>
        </div>

        <div className="dash-files-card">
          <div className="dash-files-header">
            <h3 className="dash-files-title">Latest File Uploads</h3>
            <span className="dash-stat-badge dash-stat-badge-slate">Recent</span>
          </div>
          <div className="dash-files-list">
            <div className="dash-file-item">
              <div className="dash-file-icon dash-file-icon-red">
                <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
              </div>
              <div className="dash-file-info">
                <p className="dash-file-name">Project_Proposal_v2.pdf</p>
                <p className="dash-file-time">2 hours ago</p>
              </div>
            </div>
            <div className="dash-file-item">
              <div className="dash-file-icon dash-file-icon-blue">
                <span className="material-symbols-outlined text-[20px]">description</span>
              </div>
              <div className="dash-file-info">
                <p className="dash-file-name">Requirements_Doc.docx</p>
                <p className="dash-file-time">Yesterday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
