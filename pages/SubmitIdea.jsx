import React, { useState } from 'react';

const SubmitIdea = () => {
  const [leaderName, setLeaderName] = useState('');
  const [members, setMembers] = useState([]);
  const [memberInput, setMemberInput] = useState('');

  const handleAddMember = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (memberInput.trim()) {
        setMembers([...members, memberInput.trim()]);
        setMemberInput('');
      }
    }
  };

  const removeMember = (index) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  return (
    <div className="si-page">
      <div className="si-header-row">
        <div>
          <h2 className="si-title">Submit Project Idea</h2>
          <p className="si-subtitle">
            Share your innovation with the faculty for review.
          </p>
        </div>
      </div>

      <div className="si-card">
        {/* Steps */}
        <div className="si-steps">
          <div className="si-steps-inner">
            <div className="si-step si-step-active">
              <div className="si-step-circle si-step-circle-active">1</div>
              <span className="si-step-label">Idea Details</span>
            </div>
            <div className="si-step-line" />
            <div className="si-step">
              <div className="si-step-circle">2</div>
              <span className="si-step-label">Team Info</span>
            </div>
            <div className="si-step-line" />
            <div className="si-step">
              <div className="si-step-circle">3</div>
              <span className="si-step-label">Review</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="si-card-inner">
          <div className="si-form-grid">
            <div className="si-field si-field-full">
              <label className="si-label">Project Idea Name</label>
              <input
  className="si-input"
  placeholder="e.g. AI-Powered Recycling Bin"
  type="text"
/>
            </div>

            <div className="si-field">
              <label className="si-label">Session</label>
              <div className="si-select-wrapper">
               <select className="si-select">
  {/* options */}

                  <option>Morning Session (09:00 - 12:00)</option>
                  <option>Evening Session (14:00 - 17:00)</option>
                </select>
                <span className="si-select-icon-wrapper">
                  <span className="material-symbols-outlined si-select-icon">
                    expand_more
                  </span>
                </span>
              </div>
            </div>

            <div className="si-field">
              <label className="si-label">Leader Name</label>
              <div className="si-input-icon-wrapper">
                <span className="si-input-icon-prefix">
                  <span className="material-symbols-outlined si-input-icon-person">
                    person
                  </span>
                </span>
                <input
                 
  className="si-input-with-icon"
  placeholder="Enter your name"
  type="text"

                  value={leaderName}
                  onChange={(e) => setLeaderName(e.target.value)}
                />
              </div>
            </div>

            <div className="si-field si-field-full">
              <label className="si-label">Description</label>
              <textarea
                className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-primary focus:border-primary shadow-sm"
                placeholder="Describe the core problem, your proposed solution, and the technologies you plan to use..."
                rows={5}
              ></textarea>
              <p className="si-counter">0 / 500 words</p>
            </div>

            <div className="si-field si-field-full">
              <label className="si-label">Team Members</label>
              <div className="si-chip-input">
                {members.map((member, idx) => (
                  <div key={idx} className="si-chip">
                    {member}
                    <button
                      type="button"
                      onClick={() => removeMember(idx)}
                      className="si-chip-remove"
                    >
                      <span className="material-symbols-outlined si-chip-remove-icon">
                        close
                      </span>
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
              <p className="si-hint">
                <span className="material-symbols-outlined si-hint-icon">
                  info
                </span>
                Press Enter to add a member. Add up to 4 additional members.
              </p>
            </div>
          </div>

          <div className="si-footer-row">
            <button
              type="button"
              className="si-btn-cancel"
            >
              Cancel
            </button>
            <div className="si-footer-actions">
              <button
                type="button"
                className="si-btn-secondary"
              >
                Save Draft
              </button>
              <button
                type="submit"
                className="si-btn-primary"
              >
                <span className="material-symbols-outlined si-btn-primary-icon">
                  send
                </span>
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