import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import React, { ReactElement } from "react";
import { theme } from "theme";

export function AdminBackButton(): ReactElement {
  return (
    <Button
      size="large"
      sx={{
        color: "black",
      }}
      startIcon={
        <FontAwesomeIcon
          icon={faAngleLeft}
          size="2x"
          color={theme.palette.info.main}
        />
      }
    >
      Back
    </Button>
  );
}

export default AdminBackButton;
