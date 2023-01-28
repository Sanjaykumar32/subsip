import React, { useCallback, useEffect } from "react";
import { PageHeader } from "components";
import { Box, Chip, Container, Divider, Typography } from "@mui/material";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { useAppDispatch, useAppSelector } from "data";
import { GET_REFERRAL_COUNT } from "data/selectors";
import { AdminThunk } from "data/thunk/admin.thunk";
import DoneIcon from "@mui/icons-material/Delete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export function ReferralProgram() {
  const refferralCount = useAppSelector(GET_REFERRAL_COUNT);
  const dispatch = useAppDispatch();
  const userId = localStorage.getItem("userId");

  const refferalCount = useCallback(async () => {
    try {
      await dispatch(
        AdminThunk.refferralCount({ userId: userId ? parseInt(userId) : 0 })
      );
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, userId]);

  useEffect(() => {
    refferalCount();
  }, [refferalCount]);

  console.log(refferralCount, "refferralCount");

  return (
    <Container maxWidth="xl" sx={{ p: 2 }}>
      <PageHeader
        name="Referral program"
        icon={{ icon: faCircleQuestion, tooltip: "Need Help?" }}
      >
        <Box sx={{ display: "flex", alignItems: "baseline" }}>
          <Typography variant="body1">My referrals</Typography>
          <Chip
            label={refferralCount.length}
            color="primary"
            size="small"
            sx={{ minWidth: "100px", ml: 2 }}
          />
        </Box>
      </PageHeader>

      <Container maxWidth="xs" sx={{ my: 20 }}>
        <Typography variant="h6"> Milestones : </Typography>
        {refferralCount.map((res: any, i: number) => {
          return (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 2,
                  alignItems: "baseline",
                }}
                key={i}
              >
                <Typography variant="body2"> {res.milestoneName}</Typography>
                {res?.userCount == res?.iAmount ? (
                  <Chip
                    label="Done"
                    size="small"
                    sx={{ minWidth: "100px", ml: 2 }}
                    icon={<FontAwesomeIcon icon={faCheck} />}
                    color="primary"
                  />
                ) : (
                  <Chip
                    label={`${res?.userCount}/${res?.iAmount}`}
                    size="small"
                    sx={{ minWidth: "100px", ml: 2 }}
                  />
                )}
              </Box>
              <Divider sx={{ mt: 1 }} />
            </>
          );
        })}
      </Container>
    </Container>
  );
}
