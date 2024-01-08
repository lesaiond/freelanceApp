// const isTheme = localStorage.getItem("theme");
const isTheme = false;
console.log(isTheme);

export const colors = {
  bgc: isTheme ? "#121212" : "#f6f6f6",
  elemsBgc: isTheme ? "#1e1e1e" : "#fff",
  primeColor: isTheme ? "#FFBD3C" : "#526ed3",
  darkPrime: isTheme ? "#913bfa" : "#314692",
  lightPrime: isTheme ? "#6200ea" : "#717b9f",
  textColor: isTheme ? "#e8e6e3" : "#303030",
  hoverText: isTheme ? "#000000" : "#fff",
  darkGray: isTheme ? "#8e8e8e" : "#6d6f7a",
  gray: isTheme ? "#9e9e9e" : "#717171",
  lightGray: isTheme ? "#424242" : "#e3e3e3",
  placeholderColor: isTheme ? "#757575" : "#8c8c8c",
  disabledBgc: isTheme ? "#2c2c2c" : "#C1C6D3",
  red: isTheme ? "#cf6679" : "#dc2020",
  green: isTheme ? "#57b589" : "#36ac82",
  blue: isTheme ? "#42a5f5" : "#399efa",
};

export const colorsLight = {
  bgc: "#f6f6f6",
  elemsBgc: "#fff",
  primeColor: "#526ed3",
  darkPrime: "#314692",
  lightPrime: "#717b9f",
  textColor: "#303030",
  hoverTex: "#fff",
  darkGray: "#6d6f7a",
  gray: "#717171",
  lightGray: "#e3e3e3",
  placeholderColor: "#8c8c8c",
  disabledBgc: "#C1C6D3",
  red: "#dc2020",
  green: "#36ac82",
  blue: "#399efa",
};

export const colorsDark = {
  darkBgc: "#121212",
  darkElemsBgc: "#1e1e1e",
  darkPrimeColor: "#bb86fc",
  darkDarkPrime: "#3700b3",
  darkLightPrime: "#6200ea",
  darkTextColor: "#ffffff",
  darkHoverText: "#000000",
  darkDarkGray: "#8e8e8e",
  darkGray: "#9e9e9e",
  darkLightGray: "#424242",
  darkPlaceholderColor: "#757575",
  darkDisabledBgc: "#2c2c2c",
  darkRed: "#cf6679",
  darkGreen: "#57b589",
  darkBlue: "#42a5f5",
};

export const newColors = {
  borderColor:"rgba(131, 131, 131, 0.80)",
  elemsBgc: "#EFEFEF",
  bgc: "#fff",
  textColor: "#282C35",
  primeColor: "#FFBD3C",
  secondPrimeColor: "#f00",
  subTextColor: "#777",
  red: "#dc2020",
}