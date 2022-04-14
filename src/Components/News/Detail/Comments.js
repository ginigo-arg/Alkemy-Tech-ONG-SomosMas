import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { getComments } from '../../../Services/commentService';
import SkeletonComment from './SkeletonComment';

const Comments = () => {
  const [comments, setComments] = useState(false);

  useEffect(async () => {
    const data = await getComments();
    setComments(data);
  }, []);

  return (
    <div style={{ marginTop: '200px' }}>
      <h3>Comentarios</h3>
      {!comments
        ? <SkeletonComment />
        : (
          comments.map(comment => (
            <Container
              key={comment.id}
              className="d-flex align-items-center border-bottom my-5"
            >
              <div
                className="d-flex align-items-center border"
                style={{ width: '50px', height: '50px', overflow: 'hidden', borderRadius: '50%' }}>
                <img
                  src={comment.image}
                  className="w-100"
                />
              </div>
              <p className="m-3">{`"${comment.text}"`}</p>
            </Container>
          ))
        )
      }
    </div>
  );
};

export default Comments;
