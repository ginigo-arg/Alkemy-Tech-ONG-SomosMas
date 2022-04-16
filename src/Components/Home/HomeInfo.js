import { Container } from 'react-bootstrap';

const HomePrincipalContent = ({ data }) => {
  return (
    <div>
      <div className="p-0 text-center bg-img mb-5" style={{
        backgroundImage: 'url(\'https://images.unsplash.com/photo-1524069290683-0457abfe42c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80\')',
        height: '60vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} >
        <div className="mask w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="fw-bold text-center fs-1">{data.name}</h1>
              <p>
                <i>
                  <span dangerouslySetInnerHTML={{ __html: `${data.short_description}` }} />
                </i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Container className="mb-5">
        <h3 className="fw-bold text-uppercase text-center fs-3">Nuestra Historia</h3>
        <p>
          <span dangerouslySetInnerHTML={{ __html: `${data.long_description}` }} />
        </p>
      </Container>
    </div>
  );
};
export default HomePrincipalContent;
