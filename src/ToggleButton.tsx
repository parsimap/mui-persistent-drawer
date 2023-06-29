import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import * as React from "react";
import Button, {ButtonProps} from "@mui/material/Button";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";

interface IProps extends ButtonProps {
  open?: boolean;
  right: number;
  openTitle: string;
  closeTitle: string;
  bodyDir?: string;
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
      sx={{transform: "rotate(90deg)"}}
    />
  </React.Fragment>
);

const WIDTH = 80;
const HEIGHT = 30;

const ToggleButton = ({
                        open,
                        right,
                        bodyDir,
                        openTitle,
                        closeTitle,
                        ...rest
                      }: IProps) => {

  return (
    <Button
      {...rest}
      size={"small"}
      variant={"contained"}
      sx={{
        top: "50%",
        width: WIDTH,
        height: HEIGHT,
        display: "flex",
        position: "fixed",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        left: -(WIDTH / 3) + right,
        transform: "rotate(90deg)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        borderTopLeftRadius: bodyDir === "rtl" ? "unset" : undefined,
        borderTopRightRadius: bodyDir === "rtl" ? "unset" : undefined,
        borderBottomLeftRadius: bodyDir === "ltr" ? "unset" : undefined,
        borderBottomRightRadius: bodyDir === "ltr" ? "unset" : undefined,
      }}
    >
      {open ? (
        <ButtonContent title={closeTitle} icon={KeyboardArrowLeftIcon}/>
      ) : (
        <ButtonContent title={openTitle} icon={KeyboardArrowRightIcon}/>
      )}
    </Button>
  );
};

export default ToggleButton;
