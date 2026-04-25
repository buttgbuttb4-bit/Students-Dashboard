import React from 'react';

const Help = () => {
  return (
    <div className="help-container">
      <div className="help-header">
        <h1 className="help-title">Need Assistance?</h1>
        <p className="help-subtitle">If you are facing any issues with your project or the dashboard, please let us know.</p>
      </div>

      <div className="help-card">
        <div className="help-card-inner">
          <div className="help-card-header">
            <div className="help-icon-container">
              <span className="material-symbols-outlined help-icon">support_agent</span>
            </div>
            <div>
              <h2 className="help-card-title">Report an Issue</h2>
              <p className="help-card-description">Describe your problem in detail so your teacher can understand and help you effectively.</p>
            </div>
          </div>

          <form>
            <div className="help-form-group">
              <label className="help-label" htmlFor="issue-type">
                What type of issue is this?
              </label>
              <select className="help-select" id="issue-type">
                <option value="">Select an issue category...</option>
                <option value="technical">Technical Problem</option>
                <option value="project">Project Guidance</option>
                <option value="group">Group Conflict</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="help-form-group">
              <label className="help-label" htmlFor="issue-description">
                Describe your Issue/Problem
              </label>
              <textarea 
                className="help-textarea" 
                id="issue-description" 
                placeholder="Please provide specific details about what you're experiencing..."
              ></textarea>
              <p className="help-char-count">0/500 characters</p>
            </div>

            <div className="help-footer">
              <div className="help-info-text">
                <span className="material-symbols-outlined help-info-icon">info</span>
                Your teacher will be notified immediately.
              </div>
              <div className="help-buttons">
                <button type="button" className="help-cancel-btn">
                  Cancel
                </button>
                <button type="submit" className="help-submit-btn">
                  <span>Submit to Teacher</span>
                  <span className="material-symbols-outlined help-submit-icon">send</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Help;
