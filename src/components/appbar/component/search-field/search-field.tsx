import React, { useEffect } from "react";
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

export const SearchField = ({handleBanner}:any) => {
  const { getters, handlers } = SearchFieldController();
  const { search  } = getters;
  const { changeHandler, submitHandler, setSearch  } = handlers;
  const categoryData = useAppSelector(GET_CATEGORY);
 
  const navigate = useNavigate();
  const businessData = useAppSelector(GET_BUSINESS);

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

  const submitHandlers = (el: any) => {
    console.log(el ,'submit el input')
    submitHandler(el)
    handleBanner()
    
  }

  const list = businessData.map((el: any) => {
    return (
      {
        iBusinessid: el.iBusinessId,
        name: el.vName
      }
    )
  })


  const list2: any = categoryData.map((el: any) => {
    return (
      {
        iCategoryid: el.iCategoryId,
        name: el.vName
      }
    )
  })

  const data = list.concat(list2)



  return (

    <div className="App w-full ">
      <header className="App-header">
        <div className=" w-full" >
          <ReactSearchAutocomplete
            styling={{
                zIndex: 1
              }}
            placeholder="Search"
            items={data}
            onSearch={(el) => changeHandler(el)}
            onSelect={(el)=> submitHandlers(el)}
            onClear={handleClear}
          // autoFocus
          // formatResult={formatResult}
          />
        </div>
      </header>
    </div>

  );
};
