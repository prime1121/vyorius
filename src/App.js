import React from "react";
import { Layout, Avatar, Button, Typography, Breadcrumb, Switch } from "antd";
import "./App.css";
import {
  UserOutlined,
  SettingOutlined,
  BellOutlined,
  SearchOutlined,
  UngroupOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { Header, Footer, Sider, Content } = Layout;

function App() {
  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }
  return (
    <div className="App">
      <Layout>
        <Sider style={{ background: "white", paddingTop: 5, paddingLeft: 10 }}>
          <Avatar
            style={{ float: "left", margin: "5px" }}
            size="small"
            src="Untitled.jpg"
          />
          <Title level={4}>VYORIUS</Title>
          <Avatar
            style={{ float: "bottom", margin: "20px" }}
            size={100}
            src="01.png"
          />
          <Text style={{ float: "bottom", margin: "50px" }}>Dirgh</Text>
        </Sider>

        <Layout>
          <Header style={{ background: "white", height: "auto" }}>
            <Title style={{ paddingTop: 5 }} level={4}>
              MAINTENANCE SUMMARY
              <Avatar
                style={{
                  float: "right",
                  marginLeft: "5px",
                  marginRight: "20px",
                }}
                size="small"
                icon={<SettingOutlined />}
              />
              <Avatar
                style={{
                  float: "right",
                  marginLeft: "5px",
                }}
                size="small"
                icon={<BellOutlined />}
              />
              <Avatar
                style={{ float: "right", marginLeft: "5px" }}
                size="small"
                icon={<UserOutlined />}
              />
              <Button
                style={{
                  float: "right",
                  marginLeft: "5px",
                }}
                icon={<SearchOutlined />}
              >
                Search
              </Button>
            </Title>
          </Header>
          <Content style={{ padding: "0 5px" }}>
            <Breadcrumb style={{ margin: "5px 0" }}>
              <Content style={{ background: "white" }}>
                <Avatar
                  style={{ color: "red" }}
                  size="small"
                  icon={<UngroupOutlined />}
                />
                <Text style={{ margin: "5px" }}>AirCraft Down</Text>
                <Switch defaultChecked onChange={onChange} />
                <Avatar
                  style={{ color: "Yellow", margin: "5px" }}
                  size="small"
                  icon={<UngroupOutlined />}
                />
                <Text style={{ margin: "5px" }}>Inception Due</Text>
                <Switch defaultChecked onChange={onChange} />
                <Avatar
                  style={{ color: "green", margin: "5px" }}
                  size="small"
                  icon={<UngroupOutlined />}
                />
                <Text style={{ margin: "5px" }}>AirCraft Up</Text>
                <Switch defaultChecked onChange={onChange} />
              </Content>
              <Footer style={{ background: "grey" }}>
                <Title style={{ height: "auto" }} level={4}>
                  EcoSystem
                  <Button
                    style={{
                      float: "right",
                      marginRight: "20px",
                      color: "grey",
                    }}
                    icon={<SearchOutlined />}
                  >
                    Find-EcoSystem
                  </Button>
                </Title>
              </Footer>
            </Breadcrumb>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
