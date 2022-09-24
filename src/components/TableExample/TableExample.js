import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const CustomizedTables = (props) => {
    const { tableData } = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Varlık</StyledTableCell>
            <StyledTableCell align="right">Alış&nbsp;(TL)</StyledTableCell>
            <StyledTableCell align="right">Satış&nbsp;(TL)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row" sx={{ fontWeight: "bold"}}>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right" sx={{ fontWeight: "bold"}}>{parseFloat(row.buying).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right" sx={{ fontWeight: "bold"}}>{parseFloat(row.selling).toFixed(2)}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomizedTables;