import { Typography, TypographyProps } from "@mui/material";

export function Label(props: TypographyProps) {
    return <Typography fontWeight={700} variant="body2" {...props} style={{ margin: "4px 0px" }} > {props.children} </Typography>
}