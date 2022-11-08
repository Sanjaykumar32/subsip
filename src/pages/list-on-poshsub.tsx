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
} from "@mui/material";
import { Label } from "components";
import Grid from "@mui/material/Grid";
import { InputTypeEnum } from "enum";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

interface ListFormItem {
  id: string;
  label: string;
  caption?: string;
  required?: boolean;
  type: InputTypeEnum;
}

export function ListingOnPoshSub() {
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
      label: "What is your buisness called?",
      type: InputTypeEnum.INPUT,
      required: true,
    },
    {
      id: "q2",
      label: "Step 2: Tag your product in that category",
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
      label: "Pick a Buisness Category",
      type: InputTypeEnum.SELECT,
      required: true,
    },
    {
      id: "q8",
      label: "Pick subcategory",
      type: InputTypeEnum.SELECT,
      required: true,
    },
    {
      id: "q9",
      label: "Buisness Location",
      type: InputTypeEnum.INPUT,
      required: true,
    },
  ];

  const ref = useRef<HTMLInputElement>();

  return (
    <Container disableGutters sx={{ p: 4 }}>
      <Typography variant="alternet"> List on Poshsub </Typography>

      <FormControl fullWidth size="small">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box sx={{ px: 3, py: 1 }}>
              <Box sx={{ my: 4 }}>
                <Label> {step1.label} </Label>
                <Typography variant="body2"> {step1.caption} </Typography>
                <TextField
                  size="small"
                  // value={}
                  // onChange={(event) => setValue(event.target.value)}
                  required
                  fullWidth
                />
              </Box>
              <Box sx={{ my: 4 }}>
                <Label> {step3.label} </Label>
                <Typography variant="body2"> {step3.caption} </Typography>
                <TextField
                  size="small"
                  // value={}
                  // onChange={(event) => setValue(event.target.value)}
                  required
                  fullWidth
                />
              </Box>
              <Box sx={{ my: 4 }}>
                <Label> {step5.label} </Label>
                <Typography variant="body2"> {step5.caption} </Typography>
                <TextField
                  size="small"
                  // value={}
                  // onChange={(event) => setValue(event.target.value)}
                  required
                  fullWidth
                />
              </Box>
              <Box sx={{ my: 4 }}>
                <Label id={`${step7.id}-label`}> {step7.label} </Label>
                <Typography variant="body2"> {step7.caption} </Typography>
                <Select
                  fullWidth
                  id={`${step7.id}-select`}
                  labelId={`${step7.id}-label`}
                  // value={value}
                  // onChange={(event) => setValue(event.target.value)}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Box>
              <Box sx={{ my: 4 }}>
                <Label id={`${step9.id}-label`}> {step9.label} </Label>
                <Typography variant="body2"> {step9.caption} </Typography>
                <Select
                  fullWidth
                  id={`${step9.id}-select`}
                  labelId={`${step9.id}-label`}
                  // value={value}
                  // onChange={(event) => setValue(event.target.value)}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ px: 3, py: 1 }}>
              <Box sx={{ my: 4 }}>
                <Label id={`${step2.id}-label`}> {step2.label} </Label>
                <Typography variant="body2"> {step2.caption} </Typography>
                <Select
                  fullWidth
                  id={`${step2.id}-select`}
                  labelId={`${step2.id}-label`}
                  // value={value}
                  // onChange={(event) => setValue(event.target.value)}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Box>
              <Box sx={{ my: 4 }}>
                <Label> {step4.label} </Label>
                <Typography variant="body2"> {step4.caption} </Typography>
                <TextField
                  multiline
                  minRows={5}
                  // value={value}
                  // onChange={(event) => setValue(event.target.value)}
                  required
                  fullWidth
                />
              </Box>
              <Box sx={{ my: 4 }}>
                <Label> {step6.label} </Label>
                <Typography variant="body2"> {step6.caption} </Typography>
                <Input
                  type="file"
                  ref={ref}
                  onChange={(event) => console.log(event.target.value)}
                />
                <IconButton onClick={() => ref.current?.click()}>
                  <FontAwesomeIcon icon={faUpload} size="lg" />
                </IconButton>
              </Box>
              <Box sx={{ my: 4 }}>
                <Label> {step8.label} </Label>
                <Typography variant="body2"> {step8.caption} </Typography>
                <TextField
                  // value={value}
                  // onChange={(event) => setValue(event.target.value)}
                  required
                  fullWidth
                />
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
          mt: 10,
        }}
      >
        <Button variant="rounded"> Submit for Approval </Button>
        <Link sx={{ mt: 4 }}> Request to remove a existing listing </Link>
      </Box>
    </Container>
  );
}

const GenerateTextField = ({
  id,
  label,
  caption,
  type,
}: ListFormItem): ReactElement => {
  const ref = useRef<HTMLInputElement>();
  const [value, setValue] = useState<string>("");

  switch (type) {
    case InputTypeEnum.FILE_PICKER:
      return (
        <FormGroup>
          <Label> {label} </Label>
          <Typography variant="body2"> {caption} </Typography>
          <Input
            type="file"
            ref={ref}
            onChange={(event) => console.log(event.target.value)}
          />
          <IconButton onClick={() => ref.current?.click()}>
            <FontAwesomeIcon icon={faUpload} size="lg" />
          </IconButton>
        </FormGroup>
      );
    case InputTypeEnum.SELECT:
      return (
        <FormGroup>
          <Label id={`${id}-label`}> {label} </Label>
          <Typography variant="body2"> {caption} </Typography>
          <Select
            id={`${id}-select`}
            labelId={`${id}-label`}
            value={value}
            onChange={(event) => setValue(event.target.value)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormGroup>
      );
    case InputTypeEnum.TEXT_AREA:
      return (
        <FormGroup>
          <Label> {label} </Label>
          <Typography variant="body2"> {caption} </Typography>
          <TextField
            multiline
            minRows={5}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            required
            fullWidth
          />
        </FormGroup>
      );
    case InputTypeEnum.INPUT:
    default:
      return (
        <FormGroup>
          <Label> {label} </Label>
          <Typography variant="body2"> {caption} </Typography>
          <TextField
            size="small"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            required
            fullWidth
          />
        </FormGroup>
      );
  }
};
