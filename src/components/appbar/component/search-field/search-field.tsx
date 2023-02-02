import React from "react";
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

export const SearchField = () => {
  const { getters, handlers } = SearchFieldController();
  const { search } = getters;
  const { changeHandler, submitHandler, setSearch } = handlers;
  const categoryData = useAppSelector(GET_CATEGORY);

  const navigate = useNavigate();
  const businessData = useAppSelector(GET_BUSINESS);

  // console.log(categoryData, 'categoryData sea')




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

  const handleOnSelect = (item: any) => {
    console.log(item, 'select vlaue')
    // submitHandler(item.name)
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
      <header className="App-header w-full">
        <div className=" w-full xl:w-[80%] mx-[auto]  " >
          <ReactSearchAutocomplete
            styling={{
                zIndex: 1
              }}
            placeholder="Search"
            items={data}
            onSearch={(el) => changeHandler(el)}
            onSelect={(el) => submitHandler(el)}
            onClear={handleClear}
          // autoFocus
          // formatResult={formatResult}
          />
        </div>
      </header>
    </div>

  );
};
