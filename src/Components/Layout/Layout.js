const Layout = ({ children }) => {
  return (
    <div className="container">
      {/* Acá va el componente Header */}
      <header>HEADER COMPONENT</header>

      <div className="hero">{children}</div>

      {/* Acá va el componente footer */}
      <footer>FOOTER COMPONENT</footer>
    </div>
  );
};
export default Layout;
