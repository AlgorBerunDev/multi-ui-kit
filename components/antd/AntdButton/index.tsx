import React from "react";
import { Button } from "antd";
import { ButtonProps } from "../../interfaces/ButtonProps";

const AntdButton: React.FC<ButtonProps> = ({ label, onClick, disabled }) => (
  <Button onClick={onClick} disabled={disabled}>
    {label}
  </Button>
);

export default AntdButton;
