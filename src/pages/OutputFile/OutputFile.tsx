import React, { useEffect } from 'react';
import { InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const OutputFile = () => {
    const maxValue = 500000;
    const getLocalStorageValue = localStorage.getItem('DISPLAY_VALUE');
    
    const localStorageValue = getLocalStorageValue !== null ? parseInt(getLocalStorageValue) : 0;

    const totalCollected = (localStorageValue/100) * maxValue;

    const totalDisplayValue = totalCollected <= maxValue ? totalCollected : maxValue;

    useEffect(() => {
        // window.setTimeout(() => {
        //     window.location.reload();
        // }, 5000);
    }, [localStorageValue]);
    return (
        <div className='App'>
            <div>
                <InputLabel>Total Display Value</InputLabel>
                <InputLabel>{localStorageValue}</InputLabel>
            </div>
            <BorderLinearProgress variant="determinate" value={localStorageValue} />
            <InputLabel>{totalDisplayValue}</InputLabel>
        </div>
    )
}

export default OutputFile;