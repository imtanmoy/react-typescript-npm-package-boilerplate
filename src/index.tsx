import React from "react";

interface Props {
  user: string;
}

const Car: React.FC<Props> = ({ user }) => {
  return <div>{`Hello ${user}`}</div>;
};

export default Car;
