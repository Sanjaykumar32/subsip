import { ReactElement } from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MuiColor } from "type";
import { AdminSidebarEnum } from "enum";

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

  const chipStatusColor = (icon: string) => {
    switch (icon) {
      case AdminSidebarEnum.DASHBOARD:
        return "faUser";
      case AdminSidebarEnum.LISTINGS:
        return "warning";
      case AdminSidebarEnum.SUBSCRIBERS:
        return "warning";
      case AdminSidebarEnum.CATEGORIES:
        return "warning";
      case AdminSidebarEnum.NOTIFICATIONS:
        return "warning";
      case AdminSidebarEnum.REWARDS:
        return "warning";
      case AdminSidebarEnum.REFERRALS:
        return "warning";
      default:
        return "error";
    }
  };
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
