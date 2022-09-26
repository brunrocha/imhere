import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles'

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])

  function handleParticipantAdd() {
    if(participants.includes('Rudeous')) {
      return Alert.alert("Entrada inválida", "Já existe um participante na lista com esse nome");
    }
    
    setParticipants(prevState => [...prevState, 'Ana'])
  }
  
  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!')
      },
      {
        text: 'Não'
      }
    ]);
    console.log(`Você clicou em remover o participante ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      
      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={ styles.input } 
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={() => handleParticipantAdd()}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
            key={item}
            name={item} 
            onRemove={() => handleParticipantRemove(item)} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participante a sua lista de presença.
          </Text>
        )}
      />
    </View>
  );
}