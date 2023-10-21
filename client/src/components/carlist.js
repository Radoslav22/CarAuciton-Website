import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Carimg from '../assets/car.jpg'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Divider from '@mui/material-next/Divider';




const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid() {
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
      {cars.map((car) => (


        <Paper
          key={car.id}
          sx={{
            p: 2,
            margin: 'auto',
            marginTop: 2,
            marginBottom: 2,
            maxWidth: "80%",
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',

          }}
        >

          <Grid container spacing={2} key={car.id}>

            <Grid item>

              <ButtonBase sx={{ width: "auto", height: "50%", padding: "50 50 50 50" }}>

                <Img src={Carimg} alt="carimg" />

              </ButtonBase>
            </Grid>

            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {car.manufacturer} {car.model}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Year: {car.year}, {car.mileage}km
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {car.description}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  {car.price}.00$
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid sx={{ ml: 68 }}>
            <Stack direction="row" spacing={2}>
              <Link style={{ textDecoration: "none" }} to={`/update/${car.id}`}>
                <Button variant="contained" color="success" >
                  Edit
                </Button>
              </Link>
              <Button onClick={(e) => handleClick(e, car.car_id)} variant="outlined" color="error">
                Delete
              </Button>
            </Stack>

          </Grid>
        </Paper >
      ))}

      <Box>
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
          <Grid item xs={12} md={9} sm container sx={{ padding: "20px" }}>
            <Grid item xs container direction="column" spacing={2} sx={{ justifyContent: "center" }}>
              <Grid item xs container spacing={2}>
                <Grid xs={12} md={8} sx={{ padding: "2px" }}>
                  <Grid spacing={2} container sx={{ width: "100%", display: "flex", flexWrap: "wrap", boxSizing: "border-box", marginTop: "10px", marginRight: "25px" }}>
                    <Grid item>
                      <Typography sx={{ background: "yellow" }}>Category N</Typography>
                    </Grid>
                    <Grid item>
                      L
                    </Grid>
                    <Grid item>
                      Andover
                    </Grid>
                  </Grid>
                  <Typography variant='h6' sx={{
                    fontSize: "1.25rem",
                    fontFamily: "inter",
                    fontWeight: 500,
                    lineHeight: 1.6
                  }}>
                    Skoda Fabia ala bala
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4} sx={{ padding: "8px" }}>
                  <Grid container sx={{ width: "100%", display: "flex", flexWrap: "wrap", boxSizing: "border-box" }}>
                    <Grid xs={6} sm={6} md={12}>
                      <AvTimerIcon sx={{ display: "inline-block", fontSize: "20px", paddingLeft: "2px" }} />
                      <span style={{ marginLeft: "5px" }}>22,555</span>
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
                      <span>Ref:12211</span>

                    </Grid><Grid container xs={1} spacing={2}>
                      <Grid item xs={12} sm={3}>
                        <Typography variant='h5' sx={{ color: "orange" }}>
                          850
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={5}>
                        <Grid container xs={2} spacing={2}>
                          <Typography variant='h6' >
                            21st Oct 2023 13:00
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                </Grid>

              </Grid>

            </Grid>

          </Grid>

        </Grid>

      </Box>

    </div >
  );
}