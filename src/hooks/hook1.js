import useHook2 from './hook2';

const useHook1 = () => {
  const data1 = 'data1';
  
  const {data2} = useHook2();
  return {data1, data2};
};
export default useHook1;
