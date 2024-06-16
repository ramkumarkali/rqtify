import * as React from 'react';
import { useState } from 'react';
// import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import { Typography } from '@mui/material';
import Box from '@mui/material/Box';


function allprops(index)
{
    return {
        id:`simple-tab-${index}`,
        'aria-controls':`simple-tabpanel-${index}`,
    };
}


export default function Basictabs({handleChangeIndex})
{
    const [value,setvalue] = useState(0);


    const handleChange = (event,newValue) =>{
        setvalue(newValue);
        handleChangeIndex(newValue);
    }

    return (
        <Box sx={{width:'100%'}}>
            <Box sx={{borderBottom:1,borderColor:'divider'}}>
                <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'
                TabIndicatorProps={{style:{backgroundColor:"#34c94b"}}} textColor='#34c94b'>
                    <Tab label="All" {...allprops(0)} />
                    <Tab label="Rock" {...allprops(1)} />
                    <Tab label="Pop" {...allprops(2)} />
                    <Tab label="Jazz" {...allprops(3)}/>
                    <Tab label="Blues"{...allprops(4)}/>
                </Tabs>
            </Box>
        </Box>
    )
}