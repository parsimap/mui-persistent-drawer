import Drawer, { drawerClasses, DrawerProps } from "@mui/material/Drawer";
import ToggleButton from "./ToggleButton";
import * as React from "react";
import useBodyDir from "./hooks/useBodyDir";

interface IProps extends DrawerProps {
  open: boolean;
  scroll?: boolean;
  right?: number;
  width: number | string;
  top?: number;
  onOpenChange?: (open: boolean) => void;
  closeTitle: string;
  openTitle: string;
}

const MuiPersistentDrawer = ({
  open: propsOpen = true,
  width,
  scroll,
  top = 0,
  right = 0,
  onOpenChange,
  closeTitle,
  openTitle,
  ...rest
}: IProps) => {
  const bodyDir = useBodyDir();
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
        bodyDir={bodyDir}
        openTitle={openTitle}
        closeTitle={closeTitle}
        onClick={handleToggleButtonClick}
      />
      <Drawer
        anchor={bodyDir === "ltr" ? "right" : "left"}
        variant={"persistent"}
        sx={(theme) => ({
          width: open ? width : 0,
          flexShrink: 0,
          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
          [`& .${drawerClasses.paper}`]: {
            width,
            left: bodyDir === "ltr" ? 0 : undefined,
            right: bodyDir === "ltr" ? undefined : 0,
            top: `${top}px`,
            ml: `${right}px`,
            display: "flex",
            overflow: "hidden",
            flexDirection: "column",
            boxSizing: "border-box",
            height: `calc(100% - ${top}px)`,
            overflowY: scroll ? "auto" : "hidden",
            padding: theme.spacing(2, 2, 2, 4),
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

export default MuiPersistentDrawer;
