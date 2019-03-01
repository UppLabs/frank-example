import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Slider from 'react-native-slider';

// common libraries
import { Section } from './common/Section';
import UsageChart from './UsageChart';
import NavBar from './NavBar';

class HistoricUsage extends Component {
  render() {
    return(
      <View>
        <ScrollView>
        <View style={{ paddingTop: 25, backgroundColor: '#123c66' }}>
          <View style={styles.topViewStyle}>
            <View style={styles.containerStyle}>
              <Image source={require("../img/logo.png")} accessibilityLabel="Frank's logo" style={styles.logoStyle} />
              <Text style={styles.usageTextStyle}>Historical Usage</Text>
            </View>
            <View>
              <Text style={styles.shopTitleStyle}>{'John\'s Bicycle Shop'}</Text>
              <Text style={styles.subTitleStyle}>5 Minute Usage: 10 kWh</Text>
              <Text style={styles.subTitleStyle}>{'Last Month\'s Usage: 325 kWh'}</Text>
              <UsageChart />
            </View>
            <View>
            <View style={styles.slideContainerStyle}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.slideTextStyle}>
                  <Text style={styles.meterNumStyle}>Meter Number 1</Text>
                  <Slider style={{ width: 230 }} minimumTrackTintColor="#32CD32" disabled minimumValue={0} value={76} maximumValue={100} />
                  <Text style={styles.usagePercentStyle}>76% of historical usage</Text>
                </View>

                <View style={styles.slideTextStyle}>
                  <Text style={styles.meterNumStyle}>Meter Number 2</Text>
                  <Slider style={{ width: 230 }} minimumTrackTintColor="#32CD32" disabled minimumValue={0} value={55} maximumValue={100} />
                  <Text style={styles.usagePercentStyle}>55% of historical usage</Text>
                </View>

                <View style={styles.slideTextStyle}>
                  <Text style={styles.meterNumStyle}>Meter Number 3</Text>
                  <Slider style={{ width: 230 }} minimumTrackTintColor="#32CD32" disabled minimumValue={0} value={19.5} maximumValue={100} />
                  <Text style={styles.usagePercentStyle}>19.5% of historical usage</Text>
                </View>
              </ScrollView>
            </View>
            </View>
        </View>
      </View>
      <View style={{ backgroundColor: '#f8fcff', marginTop: 10 }}>
        <View style={styles.lineStyle} />
          <View style={{ top: 10, elevation: 2, flex: 1, paddingBottom: 60 }}>
            <Section>
              <View style={styles.accountStyle}>
                <Text style={styles.accountTextStyle}>Account#: c2bad325</Text>
                <Text style={styles.rowTextStyle}>08/19/2014</Text>
              </View>

              <View style={styles.accountStyle}>
                <Text style={styles.accountTextStyle}>Savings: <Text style={styles.savingsStyle}>$10.79</Text></Text>
                <Text style={styles.rowTextStyle}>Bill: <Text style={styles.billAmountStyle}>$26.92</Text></Text>
              </View>
            </Section>

            <Section>
              <View style={styles.accountStyle}>
                <Text style={styles.accountTextStyle}>Account#: c2bad325</Text>
                <Text style={styles.rowTextStyle}>10/18/2014</Text>
              </View>

              <View style={styles.accountStyle}>
                <Text style={styles.accountTextStyle}>Savings: <Text style={styles.savingsStyle}>$10.79</Text></Text>
                <Text style={styles.rowTextStyle}>Bill: <Text style={styles.billAmountStyle}>$22.05</Text></Text>
              </View>
            </Section>

            <Section>
              <View style={styles.accountStyle}>
                <Text style={styles.accountTextStyle}>Account#: c2bad325</Text>
                <Text style={styles.rowTextStyle}>09/18/2014</Text>
              </View>

              <View style={styles.accountStyle}>
                <Text style={styles.accountTextStyle}>Savings: <Text style={styles.savingsStyle}>$10.79</Text></Text>
                <Text style={styles.rowTextStyle}>Bill: <Text style={styles.billAmountStyle}>$23.15</Text></Text>
              </View>
            </Section>

          </View>
      </View>
      </ScrollView>
      <NavBar />
    </View>
    );
  }
}

const styles = {
  topViewStyle: {
    backgroundColor: '#123c66',
    paddingTop: 3,
    paddingBottom: 20
  },
  bottomViewStyle: {
    backgroundColor: '#f8fcff',
    padding: 20,
  },
  slideTextStyle: {
    backgroundColor: '#fff',
    padding: 20,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10
  },
  usageTextStyle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
    alignSelf: 'center',
    paddingLeft: 15,
    paddingRight: 15
  },
  logoStyle: {
    width: 35,
    height: 35
  },
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  shopTitleStyle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '300',
    textAlign: 'left',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 22,
    paddingBottom: 8
  },
  subTitleStyle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '300',
    textAlign: 'left',
    paddingLeft: 15,
    paddingRight: 15
  },
  slideContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: 45,
    elevation: 3,
    bottom: 20
  },
  lineStyle:{
    borderWidth: 0.6,
    borderColor: '#e2e0e0',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 25,
    elevation: 1,
    position: 'relative'
  },
  meterNumStyle: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'left'
  },
  usagePercentStyle: {
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'right',
    opacity: 0.6,
    elevation: 2
  },
  accountContainer: {
    top: 35,
    elevation: 2,
  },
  accountStyle: {
    padding: 5,
    marginTop: 5,
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  accountTextStyle: {
    flex: 1,
    fontWeight: '500',
    fontSize: 16
  },
  savingsStyle: {
    color: '#2CC197',
    fontSize: 14
  },
  rowTextStyle: {
    marginTop: 5,
    flex: 1,
    color: '#b7b9bc',
    fontSize: 13
  },
  billAmountStyle: {
    color: '#EE5A55'
  }
}

export default HistoricUsage;
