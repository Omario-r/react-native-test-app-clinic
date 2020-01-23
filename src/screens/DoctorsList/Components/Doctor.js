import React from 'react';
import {
  StyleSheet,
  View} from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import { withNavigation } from 'react-navigation';
import { Text, Card, CardItem } from 'native-base';

import { DotsIcon } from '../../../icons';

class DoctorItem extends React.Component {

  showActionSheet = () => {
      this.ActionSheet.show();
  }

  switchActions = (index) => {
    const { navigation, doctor } = this.props;
    switch (index) {
      case 0:
        navigation.navigate({ routeName: 'DoctorForm', params: { doctor }});
        break;
      case 1:
        break;
      case 2:
        break;
      default:
        break;
    }
  }

  render() {
    const { doctor } = this.props;
    return (
      <View>
        <Card style={styles.card}>
          <CardItem style={styles.textBox}>
            <Text>{doctor.name}</Text>
            <Text style={styles.textSpec}>{doctor.specialisation_title}</Text>
          </CardItem>
          <CardItem button onPress={this.showActionSheet}>
            {DotsIcon(20, 20, 'gray')}
          </CardItem>
        </Card>
        <ActionSheet
          ref={o => {this.ActionSheet = o;}}
          options={['Редактировать', 'Позвонить', 'Убрать в архив']}
          destructiveButtonIndex={2}
          onPress={this.switchActions}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  textBox:{
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  textSpec: {
    fontSize: 14,
    color: 'gray',
  },
});

export default withNavigation(DoctorItem);
