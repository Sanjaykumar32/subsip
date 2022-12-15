import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import { FooterContainer, Links, ScrollToTop, Social } from "components";
import ResponsiveAppBar from "components/appbar/navigation";

export function NavigationBar() {
  // const links = [
  //   {
  //     name: "Restaurant",
  //     url: RoutePathEnum.RESTAURANT,
  //   },
  //   {
  //     name: "Home Services",
  //     url: RoutePathEnum.RESTAURANT,
  //   },
  //   {
  //     name: "Auto Services",
  //     url: RoutePathEnum.RESTAURANT,
  //   },
  //   {
  //     name: "More",
  //     url: RoutePathEnum.RESTAURANT,
  //   },
  // ];

  // const [profileMenu, setProfileMenu] = useState<boolean>(false);

  // const handleProfileMenu = () => {
  //   setProfileMenu(true);
  // };

  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <ResponsiveAppBar />
      <ScrollToTop />
      {/* <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ borderBottom: "1px solid black" }}
      >
        <Toolbar>
          <Logo variant="dark" />
          <TextField
            fullWidth
            sx={{ maxWidth: "50%", mx: "auto" }}
            size="small"
            InputProps={{
              sx: { p: 0, borderRadius: "60px" },
              startAdornment: (
                <Box>
                  <Select
                    value={"All"}
                    size="small"
                    sx={{
                      borderRadius: "60px 0px 0px 60px",
                      mr: 1,
                    }}
                  >
                    <MenuItem value="All"> All </MenuItem>
                  </Select>
                </Box>
              ),
              endAdornment: (
                <InputAdornment position="end" sx={{ mx: 1 }}>
                  <IconButton>
                    <FontAwesomeIcon icon={faSearch} size="sm" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            placeholder="Search Listing"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Box sx={{ mx: 2 }}>
              <FontAwesomeIcon icon={faLocationDot} /> Seattle, WA
            </Box>
            <Divider />
            <Box sx={{ mx: 2 }}>
              <Link href="/ListingOnPoshSub">List on PoshSub</Link>
            </Box>
            <Divider />
            <Button variant="rounded" href="/auth/signin">
              Login
            </Button>
            <Box sx={{ mx: 1 }}>
              <FontAwesomeIcon
                icon={faUserCircle}
                size="lg"
                onClick={handleProfileMenu}
              />
            </Box>
            {profileMenu && <MultipleSelect />}
            <Box sx={{ mx: 1 }}>
              <Badge badgeContent={4} color="error">
                <FontAwesomeIcon icon={faBell} size="lg" />
              </Badge>
            </Box>
          </Box>
        </Toolbar>
        <Container maxWidth={false} disableGutters>
          <List sx={{ display: "flex" }}>
            {links.map((res) => (
              <ListItem
                key={res.name}
                sx={{ maxWidth: "150px", width: "fit-content" }}
              >
                {res.name}
              </ListItem>
            ))}
          </List>
        </Container>
      </AppBar> */}
      <Outlet />
      <FooterContainer>
        <Container maxWidth="lg" disableGutters>
          <Grid container>
            <Grid item xs={12} md={4}>
              <Social />
            </Grid>
            <Grid item xs={12} md={8}>
              <Links />
            </Grid>
          </Grid>
        </Container>
      </FooterContainer>
    </Container>
  );
}
