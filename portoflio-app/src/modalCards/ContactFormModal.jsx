import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, Checkbox, FormGroup } from '@mui/material';
import './ContactFormModal.css';
import CancelSubmitButton from '../buttons/CancelSubmitButton';
import SubmitButton from '../buttons/SubmitButton';

const ContactFormModal = ({ open, onClose }) => {
  const [inquiryType, setInquiryType] = useState('General Inquiry');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="modal-box">
        <Typography variant="h6" component="h2" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'var(--primary-color)' },
                '&:hover fieldset': { borderColor: 'var(--primary-color)' },
                '&.Mui-focused fieldset': { borderColor: 'var(--primary-color)' },
              },
              '& .MuiInputLabel-root': { color: 'var(--primary-color)' },
              '& .MuiInputBase-input': { color: 'var(--primary-color)' },
              '& .MuiInputBase-input::placeholder': { color: 'var(--primary-color)' },
            }}
          />

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'var(--primary-color)' },
                '&:hover fieldset': { borderColor: 'var(--primary-color)' },
                '&.Mui-focused fieldset': { borderColor: 'var(--primary-color)' },
              },
              '& .MuiInputLabel-root': { color: 'var(--primary-color)' },
              '& .MuiInputBase-input': { color: 'var(--primary-color)' },
              '& .MuiInputBase-input::placeholder': { color: 'var(--primary-color)' },
            }}
          />

          <TextField
            label="Company/Organization (Optional)"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'var(--primary-color)' },
                '&:hover fieldset': { borderColor: 'var(--primary-color)' },
                '&.Mui-focused fieldset': { borderColor: 'var(--primary-color)' },
              },
              '& .MuiInputLabel-root': { color: 'var(--primary-color)' },
              '& .MuiInputBase-input': { color: 'var(--primary-color)' },
              '& .MuiInputBase-input::placeholder': { color: 'var(--primary-color)' },
            }}
          />

          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend" sx={{ color: 'var(--primary-color)' }}>Type of Inquiry</FormLabel>
            <RadioGroup
              value={inquiryType}
              onChange={(e) => setInquiryType(e.target.value)}
            >
              <FormControlLabel value="General Inquiry" control={<Radio sx={{ color: 'var(--primary-color)', '&.Mui-checked': { color: '#6B57F5' } }} />} label="General Inquiry" sx={{ color: 'var(--primary-color)' }} />
              <FormControlLabel value="Project Collaboration" control={<Radio sx={{ color: 'var(--primary-color)', '&.Mui-checked': { color: '#6B57F5' } }} />} label="Project Collaboration" sx={{ color: 'var(--primary-color)' }} />
              <FormControlLabel value="Job Opportunity" control={<Radio sx={{ color: 'var(--primary-color)', '&.Mui-checked': { color: '#6B57F5' } }} />} label="Job Opportunity" sx={{ color: 'var(--primary-color)' }} />
            </RadioGroup>
          </FormControl>

          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'var(--primary-color)' },
                '&:hover fieldset': { borderColor: 'var(--primary-color)' },
                '&.Mui-focused fieldset': { borderColor: 'var(--primary-color)' },
              },
              '& .MuiInputLabel-root': { color: 'var(--primary-color)' },
              '& .MuiInputBase-input': { color: 'var(--primary-color)' },
              '& .MuiInputBase-input::placeholder': { color: 'var(--primary-color)' },
            }}
          />

          <FormGroup>
            <FormControlLabel
              control={<Checkbox required sx={{ color: 'var(--primary-color)', '&.Mui-checked': { color: '#6B57F5' } }} />}
              label="I freely and voluntarily consent to the collection and processing of my personal information in accordance with the Philippine Data Privacy Act of 2012 and other Related Laws"
              sx={{ color: 'var(--primary-color)' }}
            />
          </FormGroup>

          <Box mt={2} display="flex" justifyContent="flex-end">
            <CancelSubmitButton onClick={onClose} />
            <SubmitButton type="submit" />
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default ContactFormModal;