import React from "react";
import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import { Chip, Divider } from "@material-ui/core";
import { Directions } from "@mui/icons-material";
import Navbar from "../components/Navbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";
import AssistantPhotoRoundedIcon from "@mui/icons-material/AssistantPhotoRounded";

const Details1 = () => {
  return (
    <>
      <Navbar />
      <Container className="shadow mt-5">
        <div
          style={{
            display: "flex",
            background: "white",
            flexDirection: "column",
            margin: "0px",
            padding: "5px",
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{ width: "50%", float: "left", fontSize: "30px" }}
              className="a-title"
            >
              Project Details
            </div>

            {/* <div style={{ width: "50%" }}>
              <p style={{ float: "right" }}>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <h2>₹250</h2>
                  </li>

                  <li style={{ display: "flex" }}>
                    <AccessTimeFilledRoundedIcon />
                    <h4>Beginning in 5 days ,19 hours</h4>{" "}
                  </li>
                </ul>
              </p>
            </div> */}
          </div>
          <Divider variant="primary" />
          <div
            style={{
              padding: "25px",
              fontSize: "20px",
              fontFamily: "Raleway, sans-serif ",
            }}
          >
            <Grid container direction="row" style={{ marginLeft: "5px" }}>
              <Grid item xs={9} sm={9} md={9}>
                <Typography variant="body2" gutterBottom>
                  Organisation: National Institute of Tech, Patna
                </Typography>
              </Grid>
              <Grid item className="a-card-post-date">
                <Typography variant="caption" gutterBottom color="text.primary">
                  Posted on: 7th Feb, 2022
                </Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={12} sm={12} md={12}>
                <Typography
                  variant="subtitle"
                  style={({ fontSize: "15px" }, { padding: "10px" })}
                >
                  <span className="a-secondary-title">Offer:</span>
                  <span style={{ marginLeft: "5px" }}> ₹250</span>
                </Typography>
              </Grid>
              <Grid item xs={3} sm={3} md={3}>
                <Typography
                  style={({ fontSize: "15px" }, { padding: "10px" })}
                  className="a-secondary-title"
                >
                  Posted By:
                </Typography>
              </Grid>
              <Grid item xs={9} sm={9} md={9}>
                <Chip
                  avatar={
                    <Avatar alt="Anuj" src="/static/images/avatar/1.jpg" />
                  }
                  label="Avatar"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={3} sm={3} md={3}>
                <Typography
                  style={({ fontSize: "15px" }, { padding: "10px" })}
                  className="a-secondary-title"
                >
                  Skills:
                </Typography>
              </Grid>
              <Grid item xs={9} sm={9} md={9}>
                <Box
                  sx={{
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                  }}
                >
                  <Chip label="Angular" sx={{ margin: "2px" }} />
                  <Chip label="React" sx={{ margin: "2px" }} />
                  <Chip label="C++" sx={{ margin: "2px" }} />
                  <Chip label="Java" sx={{ margin: "2px" }} />
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={10}>
              <Grid container>
                <Grid item xs={12} sm={4} md={3}>
                  <Typography
                    style={({ fontSize: "15px" }, { padding: "10px" })}
                    className="a-secondary-title"
                  >
                    Description:
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  Need a person who has great skills in front end as well as
                  backend, with prior knowledge of any one programming language
                </Grid>
              </Grid>
            </Grid>

            {/* <h1 className="a-title">Description</h1>
            <p>
              Need a person who has great skills in front end as well as
              backend, with prior knowledge of any one programming language
            </p> */}
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* <div>
              <h1 style={{ marginLeft: "0", float: "left" }}>
                Skills Required
              </h1>
            </div>
            <div style={{ padding: "20px" }}>
              <Chip
                variant="outlined"
                label="Python"
                style={{ width: "150px", fontSize: "20px" }}
              />
              <Chip
                variant="outlined"
                label="Django"
                style={{ width: "150px", fontSize: "20px" }}
              />
              <Chip
                variant="outlined"
                label="Celery"
                style={{ width: "150px", fontSize: "20px" }}
              />
              <Chip
                variant="outlined"
                label="Javascript"
                style={{ width: "150px", fontSize: "20px" }}
              />
              <Chip
                variant="outlined"
                label="Rest Api"
                style={{ width: "150px", fontSize: "20px" }}
              />
            </div> */}
            <div style={{ display: "flex", padding: "20px" }}>
              <h3 style={{ width: "50%" }}>
                {" "}
                <Link to="/SendReq/SendReqForm">
                  <button
                    className="btn btn-primary ms-4"
                    style={{ width: "100px" }}
                  >
                    Apply
                  </button>{" "}
                </Link>
              </h3>

              <div style={{ width: "50%", paddingRight: "20px" }}>
                <p style={{ float: "right" }}>
                  <AssistantPhotoRoundedIcon />
                  Report Project
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Details1;
