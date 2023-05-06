import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";

interface IProps extends ButtonProps {
  open?: boolean;
  right: number;
}

const ButtonContent = ({
  title,
  icon,
}: {
  title: string;
  icon: React.ElementType;
}) => (
  <React.Fragment>
    <Typography variant={"caption"}>{title}</Typography>
    <SvgIcon
      component={icon}
      fontSize={"small"}
      sx={{ transform: "rotate(90deg)" }}
    />
  </React.Fragment>
);

const WIDTH = 40;
const HEIGHT = 30;

const ToggleButton = ({ open, right, ...rest }: IProps) => (
  <Button
    {...rest}
    variant={"contained"}
    size={"small"}
    sx={{
      left: -(WIDTH / 2) + right,
      width: WIDTH,
      height: HEIGHT,
      top: "50%",
      position: "fixed",
      transform: "rotate(90deg)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderTopLeftRadius: "unset",
      borderTopRightRadius: "unset",
      zIndex: (theme) => theme.zIndex.drawer + 1,
    }}
  >
    {open ? (
      <ButtonContent title={"نقشه"} icon={KeyboardArrowLeftIcon} />
    ) : (
      <ButtonContent title={"جزئیات"} icon={KeyboardArrowRightIcon} />
    )}
  </Button>
);

export default ToggleButton;
