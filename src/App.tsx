import React, { FunctionComponent } from 'react';
import MainLayout from './layaout/mainLayout/mainLayout';
import GState from './context/Context';
// import bulma from 'bulma';

interface Props{
  children?:JSX.Element
  title?:string
  count?:number
}

const App : FunctionComponent <Props> = (props) => {
  return (
    // <GState>
      <MainLayout/>
  )
}

export default App;
