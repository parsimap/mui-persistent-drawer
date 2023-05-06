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
var Drawer_1 = require("@mui/material/Drawer");
var ToggleButton_1 = require("./ToggleButton");
var react_1 = require("react");
var PersistentDrawer = function (_a) {
    var _b = _a.open, propsOpen = _b === void 0 ? true : _b, width = _a.width, scroll = _a.scroll, _c = _a.top, top = _c === void 0 ? 0 : _c, _d = _a.right, right = _d === void 0 ? 0 : _d, onOpenChange = _a.onOpenChange, rest = __rest(_a, ["open", "width", "scroll", "top", "right", "onOpenChange"]);
    var _e = (0, react_1.useState)(propsOpen), open = _e[0], setOpen = _e[1];
    (0, react_1.useEffect)(function () {
        setOpen(propsOpen);
    }, [propsOpen]);
    var handleToggleButtonClick = function () {
        setOpen(!open);
        onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(!open);
    };
    return (<>
      <ToggleButton_1.default open={open} right={right} onClick={handleToggleButtonClick}/>
      <Drawer_1.default variant={"persistent"} sx={function (theme) {
            var _a, _b;
            return (_a = {
                    width: open ? width : 0,
                    flexShrink: 0
                },
                _a[theme.breakpoints.down("md")] = {
                    width: "100%",
                },
                _a["& .".concat(Drawer_1.drawerClasses.paper)] = (_b = {
                        width: width,
                        top: "".concat(top, "px"),
                        ml: "".concat(right, "px"),
                        display: "flex",
                        flexDirection: "column",
                        height: "calc(100% - ".concat(top, "px)"),
                        padding: theme.spacing(2, 2, 2, 4),
                        overflow: "hidden",
                        overflowY: scroll ? "auto" : "hidden",
                        boxSizing: "border-box"
                    },
                    _b[theme.breakpoints.down("md")] = {
                        width: "100%",
                    },
                    _b),
                _a);
        }} {...rest} open={open}/>
    </>);
};
exports.default = PersistentDrawer;
//# sourceMappingURL=PersistentDrawer.js.map