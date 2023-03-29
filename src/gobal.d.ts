declare module "*.module.css"{
    const classes: {[key: string]: string};
    export default classes;
}

declare module "*.gif" {
    const value: any;
    export default value;
  }
  
declare module "*.png";
declare module ".svg";
declare module ".gif";

