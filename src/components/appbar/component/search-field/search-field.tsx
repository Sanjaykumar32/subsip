import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextField, IconButton } from "@mui/material";
import { SearchFieldController } from "./search-field-controller";

export const SearchField = () => {
  const { getters, handlers } = SearchFieldController();
  const { search } = getters;
  const { changeHandler, submitHandler } = handlers;
  return (
    <TextField
      label="Search Listing"
      size="small"
      className="searchH"
      fullWidth
      onChange={changeHandler}
      sx={{ mx: { xs: 0, md: 4 } }}
      InputProps={{
        sx: { borderRadius: "60px" },
        endAdornment: (
          <IconButton>
            <FontAwesomeIcon
              icon={faSearch}
              size="sm"
              onClick={submitHandler}
            />
          </IconButton>
        ),
      }}
    />
  );
};
