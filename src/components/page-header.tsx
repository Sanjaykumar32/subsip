import React, { ReactElement, ReactNode , useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Box, Typography, Tooltip, IconButton, Grid } from "@mui/material";

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
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
      }}
    >
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="alternet" color="black">
              {name}
            </Typography>
            <Tooltip 
             title={icon.tooltip} 
             open={showTooltip}
             onOpen={() => setShowTooltip(true)}
             onClose={() => setShowTooltip(false)}
             >
              <IconButton sx={{ ml: 0.5 }}>
                <FontAwesomeIcon
                 icon={icon.icon}
                 onClick={() => setShowTooltip(!showTooltip)}
                 />
              </IconButton>
            </Tooltip>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", md: "flex-end" },
            mt: { xs: 1, md: 0 },
          }}
        >
          {children}
        </Grid>
      </Grid>
    </Box>
  );
}
