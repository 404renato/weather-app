import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
    flexDirection: 'row',
  },

  infoContainer: {
    flexDirection: 'column',
    marginLeft: 30,
  },

  info: {
    fontSize: 24,
    fontFamily: theme.fonts.Bold,
    color: 'white',
    marginBottom: 2,
  },

  timeContainer: {
    position: 'absolute',
    alignItems: 'center',
    right: 10,
  },

  current: {
    fontSize: 18,
    fontFamily: theme.fonts.Regular,
    color: 'white',
  },

  time: {
    fontSize: 48,
    fontFamily: theme.fonts.Bold,
    color: 'white',
  },
})
