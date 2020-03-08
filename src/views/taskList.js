import React, {Component} from 'react';
import Storage from '../services/storage';
import {Image, ScrollView, TextInput, View} from 'react-native';
import TaskListItemView from './taskListItem';
import FAB from 'react-native-fab';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {tasks: [], query: ''};
    this.update();
  }

  remove = task => {
    Storage.deleteTask(task).then(() => this.update());
  };

  update = () =>
    Storage.getArray('tasks').then(tasks => this.setState({tasks}));

  render() {
    return (
      <View>
        <ScrollView style={{height: '95%', marginTop: 20}}>
          {this.state.tasks.map(item => (
            <TaskListItemView
              view={this.props.navigation.navigate}
              task={item}
              refresh={this.update}
              remove={this.remove}
            />
          ))}
        </ScrollView>
        <FAB
          buttonColor="#1178c3"
          iconTextColor="#fff"
          onClickAction={() => {
            this.props.navigation.navigate('Task', {refresh: this.update});
          }}
          visible={true}
          iconTextComponent={
            <Image source={require('../../assets/icons/add.png')} />
          }
        />
      </View>
    );
  }
}

export default TaskList;
