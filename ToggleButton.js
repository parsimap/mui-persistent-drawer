"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var KeyboardArrowLeft_1 = require("@mui/icons-material/KeyboardArrowLeft");
var KeyboardArrowRight_1 = require("@mui/icons-material/KeyboardArrowRight");
var React = require("react");
var Button_1 = require("@mui/material/Button");
var SvgIcon_1 = require("@mui/material/SvgIcon");
var Typography_1 = require("@mui/material/Typography");
var ButtonContent = function (_a) {
    var title = _a.title, icon = _a.icon;
    return (<>
    <Typography_1.default variant={"caption"}>{title}</Typography_1.default>
    <SvgIcon_1.default component={icon} fontSize={"small"} sx={{ transform: "rotate(90deg)" }}/>
  </>);
};
var WIDTH = 40;
var HEIGHT = 30;
var ToggleButton = function (_a) {
    var open = _a.open, right = _a.right, rest = __rest(_a, ["open", "right"]);
    return (<Button_1.default {...rest} variant={"contained"} size={"small"} sx={{
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
            zIndex: function (theme) { return theme.zIndex.drawer + 1; },
        }}>
    {open ? (<ButtonContent title={"نقشه"} icon={KeyboardArrowLeft_1.default}/>) : (<ButtonContent title={"جزئیات"} icon={KeyboardArrowRight_1.default}/>)}
  </Button_1.default>);
};
exports.default = ToggleButton;
//# sourceMappingURL=ToggleButton.js.map