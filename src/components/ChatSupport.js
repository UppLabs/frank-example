import React, { Component } from 'react';
import { View, Text, Image, TextInput } from 'react-native';

import NavBar from './NavBar';
import { Section } from './common/Section';
import { TurqButton } from './common/Index';

class ChatSupport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSandraTyping: true,
      // isMessageDisplayed: false,
      sandraMessage: '',
      chatboxLeftMessage: '',
      display: 'none',
      userText: '',
      userTypeMessage: '',
      userDisplay: 'none',
      chatboxRightMessage: ''
    }
    this._SandraTyping.bind(this);
    this._UserTyping.bind(this);
  }

  _UserTyping() {
    //Send user.text when send is clicked on
    let text = this.state.userText;
    if(this.state.userTypeMessage !== '') {
      this.setState({
        userDisplay: 'flex',
        userText: '',
        chatBoxRightMessage: text
      })

        this._SandraTyping();

      }
      if(this.state.userTypeMessage === '') {
        this.setState({
          userTypeMessage: ''
        })
      }
  }

  _SandraTyping() {
    if(this.state.isSandraTyping === true) {
      console.log(this.state)
      //if sandra is typing, set the message to typing
      this.setState({
        sandraMessage: 'Sandra is typing...',
        display: 'none'
      })
      setTimeout(() => {
        console.log('in set TIMEOUT')
        this.setState({
          isSandraTyping: false,
          display: 'flex'
        })

        this._SandraTyping();

      }, 10000)
    }
    if(this.state.isSandraTyping === false) {
      this.setState({
        sandraMessage: '',
        chatboxLeftMessage: 'Hey, I\'m Sandra. How can I help you today?'
      })
    }
  }

  render() {
    //get today's date
    let date = new Date().toDateString();
    let currentMonth = date.slice(3, 7);
    let currentDay = date.slice(7, 10);
    let currentYear = date.slice(10, 15);

    let test = this.state.text;
    console.log(test)

    let displayToggle = this.state.display;
    let userDisplayToggle = this.state.userDisplay;

    return (
      <View style={{ paddingTop: 25 }}>
        <Text style={styles.titleStyle}>Support</Text>
        <View style={styles.lineStyle} />
        <View style={{ display: displayToggle }}>
          <View style={styles.containerStyle}>
              <Image
                style={styles.imgLeftStyle}
                source={{ uri: 'https://amylynnjorgensen.files.wordpress.com/2013/10/amy-profile.jpg' }}
              />
            <View style={{ marginBottom: 300 }}>
              <View style={styles.chatBoxLeftStyle}>
                <Text style={styles.supportTextStyle}>{this.state.chatboxLeftMessage}</Text>
                <Text style={styles.supportNameStyle}>Sandra Duquet, <Text>{ currentMonth + ' ' + currentDay + ', ' + currentYear}</Text></Text>
              </View>
            </View>
          </View>
        </View>
        {/*  User response + bubble down here*/}
        <View style={{ display: userDisplayToggle }}>
          <View style={styles.containerStyle}>
            <View style={{ marginBottom: 300 }}>
              <View style={styles.chatBoxRightStyle}>
                <Text style={styles.supportTextStyle}>{this.state.chatBoxRightMessage}</Text>
                <Text style={styles.userNameStyle}>Karen Price, <Text>{ currentMonth + ' ' + currentDay + ', ' + currentYear}</Text></Text>
              </View>
            </View>
            <Image
              style={styles.imgRightStyle}
              source={require('../img/karen.png')}
            />
          </View>
        </View>

          <Text style={styles.sandraTypingStyle}>{this.state.display === 'none' ? this.state.sandraMessage : '' }</Text>
          <Text style={styles.userTypingStyle}>{this.state.userText === '' ? '' : this.state.userTypeMessage}</Text>
        <View style={{ marginTop: 350, marginBottom: 80 }}>
          <Section>
            <TextInput
              style={{ width: '75%' }}
              placeholder="Type your question here"
              value={this.state.userText}
              onChangeText={(userText) => this.setState({ userText, userTypeMessage: 'Karen is typing...' })}
            />
            <TurqButton onPress={() => this._UserTyping()}>
              <Text>Send</Text>
            </TurqButton>
          </Section>
        </View>
        <NavBar />
      </View>
    );
  }
}


const styles = {
  titleStyle: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center'
  },
  imgLeftStyle: {
    height: 50,
    width: 50,
    marginTop: 100,
    marginLeft: 65,
    borderRadius: 15,
    borderColor: '#ddd',
  },
  lineStyle:{
    borderWidth: 0.6,
    borderColor: '#e2e2e2',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10
  },
  supportNameStyle: {
    fontSize: 10,
    fontWeight: '300',
    alignSelf: 'flex-end',
    marginRight: 5,
    marginTop: 10,
    backgroundColor: 'transparent'
  },
  userNameStyle: {
    fontSize: 10,
    fontWeight: '300',
    alignSelf: 'flex-start',
    marginLeft: 5,
    marginTop: 10,
    backgroundColor: 'transparent'
  },
  supportTextStyle: {
    fontSize: 13
  },
  chatBoxLeftStyle: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginTop: 100,
    marginRight: 70,
    backgroundColor: '#e0ecff',
    borderRadius: 20,
    padding: 20,
  },
  chatBoxRightStyle : {
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginTop: 30,
    marginLeft: 70,
    backgroundColor: '#f2ffdb',
    borderRadius: 20,
    padding: 20,
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  userTypingStyle: {
    fontSize: 12,
    fontWeight: '300',
    backgroundColor: 'transparent',
    alignSelf: 'flex-end'
  },
  sandraTypingStyle: {
    marginTop: 100,
    fontSize: 12,
    fontWeight: '300',
    backgroundColor: 'transparent'
  },
  imgRightStyle: {
    height: 50,
    width: 50,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 70,
    borderRadius: 20,
    borderColor: '#ddd',
  }
}

export default ChatSupport;
