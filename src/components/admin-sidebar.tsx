import React, { ReactElement } from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function AdminSidebar(): ReactElement {
  const sideBarOption = [
    {
      title: "Dashobard",
      icon: "faUser",
    },
    {
      title: "Listings",
      icon: "faUser",
    },
    {
      title: "Subscribers",
      icon: "faUser",
    },
    {
      title: "Categories",
      icon: "faUser",
    },
    {
      title: "Notifications",
      icon: "faUser",
    },
    {
      title: "Rewards",
      icon: "faUser",
    },
    {
      title: "Referrals",
    },
  ];

  return (
    <Box>
      <List>
        {sideBarOption.map((element, index: number) => (
          <ListItem key={`${element.title}-${index}`}>
            <FontAwesomeIcon icon={faUser} />
            <Typography variant="body1" fontWeight="600" sx={{ ml: 1 }}>
              {element.title}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
