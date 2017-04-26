import React from 'react';
import ReactDOM from 'react-dom';

import { Tooltip, Button } from 'antd';

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <Button>哈哈哈</Button>
        <Button>哈哈哈</Button>
        <Button>哈哈哈</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Tooltip placement="topLeft" title={<MyComponent/>}>
      <Button>Align edge / 边缘对齐</Button>
    </Tooltip>
    <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
      <Button>Arrow points to center / 箭头指向中心</Button>
    </Tooltip>
  </div>
, document.getElementById('root'));

// ReactDOM.render(<MyTable/>, document.getElementById('root'));