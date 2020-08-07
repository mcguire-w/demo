import React from 'react';
import { Menu, Layout  } from 'antd';
import logSrc from '../assets/logo.png'
import styles from './UserLayout.less';

const { Header, Content, Sider } = Layout

const UserLayout = (props: any) => {
  const { children } = props;
  return (
    <Layout className={styles.layout}>
      <div className={styles.shadow}>
      <Header className={styles.container}>
        <Layout>
          <Sider className={styles.containerTopLeft}>
            <img src={logSrc} alt="世纪众云" />
            {/* <span>世纪众云</span> */}
          </Sider>
          <Content className={styles.containerTopRight}>
            <Menu mode="horizontal">
              <Menu.Item key="home">
                首页
              </Menu.Item>
              <Menu.Item key="us">
              联系我们
              </Menu.Item>
              <Menu.Item key="Personal ">
              个人中心
              </Menu.Item>
              <Menu.Item key="login">
              登录
              </Menu.Item>
              <Menu.Item key="register">
              注册
              </Menu.Item>
              <Menu.Item key="mail">
                <span>CN</span>
                <span>/ EN</span>
              </Menu.Item>
            </Menu>
          </Content>
        </Layout>
      </Header>
      </div>
      <Content>{children}</Content>
    </Layout>
  )
}

export default UserLayout