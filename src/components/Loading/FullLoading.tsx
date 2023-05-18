// mui
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

// icons
import logo from 'assets/logo.svg';

function FullLoading() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src={logo} className="App-logo" alt="logo" />
      <Typography variant="h3" fontSize={['1.5rem', '2rem']}>
        Loading
      </Typography>
    </Box>
  );
}

export default FullLoading;
