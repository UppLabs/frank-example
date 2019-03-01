import React from 'react';
import { View, Text, Modal } from 'react-native';

import { TurqButton } from './common/Index';

const AgreementModal = ({isVisible, onAgree, onDisagree, signUpFormValues}) => {
    return (
      <View style={styles.modalContainerStyle}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isVisible}>
          <View style={styles.modalStyle}>
            <View style={styles.modalBodyStyle}>
              <View style={styles.textBodyStyle}>
                <Text style={styles.headerStyle}>Terms and Agreenment</Text>
                <Text style={styles.subHeaderStyle}>Please read the following terms before proceding.</Text>
                <Text style={styles.bodyStyle}>
                You agree to digital sign a letter of authorization, allowing “Frank LLC” to request your utility data on your behalf. This data will not be shared with third parties. 
                You agree that “Frank LLC” will be your exclusive broker for a period of up to 365 days unless termination is agreed by both parties in writing.            
                </Text>
              </View>
              <View style={styles.buttonsStyle}>
                  <TurqButton onPress={onDisagree}>
                    Disagree
                  </TurqButton>
                  <TurqButton onPress={() => onAgree(signUpFormValues)}>
                    Agree
                  </TurqButton>
              </View>
            </View>
          </View>
        </Modal>
      </View>

    );
}

const styles = {
    modalContainerStyle: {
        position: 'absolute',
        flex: 1
    },
    modalStyle: {
      flex: 1,
      margin: 20,
      justifyContent: 'center',
    },
    modalBodyStyle: {
      padding: 10,
      borderRadius: 5,
      marginTop: 120,
      backgroundColor: 'white',
      height: 420,
      justifyContent: 'space-between'
    },
    textBodyStyle: {
      alignSelf: 'stretch',
      alignItems: 'center',
    },
    headerStyle: {
      fontWeight: 'bold',
      fontSize: 20,
      paddingTop: 10
    },
    subHeaderStyle: {
      textAlign: 'center',
      paddingTop: 30,
      paddingBottom: 30,
    },
    bodyStyle: {
      textAlign: 'center'
    },
    buttonsStyle: {
      flexDirection: 'row',
      paddingTop: 10,
      zIndex: 20
    }
}

export default AgreementModal;
