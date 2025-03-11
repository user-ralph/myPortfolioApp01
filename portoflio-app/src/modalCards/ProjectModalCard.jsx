import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { BiLinkExternal } from "react-icons/bi";
import './ProjectModalCard.css';

const ProjectModalCard = ({ open, handleClose, project }) => {
  // Function to handle visit site button click
  const handleVisitSite = () => {
    if (project?.linkPage) {
      window.open(project.linkPage, '_blank');
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: { borderRadius: '25px' }
      }}
    >
      <DialogTitle id="modal-title" className="project-modal-title">
        <Typography variant="h5">{project?.title} Case Study</Typography>
        <Typography variant="subtitle1" className="project-modal-description">{project?.description}</Typography>
      </DialogTitle>
      <DialogContent dividers>
        <img className='project-modal-image' src={project?.image} alt={project?.title} />
        {project?.timeline && (
          <div className="project-modal-section-timeline">
            <h3>Timeline:</h3>
            <p>{project.timeline}</p>
            <div className="linedivider"></div>
          </div>
        )}

        {project?.overview && (
          <div className="project-modal-section">
            <h3>Overview</h3>
            <p>{project.overview}</p>
          </div>
        )}

        {project?.problemStatement && (
          <div className="project-modal-section">
            <h3>Problem Statement</h3>
            <p>{project.problemStatement}</p>
          </div>
        )}

        {project?.solution && (
          <div className="project-modal-section">
            <h3>Solution</h3>
            <p>{project.solution}</p>
          </div>
        )}

        {project?.businessOpportunity && (
          <div className="project-modal-section">
            <h3>Business Opportunity</h3>
            <p>{project.businessOpportunity}</p>
          </div>
        )}
      </DialogContent>
      <DialogActions>
        {/* Updated Visit Site button as <div> for better styling control */}
        {project?.linkPage && (
          <div 
            onClick={handleVisitSite} 
            className="visit-site-button"
          >
            Visit Site <BiLinkExternal className="link-icon" />
          </div>
        )}
        {/* Close button second */}
        <Button 
          onClick={handleClose} 
          className="project-modal-button"
          sx={{ color: '#6B57F5', marginRight: '25px' }}

        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectModalCard;
