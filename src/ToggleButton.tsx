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
  bodyDir: string;
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

const WIDTH = 40;
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
        borderTopLeftRadius: bodyDir === "rtl" ? "unset" : undefined,
        borderTopRightRadius: bodyDir === "rtl" ? "unset" : undefined,
        borderBottomLeftRadius: bodyDir === "ltr" ? "unset" : undefined,
        borderBottomRightRadius: bodyDir === "ltr" ? "unset" : undefined,
        zIndex: (theme) => theme.zIndex.drawer + 1,
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
