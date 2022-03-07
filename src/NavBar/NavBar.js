import React, { useState } from "react";
import { Menu, Input } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
function NavBar() {
  const [state, setState] = useState({
    current: "",
  });
  const { SubMenu } = Menu;
  const { Search } = Input;

  const handleClick = (e) => {
    console.log("click ", e);
    setState({ current: e.key });
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[state.current]}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="search">
        <Search
          size="small"
          enterButton="/"
          placeholder="Search or jump..."
          style={{ padding: "10px" }}
        ></Search>
      </Menu.Item>
      <Menu.Item key="pull">Pull requests</Menu.Item>
      <Menu.Item key="issues">Issues</Menu.Item>
      <Menu.Item key="market">Marketplace</Menu.Item>
      <Menu.Item key="explore">Explore</Menu.Item>
      {/* <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Marketplace">
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu> */}
      {/* <Menu.Item key="alipay">
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      </Menu.Item> */}
    </Menu>
  );
}

export default NavBar;
