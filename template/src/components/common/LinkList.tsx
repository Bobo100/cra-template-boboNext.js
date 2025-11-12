const LinkName = {
  home: "/",
  404: "404",
};

const LinkListDetail = {
  [LinkName.home]: {
    href: "/",
    name: "首頁",
    className: "/",
    description: "首頁",
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
];

export { LinkName, LinkListDetail, LinkList };
