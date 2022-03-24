import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="global--container">
      {/* Acá va el componente Header */}
      <header className="header">HEADER COMPONENT</header>

      <div className="hero">{children}</div>

      {/* Acá va el componente footer */}
      <footer className="footer">FOOTER COMPONENT</footer>
    </div>
  );
};
export default Layout;
