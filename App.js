import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [team1Score, setTeam1Score] = useState(0)
  const [team2Score, setTeam2Score] = useState(0)
  const [team3Score, setTeam3Score] = useState(0)
  const [team4Score, setTeam4Score] = useState(0)

  const handleReset = () => {
    setTeam1Score(0)
    setTeam2Score(0)
    setTeam3Score(0)
    setTeam4Score(0)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ScoreKeeper</Text>
      <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Text>RESET</Text>
      </TouchableOpacity>
      <View style={styles.team}>
        <Text style={{color: 'red', fontSize: 18}}>Team 1</Text>
        <Text style={styles.scoreText}>{team1Score}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => setTeam1Score(team1Score - 1)}>
            <Text>-1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setTeam1Score(team1Score + 1)}>
            <Text>+1</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.team}>
        <Text style={{color: 'blue', fontSize: 18}}>Team 2</Text>
        <Text style={styles.scoreText}>{team2Score}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => setTeam2Score(team2Score - 1)}>
            <Text>-1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setTeam2Score(team2Score + 1)}>
            <Text>+1</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.team}>
        <Text style={{color: 'yellow', fontSize: 18}}>Team 3</Text>
        <Text style={styles.scoreText}>{team3Score}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => setTeam3Score(team3Score - 1)}>
            <Text>-1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setTeam3Score(team3Score + 1)}>
            <Text>+1</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.team}>
        <Text style={{color: 'green', fontSize: 18}}>Team 4</Text>
        <Text style={styles.scoreText}>{team4Score}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => setTeam4Score(team4Score - 1)}>
            <Text>-1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setTeam4Score(team4Score + 1)}>
            <Text>+1</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'maroon',
    flex: 1,
    alignItems: 'center',
    paddingTop: 20
  },
  title: {
    fontSize: 24
  },
  team: {
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 4,
    margin: 12,
    minWidth: 40,
    alignItems: 'center',
    marginBottom: 50
  },
  scoreText: {
    fontSize: 24
  }
});
