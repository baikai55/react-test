import Mock from "mockjs";

let tableData = [
  {
    url: "/get/table/data",
    type: "get",
    response: () => {
      let fileList = Mock.mock({
        "list|30": [
          {
            id: /\d{7}/,
            key: "@id",
            name: "@cname",
            mobile: /1[3-9]\d{9}/,
            address: "@county",
            "status|0-1": 0,
          },
        ],
      });
      return {
        code: 200,
        data: fileList,
      };
    },
  },
];
Mock.mock(tableData[0].url, tableData[0].type, tableData[0].response);
let menudata = [
  {
    url: "/get/menu",
    type: "get",
    response: () => {
      let fileList = Mock.mock({
        "user_Menu|3": [
          {
            menu_code: /\d{6}/,
            "menu_name|+1": ["系统管理", "行信应用", "清算服务"],
            "children|+1": [
              [
                {
                  menu_name: "用户管理",
                  menu_type: 2,
                  menu_icon: "",
                  menu_path: "/user",
                },
                {
                  menu_name: "机构管理",
                  menu_type: 2,
                  menu_icon: "",
                  menu_path: "/dept",
                },
                {
                  menu_name: "角色管理",
                  menu_type: 2,
                  menu_icon: "",
                  menu_path: "/role",
                },
                {
                  menu_name: "菜单管理",
                  menu_type: 2,
                  menu_icon: "",
                  menu_path: "/menu",
                },
              ],
              [
                {
                  menu_name: "应用管理",
                  menu_type: 2,
                  menu_icon: "",
                  menu_path: "/bank/app",
                },
                {
                  menu_name: "模块管理",
                  menu_type: 2,
                  menu_icon: "",
                  menu_path: "/bank/module",
                },
                {
                  menu_name: "菜单管理",
                  menu_type: 2,
                  menu_icon: "",
                  menu_path: "/bank/menu",
                },
                {
                  menu_name: "可见管理",
                  menu_type: 2,
                  menu_icon: "",
                  menu_path: "/bank/visible",
                },
                {
                  menu_name: "点击统计",
                  menu_type: 2,
                  menu_icon: "",
                  menu_path: "/bank/clickCount",
                },
                {
                  menu_name: "点击记录",
                  menu_type: 2,
                  menu_icon: "",
                  menu_path: "/bank/clickLog",
                },
              ],
              [
                {
                  menu_name: "权限维护",
                  menu_type: 2,
                  menu_icon: "",
                  menu_path: "/permissionMaintain",
                },
                {
                  menu_name: "时间维护",
                  menu_type: 2,
                  menu_icon: "",
                  menu_path: "/timeMaintain",
                },
                {
                  menu_name: "业务维护",
                  menu_type: 2,
                  menu_icon: "",
                  menu_path: "/operationMaintain",
                },
                {
                  menu_name: "人员维护",
                  menu_type: 2,
                  menu_icon: "",
                  menu_path: "/personnelMaintain",
                },
                {
                  menu_name: "业务查询",
                  menu_type: 2,
                  menu_icon: "",
                  menu_path: "/businessQuery",
                },
              ],
            ],
            "menu_type|+1": [1, 1, 1],
            "status|0-1": 0,
            "menu_icon|+1": [
              "el-icon-setting",
              "el-icon-office-building",
              "el-icon-toilet-paper",
            ],
            "menu_path|+1": ["/sys", "/bank", "/serve"],
          },
        ],
      });
      return {
        code: 200,
        data: fileList,
      };
    },
  },
];

Mock.mock(menudata[0].url, menudata[0].type, menudata[0].response);
