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
        fontWeight: 800,
        color: "black",
      }}
    >
      <FontAwesomeIcon
        icon={faAngleLeft}
        size="lg"
        color={theme.palette.info.main}
        style={{ marginRight: 4, marginLeft: 10 }}
      />
      Back
    </Button>
  );
}

export default AdminBackButton;
