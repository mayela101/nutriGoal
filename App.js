import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>nutriGoal</Text>

    <View style={styles.welcome}>
      <Text style={styles.welcomeUser}>Welcome, User!</Text>
    </View>
      <View style={styles.menu}>
        <View style={styles.pieFigure}>
          <Text>Pie Chart</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Log Meal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Log Exercise</Text>
          </TouchableOpacity>
        </View>
      </View>

    <View style = {styles.weekly}>
      <View style={styles.weeklyFigure}>
        <Text>01/03-01/10</Text>
      </View>
    </View>

      <StatusBar style="auto" />
    </View>
  );
}
