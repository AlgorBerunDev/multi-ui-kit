import React from "react";
import Button from "@mui/material/Button";
import { ButtonProps } from "../../interfaces/ButtonProps";

const MaterialButton: React.FC<ButtonProps> = ({ label, onClick, disabled }) => (
  <Button onClick={onClick} disabled={disabled}>
    {label}
  </Button>
);

export default MaterialButton;
