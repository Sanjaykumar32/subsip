import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextField, IconButton } from "@mui/material";
import { SearchFieldController } from "./search-field-controller";
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { GET_BUSINESS } from "data/selectors";
import {  useAppSelector } from "data";

export const SearchField = () => {
  const { getters, handlers } = SearchFieldController();
  const { search } = getters;
  const { changeHandler, submitHandler } = handlers;
 

  const businessData = useAppSelector(GET_BUSINESS);

  // console.log(businessData  ,'businessData')

  const defaultProps = {
    options: businessData,
    getOptionLabel: (option : any) => option.vLocation,
  };
  const flatProps = {
    options: businessData.map((option) => option.vLocation),
  };
 
 
  const handlevalue = (el:any)=>{
    console.log(el ,'el')
    // if(el == undefined){
    //   setLocation("");
    //     setLocationPopUP(false);
    //     navigate(`/?`);
    // }else{
    //   setLocation(el);
    //   navigate(`/?${el}`);
    // }
 }
 
  return (

  //   <Stack spacing={1}  sx={{ m: 1, width: "25ch" }}>
  //   <Autocomplete
  //     {...defaultProps}
  //     id="disable-close-on-select"
  //     //  onClick={disableCloseOnSelect}  
  //     onChange={(event, newValue : any) => {
  //       console.log(event ,'event onchange');
  //       handlevalue(newValue);
        
  //     }}
  //     renderInput={(params : any) => (
  //       <TextField {...params}     onChange={changeHandler}   label="Search" variant="standard" />
     
  //     )}
  //   />
  // </Stack>
     <TextField
        label="Search Listing"
        size="small"
        className="searchH"
        fullWidth
        onChange={changeHandler}
        sx={{ mx: { xs: 0, md: 4 } }}
        InputProps={{
          sx: { borderRadius: "60px" },
          endAdornment: (
            <IconButton>
              <FontAwesomeIcon
                icon={faSearch}
                size="sm"
                onClick={submitHandler}
              />
            </IconButton>
          ),
        }}
      />


  );
};
