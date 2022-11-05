import { ReactElement } from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { RewardStatusEnum } from "enum";
import { MuiColor } from "type";

interface IRewardListItemProps {
  name: string;
  amount: number;
  status: string;
}

export function RewardListItem({
  name,
  amount,
  status,
}: IRewardListItemProps): ReactElement {
  const chipStatusColor = (): MuiColor => {
    switch (status) {
      case RewardStatusEnum.CLAIM:
        return "success";
      case RewardStatusEnum.CLAIMED:
        return "warning";
      case RewardStatusEnum.MISSED:
      default:
        return "error";
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mt: 2,
        alignItems: "baseline",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar sx={{ height: "30px", width: "30px", mr: 1 }} />
        <Typography variant="body2"> {name} :</Typography>

        <Button
          variant="contained"
          sx={{ textTransform: "capitalize", ml: 10 }}
          color={chipStatusColor()}
        >
          {status} ${amount} gift card
        </Button>
      </Box>
    </Box>
  );
}
