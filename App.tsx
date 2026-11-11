import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {

  // tilamuuttuja, joka määrittää, onko modaalinen ikkuna näkyvissä vai ei
  const [modalVisible, setModalVisible] = useState(false);

  // funktiot modaalisen ikkunan avaamiseen ja sulkemiseen
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <View style={styles.container}>
      // päänäkymä, jossa on hipaistava teksti modaalisen ikkunan avaamiseen
      <Pressable onPress={openModal}>
        {({ pressed }) => (
          <Text style={[styles.plainText, pressed && styles.pressedText]}>
            Show modal message
          </Text>
        )}
      </Pressable>
      // itse modaali
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        // sulkee modaalin androidin takaisinnappia painettaessa
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>This is modal...</Text>
            // painettava teksti modaalin sulkemiseen
            <Pressable onPress={closeModal}>
              {({ pressed }) => (
                <Text style={[styles.plainText, pressed && styles.pressedText,]}>
                  Close
                </Text>
              )}
            </Pressable>
          </View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plainText: {
    color: "#000",
    fontSize: 18,
    padding: 8,
  },
  pressedText: {
    opacity: 0.5,
  },
  modalOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 24,
    width: "80%",
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 48,
  },
});
