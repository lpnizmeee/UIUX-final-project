import React from "react";
import { TextField, Checkbox, Autocomplete } from "@mui/material";
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

import BaseCard from "../../../components/BaseCard/BaseCard";

const icon = <CheckBoxOutlineBlankOutlinedIcon fontSize="small" />;
const checkedIcon = <CheckBoxOutlinedIcon fontSize="small" />;

const AssignmentCheckbox = ({ list, title }) => {
    return (
        <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={list}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            sx={{ mb: 1 }}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {option.title}
                </li>
            )}
            fullWidth
            renderInput={(params) => (
                <TextField {...params} label={title} placeholder="Favorites" />
            )}
        />
    );
};


export default AssignmentCheckbox;
