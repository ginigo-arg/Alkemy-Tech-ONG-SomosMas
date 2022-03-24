<<<<<<< HEAD
import Footer from '../Footer/Footer';
=======
import PublicHeader from '../Header/PublicHeader';
>>>>>>> a07953826827c7306ad4817ae01db6262a14ef82

const Layout = ({ children }) => {
  return (
    <div className="container-fluid p-0">
      {/* Acá va el componente Header */}
      <PublicHeader/><br></br>

      <div className="hero">{children}</div>

      <Footer />
    </div>
  );
};
export default Layout;
