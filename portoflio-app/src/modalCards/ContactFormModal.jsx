import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { 
  TextField, 
  RadioGroup, 
  FormControlLabel, 
  Radio, 
  FormControl, 
  FormLabel, 
  Checkbox, 
  FormGroup 
} from '@mui/material';
import { motion } from 'framer-motion';
import SubmitButton from '../buttons/SubmitButton';

// Custom Styled Dialog with glass morphism effect
const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: '12px',  // Rounded corners
    margin: '5px',         // Margin on left and right
    padding: theme.spacing(2),
    width: 'calc(100% - 10px)',
    maxWidth: '650px',
    background: 'rgba(156, 153, 196, 0.25)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(8.5px)',
    WebkitBackdropFilter: 'blur(8.5px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    willChange: 'transform', // Optimize for animations
  },
}));

// Motion Dialog component that only animates the modal itself
const MotionDialog = motion(StyledDialog);

const ContactFormModal = ({ open, onClose }) => {
  const [inquiryType, setInquiryType] = useState('General Inquiry');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    onClose();
  };

  // Common styles for text fields with white text
  const textFieldStyle = {
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.7)' },
      '&:hover fieldset': { borderColor: 'white' },
      '&.Mui-focused fieldset': { borderColor: 'white' },
    },
    '& .MuiInputLabel-root': { 
      color: 'white',
      '&.Mui-focused': { color: 'white' }
    },
    '& .MuiInputBase-input': { color: 'white' },
    '& .MuiInputBase-input::placeholder': { color: 'rgba(255, 255, 255, 0.7)' },
    marginY: 1.5,
  };

  // Simple animation variables - focused only on the essential transform
  const modalAnimationProps = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
    transition: { 
      duration: 0.2,  // Shorter duration
      ease: [0.33, 1, 0.68, 1]  // Custom easing curve for smooth motion
    }
  };

  return (
    <MotionDialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      {...modalAnimationProps}
      PaperProps={{
        style: {
          background: 'rgba(156, 153, 196, 0.25)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          backdropFilter: 'blur(8.5px)',
          WebkitBackdropFilter: 'blur(8.5px)',
        }
      }}
    >
      <DialogTitle sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ color: 'white' }}>
          Contact Us
        </Typography>
      </DialogTitle>
      
      <form onSubmit={handleSubmit}>
        <DialogContent dividers sx={{ 
          borderColor: 'rgba(255, 255, 255, 0.2)', 
          '&::-webkit-scrollbar': { width: '8px' },
          '&::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: '4px' }
        }}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            required
            sx={textFieldStyle}
            InputLabelProps={{ style: { color: 'white' } }}
          />

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            required
            sx={textFieldStyle}
            InputLabelProps={{ style: { color: 'white' } }}
          />

          <TextField
            label="Company/Organization (Optional)"
            variant="outlined"
            fullWidth
            sx={textFieldStyle}
            InputLabelProps={{ style: { color: 'white' } }}
          />

          <FormControl component="fieldset" sx={{ marginY: 1.5, width: '100%' }}>
            <FormLabel component="legend" sx={{ color: 'white' }}>
              Type of Inquiry
            </FormLabel>
            <RadioGroup
              value={inquiryType}
              onChange={(e) => setInquiryType(e.target.value)}
            >
              <FormControlLabel 
                value="General Inquiry" 
                control={<Radio sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }} />} 
                label="General Inquiry" 
                sx={{ color: 'white' }} 
              />
              <FormControlLabel 
                value="Project Collaboration" 
                control={<Radio sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }} />} 
                label="Project Collaboration" 
                sx={{ color: 'white' }} 
              />
              <FormControlLabel 
                value="Job Opportunity" 
                control={<Radio sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }} />} 
                label="Job Opportunity" 
                sx={{ color: 'white' }} 
              />
            </RadioGroup>
          </FormControl>

          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            required
            sx={textFieldStyle}
            InputLabelProps={{ style: { color: 'white' } }}
          />

          <FormGroup sx={{ marginY: 1.5 }}>
            <FormControlLabel
              control={<Checkbox required sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }} />}
              label="I freely and voluntarily consent to the collection and processing of my information in accordance with the Philippine Data Privacy Act of 2012 and other Related Laws"
              sx={{ color: 'white' }}
            />
          </FormGroup>
        </DialogContent>

        <DialogActions sx={{ justifyContent: 'space-between', padding: 2 }}>
          <Button 
            onClick={onClose} 
            sx={{ color: 'white', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
          >
            Cancel
          </Button>
          <SubmitButton type="submit" />
        </DialogActions>
      </form>
    </MotionDialog>
  );
};

export default ContactFormModal;