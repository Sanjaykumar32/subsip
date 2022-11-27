import { Button, Card, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ILocationProps } from "./location-card";

interface ILocationProps1 extends ILocationProps {
  image: string;
}

interface ILocationCard1 {
  data: ILocationProps1;
}

export function LocationCard1({ data }: ILocationCard1) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        display: "inline-block",
        mx: 2,
        width: "325px",
        whiteSpace: "normal",
      }}
      elevation={6}
    >
      <img
        src={data.image}
        alt={data.name}
        width="100%"
        height="165px"
        style={{ objectFit: "cover" }}
      />
      <Box sx={{ p: 1.5 }}>
        <Typography variant="body1" fontWeight={600}>
          {data.name}
        </Typography>
        <Typography
          variant="caption"
          fontWeight={600}
          color={theme.palette.grey[500]}
        >
          {data.location}
        </Typography>

        <Box sx={{ my: 1, lineHeight: 0 }}>
          <Typography fontSize={11} fontWeight={600}>
            {data.description}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <Typography
            variant="caption"
            fontWeight={600}
            color={theme.palette.grey[500]}
          >
            {data.subscribers}
          </Typography>
          <Button color="error" variant="rounded" size="small">
            Subscribe
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: theme.palette.grey[300],
          p: 1.5,
        }}
      >
        <Typography fontSize={11} fontWeight={600}>
          {data.footer}
        </Typography>
      </Box>
    </Card>
  );
}
