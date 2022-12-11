import { Button, Card, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useAuth } from "context/auth.context";
import { RoutePathEnum } from "enum";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ILocationProps } from "./location-card";

interface ILocationProps1 extends ILocationProps {
  image: string;
}

interface ILocationCard1 {
  data: ILocationProps1;
}

export function LocationCard1({ data }: ILocationCard1) {
  const theme = useTheme();
  const navigate = useNavigate();
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
        onClick={() => {
          navigate(RoutePathEnum.LISTING_PRODUCT);
        }}
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

          <Button
            size="large"
            variant="contained"
            color="error"
            onClick={() => {
              navigate(RoutePathEnum.LISTING_PRODUCT);
            }}
            sx={{ fontWeight: 800, borderRadius: "24px" }}
          >
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
