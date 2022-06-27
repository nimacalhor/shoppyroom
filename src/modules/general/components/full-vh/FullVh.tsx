import stl from "./FullVh.module.scss";

const FullVh = ({ children }: { children: any }) => {
  return <div className={stl.root}>{children}</div>;
};

export default FullVh;
