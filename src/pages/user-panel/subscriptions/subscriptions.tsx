import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  IconButton,
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
  const [subscribe, setSubscribe] = useState(false);
  const [search, setSearch] = useState("");
  const list = [
    {
      name: "India Gate Restaurent",
      subscribed: false,
    },
    {
      name: "Restaurent",
      subscribed: false,
    },
    {
      name: "India list",
      subscribed: false,
    },
  ];
  const array = list.filter((el) => {
    return Object.values(el.name)
      .join("")
      .toLowerCase()
      .includes(search.toString().toLowerCase());
  });

  console.log(array, "array");

  const handleSubs = () => {
    setSubscribe(true);
  };
  const handleUnsub = () => {
    setSubscribe(false);
  };

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };
  return (
    <Container maxWidth={false} sx={{ p: 2 }}>
      <PageHeader
        name="Subscriptions"
        icon={{
          icon: faCircleQuestion,
          tooltip:
            "These are the listings you are subscribed to. If you would like to stop receiving emails or notifications regarding the listing, then simply unsubscribe ?",
        }}
      />

      <Container maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            {array.length} Subscriptions
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
          onChange={handleSearch}
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
                mt: 1,
                alignItems: "baseline",
              }}
            >
              <Typography variant="body2"> {element.name} :</Typography>
              {!subscribe ? (
                <Button
                  onClick={handleSubs}
                  variant="contained"
                  size="small"
                  sx={{ borderRadius: "30px", px: 3 }}
                >
                  Subscribe
                </Button>
              ) : (
                <Button
                  onClick={handleUnsub}
                  variant="contained"
                  color="inherit"
                  size="small"
                  sx={{ borderRadius: "30px", px: 3 }}
                >
                  Unsubscribe
                </Button>
              )}
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
          <Button variant="rounded" color="inherit">
            Load More
          </Button>
        </Box>
      </Container>
    </Container>
  );
}
