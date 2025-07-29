"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTg = void 0;
var react_1 = require("react");
var useTg = function () {
    var _a = (0, react_1.useState)(false), isTg = _a[0], setIsTg = _a[1];
    var _b = (0, react_1.useState)(null), webApp = _b[0], setWebApp = _b[1];
    var _c = (0, react_1.useState)(null), user = _c[0], setUser = _c[1];
    (0, react_1.useEffect)(function () {
        var initUser = function () {
            var tg = window.Telegram.WebApp;
            if (tg) {
                setWebApp(tg);
                var isValidTgData = tg &&
                    tg.initDataUnsafe &&
                    Object.keys(tg.initDataUnsafe).length > 0 &&
                    tg.initDataUnsafe.user;
                if (isValidTgData) {
                    setIsTg(true);
                    setUser(tg.initDataUnsafe.user);
                    tg.ready();
                    tg.expand();
                    tg.disableVerticalSwipes();
                }
            }
            else {
                setWebApp(null);
            }
        };
        initUser();
    }, []);
    return { webApp: webApp, isTg: isTg, user: user };
};
exports.useTg = useTg;
