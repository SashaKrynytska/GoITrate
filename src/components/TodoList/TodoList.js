import React, { Component } from 'react';
import { Card, Checkbox, FormControlLabel } from '@mui/material';
import { Box } from '@mui/system';
import { nanoid } from 'nanoid';

class TodoList extends Component {
  render() {
    return (
      <>
        {/* // створити компонент TodoItem */}
        {this.props.todos.map(todo => (
          <Box key={nanoid()} width="100%" marginTop="5px" marginBottom="5px">
            <Card variant="outlined" style={{ paddingLeft: '20px' }}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={todo.text}
              ></FormControlLabel>
            </Card>
          </Box>
        ))}
      </>
    );
  }
}

export default TodoList;
