import './Layout.css';
import Footer from '../../Components/Footer/Footer';
import PublicHeader from '../../Components/Header/PublicHeader';

const Layout = ({ children }) => {
  return (
    <div className="container-fluid p-0">
      <PublicHeader />
      <br></br>

      <div className="hero">{children}</div>

      <Footer />
    </div>
  );
};
export default Layout;
