import React, { Component } from 'react';
import { Link } from 'react-router';
import { List, Row, Col } from 'antd';

const URLMAP = {
  ANTD : [
    {url: '/antd/tree', title: '树形组件'}
  ],
  MOBX : [
    {url: '/mobx/demo1', title: 'MobXDemo1'}
  ],
  OTHER : [
    {url: '/css/demo1', title: 'css伪类常见应用'}
  ]
}

export default class Home extends Component {
  render() {
    return (
      <Row>
      {
        Object.keys(URLMAP).map(key => (
          <Col span={8} key={key}>
            <List
              size="small"
              dataSource={URLMAP[key]}
              renderItem={(item, index) => (<List.Item><Link to={item.url}>{`${index + 1}、${item.title}`}</Link></List.Item>)}
            />
          </Col>
        ))
      }
      </Row>
    );
  }
}
