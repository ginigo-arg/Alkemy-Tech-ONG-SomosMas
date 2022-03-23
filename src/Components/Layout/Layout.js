import PublicHeader from '../Header/PublicHeader';

const Layout = ({ children }) => {
  return (
    <div className="container">
      {/* Acá va el componente Header */}
      <PublicHeader/>

      <div className="hero">{children}</div>

      {/* Acá va el componente footer */}
      <footer>FOOTER COMPONENT</footer>
    </div>
  );
};
export default Layout;
