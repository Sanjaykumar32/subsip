import React, { useCallback, useEffect, useState } from "react";
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
import { AdminThunk } from "data/thunk/admin.thunk";
import { useAppDispatch, useAppSelector } from "data";
import { GET_ALL_SUBSCRIBER_OF_BUSINESS } from "data/selectors";
import { UserThunk } from "data/thunk/user.thunk";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function Subscriptions() {
  const [subscribe, setSubscribe] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();


  const allsubscriberOfBussiness = useCallback(async () => {
    try {
      const UserID = localStorage.getItem("userId")

      await dispatch(
        AdminThunk.allSubscriberOfBussiness({ userId: Number(UserID) })
      );
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    allsubscriberOfBussiness();
  }, [allsubscriberOfBussiness]);

  const subscribeBusiness = useAppSelector(GET_ALL_SUBSCRIBER_OF_BUSINESS);

  console.log(subscribeBusiness, "subscribeBusiness");

  const array = subscribeBusiness.filter((el) => {
    return Object.values(el?.businessName)
      .join("")
      .toLowerCase()
      .includes(search.toString().toLowerCase());
  });

  console.log(array, "array");

  const handleSubs = async (item: any) => {
    console.log(item, "numbersss");

    const response = await dispatch(
      UserThunk.addSubscriberToBusiness({
        businessId: item?.iBusinessId ? parseInt(item?.iBusinessId) : 0,
        userId: item?.iAdminId ? parseInt(item?.iAdminId) : 0,
      })
    );

    console.log(response, "response");
    toast.success("Business Subscribed Successfully");
    allsubscriberOfBussiness();
  };

  const handleUnsub = async (item: any) => {
    console.log(item, "numbersss");

    const response = await dispatch(
      UserThunk.UNSubscriberToBusiness({
        businessId: item?.iBusinessId ? "" + item?.iBusinessId : "0",
      })
    );
    toast.success("Business UnSubscribed Successfully");
    allsubscriberOfBussiness();
  };

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };
  return (
    <Container maxWidth={false} sx={{ px: 5, py: 10 }}>
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
              key={`${element.businessName}-${index}`}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 1,
                alignItems: "baseline",
              }}
            >
              <div className=" cursor-pointer " onClick={()=> navigate(`/listing/${element?.iBusinessId}`)}>
                <Typography variant="body2"> {element.businessName}</Typography>
              </div>
              {!subscribe ? (
                <Button
                  onClick={() => handleUnsub(element)}
                  variant="contained"
                  size="small"
                  sx={{ borderRadius: "30px", px: 3 }}
                >
                  Unsubscribe
                </Button>
              ) : (
                <Button
                  onClick={() => handleSubs(element)}
                  variant="contained"
                  color="inherit"
                  size="small"
                  sx={{ borderRadius: "30px", px: 3 }}
                >
                  subscribe
                </Button>
              )}
            </Box>
            <Divider sx={{ mt: 1 }} />
          </>
        ))}
      </Container>
    </Container>
  );
}
