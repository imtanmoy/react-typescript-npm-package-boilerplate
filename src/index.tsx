import React from "react";
import { styled } from "@stitches/react";
import "./index.scss";
import "./style.css";

const Button = styled("button", {
  backgroundColor: "gainsboro",
  borderRadius: "9999px",
  fontSize: "13px",
  padding: "10px 15px",
  "&:hover": {
    backgroundColor: "lightgray",
  },
});

interface Props {
  user: string;
}

const Car: React.FC<Props> = ({ user }) => {
  return (
    <div className="autoplacement-example">
      {`Hello ${user}`}
      <Button>Click</Button>
    </div>
  );
};

export default Car;
