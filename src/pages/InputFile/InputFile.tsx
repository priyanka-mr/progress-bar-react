import React, { ChangeEvent, useState } from 'react';

import { InputLabel, TextField, Button, Link } from '@mui/material';

const InputFile = () => {
    const [inputValue, setInputValue] = useState<number>(0);
    const lastEnteredValue = localStorage.getItem('DISPLAY_VALUE');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputNumber = e.target.value ? parseFloat(e.target.value) : 0;
        setInputValue(inputNumber);
    };

    const onClick = () => {
        if (inputValue > 1 && inputValue <= 100) {
            localStorage.setItem('DISPLAY_VALUE', inputValue.toString());
            setInputValue(0);
        } else {
            alert('Enter a number between 1 and 100');
            setInputValue(0);
            
        }
    };

    const onClickReset = () => {
        localStorage.clear();
    };

    return (

    <div className='App' style={{ backgroundColor: 'white', padding: 20 }}>
        <div>
            <InputLabel>Enter the Percentage Value</InputLabel>
            <TextField style={{ marginTop: 10 }} type='number' variant="outlined" value={inputValue} onChange={onChange} />
        </div>
        <div>
            <Button onClick={onClick}>Submit</Button>
            <Button onClick={onClickReset}>Reset</Button>
        </div>
        <div>
            <Link href='/output-file' target='_blank'>View Output file</Link>
        </div>
        <div>
            <InputLabel>Last Entered Value: {lastEnteredValue}</InputLabel>
        </div>
    </div>
    )
}

export default InputFile;
