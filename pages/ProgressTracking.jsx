import React, { useState } from "react";

const ProgressTracking = ({
  tasks,
  leaderName,
  setLeaderName,
  members,
  addMember,
  removeMember,
  onToggleTask,
}) => {
  const [newMemberName, setNewMemberName] = useState("");

  const handleAddMemberClick = () => {
    if (newMemberName.trim()) {
      addMember(newMemberName.trim());
      setNewMemberName("");
    }
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.status === "Completed").length;
  const progressPercentage =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  const allPeople = leaderName ? [leaderName, ...members] : [...members];
  const memberStats = allPeople.map((person) => {
    const personTasks = tasks.filter((t) => t.assignedTo === person);
    const personTotal = personTasks.length;
    const personCompleted = personTasks.filter(
      (t) => t.status === "Completed"
    ).length;
    const personProgress =
      personTotal === 0
        ? 0
        : Math.round((personCompleted / personTotal) * 100);
    return {
      name: person,
      total: personTotal,
      completed: personCompleted,
      progress: personProgress,
    };
  });

  return (
    <div className="pt-page">
      <div className="pt-header-row">
        <div>
          <h1 className="pt-title">Progress Tracking</h1>
          <p className="pt-subtitle">
            Configure your group and track task completion.
          </p>
        </div>
        <div className="pt-header-actions">
          <button className="pt-export-btn">
            <span className="material-symbols-outlined pt-export-icon">
              download
            </span>
            Export Report
          </button>
        </div>
      </div>

      <div className="pt-grid">
        {/* Left column */}
        <div className="pt-left">
          {/* Group setup */}
          <div className="pt-card">
            <div className="pt-card-header pt-card-header-muted">
              <h2 className="pt-card-header-title">
                <span className="material-symbols-outlined pt-card-header-icon">
                  groups
                </span>
                Group Setup
              </h2>
            </div>
            <div className="pt-card-body pt-card-body-two-cols">
              {/* Leader */}
              <div className="pt-field">
                <label className="pt-field-label">Leader Name (You)</label>
                <div className="pt-input-icon-wrapper">
                  <span className="pt-input-icon">
                    <span className="material-symbols-outlined pt-input-icon-inner">
                      person_check
                    </span>
                  </span>
                  <input
                    type="text"
                    value={leaderName}
                    onChange={(e) => setLeaderName(e.target.value)}
                    placeholder="Type your name here..."
                    className="pt-input pt-input-with-icon"
                  />
                </div>
                <p className="pt-help-text">
                  Setting this enables "Assign Task" access.
                </p>
              </div>

              {/* Members */}
              <div className="pt-field">
                <label className="pt-field-label">Add Team Members</label>
                <div className="pt-members-input-row">
                  <input
                    type="text"
                    value={newMemberName}
                    onChange={(e) => setNewMemberName(e.target.value)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && handleAddMemberClick()
                    }
                    placeholder="Enter member name"
                    className="pt-input pt-input-flex"
                  />
                  <button
                    onClick={handleAddMemberClick}
                    className="pt-add-member-btn"
                  >
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                <div className="pt-member-tags">
                  {members.map((member, idx) => (
                    <div key={idx} className="pt-member-tag">
                      <span className="pt-member-tag-name">{member}</span>
                      <button
                        onClick={() => removeMember(member)}
                        className="pt-member-tag-remove"
                      >
                        <span className="material-symbols-outlined pt-member-tag-remove-icon">
                          close
                        </span>
                      </button>
                    </div>
                  ))}
                  {members.length === 0 && (
                    <span className="pt-member-empty">
                      No members added yet.
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Task list */}
          <div className="pt-card">
            <div className="pt-card-header">
              <h2 className="pt-card-header-title">
                <span className="material-symbols-outlined pt-card-header-icon">
                  list_alt
                </span>
                All Tasks
              </h2>
              <div className="pt-count-badge">{tasks.length} Total</div>
            </div>

            {tasks.length === 0 ? (
              <div className="pt-empty-state">
                <span className="material-symbols-outlined pt-empty-icon">
                  assignment
                </span>
                <p>No tasks assigned yet.</p>
                <p className="pt-empty-sub">Go to "Assign Task" to start.</p>
              </div>
            ) : (
              <div className="pt-table-wrapper">
                <table className="pt-table">
                  <thead className="pt-table-head">
                    <tr>
                      <th className="pt-th pt-th-small">Done</th>
                      <th className="pt-th">Task Name</th>
                      <th className="pt-th">Assigned To</th>
                      <th className="pt-th">Deadline</th>
                      <th className="pt-th">Status</th>
                    </tr>
                  </thead>
                  <tbody className="pt-table-body">
                    {tasks.map((task) => (
                      <tr
                        key={task.id}
                        className={
                          "pt-tr " +
                          (task.status === "Completed"
                            ? "pt-tr-completed"
                            : "")
                        }
                      >
                        <td className="pt-td pt-td-small">
                          <button
                            onClick={() => onToggleTask(task.id)}
                            className={
                              "pt-done-btn " +
                              (task.status === "Completed"
                                ? "pt-done-btn-completed"
                                : "pt-done-btn-pending")
                            }
                          >
                            {task.status === "Completed" && (
                              <span className="material-symbols-outlined pt-done-check">
                                check
                              </span>
                            )}
                          </button>
                        </td>
                        <td
                          className={
                            "pt-td pt-task-name " +
                            (task.status === "Completed"
                              ? "pt-task-name-completed"
                              : "")
                          }
                        >
                          {task.name}
                        </td>
                        <td className="pt-td">
                          <div
                            className={
                              "pt-assignee " +
                              (task.status === "Completed"
                                ? "pt-assignee-muted"
                                : "")
                            }
                          >
                            <div className="pt-assignee-avatar">
                              {task.assignedTo.charAt(0).toUpperCase()}
                            </div>
                            <span>
                              {task.assignedTo === leaderName
                                ? `${task.assignedTo} (You)`
                                : task.assignedTo}
                            </span>
                          </div>
                        </td>
                        <td
                          className={
                            "pt-td " +
                            (task.status === "Completed"
                              ? "pt-deadline-completed"
                              : "pt-deadline-normal")
                          }
                        >
                          {task.deadline}
                        </td>
                        <td className="pt-td">
                          <span
                            className={
                              "pt-status-pill " +
                              (task.status === "Completed"
                                ? "pt-status-pill-completed"
                                : "pt-status-pill-pending")
                            }
                          >
                            {task.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Right column */}
        <div className="pt-right">
          {/* Overall progress */}
          <div className="pt-card">
            <h3 className="pt-card-header-title pt-card-title-with-icon">
              <span className="material-symbols-outlined pt-card-header-icon">
                analytics
              </span>
              Overall Progress
            </h3>
            <div className="pt-progress-circle-wrapper">
              <div className="pt-progress-circle">
                <svg
                  className="pt-progress-svg"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="pt-progress-bg"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  ></path>
                  <path
                    className="pt-progress-fg"
                    strokeDasharray={`${progressPercentage}, 100`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="3"
                  ></path>
                </svg>
                <div className="pt-progress-center">
                  <span className="pt-progress-percent">
                    {progressPercentage}%
                  </span>
                  <span className="pt-progress-label">Complete</span>
                </div>
              </div>
            </div>
            <div className="pt-progress-summary">
              {completedTasks} of {totalTasks} tasks completed
            </div>
          </div>

          {/* Member contributions */}
          <div className="pt-card">
            <h3 className="pt-card-header-title">Member Contributions</h3>
            <div className="pt-member-stats">
              {memberStats.length === 0 ? (
                <p className="pt-member-stats-empty">
                  Add members to see stats.
                </p>
              ) : (
                memberStats.map((stat, idx) => (
                  <div key={idx} className="pt-member-stat">
                    <div className="pt-member-stat-header">
                      <div className="pt-member-stat-left">
                        <div className="pt-member-stat-avatar">
                          {stat.name.charAt(0).toUpperCase()}
                        </div>
                        <span className="pt-member-stat-name">
                          {stat.name === leaderName
                            ? `${stat.name} (You)`
                            : stat.name}
                        </span>
                      </div>
                      <span className="pt-member-stat-count">
                        {stat.completed}/{stat.total} Done
                      </span>
                    </div>
                    <div className="pt-member-stat-bar">
                      <div
                        className="pt-member-stat-bar-fill"
                        style={{
                          width:
                            stat.total === 0
                              ? "0%"
                              : `${(stat.completed / stat.total) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracking;