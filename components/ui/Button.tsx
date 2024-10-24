import React, { Suspense, lazy } from "react";
import { ButtonProps } from "../../interfaces/ButtonProps";
import { useUI } from "../../context/UIContext";

const Button: React.FC<ButtonProps> = props => {
  const { library } = useUI();

  const AntdButton = lazy(() => import("../antd/AntdButton"));
  const MaterialButton = lazy(() => import("../material/MaterialButton"));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {library === "antd" ? (
        <AntdButton {...props} />
      ) : library === "material-ui" ? (
        <MaterialButton {...props} />
      ) : null}
    </Suspense>
  );
};

export default Button;
