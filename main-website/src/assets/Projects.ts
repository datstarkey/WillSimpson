import { IProject } from "./../interfaces/IProject";

//we'll hack it and just put 3 in for now
export const projects: IProject[] = [
  {
    title: "Rubicon Watch Company",
    description:
      "A family business located in the north of England tht have been established for over thirty years in the watch & jewellery retailing industry",
    imageLocation: require("../assets/images/Rubicon.png"),
    url: "https://www.willsimpson.com/Rubicon",
  },

  {
    title: "Photos 101",
    description: "guess you could of done a website for a photography company? god knows",
    imageLocation: require("../assets/images/planting.jpg"),
    url: "https://www.willsimpson.com/Rubicon",
  },

  {
    title: "Really Important Work",
    description: "Just gonna blag some text to fill this out some more",
    imageLocation: require("../assets/images/work.jpg"),
    url: "https://www.willsimpson.com/Rubicon",
  },
];
