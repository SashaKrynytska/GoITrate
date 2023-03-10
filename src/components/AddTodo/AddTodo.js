import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

class AddTodo extends React.Component {
  state = {
    currentTodoValue: ' ',
  };

  onAddTodoSubmitted = () => {
    this.props.onAddTodo(this.state.currentTodoValue);
    this.setState({ currentTodoValue: '' });
    console.log(this.state.currentTodoValue);
  };

  render() {
    return (
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, fontSize: 30 }}
          placeholder="Enter todo text"
          inputProps={{ 'aria-label': 'Enter todo text' }}
          onChange={e => this.setState({ currentTodoValue: e.target.value })}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        <Button
          variant="contained"
          //   endIcon={<SendIcon />}
          onClick={this.onAddTodoSubmitted}
        >
          Add todo
        </Button>
      </Paper>
    );
  }
}

export default AddTodo;
