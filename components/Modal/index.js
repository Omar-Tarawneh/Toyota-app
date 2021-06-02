import React, { useState } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import LoginForm from '../Form';
import StyledButton from '../StyledButton';

const ModalDemo = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <StyledButton
        type="primary"
        content={'Custom Order'}
        onPress={toggleModal}
      />

      <StyledButton
        type="secondary"
        content={'Existing Inventory'}
        onPress={toggleModal}
      />
      <Modal isVisible={isModalVisible}>
        <View>
          <LoginForm />
          <View>
            <StyledButton
              content={'Purchase'}
              type="secondary"
              title="Hide modal"
              onPress={toggleModal}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ModalDemo;
