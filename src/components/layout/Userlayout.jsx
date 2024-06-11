import React from "react";
import {
  Layout,
  theme,
  ConfigProvider,
  Button,
  Image,
  Divider,
  Dropdown,
  Menu,
} from "antd";
const { Header, Content, Footer } = Layout;

import logo from "../../assets/img/new-logo.png";
import {
  HomeFilled,
  MailFilled,
  PhoneFilled,
  CaretRightFilled,
  FacebookFilled,
  TwitterCircleFilled,
  InstagramFilled,
  PinterestFilled,
  YoutubeFilled,
  DownOutlined,
} from "@ant-design/icons";

import { Outlet, useNavigate } from "react-router-dom";

const Userlayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();
  // const { appState } = useAppContext();
  const handleNavigate = (item) => {
    navigate(item.link);
  };

  const servicesMenu = (
    <Menu>
      <Menu.Item key="1">
        <a href="/service1">New Company Registration</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="/service2">Company Update</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a href="/service3">Share Transfer</a>
      </Menu.Item>
      <Menu.Item key="4">
        <a href="/service4">Company Close</a>
      </Menu.Item>
    </Menu>
  );

  const navItems = [
    {
      name: "Home",
      link: "/",
      key: 1,
    },
    {
      name: "AboutUs",
      link: "/aboutus",
      key: 2,
    },

    {
      name: "Services",
      link: "/services",
      key: 3,
      dropdown: true,
    },

    {
      name: "Blog",
      link: "/blog",
      key: 4,
    },

    {
      name: "ContactUs",
      link: "/contact",
      key: 5,
    },
  ];

  const authInfo = [
    {
      name: "Login",
      link: "../auth/Login",
      key: 11,
    },
    {
      name: "Signup",
      link: "../auth/Signup",
      key: 12,
    },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerColor: "#FFFFFF",
            headerHeight: 60,
            fontSize: 12,

            footerHeight: 40,
          },

          Button: {
            defaultHoverBg: "#251B9E",
            defaultHoverBorderColor: "none",
            defaultBorderColor: "transparent",
            defaultBg: "#1C1678",
            defaultColor: "#FFFFFF",
            defaultHoverColor: "#ffffff",
          },
        },
      }}
    >
      <Layout>
        <div className=" bg-white">
          <div>
            {/* Contact info and social media icons */}
            {/* <div className="flex justify-between  py-2 px-4 ">
              <div>
                Contact Info: +977- 9851253180 | companydarta7@gmail.com
              </div>
              <div className="flex items-center">
                <div className="text-xl mr-2">
                  <FacebookOutlined />
                </div>
                <div className="text-xl mr-2">
                  <LinkedinOutlined />
                </div>
                <div className="text-xl">
                  <GoogleOutlined />
                </div>
              </div>
            </div> */}
          </div>

          <Header
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "transparent",
              position: "sticky",
              top: 0,
              zIndex: 1,
              width: "100%",
              boxShadow: "0 3px 4px rgba(0,0,0,0.1)",
            }}
          >
            <div className="logo flex items-center justify-center">
              <Image
                className="object-contain"
                width={100}
                src={logo}
                alt="Logo"
                preview={false}
              />
            </div>

            {/* NavBar  */}

            <div className="iteminfo font-medium flex flex-row gap-3 lg:gap-6 lg:text-[0.9rem] text-[#171717] ">
              {navItems.map((item) => {
                if (item.dropdown) {
                  return (
                    <Dropdown overlay={servicesMenu} key={item.key}>
                      <div className=" hover:cursor-pointer  hover:font-bold flex items-center hover:text-[#1C1678]">
                        {item.name} <DownOutlined className="ml-1" />
                      </div>
                    </Dropdown>
                  );
                }

                return (
                  <div
                    onClick={() => handleNavigate(item)}
                    className="hover:text-[#1C1678]  hover:cursor-pointer hover:font-bold"
                    key={item.key}
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>

            {/* button  for Login signup */}
            <div className=" iteminfo login flex gap-2 ">
              {authInfo?.map((item) => (
                <div key={item.link} onClick={() => navigate(item.link)}>
                  <Button
                    hoverable
                    className=" border-none text-xs  font-bold   "
                  >
                    {item.name}
                  </Button>
                </div>
              ))}
            </div>
          </Header>
          <Content
            style={{
              padding: "0 20px",
            }}
          >
            <div
              style={{
                minHeight: 600,
                padding: 10,
              }}
            >
              <Outlet></Outlet>
            </div>
          </Content>

          <Footer className="bg-[#FDE36E] pt-4">
            <div className="mx-4 lg:mx-auto lg:flex lg:justify-center lg:gap-8 lg:p-6">
              <div className="w-full lg:w-[25%]">
                <h6 className="font-extrabold text-lg lg:text-xl ">
                  CompanyDarta
                </h6>
                <p className="text-left text-sm lg:text-base hover:text-[#1C1678] hover:font-bold  cursor-pointer">
                  Transforming business visions into reality with our
                  comprehensive setup and operational solutions.
                </p>

                <div className="flex gap-4 mt-4">
                  <FacebookFilled className="text-2xl text-blue-900 hover:text-blue-800 cursor-pointer transition-transform transform hover:scale-110" />
                  <TwitterCircleFilled className="text-2xl text-blue-600 hover:text-[#87CEEB] cursor-pointer transition-transform transform hover:scale-110" />
                  <InstagramFilled className="text-2xl text-[#E1306C] hover:text-[#ff0000] cursor-pointer transition-transform transform hover:scale-110" />
                  <PinterestFilled className="text-2xl text-[#f91515] hover:text-[#ff0000] cursor-pointer transition-transform transform hover:scale-110" />
                  <YoutubeFilled className="text-2xl text-[#f91515] hover:text-[#ff0000] cursor-pointer transition-transform transform hover:scale-110" />
                </div>
              </div>
              <div className="w-full lg:w-[25%] mt-4 lg:mt-0">
                <h6 className="text-uppercase font-extrabold text-lg lg:text-xl">
                  Services
                </h6>
                <p className="pb-2 text-sm lg:text-base">
                  <CaretRightFilled />{" "}
                  <a
                    href="#"
                    className="Footer-service hover:text-[#1C1678] hover:font-bold  lg:m-1"
                  >
                    Company Registration
                  </a>
                </p>
                <p className="pb-2 text-sm lg:text-base">
                  <CaretRightFilled />{" "}
                  <a
                    href="#"
                    className="Footer-service hover:text-[#1C1678] hover:font-bold  lg:m-1"
                  >
                    Share Transfers
                  </a>
                </p>
                <p className="pb-2 text-sm lg:text-base">
                  <CaretRightFilled />{" "}
                  <a
                    href="#"
                    className="Footer-service hover:text-[#1C1678] hover:font-bold  lg:m-1"
                  >
                    Company Closure
                  </a>
                </p>
              </div>
              <div className="w-full lg:w-[25%] mt-4 lg:mt-0">
                <h6 className="text-uppercase font-extrabold text-lg lg:text-xl">
                  Navigation
                </h6>
                <p className="pb-1 text-sm lg:text-base">
                  <CaretRightFilled />{" "}
                  <a
                    href="#"
                    className="Footer-nav hover:text-[#1C1678]  hover:font-bold m-1"
                  >
                    About Us
                  </a>
                </p>
                <p className="pb-1 text-sm lg:text-base">
                  <CaretRightFilled />{" "}
                  <a
                    href="#"
                    className="Footer-nav hover:text-[#1C1678] hover:font-bold  m-1"
                  >
                    Services
                  </a>
                </p>
                <p className="pb-1 text-sm lg:text-base">
                  <CaretRightFilled />{" "}
                  <a
                    href="#"
                    className="Footer-nav hover:text-[#1C1678] hover:font-bold  m-1"
                  >
                    Location
                  </a>
                </p>
                <p className="pb-1 text-sm lg:text-base">
                  <CaretRightFilled />{" "}
                  <a
                    href="#"
                    className="Footer-nav hover:text-[#1C1678] hover:font-bold  m-1"
                  >
                    FAQ
                  </a>
                </p>
              </div>
              <div className="w-full lg:w-[25%] mt-4 lg:mt-0">
                <h6 className="text-uppercase font-extrabold text-lg lg:text-xl">
                  Contact
                </h6>
                <p className="pb-2 text-sm lg:text-base hover:text-[#1C1678] hover:font-bold cursor-pointer">
                  <HomeFilled />{" "}
                  <span className="ml-1 hover:text-[#1C1678] hover:font-bold cursor-pointer text-bold">
                    New Baneshwor, Kathmandu, Nepal
                  </span>
                </p>
                <p className="pb-2 text-sm lg:text-base hover:text-[#1C1678] hover:font-bold cursor-pointer">
                  <MailFilled />{" "}
                  <span className="ml-1">info@companydarta.com</span>
                </p>
                <p className="pb-2 text-sm lg:text-base hover:text-[#1C1678] hover:font-bold">
                  <PhoneFilled /> <span className="ml-1">+977 123 456 789</span>
                </p>
              </div>
            </div>

            <Divider className="bg-black" />

            <section className="p-3 pt-0">
              <div className="text-center">
                <p className="p-3 font-bold italic">
                  &copy; {new Date().getFullYear()} CompanyDarta. All rights
                  reserved.
                </p>
              </div>
            </section>
          </Footer>
        </div>
      </Layout>
    </ConfigProvider>
  );
};
export default Userlayout;
