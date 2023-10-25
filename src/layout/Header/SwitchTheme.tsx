import { Switch } from "@mui/material";
import { useThemeContext } from "../../context/ThemeContext";


export default function SwitchTheme() {
  const { theme, changeTheme } = useThemeContext();

  const handleChange = () => {
    changeTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      Theme : Light{" "}
      <Switch checked={theme === "dark"} onChange={handleChange} /> Dark
    </>
  );
}
