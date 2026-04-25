import React from "react";

const FILES = [
  {
    name: "Project_Proposal_v2.pdf",
    type: "PDF",
    size: "2.4 MB",
    date: "2 hours ago",
    author: "Prof. Smith",
    icon: "picture_as_pdf",
    colorClass: "file-icon-red",
  },
  {
    name: "Requirements_Doc.docx",
    type: "DOCX",
    size: "1.1 MB",
    date: "Yesterday",
    author: "Dr. Emily White",
    icon: "description",
    colorClass: "file-icon-blue",
  },
  {
    name: "Architecture_Diagram.png",
    type: "PNG",
    size: "4.2 MB",
    date: "3 days ago",
    author: "Prof. Smith",
    icon: "image",
    colorClass: "file-icon-green",
  },
  {
    name: "Source_Code_Archive.zip",
    type: "ZIP",
    size: "15 MB",
    date: "1 week ago",
    author: "System Admin",
    icon: "folder_zip",
    colorClass: "file-icon-amber",
  },
];

const Files = () => {
  return (
    <div className="files-page">
      <div className="files-header-row">
        <div>
          <h2 className="files-title">Project Files</h2>
          <p className="files-subtitle">
            Manage documents related to your submissions.
          </p>
        </div>
        <div className="files-header-actions">
          <div className="files-search-wrapper">
            <span className="material-symbols-outlined files-search-icon">
              search
            </span>
            <input
              className="files-search-input"
              placeholder="Search files..."
              type="text"
            />
          </div>
          <button className="files-upload-btn">
            <span className="material-symbols-outlined files-upload-icon">
              upload_file
            </span>
            Upload
          </button>
        </div>
      </div>

      <div className="files-grid">
        {FILES.map((file, index) => (
          <div key={index} className="files-card">
            <div className="files-card-main">
              <div className="files-card-header">
                <div className={`files-icon-box ${file.colorClass}`}>
                  <span className="material-symbols-outlined files-icon">
                    {file.icon}
                  </span>
                </div>
                <span className="files-type-chip">{file.type}</span>
              </div>
              <h3 className="files-name" title={file.name}>
                {file.name}
              </h3>
              <div className="files-meta-list">
                <div className="files-meta-row">
                  <span className="material-symbols-outlined files-meta-icon">
                    person
                  </span>
                  <span>
                    By:{" "}
                    <span className="files-meta-author">{file.author}</span>
                  </span>
                </div>
                <div className="files-meta-row">
                  <span className="material-symbols-outlined files-meta-icon">
                    calendar_today
                  </span>
                  <span>{file.date}</span>
                </div>
              </div>
            </div>
            <div className="files-card-footer">
              <button className="files-action-btn">
                <span className="material-symbols-outlined files-action-icon">
                  visibility
                </span>
                View
              </button>
              <button className="files-action-btn">
                <span className="material-symbols-outlined files-action-icon">
                  download
                </span>
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Files;
