import { createTheme } from '@mui/material/styles';

const compactDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
      light: '#e3f2fd',
      dark: '#42a5f5',
      contrastText: '#000000',
    },
    secondary: {
      main: '#ce93d8',
      light: '#f3e5f5',
      dark: '#ab47bc',
      contrastText: '#000000',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
  },
  typography: {
    // Reduce font sizes for compact design
    h1: { fontSize: '2rem' },
    h2: { fontSize: '1.75rem' },
    h3: { fontSize: '1.5rem' },
    h4: { fontSize: '1.25rem' },
    h5: { fontSize: '1.1rem' },
    h6: { fontSize: '1rem' },
    body1: { fontSize: '0.875rem' },
    body2: { fontSize: '0.8rem' },
    button: { 
      fontSize: '0.8rem',
      textTransform: 'none',
    },
    caption: { fontSize: '0.7rem' },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: factor => `${0.5 * factor}rem`, // Reduced spacing
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minHeight: '32px',
          padding: '4px 10px',
        },
        sizeSmall: {
          minHeight: '24px',
          padding: '2px 8px',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 8,
        },
        sizeSmall: {
          padding: 4,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: 8,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '12px',
          '&:last-child': {
            paddingBottom: '12px',
          },
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: '12px',
        },
        title: {
          fontSize: '1rem',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '6px 12px',
          fontSize: '0.8rem',
        },
        head: {
          fontWeight: 'bold',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:nth-of-type(even)': {
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
        },
        input: {
          padding: '8px 12px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: '8px 12px',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: 2,
          fontSize: '0.7rem',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: '24px',
        },
        label: {
          fontSize: '0.75rem',
          padding: '0 8px',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          margin: 8,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: '12px 16px',
          fontSize: '1.1rem',
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '12px 16px',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: '8px 12px',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: '40px',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: '40px',
          padding: '6px 12px',
          fontSize: '0.8rem',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: '4px 0',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: '4px 8px',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: '0.875rem',
        },
        secondary: {
          fontSize: '0.75rem',
        },
      },
    },
  },
});

export default compactDarkTheme;