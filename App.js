import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import styles, { chartConfig } from './styles'; 

const screenWidth = Dimensions.get('window').width;

export default function App() {
  const pieData = [
    { name: 'Protein', population: 30, color: '#FF6384', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Carbs', population: 30, color: '#36A2EB', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Fats', population: 20, color: '#FFCE56', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Fiber', population: 10, color: '#4BC0C0', legendFontColor: '#7F7F7F', legendFontSize: 15 }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>nutriGoal</Text>

      <View style={styles.welcome}>
        <Text style={styles.welcomeUser}>Welcome, User!</Text>
      </View>

      <View style={styles.menu}>
        <View style={styles.pieFigure}>
        <PieChart
          data={pieData}
          width={screenWidth * 0.9}
          height={220}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          hasLegend={false} 
        />

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

      <View style={styles.weekly}>
        <View style={styles.weeklyFigure}>
          <Text>01/03-01/10</Text>
        </View>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Settings</Text>
        </TouchableOpacity>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}
