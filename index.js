import React from 'react';
import ReactDOM from 'react-dom';

import { Tooltip, Button } from 'antd';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class MyComponent extends React.Component {

  handleCilck = (e) => {
      console.log('click');
      console.log(e.target);
      e.stopPropagation();
  }

  render() {
    return (
      <div style={{
        width: 400,
        height: 400,
        backgroundColor: '#ccc'
      }}
      className={`custom-container`}
      onClick={this.handleCilck}
      >

        <Collapse defaultActiveKey={['1']} onChange={callback}>
          <Panel header="This is panel header 1" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
    );
  }
}



ReactDOM.render(
  <MyComponent />
, document.getElementById('root'));
// ReactDOM.render(<MyTable/>, document.getElementById('root'));