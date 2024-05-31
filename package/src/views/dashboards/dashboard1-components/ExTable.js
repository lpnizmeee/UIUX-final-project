import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";

const assignmentex = [
  {
    id: "1",
    name: "Teaching",
    post: "ICT Course",
    pname: "2/20",
    status: "Low",
    pbg: "error.main",
    progress: "10",
  },
  {
    id: "2",
    name: "Research",
    post: "Public Paper",
    pname: "12/20",
    status: "Medium",
    pbg: "warning.main",
    progress: "60",
  },
  {
    id: "3",
    name: "Service",
    post: "Instruct Graduation Research",
    pname: "9/10",
    status: "High",
    pbg: "success.main",
    progress: "90",
  },
];

const ExTable = ({ assignment = assignmentex }) => {
  return (
    <Table
      aria-label="simple table"
      sx={{
        mt: 3,
        whiteSpace: "nowrap",
      }}
    >
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Id
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Name
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Quantity status
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Status
            </Typography>
          </TableCell>
          <TableCell align="right">
            <Typography color="textSecondary" variant="h6">
              Progress
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {assignment.map((product) => (
          <TableRow key={product.name}>
            <TableCell>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {product.id}
              </Typography>
            </TableCell>
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
                {product.pname}
              </Typography>
            </TableCell>
            <TableCell>
              <Chip
                sx={{
                  pl: "4px",
                  pr: "4px",
                  backgroundColor: product.pbg,
                  color: "#fff",
                }}
                size="small"
                label={product.status}
              ></Chip>
            </TableCell>
            <TableCell align="right">
              <Typography variant="h6">{product.progress}%</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ExTable;
