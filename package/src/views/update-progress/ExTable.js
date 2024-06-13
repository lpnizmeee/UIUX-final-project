import React, { useState } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Switch,
  FormGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
import TextField from "@mui/material/TextField";

const assignmentex = [
  {
    id: "1",
    name: "Number of Theory hours",
    post: "Teaching",
    complete: "18",
    pname: "20",
    status: "Almost completed",
    pbg: "success.main",
    progress: "10",
    unit: "Hour",
  },
  {
    id: "2",
    name: "Article published in domestic science magazine",
    post: "Research",
    complete: "12",
    pname: "20",
    status: "Good progress",
    pbg: "warning.main",
    progress: "60",
    unit: "Paper",
  },
  {
    id: "3",
    name: "Instruct Graduation Research",
    post: "Service",
    complete: "2",
    pname: "10",
    status: "Need attention",
    pbg: "error.main",
    progress: "90",
    unit: "Student",
  },
];

const ExTable = ({ assignment = assignmentex }) => {
  const [values, setValues] = useState(
    assignment.map((product) => ({ ...product, quantity: 0 }))
  );

  const handleChange = (event, id) => {
    const newValues = values.map((value) =>
      value.id === id ? { ...value, quantity: event.target.value } : value
    );
    setValues(newValues);
  };

  const handleSave = (id) => {
    const newValues = values.map((value) =>
      value.id === id
        ? { ...value, complete: Number(value.complete) + Number(value.quantity) }
        : value
    );
    setValues(newValues);
  };
  return (
    <Table
      aria-label="simple table"
      sx={{
        whiteSpace: "nowrap",
      }}
    >
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Name
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Completed
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Quantity
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Unit
            </Typography>
          </TableCell>
          <TableCell align="right">
            <Typography color="textSecondary" variant="h6">
              Submit
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {values.map((product) => (
          <TableRow key={product.name}>
            <TableCell>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "600",
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{
                      fontSize: "13px",
                    }}
                  >
                    {product.post}
                  </Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {product.complete}/{product.pname}
              </Typography>
            </TableCell>
            <TableCell>
              <TextField
                id="outlined-basic"
                variant="outlined"
                value={product.quantity}
                onChange={(event) => handleChange(event, product.id)}
                size="small"
              />
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {product.unit}
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Button
                color="success"
                variant="contained"
                onClick={() => handleSave(product.id)}
              >
                Save
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ExTable;
