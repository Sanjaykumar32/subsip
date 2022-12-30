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
import { Form } from "react-router-dom";

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
  ]: ListFormItem[] = [
    {
      id: "q1",
      label: "What's your business called?",
      type: InputTypeEnum.INPUT,
      required: true,
    },
    {
      id: "q2",
      label: "Step 2: Tag your product in that category ",
      type: InputTypeEnum.SELECT,
      required: true,
    },
    {
      id: "q3",
      label: "Tagline",
      type: InputTypeEnum.INPUT,
      required: true,
      caption:
        "What's your pitch? Tell buyers about your product in 100 characters or less.",
    },
    {
      id: "q4",
      label: "Tell us about your buisness?",
      type: InputTypeEnum.TEXT_AREA,
      required: true,
      caption:
        "Share a high-level introduction to your product. Check out our copy guidelines for inspiration.",
    },
    {
      id: "q5",
      label: "Support Email?",
      type: InputTypeEnum.INPUT,
      required: true,
    },
    {
      id: "q6",
      label: "Featured Image?",
      type: InputTypeEnum.INPUT,
      required: true,
    },
    {
      id: "q7",
      label: "Step 1: Pick a business category ",
      type: InputTypeEnum.SELECT,
      required: true,
    },
    {
      id: "q8",
      label: "Buisness Location",
      type: InputTypeEnum.SELECT,
      required: true,
    },
    {
      id: "q9",
      label: " Step 2: Pick subcategory ",
      type: InputTypeEnum.INPUT,
      required: true,
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
    productCategory,
    filteredSubCategory,
    categoryData,
    businessData,
    image,
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
    handleProductChange,
    handleImageChange,
  } = handlers;

  const ref = useRef<HTMLInputElement>(null);

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
                      required
                    />
                  </FormControl>
                </Box>
                <Box sx={{ my: 4 }}>
                  <Label> {step3.label} </Label>
                  <Typography variant="body2"> {step3.caption} </Typography>
                  <FormControl fullWidth>
                    <TextField
                      size="small"
                      value={headline}
                      onChange={handleHeadlineChange}
                      required
                      fullWidth
                    />
                  </FormControl>
                </Box>
                <Box sx={{ my: 4 }}>
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
                </Box>
                <Box sx={{ my: 4 }}>
                  <Label id={`${step7.id}-label`}> {step7.label} </Label>
                  <Typography variant="body2"> {step7.caption} </Typography>
                  <FormControl fullWidth>
                    <Select
                      fullWidth
                      id={`${step7.id}-select`}
                      labelId={`${step7.id}-label`}
                      value={productCategory}
                      onChange={handleProductChange}
                    >
                      {businessData.map((res, i) => (
                        <MenuItem value={res.iBusinessId} key={i}>
                          {res.vName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
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
                    >
                      {categoryData?.map((res, i: number) => (
                        <MenuItem value={res.iCategoryId} key={i}>
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
                    >
                      {filteredSubCategory.map((res, i: number) => (
                        <MenuItem value={res.iSubCategoryId} key={i}>
                          {res.vName}
                        </MenuItem>
                      ))}
                    </Select>
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
                      required
                      fullWidth
                    />
                  </FormControl>
                </Box>
                <Box sx={{ my: 4 }}>
                  <Label> {step6.label} </Label>
                  <Typography variant="body2"> {step6.caption} </Typography>

                  <input
                    // value={image}
                    type="file"
                    onChange={(e: any) => {
                      handleImageChange(e);
                    }}
                  />

                  {/* <FormControl fullWidth >
                    <input
                      // ref={ref}
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
                        // handleImageChange(e);
                      }}
                    >
                      <FontAwesomeIcon icon={faUpload} size="lg" />
                    </IconButton>
                  </FormControl> */}
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
            Add listing
          </Button>
        </Box>
      </Form>
    </Container>
  );
}
