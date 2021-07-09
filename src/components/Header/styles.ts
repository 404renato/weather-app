import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  wrapper: {
    position: 'absolute',
  },

  scale: {
    fontSize: 24,
    fontFamily: theme.fonts.Regular,
    color: 'white',
  },

  city: {
    fontSize: 24,
    fontFamily: theme.fonts.Regular,
    textTransform: 'capitalize',
    color: 'white',
  },
})
