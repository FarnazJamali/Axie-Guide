export interface IMenuData {
  title: string;
  link: string;
  subMenu?: {
    title: string;
    link: string;
  }[];
}