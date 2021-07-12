"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClickOutside = void 0;
var react_1 = require("react");
var useClickOutside = function (elRef, callback) {
    var callbackRef = react_1.useRef();
    callbackRef.current = callback;
    react_1.useEffect(function () {
        var handleOutClick = function (e) {
            var _a;
            if (!((_a = elRef === null || elRef === void 0 ? void 0 : elRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target)) && callbackRef.current) {
                callbackRef.current(e);
            }
        };
        document.addEventListener('click', handleOutClick, true);
        return function () {
            document.removeEventListener('click', handleOutClick, true);
        };
    }, [callbackRef, elRef]);
};
exports.useClickOutside = useClickOutside;
