import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <main id="main" role="main">
      123
      {children}
    </main>
  );
};

export default Layout;
