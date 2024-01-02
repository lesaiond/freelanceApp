const isTheme = localStorage.getItem("theme")
console.log(isTheme);


export const colors = {
  primary: isTheme ? "#3498db" : "#000000", //"#3498db",    // Голубой
  secondary: "#95a5a6",  // Серый
  success: "#2ecc71",    // Зеленый
  danger: "#e74c3c",     // Красный
  warning: "#f39c12",    // Желтый
  info: "#3498db",       // Голубой (можно изменить)
  light: "#ecf0f1",      // Светло-серый
  dark: "#34495e",       // Темно-синий
  white: "#ffffff",      // Белый
};
