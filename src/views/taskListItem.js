import React, {Component} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  taskTitle: {
    fontSize: 30,
    marginLeft: 20,
  },
});

class TaskListItemView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text
          style={styles.taskTitle}
          onPress={() => this.props.view('Task', {'title': this.props.task.title, 'content': this.props.task.content, 'refresh': this.props.refresh})}>
          {this.props.task.title}
        </Text>
        <TouchableHighlight
          style={{right: 5, top: 2, position: 'absolute'}}
          onPress={() => {
            Alert.alert(
              'Delete ' + this.props.task.title,
              'Do you want to delete ' + this.props.task.title + ' task?',
              [
                {text: 'No', onPress: () => {}, style: 'cancel'},
                {
                  text: 'Yes',
                  onPress: () => {
                    this.props.remove(this.props.task);
                  },
                },
              ],
              {cancelable: false},
            );
          }}>
          <Image
            resizeMode={'cover'}
            source={require('../../assets/icons/delete.png')}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

export default TaskListItemView;
