import React from 'react';
import { Scene, Stack } from 'react-native-router-flux';
import Home from './components/Home';
import Landing from './components/Landing';
import AccountDetails from './components/AccountDetails';
import HistoricUsage from './components/HistoricUsage';
import Map from './components/Map';
import ChatSupport from './components/ChatSupport';
import SignUp from './containers/SignUp';
import LogIn from './containers/LogIn';
import ForgotPassword from './containers/ForgotPassword';
import RestorePassword from './containers/RestorePassword';
import ConnectUtility from './containers/ConnectUtility';
import CustomRouter from './containers/CustomRouter';

const RouterComponent = () => {
  return (
    <CustomRouter>
      <Stack key="root">
        <Scene key="start">
          <Scene key="home" component={Home} title="Home" hideNavBar />
        </Scene>

        <Scene key="auth">
          <Scene key="login" component={LogIn} title="Login" hideNavBar />
        </Scene>
        
        <Scene key="signUp" component={SignUp} title="Sign up" hideNavBar  />
        
        <Scene key="forgotPassword" component={ForgotPassword} title="Forgot Password" hideNavBar  />

        <Scene key="restorePassword" component={RestorePassword} title="Forgot Password" hideNavBar  />

        <Scene key="connectUtility" component={ConnectUtility} title="Connect You Utility" hideNavBar initial  />

        <Scene key="land">
          <Scene key="landing" component={Landing} title="Statistics" hideNavBar />
        </Scene>

        <Scene key="account">
          <Scene key="accountDetails" component={AccountDetails} title="Home" hideNavBar />
        </Scene>

        <Scene key="usage">
          <Scene key="historicalUsage" component={HistoricUsage} title="Historic Usage" hideNavBar />
        </Scene>

        <Scene key="map">
          <Scene key="mapDetails" component={Map} hideNavBar title="Map" />
        </Scene>

        <Scene key="chat">
          <Scene key="chatSupport" component={ChatSupport} hideNavBar title="Support" />
        </Scene>
      </Stack>
    </CustomRouter>

  );
};

export default RouterComponent;
