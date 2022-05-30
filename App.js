import React from 'react';
import {Text, View} from 'react-native';
import withProps from './src/hoc/withProps';
import useHook1 from './src/hooks/hook1';

const App = () => {
  // const {data1, data2} = useHook1();

  const DemoComponent = (props) => {
    console.log('props: ', props)
    const {data1, data2} = useHook1();
    return (
      <View style={{marginTop: 50}}>
        <Text>{props.data1}</Text>
        <Text>{data2}</Text>
      </View>
    );
  };

  const outputComponent = withProps(DemoComponent);

  return outputComponent;
};

export default App;
