import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";

export default function MultipleSelect() {
  return (
    <div>
      <FormControl variant="standard">
        <Select
          variant="outlined"
          labelId="sort-by-select-label"
          id="sort-by-simple-select"
          value="Newest"
          size="small"
          sx={{ ml: 1 }}
        >
          <MenuItem value={"Newest"}>Newest</MenuItem>
          <MenuItem value={"Oldest"}>Oldest</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
