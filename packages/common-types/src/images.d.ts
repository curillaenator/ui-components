type SvgrComponent = React.StatelessComponent<React.SVGAttributes<SVGElement>>;

declare module '*.svg' {
  const value: SvgrComponent;
  export default value;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
