import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    top: 55,
    width: '100%',
    height: 55,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },

  input: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 5,
  },

  text: {
    marginTop: 5,
    width: '80%',
    height: 40,
    paddingLeft: 12,
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
  },

  submit: {
    width: 50,
    height: 40,
    marginLeft: 2,
    marginTop: 4,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  pattern: {
    fontSize: 18,
    color: 'white',
    paddingBottom: 5,
  },
})
