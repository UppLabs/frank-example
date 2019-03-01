import { AsyncStorage } from 'react-native';

const token = async () => {
    const token = await AsyncStorage.getItem('token');

    if(token) {
        return 'Bearer ' + token;
    }

    return null;
}
export default token();