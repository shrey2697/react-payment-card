"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardNumber = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const CardNumber = _ref => {
  let {
    getFormattedCardNumber,
    isBackVisible,
    cardNumber
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread({
      color: "grey",
      textShadow: "1px 1px 1px white",
      fontSize: 22,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      visibility: cardNumber === "placeholder" && "hidden",
      letterSpacing: "12px"
    }, isBackVisible && {
      transform: "scale(-1, 1)",
      position: "absolute",
      bottom: "30%",
      opacity: "0.2"
    })
  }, getFormattedCardNumber(cardNumber));
};

exports.CardNumber = CardNumber;