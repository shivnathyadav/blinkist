import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';



export default function CustomTabs(props: any) {
  const [value, setValue] = React.useState('current');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    props.stateHandler && props.stateHandler(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
    
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        textColor="primary"
        indicatorColor='primary'
      >
        <Tab value="current" label="Currently reading" />
        <Tab value="finished" label="Finished" />
      </Tabs>
    </Box>
  );
}