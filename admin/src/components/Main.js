import React from "react";
import { Layout, Menu } from "antd";
import Link from "antd/es/typography/Link";
import LogoutButton from "./LogoutButton";

const { Header, Content } = Layout;

const items = [
  {
    key: "tyres",
    label: <Link href="/">Шины</Link>,
  },
  {
    key: "disks",
    label: <Link href="/disks">Диски</Link>,
  },
  {
    key: "accumulators",
    label: <Link href="/accumulators">Аккумуляторы</Link>,
  },
];

export const Main = ({ children }) => {
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
        <LogoutButton />
      </Header>
      <Content
        style={{
          padding: "48px 48px",
        }}
      >
        {children}
      </Content>
    </Layout>
  );
};
