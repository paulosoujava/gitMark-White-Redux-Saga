import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  empty: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: 14,
    padding: metrics.basePadding,
  }
  });
export default styles;
