import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

export default function TablePaginationDemo() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchAllCars = async () => {
            try {
                const res = await axios.get("http://localhost:8800/cars");
                setCars(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllCars();
    }, []);
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div style={{
            p: 2,
            margin: 'auto',
            marginTop: 20,
            marginBottom: 2,
            maxWidth: "80%",
            flexGrow: 1,
            backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
        >
            <Typography variant='h4'>
                {cars.length} Results
            </Typography>
            <TablePagination
                component="div"
                count={100}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}

            />
        </div>
    );
}