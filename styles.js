import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 45,
    marginBottom: 10,
  },
  menu: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
