import React from 'react';

const Feedback = () => {
  return (
    <div className="feedback-page">
      <div className="feedback-header">
        <h2 className="feedback-title">Feedback</h2>
        <p className="feedback-subtitle">Review feedback and comments from teachers on your submissions.</p>
      </div>

      <div className="feedback-filters">
        <button className="feedback-filter-btn active">All</button>
        <button className="feedback-filter-btn">Pending</button>
        <button className="feedback-filter-btn">Accepted</button>
      </div>

      <div className="feedback-list">
        {/* Feedback Card 1 - Pending */}
        <div className="feedback-card">
          <div className="feedback-card-header">
            <span className="feedback-status-tag feedback-status-pending">PENDING</span>
            <div className="feedback-reviewer-info">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtoDVA9TpOo2M0JzWP-dFZOHKSzjPn7tgl9mvICxsO98jrJ5aLynomoSh7eM-XlXj3d48YUyWb5TAYMXg0Nj3I25JDvkbB9zbtEIMnXuBlpw8YXkYuODOTiMhqmleTc5g3bWiOOp0tI_8bgk7u9EiZJHu4MAU-Q_oW5nBN6sNcDQCAElqTzEtEHbgYsw5V8qrMBOwWsWYJijpPm3XGReaa_Sk63HRT6TCRLP68EsC_UUkj9dC23iAHWiax01USdHDOfjjsj3XlBJQy" 
                alt="Prof. Usman Ahmad" 
                className="feedback-reviewer-avatar"
              />
              <div className="feedback-reviewer-details">
                <div className="feedback-system-name">BOOK MANAGEMENT SYSTEM</div>
                <div className="feedback-reviewer-name">Prof. Usman Ahmad</div>
              </div>
            </div>
          </div>
          <div className="feedback-message">
            Great concept overall, Jane. However, I think the section on the tech stack is a bit vague. Could you please specify which database technologies you intend to use for scaling? Also, consider adding a user flow diagram.
          </div>
          <div className="feedback-timestamp">2 hours ago</div>
        </div>

        {/* Feedback Card 2 - Accepted */}
        <div className="feedback-card">
          <div className="feedback-card-header">
            <span className="feedback-status-tag feedback-status-accepted">ACCEPTED</span>
            <div className="feedback-reviewer-info">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlfpmU2l9FwkJq2oKqQ_9kKENQu6Tcp9jvqUjZ_P6qsD0DGjW0SRku20omf2mPA1n5WNf8ydyzTjTQbGkfZ9mL3z81ZDK9aTW9JofPe_ZOFFTKOY34v4spu66fhiCm3bP1vyNc5aixgj9rYuJaystR-FCWUQ3p8riHXbtoBbD07YshWPQZFZdA-Kki_5IDEpOttvpmO0vCQpZ_fcaeMpERb8BbLv8ANpKQU8L6dw6hSAzD-wf7oHkePa_J13kOlIpeHbmg0ioxanKy" 
                alt="Dr. Emily White" 
                className="feedback-reviewer-avatar"
              />
              <div className="feedback-reviewer-details">
                <div className="feedback-system-name">LIBRARY MANAGEMENT SYSTEM</div>
                <div className="feedback-reviewer-name">Dr. Emily White</div>
              </div>
            </div>
          </div>
          <div className="feedback-message">
            Excellent work on the requirements analysis. This is exactly what we were looking for. You are approved to move to the development phase. Good luck!
          </div>
          <div className="feedback-timestamp">Oct 23, 2023</div>
        </div>

        {/* Feedback Card 3 - Rejected */}
        <div className="feedback-card">
          <div className="feedback-card-header">
            <span className="feedback-status-tag feedback-status-rejected">REJECTED</span>
            <div className="feedback-reviewer-info">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsWIlO4XMVZf7yTy6PjJ-9BvmQ_C35JR-nTECgzaF6LpA6xNDCl8yYkrEXwFokIrtrdvuDSOgJpg-1PquCuB_W5AIHwdh88K9aI9UJOIWBehQsFTpq7RAt1ABkll8f3Gv7FMDC0cQNHyUoNAa3685jyxEShUp8IOQswG_-9vjBu5agHOeGcUUjDuwH52lnWen7iyC-l_3rxBO94gInk_mSSMXPGF_3ggMTUqw_FYGNJlgQNRWtymS50XzOpw1V6Tt156FsUIUkeVx0" 
                alt="System Admin" 
                className="feedback-reviewer-avatar"
              />
              <div className="feedback-reviewer-details">
                <div className="feedback-system-name">ECO-FRIENDLY APP PROPOSAL</div>
                <div className="feedback-reviewer-name">System Admin</div>
              </div>
            </div>
          </div>
          <div className="feedback-message">
            This topic is already taken by another group. Please submit a new idea.
          </div>
          <div className="feedback-timestamp">Oct 15, 2023</div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
