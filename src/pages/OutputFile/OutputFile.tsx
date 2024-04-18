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
    
    const localStorageValue = getLocalStorageValue !== null ? parseFloat(getLocalStorageValue) : 0;

    const totalCollected = (localStorageValue/100) * maxValue;

    const totalDisplayValue = totalCollected <= maxValue ? totalCollected : maxValue;

    useEffect(() => {
        // window.setTimeout(() => {
        //     window.location.reload();
        // }, 5000);
    }, [localStorageValue]);
    return (
        <div style={{ margin: 25 }}>
          <div style={{ padding: 25, backgroundColor: 'white' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <InputLabel style={{ overflow: 'visible' }}>
                  <span style={{ fontWeight: 'bold', color: 'black', fontSize: 30 }}>Whack-a-Fraudster</span> 
                  <span className='text text-container'> for good</span></InputLabel>
                <div>
                <InputLabel style={{ color: '#1a90ff', fontSize: 30, fontWeight: 'bold' }}>
                  &#3647;{totalDisplayValue.toLocaleString()}
                </InputLabel>
                <InputLabel>out of &#3647;500,000 raised</InputLabel>

                </div>
            </div>
            <div style={{ marginTop: 16 }}>
              <BorderLinearProgress variant="determinate" value={localStorageValue} />
            </div>
          </div>
        </div>
    )
}

export default OutputFile;