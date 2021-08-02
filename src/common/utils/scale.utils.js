import {verticalScale, moderateScale} from 'react-native-size-matters';

export const scale = (size, percentage = 0.5) => {
  return moderateScale(size, percentage);
};

export const scaleVertically = (size) => {
  return verticalScale(size);
};
