import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 200,
  },

  text: {
    fontSize: 24,
    fontFamily: theme.fonts.Bold,
    color: 'white',
    textAlign: 'center',
  },
})
