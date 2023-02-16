import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './Orders.module.css';

import {rows} from '../../data/ordersData';




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


const Orders = () => {
  return (
    <div className={styles.ordersContainer}>
        <h1 className={styles.title}>Orders</h1>
    <TableContainer component={Paper}
    style={{ boxShadow: '0px 13px 20px 0px #80808029', maxHeight: '550px' }}
    >
      <Table sx={{ minWidth: 60, overflowX: 'scroll' }} aria-label="simple table">
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


export default Orders;