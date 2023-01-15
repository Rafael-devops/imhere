import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24,
    },
    eventName: {
      color: '#FDFCFE',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48,
    },
    eventDate: {
      color: '#6B6B6B',
      fontSize: 16,
    },
    input : {
        flex: 1,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FDFCFE',
        padding: 16,
        fontSize: 16,
        marginRight: 12,
    },
    buttonText: {
        color: '#FDFCFE',
        fontSize: 16,
        fontWeight: 'bold',
    },
    button: {
        height: 56,
        width: 56,
        backgroundColor: '#31CF67',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    form : {
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42,
    },
    emptyList: {
      color: '#FFF',
      fontSize: 14,
      textAlign: 'center',
  }    
  });