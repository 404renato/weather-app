import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  degrees: {
    top: 25,
    alignItems: 'center',
  },

  degreesContainer: {
    flexDirection: 'row',
    marginTop: 125,
  },

  text: {
    fontSize: 96,
    fontFamily: theme.fonts.Bold,
    color: 'white',
  },

  description: {
    bottom: 10,
    fontSize: 24,
    fontFamily: theme.fonts.Medium,
    color: 'white',
  },
})
