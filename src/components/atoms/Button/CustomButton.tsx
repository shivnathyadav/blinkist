import { Button, ButtonProps } from "@mui/material";
export default function CustomButton(props: ButtonProps) {
  return (
    <Button
      color={props.color}
      variant={props.variant}
      disabled={props.disabled}
      startIcon={props.startIcon}
      endIcon={props.endIcon}
      children={props.children}
      onClick={props.onClick}
      sx={props.sx}
      data-testid="customButton"
      disableRipple={true}
    />
  );
}
