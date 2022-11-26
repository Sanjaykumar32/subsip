import React from "react";
import { PageHeader } from "components";
import { Box, Chip, Container, Divider, Typography } from "@mui/material";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

export function ReferralProgram() {
  return (
    <Container maxWidth={false} sx={{ p: 2 }}>
      <PageHeader
        name="Referal Program"
        icon={{ icon: faCircleQuestion, tooltip: "Need Help?" }}
      >
        <Box sx={{ display: "flex", alignItems: "baseline" }}>
          <Typography variant="body1"> My Referals </Typography>
          <Chip
            label={0}
            color="primary"
            size="small"
            sx={{ minWidth: "100px", ml: 2 }}
          />
        </Box>
      </PageHeader>

      <Container maxWidth="xs" sx={{ my: 4 }}>
        <Typography variant="h6"> Milestones : </Typography>
        {Array(5)
          .fill({ name: "Reward One", total: 10, done: 2 })
          .map((element, index: number) => (
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
                <Chip
                  label={`${element.done + index}/${element.total + index}`}
                  size="small"
                  sx={{ minWidth: "100px", ml: 2 }}
                />
              </Box>
              <Divider sx={{ mt: 1 }} />
            </>
          ))}
      </Container>
    </Container>
  );
}
