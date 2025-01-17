import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 45,
    marginBottom: 20,
    textAlign: 'center',
  },
  welcomeUser: {
    fontSize: 22,
    fontWeight: 'bold',
    
  },

  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 15,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'flex-end', 
  },
  button: {
    backgroundColor: '#4a679e',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pieFigure: {
    flex: 1,
    marginRight: 10, 
    alignItems:'center',
  },
  weeklyFigure: {
    flex: 1,
    marginTop: 10, 
    alignItems:'center',
  },

});

export default styles;
