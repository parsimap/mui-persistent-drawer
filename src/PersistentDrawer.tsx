import Drawer, { drawerClasses, DrawerProps } from "@mui/material/Drawer";
import ToggleButton from "./ToggleButton";
import * as React from "react";

interface IProps extends DrawerProps {
  scroll?: boolean;
  right?: number;
  width: number | string;
  top?: number;
  onOpenChange?: (open: boolean) => void;
}

const PersistentDrawer = ({
  open: propsOpen = true,
  width,
  scroll,
  top = 0,
  right = 0,
  onOpenChange,
  ...rest
}: IProps) => {
  const [open, setOpen] = React.useState(propsOpen);

  React.useEffect(() => {
    setOpen(propsOpen);
  }, [propsOpen]);

  const handleToggleButtonClick = () => {
    setOpen(!open);
    onOpenChange?.(!open);
  };

  return (
    <React.Fragment>
      <ToggleButton
        open={open}
        right={right}
        onClick={handleToggleButtonClick}
      />
      <Drawer
        variant={"persistent"}
        sx={(theme) => ({
          width: open ? width : 0,
          flexShrink: 0,
          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
          [`& .${drawerClasses.paper}`]: {
            width,
            top: `${top}px`,
            ml: `${right}px`,
            display: "flex",
            flexDirection: "column",
            height: `calc(100% - ${top}px)`,
            padding: theme.spacing(2, 2, 2, 4),
            overflow: "hidden",
            overflowY: scroll ? "auto" : "hidden",
            boxSizing: "border-box",
            [theme.breakpoints.down("md")]: {
              width: "100%",
            },
          },
        })}
        {...rest}
        open={open}
      />
    </React.Fragment>
  );
};

export default PersistentDrawer;
