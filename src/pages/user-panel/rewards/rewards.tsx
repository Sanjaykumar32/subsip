import React from "react";
import { ColoredLabel, PageHeader, RewardListItem } from "components";
import {
  Box,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { RewardStatusEnum } from "enum";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Rewards() {
  const theme = useTheme();

  return (
    <Container maxWidth={false} sx={{ p: 2 }}>
      <PageHeader
        name="Rewards"
        icon={{ icon: faCircleQuestion, tooltip: "Need Help?" }}
      >
        <Box sx={{ display: "flex" }}>
          {[
            { title: "Availabel", color: theme.palette.success.light },
            { title: "Claimed by me", color: theme.palette.warning.light },
            { title: "Missed", color: theme.palette.error.light },
          ].map((res, i) => (
            <ColoredLabel
              title={res.title}
              color={res.color}
              key={`${res.title}-${i}`}
            />
          ))}
        </Box>
      </PageHeader>
      <Container maxWidth={false} sx={{ mt: 2 }}>
        <Grid container>
          <Grid item xs={12} md={2.5}>
            <Box sx={{ height: "170%", overflow: "auto" }}>
              <Typography variant="h6">Subscribed Businesses:</Typography>
              <TextField
                size="small"
                label="Search Subscriptions"
                sx={{ my: 2, borderRadius: "30px" }}
                InputProps={{
                  size: "small",
                  sx: { borderRadius: "50px" },
                  endAdornment: (
                    <IconButton>
                      <FontAwesomeIcon icon={faSearch} size="xs" />
                    </IconButton>
                  ),
                }}
              />
              <List>
                <Typography>All</Typography>
                {Array(12)
                  .fill({
                    name: "India Gate Restaurant",
                  })
                  .map((element, index: number) => (
                    <ListItem key={`${element.name}-${index}`}>
                      {element.name}
                    </ListItem>
                  ))}
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} md={8.5}>
            <Container maxWidth={false}>
              {Array(4)
                .fill({
                  name: "Reward One",
                  status: RewardStatusEnum.CLAIM,
                  amount: 50.0,
                })
                .map((element, index: number) => (
                  <RewardListItem
                    {...element}
                    key={`${element.name}-${index}`}
                  />
                ))}
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
