import React, {Component} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import Storage from '../services/storage';

const styles = StyleSheet.create({
  property: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  value: {
    fontStyle: 'italic',
    fontSize: 18,
  },
});

export default class TaskDetails extends Component {
  constructor(props) {
    super(props);
    if (props.route.params) {
      this.state = {
        title: props.route.params.title,
        content: props.route.params.content,
      };
    } else {
      this.state = {title: '', content: ''};
    }
  }

  render() {
    return (
      <View style={{margin: 20}}>
        <TextInput
          style={styles.property}
          multiline={false}
          selectable={true}
          onChangeText={title => this.setState({title})}
          value={this.state.title}
          placeholder="Title"
        />
        <TextInput
          style={styles.value}
          multiline={true}
          selectable={true}
          onChangeText={content => this.setState({content})}
          value={this.state.content}
          placeholder="Content"
        />
        <Button
          onPress={() => {
            if (this.state.title === '') {
              return;
            }
            Storage.addTask({
              title: this.state.title,
              content: this.state.content,
            }).then(() => {
              this.props.navigation.goBack();
            });
          }}
          title={'Save'}
        />
      </View>
    );
  }
}
