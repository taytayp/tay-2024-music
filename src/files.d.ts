// Specify the file extension you want to import
declare module "*.yml" {
    const value: any; // Add type definitions here if desired
    export default value;
  }

declare module "*.tsv" {
    const value: any; // Add type definitions here if desired
    export default value;
}