import React from 'react';
import {Text, View} from 'react-native';
import useHook1 from '../hooks/hook1';

const withProps = ComponentInput => {
  const {data1, data2} = useHook1();

  const propsHoc = {data1, data2};
  
  return <ComponentInput {...propsHoc} />;
};

export default withProps;
