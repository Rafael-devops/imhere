import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from '../../screens/Home/styles';
import Participant from '../../components/Participant';
import { useState } from 'react';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert('Participante já adicionado', `O participante ${participantName} já foi adicionado`);
    }

    setParticipants(prevState => [...participants, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {

    Alert.alert('Remover participante', `Deseja remover ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 13 de janeiro 2023
      </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={'#6B6B6B'}
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)} />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>Nenhum participante adicionado</Text>
        )}
      />
    </View>
  );
}