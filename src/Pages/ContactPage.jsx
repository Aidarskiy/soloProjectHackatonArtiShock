
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData("Toktogula street 217", "Monday-Sunday 10:00-20:00", "Sales department phone: +996704200830", "myjewelry@gmail.com"),
    createData("Moskovskaya street 123", "Monday-Sunday 10:00-20:00", "Sales department phone: +996709888470", "myjewelry@gmail.com"),
    createData("Suyumbaeva street 90", "Monday-Sunday 10:00-20:00", "Sales department phone: +996880 106666", "myjewelry@gmail.com"),
    createData("Usenbaeva street 142", "Monday-Sunday 10:00-20:00", "Sales department phone: +996997250150", "myjewelry@gmail.com"),
    createData("Pushkina street 69", "Monday-Sunday 10:00-20:00", "Sales department phone: +996559113371", "myjewelry@gmail.com"),
];

export default function BasicTable() {
    return (
        <TableContainer style={{background:'linear-gradient(to right, rgba(252,255,244,1) 0%,rgba(223,229,215,1) 0%,rgba(223,229,215,1) 16%,rgba(223,229,215,1) 44%,rgba(223,229,215,1) 62%,rgba(223,229,215,1) 75%,rgba(179,190,173,1) 100%)'}} component={Paper}>
            <Table  sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead >
                    <TableRow style={{border:"1px solid #9A8E95"}}>
                        <TableCell style={{border:"1px solid #9A8E95"}}>Address</TableCell>
                        <TableCell style={{border:"1px solid #9A8E95"}} align="right">Schedule</TableCell>
                        <TableCell style={{border:"1px solid #9A8E95"}} align="right">Contact</TableCell>
                        <TableCell style={{border:"1px solid #9A8E95"}} align="right">Email</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((product) => (
                        <TableRow
                            key={product.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0} }}
                        >
                            <TableCell
                            style={{border:"1px solid #9A8E95"}} component="th" scope="product">
                                {product.name}
                            </TableCell>
                            <TableCell style={{border:"1px solid #9A8E95"}}  align="right">{product.calories}</TableCell>
                            <TableCell style={{border:"1px solid #9A8E95"}} align="right">{product.fat}</TableCell>
                            <TableCell style={{border:"1px solid #9A8E95"}} align="right">{product.carbs}</TableCell>
                            <TableCell style={{border:"1px solid #9A8E95"}} align="right">{product.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

