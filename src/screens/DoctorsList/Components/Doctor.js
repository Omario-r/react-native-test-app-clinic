import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TouchableHighlight
} from 'react-native';
import ActionSheet from 'react-native-actionsheet'

import {Text, Card, CardItem } from 'native-base';

class DoctorItem extends React.Component {

  showActionSheet = () => {
      this.ActionSheet.show()
  }

  switchActions = (index) => {
    switch (index) {
      case 0:
        console.log('index>>', index)
        break;
      case 1:
        console.log('index>>', index)
        break;
      case 2:
        console.log('index>>', index)
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
            <Text>W</Text>
          </CardItem>
        </Card>
        <ActionSheet
          ref={o => this.ActionSheet = o}
          options={['Редактировать', 'Позвонить', 'Убрать в архив']}
          destructiveButtonIndex={2}
          onPress={this.switchActions}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  textBox:{
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  textSpec: {
    fontSize: 14,
    color: 'gray'
  }
})

export default DoctorItem;
