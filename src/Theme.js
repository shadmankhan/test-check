import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({

    overrides: {

        MuiTableHead: {
            root: {
                opacity: "0.7",
            }
        },

        MuiTableCell: {
            root: {
                textDecoration: "none",
            },
        },

        MuiTableRow: {
            root: {
                margin: 20,
                textDecoration: "none",
            },
        },
        MuiTableContainer: {
            root: {
                padding: "50px",
            }
        },
        MuiGrid: {
            root: {
                display: "flex",
            }
        },
        MuiPaper: {
            rounded: {
                borderRadius: "15px",
                margin: "10px 0"
            }
        },
        MuiTypography: {
            root: {
                opacity: "0.5",
                display: "flex",
                alignItems: "center",
                marginBottom: 20,
            }
        },
        MuiButton: {
            text: {
                color: "blue"
            }
        }
    }
});

export default Theme;