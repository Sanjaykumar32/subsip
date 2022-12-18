import React, { useMemo } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextField, IconButton } from "@mui/material";
import { SearchFieldController } from "./search-field-controller";

export const SearchField = () => {
  const { getters, handlers } = SearchFieldController();
  const { search, navigate, BussinessByName } = getters;
  const { changeHandler, submitHandler } = handlers;
  return (
    <TextField
      fullWidth
      size="small"
      value={search}
      onChange={changeHandler}
      sx={{ mx: "auto", maxWidth: "800px" }}
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
