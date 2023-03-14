import React, { useEffect, useRef, useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { SearchFieldController } from "./search-field-controller";
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { GET_BUSINESS, GET_CATEGORY } from "data/selectors";
import { useAppSelector } from "data";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useNavigate } from "react-router-dom";
import { createFilterOptions } from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';

export const SearchField = ({ handleBanner }: any) => {
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
    console.log('clear');
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

  // const [value, setValue] = useState(false)
  const [value, setValue] = React.useState<any | null>(null);

  const submitHandlers = (el: any) => {
    console.log(el, 'el select');
    submitHandler(el)
    handleBanner()
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
    options: search == '' ? [] : data,
    getOptionLabel: (option: any) => option.name,
  };

  const handleOnFocus = (e: any) => {
    console.log(e, 'Focused')
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [value])

  const handleClick = (e: any) => {
    console.log(e.target, 'on click element');
  }

  const top100Films: readonly any[] = search == '' ? [] : data
  const filter = createFilterOptions<any>();

  return (
    <div className="App w-full ">
      <header className="App-header">
        <div className=" w-full">

          {/* <ReactSearchAutocomplete
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
          /> */}

          <Autocomplete
            noOptionsText="No results"
            value={value}
            onChange={(event, newValue) => {
              console.log(event, 'event');
              submitHandlers(newValue);
              if (typeof newValue === 'string') {
                console.log(newValue, 'newValue');
              } else if (newValue && newValue.inputValue) {
                // Create a new value from the user input
                setValue({
                  title: newValue.inputValue,
                });
              } else {
                setValue(newValue);
              }
            }}
           
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            id="free-solo-with-text-demo"
            options={top100Films}
            getOptionLabel={(option) => {
              // Value selected with enter, right from the input
              if (typeof option === 'string') {
                return option;
              }
              // Add "xxx" option created dynamically
              if (option.inputValue) {
                return option.inputValue;
              }
              // Regular option
              return option.name;
            }}
            renderOption={(props, option) => <li {...props}>{option.name}</li>}

            freeSolo
            renderInput={(params) => (
              <TextField className="search-input" {...params}
                placeholder="Search"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (<InputAdornment position="start"> <SearchIcon className="!w-[22px] !ml-2 !h-[22px]" />
                  </InputAdornment>),
                  disableUnderline: true 
                }}

              />
            )}
            blurOnSelect="touch"
            onInputChange={changeHandler}


          />
        </div>
      </header>
    </div>
  );
};
