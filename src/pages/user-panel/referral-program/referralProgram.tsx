import React, { useCallback, useEffect } from "react";
import { PageHeader } from "components";
import { Box, Chip, Container, Divider, Typography } from "@mui/material";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { useAppDispatch, useAppSelector } from "data";
import { GET_REFERRAL_COUNT, GET_REFERRAL_USER } from "data/selectors";
import { AdminThunk } from "data/thunk/admin.thunk";
import DoneIcon from "@mui/icons-material/Delete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { UserThunk } from "data/thunk/user.thunk";

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
  }, [dispatch]);

  useEffect(() => {
    refferalCount();
  }, [refferalCount]);


  console.log(refferralCount, "refferralCount");

  const list = refferralCount?.map((el: any) => {
    return Math.max(el.userCount ? el.userCount : 0);
  });

  const count: any = [...new Set(list)];

  console.log(...new Set(list), "list count");

  return (
    <Container maxWidth="xl" sx={{ p: 2 }}>
      <PageHeader
        name="Referral program"
        icon={{ icon: faCircleQuestion, tooltip: "Need Help?" }}
      >
        <Box sx={{ display: "flex", alignItems: "baseline" }}>
          <Typography variant="body1">My referrals</Typography>
          <Chip
            label={count}
            color="primary"
            size="small"
            sx={{ minWidth: "100px", ml: 2 }}
          />
        </Box>
      </PageHeader>

      <Container maxWidth="xs" sx={{ my: 20 }}>
        <Typography variant="h6"> Milestones </Typography>
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
                <Typography variant="body2"> {res?.milestoneName}</Typography>
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
                    label={`${res?.userCount ? res?.userCount : 0 }/${res?.iAmount}`}
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
