import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default{
  basePadding: 20,
  baseMargin: 10,
  baseRadius: 3,
  screnWidth: width < height ? width : height,
  screnHeight: width < height ? height : width,

};
