const LinkName = {
  home: "/",
  test: "test",
  404: "404",
};

const LinkListDetail = {
  [LinkName.home]: {
    href: "/",
    title: "首頁",
    className: "/",
    description: "首頁",
  },
  [LinkName.test]: {
    href: "/",
    title: "測試頁面",
    className: "/test",
    description: "測試頁面",
  },
  [LinkName[404]]: {
    href: `/${LinkName[404]}`,
    title: "404",
    description: "404",
    className: `/${LinkName[404]}`,
  },
};

const LinkList = [
  {
    ...LinkListDetail[LinkName.home],
    name: LinkListDetail[LinkName.home].title,
    // fontAwesomeIcon: faHome,
  },
  // {
  //   name: "紀錄",
  //   // fontAwesomeIcon: faSmile, // 父層可以放一個 icon
  //   children: [
  //     {
  //       ...LinkListDetail[LinkName.test],
  //       name: LinkListDetail[LinkName.test].title,
  //     },
  //     {
  //       ...LinkListDetail[LinkName.test],
  //       name: LinkListDetail[LinkName.test].title,
  //     },
  //     {
  //       ...LinkListDetail[LinkName.test],
  //       name: LinkListDetail[LinkName.test].title,
  //     },
  //   ],
  // },
];

export { LinkName, LinkListDetail, LinkList };
