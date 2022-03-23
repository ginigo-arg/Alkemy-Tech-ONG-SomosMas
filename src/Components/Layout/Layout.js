import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="container-fluid p-0">
      {/* Acá va el componente Header */}
      <header>HEADER COMPONENT</header>

      <div className="hero">{children}</div>

      <Footer />
    </div>
  );
};
export default Layout;
