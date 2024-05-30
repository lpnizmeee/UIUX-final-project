import React, { useState } from "react";
import {
  Grid,
  Box,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  StepLabel,
  Typography,
  Link,
} from "@mui/material";

const Setting = () => {
  const [name, setName] = useState("Tạ Hải Tùng");
  const [password, setPassword] = useState("secretPassword");
  const [enableEdit, setEnableEdit] = useState(false);
  const [notificationTypes, setNotificationTypes] = useState({
    upcomingDeadlines: true,
    almostFinishedTasks: true,
    dailyReminder: true,
  });

  const handleNotificationTypeChange = (event) => {
    setNotificationTypes({
      ...notificationTypes,
      [event.target.name]: event.target.checked,
    });
  };

  const handleDeleteData = () => {
    // Pop up a confirmation dialog
    if (
      window.confirm(
        "Your Data is used to improve the experience with the Assistant. Are you sure you want to delete all chat data?"
      )
    ) {
      // Delete all chat data
      alert("All chat data has been deleted");
    }
  };

  return (
    <Box>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Typography variant="h3" sx={{ marginBottom: "0" }} gutterBottom>
            <Link
              to="/setting"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Setting
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleDeleteData}
          >
            Delete Personalization Data
          </Button>
        </Grid>
        <Grid item>
          <Typography variant="h5">
            Choose which notifications you want to receive:
          </Typography>
        </Grid>
        <Grid item>
          <FormControlLabel
            control={
              <Switch
                checked={notificationTypes.upcomingDeadlines}
                onChange={handleNotificationTypeChange}
                name="upcomingDeadlines"
              />
            }
            label="Upcoming Deadlines"
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={
              <Switch
                checked={notificationTypes.almostFinishedTasks}
                onChange={handleNotificationTypeChange}
                name="almostFinishedTasks"
              />
            }
            label="Almost Finished Tasks"
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={
              <Switch
                checked={notificationTypes.dailyReminder}
                onChange={handleNotificationTypeChange}
                name="dailyReminder"
              />
            }
            label="Daily Reminder"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Setting;
