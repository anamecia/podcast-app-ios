import {StyleSheet} from 'react-native';
import {CustomColors, RoundedCorners} from '../../styleConstants';

export const searchBarStyles = StyleSheet.create({
  Field: {
    ...RoundedCorners,
    width: '100%',
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: CustomColors.white,
    padding: 10,
  },
  Input: {
    paddingLeft: 10,
  },
  CancelBtn: {
    marginLeft: 'auto',
  },
});
