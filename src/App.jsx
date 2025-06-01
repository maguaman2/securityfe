import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { getListUsers } from './UserService';


const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    render: text => <a>{text}</a>,
  },
  {
    title: 'username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'passwordHash',
    dataIndex: 'passwordHash',
    key: 'passwordHash',
    render: text => (
      <a title={text}>
        {text.slice(0, 3)}...{text.slice(-4)}
      </a>
    ),
  },
  {
    title: 'isActive',
    dataIndex: 'isActive',
    key: 'isActive',
    render: isActive => (
      <Tag color={isActive ? 'green' : 'volcano'}>
        {isActive ? 'Active' : 'Inactive'}
      </Tag>
    ),
  },
  {
    title: 'createdAt',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: text => new Date(text).toLocaleString('es-EC', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }),
  },

];

const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    getListUsers().then(users => {
      setData(users);
    });
  }
    , []);
  return (
    <>
      <div style={{ padding: 24 }}>
        <h1>Users List</h1>
      </div>
      <Table columns={columns} dataSource={data} />;
    </>
  );


}
export default App;