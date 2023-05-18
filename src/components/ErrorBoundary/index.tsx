// mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// react
import React, { Component, ReactNode } from 'react';

// icons
import logo from 'assets/logo.svg';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorStr?: string;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      // errorStr: '',
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, errorStr: error.message };
  }

  public componentDidCatch() {
    // componentDidCatch(error: Error, errorInfo: ErrorInfo)
    // console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <Box maxHeight="100%" minHeight="100vh" textAlign="center" p={2}>
          <img src={logo} className="App-logo" alt="logo" />
          <Typography variant="h3">Something error.... </Typography>
          <Button
            href="/"
            variant="contained"
            sx={{
              marginTop: 2,
            }}
          >
            Go home
          </Button>
        </Box>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
