import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import { Button, Grid, IconButton, Menu, MenuItem, Typography } from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
];


const useStyles = makeStyles({
    table: {
        minWidth: 650,
        maxWidth: 810
    },
    input: {
        display: 'none',
    }
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}


const rows = [
    createData('Pending', 'ID Proof', 'Aadhaar Card', 'KA-3254325345'),
    createData('Success', "Address Proof", 'Passport', 'KA-4546546346'),

];


export default function BasicTable() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <TableContainer component={Paper}>
            <Typography variant="h4"><DescriptionOutlinedIcon style={{ fontSize: "40px" }} />&nbsp;&nbsp;Documents</Typography>
            <Table component={Grid} container direction="column" className={classes.table} aria-label="simple table">
                <TableHead component={Grid} item>
                    <TableRow style={{ padding: "0 10px" }}>
                        <TableCell align="center" style={{ padding: "0 0" }}>Status</TableCell>
                        <TableCell align="center" style={{ padding: "0 30px" }}>Purpose</TableCell>
                        <TableCell align="center" style={{ padding: "0 30px" }}>Type</TableCell>
                        <TableCell align="center" style={{ padding: "0 30px" }}>Number</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name} component={Grid} item container direction="column">
                            <Paper variant="outlined">
                                <TableCell component="th" scope="row"><img height="15px" width="15px" src={
                                    (row.name === "Success") ? "./green-icon.png" : "./red-icon.png"
                                } alt="red" />&nbsp;{row.name}</TableCell>
                                <TableCell align="left">{row.calories}</TableCell>
                                <TableCell align="left">{row.fat}</TableCell>
                                <TableCell align="left">{row.carbs}</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell> <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                />
                                    <label htmlFor="contained-button-file">
                                        <Button component="span">
                                            {row.name === "Success" ? <div className={classes.input}><PublishIcon /> Upload</div> : <div><PublishIcon /> Upload</div>}
                                        </Button>
                                    </label>
                                </TableCell>
                                <TableCell>
                                    <IconButton
                                        aria-label="more"
                                        aria-controls="long-menu"
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                    <Menu
                                        id="long-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={open}
                                        onClose={handleClose}
                                        PaperProps={{
                                            style: {
                                                maxHeight: 48 * 4.5,
                                                width: '20ch',
                                            },
                                        }}
                                    >
                                        {options.map((option) => (
                                            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </TableCell>
                            </Paper>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}