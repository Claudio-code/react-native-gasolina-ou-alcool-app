import React, {useState} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ResultModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');

  return (
    <View>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalBoxOutline}>
          <View style={styles.modalBox}>
            <Text style={styles.resultText}>{modalText}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <View style={styles.primaryButton}>
                <Text style={styles.textPrimaryButton}>CALCULAR NOVAMENTE</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#5E35B1',
    flex: 1,
  },
  modalBoxOutline: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    padding: 35,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'space-around',
  },
  resultText: {
    color: '#5E35B1',
    fontSize: 40,
    fontFamily: 'BigShouldersDisplay-Light',
    alignSelf: 'center',
    marginBottom: 40,
  },
  primaryButton: {
    backgroundColor: '#5E35B1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    padding: 10,
  },
  textPrimaryButton: {
    color: '#D1C4E9',
    fontSize: 25,
    marginLeft: 40,
    marginRight: 40,
    fontFamily: 'BigShouldersDisplay-Light',
  },
});

export default ResultModal;
