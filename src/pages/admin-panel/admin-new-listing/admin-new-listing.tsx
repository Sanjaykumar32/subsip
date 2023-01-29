/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-fallthrough */
import React, { ReactElement, useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormGroup,
  IconButton,
  Input,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { AdminBackButton, Label } from "components";
import Grid from "@mui/material/Grid";
import { InputTypeEnum } from "enum";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faLocationDot,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { NewlistingController } from "./admin-new-listing-controller";
import { Form, useSearchParams } from "react-router-dom";
import Switch from "@mui/material/Switch";
import Checkbox from '@mui/material/Checkbox';


interface ListFormItem {
  id: string;
  label: string;
  caption?: string;
  required?: boolean;
  type: InputTypeEnum;
}

export function AdminNewlisting() {
  const theme = useTheme();
  const [
    step1,
    step2,
    step3,
    step4,
    step5,
    step6,
    step7,
    step8,
    step9,
    step10,
    step11,
    step12,
  ]: ListFormItem[] = [
      {
        id: "q1",
        label: "Name",
        type: InputTypeEnum.INPUT,
        required: false,
      },
      {
        id: "q2",
        label: "Pick  Business Category  ",
        type: InputTypeEnum.SELECT,
        required: false,
      },
      {
        id: "q3",
        label: "Tagline",
        type: InputTypeEnum.INPUT,
        required: false,
        caption:
          "What's your pitch? Tell buyers about your product in 100 characters or less.",
      },
      {
        id: "q4",
        label: "Tell us about your buisness?",
        type: InputTypeEnum.TEXT_AREA,
        required: false,
        caption:
          "Share a high-level introduction to your product. Check out our copy guidelines for inspiration.",
      },
      {
        id: "q5",
        label: "Support Email?",
        type: InputTypeEnum.INPUT,
        required: false,
      },
      {
        id: "q6",
        label: "Featured Image?",
        type: InputTypeEnum.INPUT,
        required: false,
      },
      {
        id: "q7",
        label: "Tagline",
        type: InputTypeEnum.INPUT,
        required: false,
      },
      {
        id: "q8",
        label: "Buisness Location",
        type: InputTypeEnum.SELECT,
        required: false,
      },
      {
        id: "q9",
        label: "Pick Subcategory ",
        type: InputTypeEnum.INPUT,
        required: false,
      },
      {
        id: "q10",
        label: "On Banner",
        type: InputTypeEnum.SWITCH_DEMO,
        required: false,
      },
      {
        id: "q11",
        label: "Preview",
        type: InputTypeEnum.TEXT_AREA,
        required: false,
      },
      {
        id: "q12",
        label: "Body Description",
        type: InputTypeEnum.TEXT_AREA,
        required: false,
      },
    ];

  const { getters, handlers } = NewlistingController();
  const {
    headline,
    description,
    subCategory,
    businessName,
    category,
    businessLocation,
    email,
    tagLine,
    filteredSubCategory,
    categoryData,
    businessData,
    image,
    preview,
    bodyDescription,
    banner

  } = getters;
  const {
    handleHeadlineChange,
    submitHandler,
    handleDescriptionChange,
    handleCategoryChange,
    handleSubCategoryChange,
    handleBusinessNameChange,
    handleBusinessLocationhange,
    handleEmailChange,
    handleTaglineChange,
    handleImageChange,
    handleBanner,
    handlePreviewChange,
    handleBodyDescriptionChange,
  } = handlers;

  const ref = useRef<HTMLInputElement>(null);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const edit = searchParams.get("edit");







  return (
    <Container maxWidth="lg">
      <AdminBackButton />
      <Form onSubmit={submitHandler}>
        <FormControl fullWidth size="small">
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box sx={{ px: 3, py: 1 }}>
                <Box sx={{ my: 4 }}>
                  <Label> {step1.label} </Label>
                  <Typography variant="body2"> {step1.caption} </Typography>
                  <FormControl fullWidth>
                    <TextField
                      size="small"
                      value={businessName}
                      onChange={handleBusinessNameChange}
                    // required
                    />
                  </FormControl>
                </Box>
                <Box sx={{ my: 4 }}>
                  <Label> {step3.label} </Label>
                  <Typography variant="body2"> {step3.caption} </Typography>
                  <FormControl fullWidth>
                    <TextField
                      size="small"
                      value={tagLine}
                      onChange={handleTaglineChange}
                      // required
                      fullWidth
                    />
                  </FormControl>
                </Box>



                <Box sx={{ my: 4 }}>
                  <Label> {step8.label} </Label>
                  <Typography variant="body2"> {step8.caption} </Typography>
                  <FormControl fullWidth>
                    <TextField
                      value={businessLocation}
                      onChange={handleBusinessLocationhange}
                      // required
                      fullWidth
                      InputProps={{
                        endAdornment: (
                          <IconButton>
                            <FontAwesomeIcon icon={faLocationDot} size="xs" />
                          </IconButton>
                        ),
                      }}
                    />
                  </FormControl>
                </Box>

                {/* <Box sx={{ my: 4 }}>
                  <Label> {step5.label} </Label>
                  <Typography variant="body2"> {step5.caption} </Typography>
                  <FormControl fullWidth>
                    <TextField
                      size="small"
                      value={email}
                      onChange={handleEmailChange}
                      // required
                      fullWidth
                    />
                  </FormControl>
                </Box> */}

                <Box sx={{ my: 4 }}>
                  <Label id={`${step2.id}-label`}> {step2.label} </Label>
                  <Typography variant="body2"> {step2.caption} </Typography>
                  <FormControl fullWidth>
                    <Select
                      fullWidth
                      id={`${step2.id}-select`}
                      labelId={`${step2.id}-label`}
                      value={category}
                      onChange={handleCategoryChange}
                      className="listingSelect"
                    >
                      {categoryData?.map((res, i: number) => (
                        <MenuItem value={res.iCategoryId} key={i}>
                          {res.vName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ my: 4 }}>
                  <Label id={`${step9.id}-label`}> {step9.label} </Label>
                  <Typography variant="body2"> {step9.caption} </Typography>
                  <FormControl fullWidth>
                    <Select
                      fullWidth
                      id={`${step9.id}-select`}
                      labelId={`${step9.id}-label`}
                      value={subCategory}
                      onChange={handleSubCategoryChange}
                      className="listingSelect"
                    >
                      {filteredSubCategory.map((res, i: number) => (
                        <MenuItem value={res.iSubCategoryId} key={i}>
                          {res.vName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ px: 3, py: 1 }}>
                <Grid container className=' justify-between ' >
                  <Grid xs={6} md={4}>
                    <Box>
                      <Label> {step6.label} </Label>
                      <Typography variant="body2"> {step6.caption} </Typography>

                

                      <div className="flex  w-full mr-[10px]  gap-2 justify-center items-center align-center" >
                        <label htmlFor="fileInput">
                          <img id="icon" src="https://image.freepik.com/free-icon/upload-arrow_318-26670.jpg" />
                        </label>
                        <input id="fileInput" type="file" onChange={(e: any) => { handleImageChange(e); }} />

                        {image ? 
                        <img src={image} className=" w-[100px] h-[80px] object-cover rounded-[6px] " />
                    
                          : 
                          <div className=" w-[100px] h-[80px] object-cover rounded-[6px] bg-[#8b8b8b4a] flex justify-center items-center " >

                            <h1 className=" text-[13px] text-[#000] " >Select Image</h1></div>}
                      </div>



                      {/* <FormControl fullWidth >
                        <input
                          ref={ref}
                          type="file"
                          // value={image}
                          onChange={(e: any) => { handleImageChange(e) }}
                          hidden
                        />

                        <IconButton
                          sx={{
                            width: "100%",
                            height: "100%",
                            backgroundColor: theme.palette.grey[300],
                            borderRadius: "4px",
                            p: 4,
                          }}
                          onClick={(e: any) => {
                            ref.current?.click();
                            handleImageChange(e);
                          }}
                        >
                          <FontAwesomeIcon icon={faUpload} size="lg" />
                        </IconButton>
                      </FormControl> */}
                    </Box>
                  </Grid>
                  <Grid xs={6} md={4}>
                    <Box>
                      <>
                        <Label> {step10.label} </Label>
                        <Typography variant="body2">
                          {" "}
                          {step10.caption}{" "}
                        </Typography>
                        <Switch checked={banner} onClick={handleBanner} />

                      </>
                    </Box>
                  </Grid>
                </Grid>

                <Box sx={{ my: 4 }}>
                  <Label> {step11.label} </Label>
                  <Typography variant="body2"> {step12.caption} </Typography>
                  <FormControl fullWidth>
                    <TextField
                      size="small"
                      value={preview}
                      onChange={handlePreviewChange}
                      // required
                      fullWidth
                    // required

                    />
                  </FormControl>
                </Box>

                <Box sx={{ my: 4 }}>
                  <Label> {step4.label} </Label>
                  <Typography variant="body2"> {step4.caption} </Typography>
                  <FormControl fullWidth>
                    <TextField
                      multiline
                      minRows={5}
                      value={description}
                      onChange={handleDescriptionChange}
                      // required
                      fullWidth
                    />
                  </FormControl>
                </Box>

                <Box sx={{ my: 4 }}>
                  <Label> {step12.label} </Label>
                  <Typography variant="body2"> {step12.caption} </Typography>
                  <FormControl fullWidth>
                    <TextField
                      multiline
                      minRows={5}
                      value={bodyDescription}
                      onChange={handleBodyDescriptionChange}
                      // required
                      fullWidth
                    />
                  </FormControl>
                </Box>

              </Box>
            </Grid>
          </Grid>
        </FormControl>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mt: 3,
          }}
        >
          <Button variant="rounded" type="submit">
            {edit ? 'Update listing' : 'Add listing'}
          </Button>
        </Box>
      </Form>
    </Container>
  );
}
