"use client"

import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { signIn } from 'next-auth/react'; // Import signIn from next-auth

export default function NonAuthPageView() {
  // Function to handle Google Sign In
  const handleGoogleSignIn = () => {
    signIn('google'); // This will trigger the Google sign-in flow
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to pisomecak
      </Typography>
      <Typography variant="body1" paragraph>
        Prosím, prihláste sa pre plný prístup.
      </Typography>
      
      {/* Google Sign-In Button */}
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleGoogleSignIn}
        startIcon={<GoogleIcon />} // Adding Google icon to the button
        sx={{ marginTop: 2 }} // Optional: add some margin for spacing
      >
        Sign in with Google
      </Button>
    </Container>
  );
}
