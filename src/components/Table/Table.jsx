import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './Table.module.css';


function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData('Intel Core i5 10400F', 1268422788, "2 april 2023", "Approved"),
  createData('Asus GeForce 1660Ti 6GB', 2965353547, "5 march 2023", "Approved"),
  createData('Sigate HDD 1TB', 5693728543, "2 march 2023", "Panding"),
  createData('Kingston FURY™ Beast DDR4', 7945285692, "26 february 2023", "Delivered"),
  createData('Kingston NV2 SSD 500GB', 4835693570, "17 february 2023", "Delivered"),
];

const makeStyles = (status) => {
    if(status === 'Approved') {
        return {
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
        } 
    } else if (status === 'Panding') {
        return {
            background: '#ffadad8f',
            color: 'red',
        }
    } else  {
        return {
            background: '#59bfff',
            color: 'white',
        }
    }
}

const BasicTable = () => {
  return (
    <div className={styles.TableContainer}>
        <h3 className={styles.tableTitle}>Recent Orders</h3>
    <TableContainer component={Paper}
    style={{ boxShadow: '0px 13px 20px 0px #80808029'}}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ p: '10px', fontWeight: 'bold'}}>
            <TableCell sx={{fontWeight: 700}}>Products</TableCell>
            <TableCell sx={{fontWeight: 700}} align="left">tracking ID</TableCell>
            <TableCell sx={{fontWeight: 700}} align="left">Date</TableCell>
            <TableCell sx={{fontWeight: 700}} align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>

              <TableCell align="left">
                <span className={styles.status} style={makeStyles(row.status)}>{row.status}</span>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default BasicTable;