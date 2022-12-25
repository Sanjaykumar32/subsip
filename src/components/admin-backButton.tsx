import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "theme";

export function AdminBackButton(): ReactElement {

  const navigate = useNavigate();


  return (
    <Button
      size="large"
      sx={{
        color: "black",
      }}
      onClick={() => navigate(-1)}
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
