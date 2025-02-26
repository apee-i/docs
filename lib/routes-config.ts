// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Installation", href: "/installation", },
      { title: "Quick Start Guide", href: "/quick-start-guide" },
      // { title: "Project Structure", href: "/project-structure", },
      // { title: "Components", href: "/components", items: [
      //     { title: "Stepper", href: "/stepper" },
      //     { title: "Tabs", href: "/tabs" },
      //     { title: "Note", href: "/note" },
      //     { title: "Code Block", href: "/code-block" },
      //     { title: "Image & Link", href: "/image-link" },
      //     { title: "Custom", href: "/custom" },
      //   ],
      // },
      // { title: "Themes", href: "/themes" },
      // { title: "Customize", href: "/customize", },
    ],
  },
  {
	title: "Configurations",
	href: "/configurations",
	noLink: true,
	items: [
	  { title: "Structure", href: "/structure" },
	  { title: "Request Parameters", href: "/request-parameters" },
	  { title: "Active Pipeline", href: "/active-pipeline" },
	  { title: "Custom Pipelines", href: "/custom-pipelines" },
	]
  },
  {
	title: "Examples",
	href: "/examples",
	noLink: true,
	items: [
	  { title: "REST", href: "/rest", items: [
		  { title: "GET", href: "/get" },
		  { title: "POST", href: "/post" },
		  { title: "PUT", href: "/put" },
		  { title: "DELETE", href: "/delete" },
		  { title: "PATCH", href: "/patch" },
	  ] },
	]
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
