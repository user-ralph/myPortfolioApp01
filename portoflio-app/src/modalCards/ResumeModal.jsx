import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import DownloadResumeButton from '../buttons/DownloadResumeButton';

// Custom Styled Dialog
const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: '25px',  // Rounded corners
    margin: '10px',         // Margin on left and right
    padding: theme.spacing(2),
    fontFamily: 'Source Sans 3, sans-serif', // Apply the same font family
  },
}));

const ResumeModal = ({ open, onClose }) => {
  return (
    <StyledDialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        <Typography variant="h5" sx={{ fontFamily: '"Source Sans 3", sans-serif' }}>
          Ralph Vincent P. Arienza
        </Typography>
        <Typography variant="subtitle1" sx={{ fontFamily: '"Source Sans 3", sans-serif' }}>
          Cagayan de Oro, Philippines | (+63) 915 3016 375 | work.rvarienza@gmail.com
        </Typography>
      </DialogTitle>
      <DialogContent dividers>
        {/* Education Section */}
        <Box mb={2}>
          <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: '"Source Sans 3", sans-serif' }}>
            EDUCATION
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: '"Source Sans 3", sans-serif' }}>
            <strong>University of Science and Technology of Southern Philippines</strong> – Cagayan de Oro City<br />
            <em>Bachelor of Science in Computer Engineering</em> – 2025
          </Typography>
          <Typography variant="body1" mt={1} sx={{ fontFamily: '"Source Sans 3", sans-serif' }}>
            <strong>Xavier University – Ateneo de Cagayan</strong> – Cagayan de Oro City<br />
            <em>Senior High School, TVL – Machining Track</em> – 2021
          </Typography>
        </Box>

        {/* Leadership Experience */}
        <Box mb={2}>
          <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: '"Source Sans 3", sans-serif' }}>
            LEADERSHIP EXPERIENCE
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: '"Source Sans 3", sans-serif' }}>
            <strong>Google Developer Student Clubs USTP</strong> – Cagayan de Oro<br />
            <em>Chief Community Development Officer (Aug 2023 – May 2024)</em>
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: '"Source Sans 3", sans-serif' }}>
            • Directed community development efforts, fostering collaboration among institutions.<br />
            • Represented the organization at the DILG “DAGYAW 2024” discussing AI innovation.<br />
            • Led engagement efforts with Oro Youth initiatives.<br />
          </Typography>

          <Typography variant="body1" mt={1} sx={{ fontFamily: '"Source Sans 3", sans-serif' }}>
            <em>Community Formations Ambassador (Sep 2022 – Jun 2023)</em>
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: '"Source Sans 3", sans-serif' }}>
            • Coordinated project-based activities for efficient execution.<br />
            • Spearheaded "Tech Circle" event with 90% project success rate.<br />
          </Typography>

          <Typography variant="body1" mt={1} sx={{ fontFamily: '"Source Sans 3", sans-serif' }}>
            <em>Communications Ambassador (Sep 2021 – Jun 2022)</em>
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: '"Source Sans 3", sans-serif' }}>
            • Enhanced event promotions through effective communication.<br />
            • Improved visibility and participation channels.<br />
          </Typography>
        </Box>

        {/* Certifications */}
        <Box mb={2}>
          <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: '"Source Sans 3", sans-serif' }}>
            CERTIFICATIONS
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: '"Source Sans 3", sans-serif' }}>
            • <strong>Meta Front-End Developer Certificate</strong> – 2025<br />
            • <strong>Google UI/UX Designer Certificate</strong> – 2024<br />
            • <strong>Google Project Management Certificate</strong> – 2024<br />
            • <strong>Google IT Support Certificate</strong> – 2024<br />
            • <strong>Microsoft Public Relations and Communications Associate</strong> – 2025
          </Typography>
        </Box>

        {/* Skills, Activities & Interests */}
        <Box mb={2}>
          <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: '"Source Sans 3", sans-serif' }}>
            SKILLS, ACTIVITIES & INTERESTS
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: '"Source Sans 3", sans-serif' }}>
            <strong>Languages:</strong> English, Filipino<br />
            <strong>Technical Skills:</strong> Microsoft Office Suite, Google Workspace, Figma, Canva, Web Development<br />
            <strong>Soft Skills:</strong> Leadership, Public Relations, Communication, Project Management<br />
            <strong>Interests:</strong> Advocating for tech-driven solutions to enhance community engagement.
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'space-between' }}>
        <DownloadResumeButton />
        <Button onClick={onClose} sx={{ color: '#6B57F5' }}>
          Close
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default ResumeModal;