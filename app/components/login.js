// /app/components/Login.js
'use client'

import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/app/firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const userDocRef = doc(firestore, 'users', email);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
      await signInWithEmailAndPassword(auth, email, password);
      setError(''); // Clear any previous error messages
    } else {
        setError('This email is not registered. Please sign up first.');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      gap={2}
    >
      <Typography variant="body2" sx={{ color: 'white' }}>
      Don't have an account? <a href="/signup" style={{ color: 'lightblue' }}>Sign Up</a>
      </Typography>

      
      <Typography variant="h4">Login</Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your Email"
        InputProps={{
            sx: {
              '& .MuiInputBase-input': {
                color: 'white',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
            },
          }}
          InputLabelProps={{
            sx: {
              color: 'white',
              '&.Mui-focused': {
                color: 'white',
              },
            },
          }}
          sx={{
            '& .MuiInputBase-input::placeholder': {
              color: 'white',
              opacity: 1,
            },
          }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        InputProps={{
            sx: {
            '& .MuiInputBase-input': {
                color: 'white',
            },
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
            },
            },
        }}
        InputLabelProps={{
            sx: {
            color: 'white',
            '&.Mui-focused': {
                color: 'white',
            },
            },
        }}
        sx={{
            '& .MuiInputBase-input::placeholder': {
            color: 'white',
            opacity: 1,
            },
        }}
      />
      {error && (
        <Typography color="error">
          {error}
        </Typography>
      )}
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
}
