import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeToggler() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </>
  );
}

function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <h1
        style={{
          background: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
        }}
      >
        Hi, I am Content and I am going to change the theme.
      </h1>
      <h3>Current theme: {theme}</h3>
    </>
  );
}

function Theme() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Content />
        <ThemeToggler />
      </ThemeContext.Provider>
    </>
  );
}

export default Theme;
