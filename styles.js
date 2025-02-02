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
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 0,
    paddingLeft: 150,
  },

  
  weekly: {
    flex: 1,
    marginTop: 15,
    alignItems:'center',
  },

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#2c3e50',
  },
  navButton: {
    paddingTop: 0,
    paddingBottom: 10,
  },
  navButtonText: {
    color: '#2c3e50',
    fontSize: 18,
    fontWeight: 'bold',
  }, 

});

const chartConfig = {
  backgroundColor: '#f0f4f7',
  backgroundGradientFrom: '#f0f4f7',
  backgroundGradientTo: '#f0f4f7',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
};

export { styles as default, chartConfig };
