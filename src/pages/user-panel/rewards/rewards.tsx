import React, { useMemo } from "react";
import { ColoredLabel, PageHeader } from "components";
import {
  Box,
  Grid,
  Drawer,
  ListItem,
  List,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
  TextField,
} from "@mui/material";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import TableContainer from "@mui/material/TableContainer";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Search } from "@mui/icons-material";

export function Rewards() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "",
      width: 100,
      renderCell: () => <Avatar sx={{ mx: "auto", width: 35, height: 35 }} />,
    },
    {
      field: "name",
      headerName: "Name",
      width: 200,
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: () => <Button variant="contained"> Claim </Button>,
    },
  ];

  const rows = [
    { id: 1, name: "India Gate Restaurant", amount: "50$", status: "Claimed" },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  const subscribedList = useMemo(
    () => (
      <Box sx={{ p: 2 }}>
        <Typography sx={{ my: 1 }}>Subscribed Buisnesses :</Typography>
        <TextField
          sx={{ my: 2 }}
          label="Search Subscriptions"
          InputProps={{ endAdornment: <Search /> }}
        />
        <List sx={{ maxHeight: "calc(100vh - 200px)", overflow: "auto" }}>
          <ListItem> All </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
          <ListItem> India Gate Restaurant </ListItem>
        </List>
      </Box>
    ),
    []
  );

  return (
    <Container maxWidth="xl" sx={{ p: 2 }}>
      <PageHeader
        name="Rewards"
        icon={{ icon: faCircleQuestion, tooltip: "Need Help?" }}
      >
        <Box sx={{ display: "flex" }}>
          {[
            { title: "Availabel", color: theme.palette.success.light },
            { title: "Claimed", color: theme.palette.warning.light },
            { title: "Missed", color: theme.palette.error.main },
          ].map((res, i) => (
            <ColoredLabel
              title={res.title}
              color={res.color}
              key={`${res.title}-${i}`}
            />
          ))}
        </Box>
      </PageHeader>

      <Grid container sx={{ my: 3 }}>
        {!isMobile ? (
          <Grid item xs={12} md={4}>
            {subscribedList}
          </Grid>
        ) : (
          <Drawer open>{subscribedList}</Drawer>
        )}

        <Grid item xs={12} md={8}>
          <TableContainer sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
}
