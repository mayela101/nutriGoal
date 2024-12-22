import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NutriGoal</Text>
      <Text style={styles.subtitle}>Your AI-Enhanced Macro Tracking Assistant</Text>

      <ScrollView contentContainerStyle={styles.menu}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Macro Tracking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>7-Day Meal Planner</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Recipe Management</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Weight Input</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Barcode Scanning</Text>
        </TouchableOpacity>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

