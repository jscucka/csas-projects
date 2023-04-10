import React, { useContext } from "react";
import { NavBar } from "../components/NavBar";
import { NameContext } from "../components/context/NameContext";
export const Home = () => {
  const { name } = useContext(NameContext) ?? {};
  return <div>{`Ahoj, ${name}!`}</div>;
};
