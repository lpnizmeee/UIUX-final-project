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

const TaskCheck = () => {

  return (
    <Box
      sx={{
        overflow: "auto",
        paddingX: '5%'
      }}
    >
      <ExTable />
    </Box>
  );
};

export default TaskCheck;
