import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { getComments } from '../../../Services/commentService';
import SkeletonComment from './SkeletonComment';
import './NewDetail.css';

const Comments = () => {
  const [comments, setComments] = useState(false);

  useEffect(async () => {
    const data = await getComments();
    console.log('data', data);

    setComments(data);
  }, []);

  return (
    <div className='mt-5'>
      <h3 className='news-comments-title'>Comentarios</h3>
      {!comments
        ? <SkeletonComment />
        : comments.length > 0
          ? (
            comments.map(comment => (
              <Container
                key={comment.id}
                className="d-flex flex-row align-items-center border-top py-3"
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
          : <p className="my-5">No hay comentarios aún</p>
      }
    </div>
  );
};

export default Comments;
