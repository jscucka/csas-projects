import React, { useContext } from 'react';
import { NameContext } from '../components/context/NameContext';
export const Home = () => {
  const { name } = useContext(NameContext) ?? {};
  return <div>{`Ahoj, ${name}!`}</div>;
};
