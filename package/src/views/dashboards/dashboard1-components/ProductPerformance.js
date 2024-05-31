import React from "react";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";

import ExTable from "./ExTable";

const assignments = [
  {
    name: "Work",
    items: [{
      id: "1",
      name: "Teaching",
      post: "Number of Theory hours",
      pname: "2/20",
      status: "Low",
      pbg: "error.main",
      progress: "10",
    },
    {
      id: "2",
      name: "Research",
      post: "Article published in domestic science magazine",
      pname: "4/5",
      status: "High",
      pbg: "success.main",
      progress: "60",
    },
    {
      id: "3",
      name: "Service",
      post: "Instructions for doctoral dissertations",
      pname: "1/2",
      status: "Medium",
      pbg: "warning.main",
      progress: "90",
    }],
  },
  {
    name: "Social Activities",
    items: [{
      id: "1",
      name: "Volunteering",
      post: "Number of charity trips",
      pname: "2/20",
      status: "Low",
      pbg: "error.main",
      progress: "10",
    },
    {
      id: "2",
      name: "Blood Donation",
      post: "number of blood donations",
      pname: "4/5",
      status: "High",
      pbg: "success.main",
      progress: "60",
    },
    {
      id: "3",
      name: "Group activity",
      post: "Planing project",
      pname: "1/2",
      status: "Medium",
      pbg: "warning.main",
      progress: "90",

    }],
  },
  {
    name: "House Chores",
    items: [{
      id: "1",
      name: "Cleaning",
      post: "Number of cleaning days",
      pname: "2/20",
      status: "Low",
      pbg: "error.main",
      progress: "10",
    },
    {
      id: "2",
      name: "Cooking",
      post: "Number of cooking days",
      pname: "4/5",
      status: "High",
      pbg: "success.main",
      progress: "90",
    },
    {
      id: "3",
      name: "Shopping",
      post: "Number of shopping days",
      pname: "1/2",
      status: "Medium",
      pbg: "warning.main",
      progress: "50",
    }],
  }

];

const ProductPerformance = () => {

  const [selectedAssignment, setSelectedAssignment] = useState("Work");

  const handleChange = (event) => {
    setSelectedAssignment(event.target.value);
  };

  const filteredAssignments = assignments.filter(
    (assignment) => assignment.name === selectedAssignment
  );

  const assignmentItems = filteredAssignments.length > 0 ? filteredAssignments[0].items : [];

  return (
    <Card variant="outlined">
      <CardContent>
        <Box
          sx={{
            display: {
              sm: "flex",
              xs: "block",
            },
            alignItems: "flex-start",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                marginBottom: "0",
              }}
              gutterBottom
            >
              Performance
            </Typography>
          </Box>

          <Box
            sx={{
              marginLeft: "auto",
              mt: {
                lg: 0,
                xs: 2,
              },
            }}
          >
            <FormControl variant="standard" sx={{ minWidth: 120 }}>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={selectedAssignment}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value={"Work"}>Work</MenuItem>
                <MenuItem value={"Social Activities"}>Social Activities</MenuItem>
                <MenuItem value={"House Chores"}>Charity</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box
          sx={{
            overflow: "auto",
            mt: 3,
          }}
        >
          <ExTable assignment={assignmentItems} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductPerformance;
