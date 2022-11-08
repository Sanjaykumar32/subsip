import React from "react";
import {
  Box,
  Button,
  Container,
  FormGroup,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Label } from "components";
import Grid from "@mui/material/Grid";

interface ListFormItem {
  label: string;
}

export function ListingOnPoshSub() {
  const textField: ListFormItem[] = [
    { label: "What is your buisness called?" },
    { label: "Step 2: Tag your product in that category" },
    { label: "Tagline" },
    { label: "Tell us about your buisness?" },
    { label: "Support Email?" },
    { label: "Featured Image?" },
    { label: "Pick a Buisness Category" },
    { label: "Pick subcategory" },
    { label: "Buisness Location" },
  ];
  return (
    <Container maxWidth="lg" sx={{ p: 4 }}>
      <Typography variant="alternet"> List on Poshsub </Typography>

      <FormGroup>
        <Grid container>
          {textField.map((element: ListFormItem) => (
            <Grid item xs={12} md={6}>
              <Box sx={{ px: 3, py: 1 }}>
                <Label> {element.label} </Label>
                <TextField required fullWidth />
              </Box>
            </Grid>
          ))}
        </Grid>
      </FormGroup>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mt: 10,
        }}
      >
        <Button variant="rounded"> Submit for Approval </Button>
        <Link sx={{ mt: 4 }}> Request to remove a existing listing </Link>
      </Box>
    </Container>
  );
}
