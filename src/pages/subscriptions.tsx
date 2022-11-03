import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { PageHeader } from "components";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export function Subscriptions() {
  const array = Array(5).fill({
    name: "India Gate Restaurent",
    subscribed: false,
  });

  return (
    <Container maxWidth="lg" sx={{ p: 8 }}>
      <PageHeader
        name="Subscriptions"
        icon={{ icon: faCircleQuestion, tooltip: "Need Help?" }}
      />

      <Container maxWidth="xs" sx={{ my: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            {array.length} subscriptions
          </Typography>
          <Box sx={{ display: "flex", alignItems: "baseline" }}>
            <Typography variant="body2" fontWeight={600}>
              Sort By:
            </Typography>
            <FormControl variant="standard">
              <Select
                variant="standard"
                labelId="sort-by-select-label"
                id="sort-by-simple-select"
                value="Newest"
                size="small"
                sx={{ ml: 1 }}
              >
                <MenuItem value={"Newest"}>Newest</MenuItem>
                <MenuItem value={"Oldest"}>Oldest</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <TextField
          fullWidth
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
        {array.map((element, index: number) => (
          <>
            <Box
              key={`${element.name}-${index}`}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
                alignItems: "baseline",
              }}
            >
              <Typography variant="body2"> {element.name} :</Typography>
              <Button
                variant="contained"
                color="inherit"
                size="small"
                sx={{ borderRadius: "30px", px: 3 }}
              >
                Subscribed
              </Button>
            </Box>
            <Divider sx={{ mt: 1 }} />
          </>
        ))}

        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 5,
          }}
        >
          <Button variant="rounded">Load More</Button>
        </Box>
      </Container>
    </Container>
  );
}
