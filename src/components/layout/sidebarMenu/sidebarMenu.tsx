import { FaUserFriends, FaHome } from "react-icons/fa";
import { PiClipboardText } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";

const SidebarMenu = () => {
  return (
    <Menu
      mode="inline"
      items={[
        {
          key: "home",
          label: (
            <NavLink to="/dashboard">
              {/* Dashboard */}
              Home
            </NavLink>
          ),
          title: "Home",
          icon: <FaHome />,
        },
        {
          key: "leasingRequests",
          label: (
            <NavLink to="/leasing">
              {/* Dashboard */}
              Leasing Request
            </NavLink>
          ),
          title: "Leasing Request",
          icon: <PiClipboardText />,
        },
        {
          key: "userManagement",
          label: (
            <NavLink to="/users">
              {/* Dashboard */}
              User Management
            </NavLink>
          ),
          title: "Leasing Request",
          icon: <FaUserFriends />,
        },
        {
          key: "products",
          label: "Products",
          title: "Products",
          icon: <FaUserFriends />,

          children: [
            {
              key: "addProduct",
              label: (
                <NavLink to="/products/new">
                  {/* Dashboard */}
                  Add New Products
                </NavLink>
              ),
              title: "Add Product",
            },
            {
              key: "listProducts",
              label: (
                <NavLink to="/products">
                  {/* Dashboard */}
                  Products
                </NavLink>
              ),
              title: "View All Products",
            },
          ],
        },
      ]}
    />
  );
};

export default SidebarMenu;
