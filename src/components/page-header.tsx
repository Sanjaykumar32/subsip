import React, { ReactElement, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Box, Typography, Tooltip, IconButton } from "@mui/material";

interface IconDetail {
  icon: IconDefinition;
  tooltip: string;
}

interface PageHeaderProps {
  name: string;
  icon: IconDetail;
  children?: ReactNode;
}

export function PageHeader({
  name,
  icon,
  children,
}: PageHeaderProps): ReactElement {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="alternet"> {name} </Typography>
        <Tooltip title={icon.tooltip}>
          <IconButton sx={{ ml: 0.5 }}>
            <FontAwesomeIcon icon={icon.icon} />
          </IconButton>
        </Tooltip>
      </Box>
      {children}
    </Box>
  );
}
