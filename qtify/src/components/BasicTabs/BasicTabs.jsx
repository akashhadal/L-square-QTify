import * as React from 'react';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ handleChangeIndex}) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    //setting the "value" state of this component so that the position of active tab and its indicator can change
    setValue(newValue);
    //to pass the index of freshly selected tab to app.js
    handleChangeIndex(newValue);
  };

// All rock pop jezz blues
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" 
         TabIndicatorProps={{
            style: { backgroundColor: "#34c94b" }
        }} textColor='#34c94b' >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Rock" {...a11yProps(1)} />
          <Tab label="Pop" {...a11yProps(2)} />
          <Tab label="Jazz" {...a11yProps(3)} />
          <Tab label="Blues" {...a11yProps(4)} />
        </Tabs>
      </Box>
    </Box>
  );
}


// git config --global --unset user.name
// git config --global --unset user.email