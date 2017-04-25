import React from 'react';
import ReactDOM from 'react-dom';

import { Menu, Dropdown, Button, Icon, message } from 'antd';

function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value.trim()
    });
  }

  render() {
    return (
      <div>
        <input type='text' onChange={this.handleChange} value={this.state.value}/>
      </div>
    );
  }
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3d menu item</Menu.Item>
  </Menu>
);

ReactDOM.render(
  <div>
    <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
      Dropdown
    </Dropdown.Button>
    <Dropdown.Button
      onClick={handleButtonClick} overlay={menu}
      disabled
      style={{ marginLeft: 8 }}
    >
      Dropdown
    </Dropdown.Button>
    <Dropdown overlay={menu}>
      <Button style={{ marginLeft: 8 }}>
        Button <Icon type="down" />
      </Button>
    </Dropdown>
    <MyComponent />
  </div>
, document.getElementById('root'));

// ReactDOM.render(<MyTable/>, document.getElementById('root'));