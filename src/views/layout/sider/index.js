import { Layout, Menu } from "antd";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import get_menu from "../../../api/siderMenu";
const { Sider } = Layout;

const SiderBar = () => {
  const navigate = useNavigate();

  const location = useLocation();
  let [menu, setMenu] = useState(null);
  useEffect(() => {
    get_menu()
      .then((res) => {
        setMenu(res.data.user_Menu);
      })
      .catch((err) => {});
  }, []);
  if (!menu) return null;

  let items1 = menu.map((item, index) => {
    return {
      key: `${item.menu_path}`,
      icon: "",
      label: `${item.menu_name}`,
      children: item.children.map((i, j) => {
        return {
          key: i.menu_path,
          label: i.menu_name,
        };
      }),
    };
  });
  items1.unshift({
    key: `/`,
    icon: "",
    label: `首页`,
  });
  const { pathname } = location;
  const onClick = (e) => {
    console.log(e);
    navigate(e.key);
  };
  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        onClick={onClick}
        mode="inline"
        defaultSelectedKeys={pathname}
        defaultOpenKeys={["/sys"]}
        items={items1}
      />
    </Sider>
  );
};
export default SiderBar;
