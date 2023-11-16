import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Carimg from '../assets/car.jpg'
import Button from '@mui/material/Button';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Chip from '@mui/material/Chip';
import TablePagination from '@mui/material/TablePagination';
import { Box } from '@mui/material';



const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid() {
  const [cars, setCars] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


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

  const [error, setError] = useState(false)

  const handleClick = async (e, id) => { // Accept an additional parameter for the id of the record to delete
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:8800/cars/${id}`); // Use template literals to include the id in the URL
      window.location.reload();
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div>
      <Box sx={{
        p: 2,
        margin: 'auto',
        marginTop: 2,
        marginBottom: 2,
        maxWidth: "80%",
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}>
        <Typography variant='h4'>
          {cars.length} Results
        </Typography>
        <TablePagination
          component="div"
          count={cars.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}

        />
      </Box>

      {cars.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((car) => (

        <Paper key={car.id} sx={{
          p: 2,
          margin: 'auto',
          marginTop: 2,
          marginBottom: 2,
          maxWidth: "80%",
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',

        }}>
          <Grid container spacing={2}>
            <Grid item xs={9} md={3}>
              <ButtonBase sx={{
                height: "100%",
                width: "auto",
                marginTop: "0px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center"
              }}>
                <Img src={Carimg} alt="carimg" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} md={9} sm container sx={{ paddingLeft: "20px", margin: "auto" }}>
              <Grid item xs container direction="column" spacing={2} sx={{ justifyContent: "center", margin: "auto" }}>
                <Grid item xs container spacing={2}>
                  <Grid xs={12} md={8} sx={{ padding: "2px" }}>
                    <Grid spacing={2} container sx={{ width: "100%", display: "flex", flexWrap: "wrap", boxSizing: "border-box", marginTop: "10px", marginRight: "25px" }}>
                      <Grid item >
                        <Chip label={`CATEGORY ${car.category}`} sx={{ background: "orange", color: "white", borderRadius: "6px" }}>
                        </Chip>
                      </Grid>
                      <Grid item>
                        L
                      </Grid>
                      <Grid item>
                        {car.uk_town}
                      </Grid>
                    </Grid>
                    <Typography variant='h6' sx={{
                      fontSize: "1.25rem",
                      fontFamily: "inter",
                      fontWeight: 500,
                      lineHeight: 1.6
                    }}>
                      {car.year} {car.mark} {car.model} {car.cc}cc, {car.color}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4} sx={{ padding: "8px" }}>
                    <Grid container sx={{ width: "100%", display: "flex", flexWrap: "wrap", boxSizing: "border-box" }}>
                      <Grid xs={6} sm={6} md={12}>
                        <AvTimerIcon sx={{ display: "inline-block", fontSize: "20px", paddingLeft: "2px" }} />
                        <span style={{ marginLeft: "5px" }}>{car.mileage}</span>
                      </Grid>
                      <Grid xs={6} sm={6} md={12}>
                        <CheckBoxIcon sx={{ display: "inline-block", fontSize: "20px", paddingLeft: "2px" }} />
                        <span>Starts</span>
                      </Grid>
                      <Grid xs={6} sm={6} md={12}>
                        <CheckBoxIcon sx={{ display: "inline-block", fontSize: "20px", paddingLeft: "2px" }} />
                        <span>Drives</span>
                      </Grid>
                      <Grid xs={6} sm={6} md={12}>
                        <CheckBoxIcon sx={{ display: "inline-block", fontSize: "20px", paddingLeft: "2px" }} />
                        <span>Ref:{car.reference}</span>

                      </Grid>

                    </Grid>

                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={12}><hr /></Grid>
                  </Grid>
                  <Grid container spacing={2} sx={{ minHeight: "32px" }}>

                    <Grid item xs={12} sm={3} sx={{ margin: "auto", paddingRight: "100px" }}>
                      <Typography variant='h5' sx={{ color: "orange" }}>
                        £800
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={5} sx={{ margin: "auto", padding: "4px" }}>
                      <Grid container xs={12} spacing={2} sx={{ width: "calc(100% + 16px)", margin: "-8px" }}>
                        <Grid item sx={{ padding: "8px" }}>
                          24th Oct 2023 13:04
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={4} sx={{ margin: "auto", padding: "4px" }}>
                      <Button variant="contained" sx={{ color: "white", background: "orange" }} >
                        Place Bid
                      </Button>


                    </Grid>

                  </Grid>
                </Grid>

              </Grid>

            </Grid>

          </Grid>

        </Paper>

      ))
      }



    </div >
  );
}