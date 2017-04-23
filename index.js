import React from 'react';
import ReactDOM from 'react-dom';

import { Table } from 'antd';

const columns = [{
  title: 'No',
  dataIndex: 'no'
},{
  title: 'Name',
  dataIndex: 'name',
  filters: [{
    text: 'Joe',
    value: 'Joe',
  }, {
    text: 'Jim',
    value: 'Jim',
  }, {
    text: 'Submenu',
    value: 'Submenu',
    children: [{
      text: 'Green',
      value: 'Green',
    }, {
      text: 'Black',
      value: 'Black',
    }],
  }],
  // specify the condition of filtering result
  // here is that finding the name started with `value`
  onFilter: (value, record) => record.name.indexOf(value) === 0,
  sorter: (a, b) => a.name.length - b.name.length,
}, {
  title: 'Age',
  dataIndex: 'age',
  sorter: (a, b) => a.age-b.age,
}, {
  title: 'Address',
  dataIndex: 'address',
  filters: [{
    text: 'London',
    value: 'London',
  }, {
    text: 'New York',
    value: 'New York',
  }],
  filterMultiple: false,
  onFilter: (value, record) => record.address.indexOf(value) === 0,
  sorter: (a, b) => a.address.length - b.address.length,
}];

const data = [{
  key: '1',
  no: 1,
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  no: 2,
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  no: 3,
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  no: 4,
  name: 'Jim Red',
  age: 32,
  address: 'London No. 2 Lake Park',
}];

// function onChange(pagination, filters, sorter) {
//   console.log('params', pagination, filters, sorter);
// }

class MyTable extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      data:data,
      columns:columns
    }
  }

  onChange = (pagination, filters, sorter) => {
    console.log(pagination, filters, sorter);
    // let data = [...this.state.data];
    // data.sort((a, b) => {
    //   return sorter.order == 'ascend' ? a[sorter.columnKey] - b[sorter.columnKey] : b[sorter.columnKey] - a[sorter.columnKey];
    // })
    // data.forEach((value, index) => {
    //   value.no = index + 1;
    // })
    // this.setState({
    //   data
    // })
    // this.forceUpdate();
  }

  render() {
    console.log('update.....');
    return (
      <Table columns={this.state.columns} dataSource={this.state.data} onChange={this.onChange} />
    );
  }
}

ReactDOM.render(<MyTable/>, document.getElementById('root'));