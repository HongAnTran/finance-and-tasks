import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import { Avatar } from '@rneui/themed';
import Header from './Header';
import Report from './Report';
// import img  from '../../assets/images/adaptive-icon.png'

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}> 
     <Header />
     <Report />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20,
    paddingBottom: 20,
    padding:20,

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  header: {
    width:'100%',
    display: 'flex',
    flexDirection: 'row',
  
  
  }
});
