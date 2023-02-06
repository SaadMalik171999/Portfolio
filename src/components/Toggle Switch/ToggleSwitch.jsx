import React, { useState, useContext } from "react";
import emoji from "react-easy-emoji";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../../redux/features";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  const dispatch = useDispatch();
  const modeTheme = useSelector((state) => state.themes);
  const [isChecked, setChecked] = useState(modeTheme);
  const isDark = window.localStorage.getItem("mode");

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isDark === "dark"}
        onChange={() => {
          dispatch(setMode(modeTheme.mode));
          setChecked(!isChecked);
        }}
      />
      <span className="slider round">
        <span className="emoji">
          {isDark === "dark" ? emoji("🌙") : emoji("🌞")}
        </span>
      </span>
    </label>
  );
};
export default ToggleSwitch;
