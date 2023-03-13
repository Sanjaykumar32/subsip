import React, { useEffect, useRef, useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextField, IconButton } from "@mui/material";
import { SearchFieldController } from "./search-field-controller";
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { GET_BUSINESS, GET_CATEGORY } from "data/selectors";
import { useAppSelector } from "data";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useNavigate } from "react-router-dom";

export const SearchField = ({ handleBanner, setLocationPopUP }: any) => {
  const { getters, handlers } = SearchFieldController();
  const { search } = getters;
  const { changeHandler, submitHandler, setSearch } = handlers;
  const categoryData = useAppSelector(GET_CATEGORY);

  const navigate = useNavigate();
  const businessData = useAppSelector(GET_BUSINESS);
  const ref: any = useRef()
  const handleClear = () => {
    setSearch('')
    navigate(`/`)
    // if(el == undefined){
    //   setLocation("");
    //     setLocationPopUP(false);
    //     navigate(`/?`);
    // }else{
    //   setLocation(el);
    //   navigate(`/?${el}`);
    // }
  }


  const handleOnSearch = (string: any, results: any) => {
    console.log(string, results, 'serach and results')
  }

  const [value, setValue] = useState(false)

  const submitHandlers = (el: any) => {
    submitHandler(el)
    handleBanner()
    if (el) {
      setValue(true)
      setLocationPopUP(false)
    } else {
      setValue(false)
    }

  }

  const list = businessData?.map((el: any) => {
    return (
      {
        iBusinessid: el?.iBusinessId,
        name: el?.vName
      }
    )
  })

  const list2: any = categoryData?.map((el: any) => {
    return (
      {
        iCategoryid: el?.iCategoryId,
        name: el?.vName
      }
    )
  })

  const data = list?.concat(list2)


  const defaultProps = {
    options: data,
    getOptionLabel: (option: any) => option.name,
  };

  console.log(defaultProps , 'defal');

  const handleOnFocus = (e: any) => {
    console.log(e, 'Focused')
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [value])



  const formatResult = (item: any) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
      </>
    )
  }
  return (
    <div className="App w-full ">
      <header className="App-header">
        <div className=" w-full"
        >
          <ReactSearchAutocomplete
            styling={{
              zIndex: 1
            }}
            placeholder="Search"
            items={data}
            onSearch={(el) => changeHandler(el)}
            onSelect={(el) => submitHandlers(el)}
            onClear={handleClear}
            onFocus={handleOnFocus}
            // autoFocus
            formatResult={formatResult}
          />


          {/* <Stack spacing={1} >
            <Autocomplete
              {...defaultProps}
              freeSolo
              selectOnFocus={false}
              noOptionsText={'Enter your city'}
              // value={searchLocation}
              autoSelect={true}
              onClose={(e) => {
                if (e.cancelable == false) {
                  // setLocationPopUP(false)
                  // setValue('')
                }
              }}
              id="disable-close-on-select"
              onChange={(event: any, newValue: any) => {
                console.log(event,  newValue ,"event onchange-----------");
                submitHandlers(newValue);
                // setLocationPopUP(false)
              }}
              // openOnFocus
              renderInput={(params) => (
                <TextField
                  {...params}
                  // onChange={handleLocation}
                  // label="Search"
                  variant="standard"
                  focused
                  // value={searchLocation}
                  // inputRef={input => {
                  //   inputRef = input;
                  // }}
                />

              )}

            />
          </Stack> */}
        </div>
      </header>
    </div>
  );
};
