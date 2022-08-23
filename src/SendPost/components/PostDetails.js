import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import { useState } from "react";

export default function PostDetails(props) {
  const [postDetails, setPostDetails] = useState({
    title: "",
    isPaid: "false",
    amount: 0,
    description: "",
    skills: "",
  });

  const onChange = (e) => {
    setPostDetails({
      ...postDetails,
      [e.target.name]: e.target.value,
    });
    props.getData(postDetails);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Post Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            onChange={onChange}
            id="address1"
            name="title"
            label="Job Title"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Job Type
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="isPaid"
            onChange={onChange}
          >
            <FormControlLabel value={true} control={<Radio />} label="Paid" />
            <FormControlLabel
              value={false}
              control={<Radio />}
              label="Unpaid"
            />
          </RadioGroup>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-textarea"
            label="Amount"
            placeholder="Amount"
            fullWidth
            multiline
            variant="standard"
            disabled={postDetails.isPaid == "false" ? true : false}
            name="amount"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="description"
            id="standard-textarea"
            label="Job Description"
            placeholder="Description"
            fullWidth
            multiline
            variant="standard"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="skills"
            label="Skills Required (Enter skills separated by ',')"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            onChange={onChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
