import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import { Avatar,Badge } from '@rneui/themed';
// import img  from '../../assets/images/adaptive-icon.png'

export default function Header() {
  return (
      <View style={styles.header}> 
      <View style={{marginRight:10}}>
        <View>
        <Avatar
              size={60}
              rounded
             title="Ân"
             containerStyle={{ backgroundColor: '#3d4db7' }}
            />
             <Badge
            status="success"
            containerStyle={{ position: 'absolute', top: 5, left: 50 }}
          />
        </View>
      </View>
          <View>
             <View >
                <Text >Chào buổi sáng</Text>
              </View>
              <View>
                <Text style={styles.title}>Hồng Ân</Text>
              </View>
          

          </View>
       
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 20,
    paddingBottom: 20,
  

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
    paddingTop: 20,

  
  }
});
