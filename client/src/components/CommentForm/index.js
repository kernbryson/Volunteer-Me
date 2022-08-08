import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_COMMENT } from '../../utils/mutations';

import Auth from '../../utils/auth';

const CommentForm = ({ postId }) => {
  const [commentText, setCommentText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: {
          postId,
          commentText,
          commentAuthor: Auth.getProfile().data.username,
        },
      });

      setCommentText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'commentText' && value.length <= 700) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  
  };

  return (
    <div>
      <h4>What are your thoughts on this activity?</h4>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 700 || error ? 'text-danger' : ''
            }`}
          >
            {error && <span className="ml-2">{error.message}</span>}
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12">
              <textarea
                name="commentText"
                placeholder="Add your comment..."
                value={commentText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Comment
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your posts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default CommentForm;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';

// import { ADD_COMMENT } from '../../utils/mutations';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import TextareaAutosize from '@mui/base/TextareaAutosize';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Auth from '../../utils/auth';

// const CommentForm = ({ postId }) => {
//   const [commentText, setCommentText] = useState('');
//   const [characterCount, setCharacterCount] = useState(0);

//   const [addComment, { error }] = useMutation(ADD_COMMENT);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { data } = await addComment({
//         variables: {
//           postId,
//           commentText,
//           commentAuthor: Auth.getProfile().data.username,
//         },
//       });

//       setCommentText('');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     if (name === 'commentText' && value.length <= 280) {
//       setCommentText(value);
//       setCharacterCount(value.length);
//     }
  
//   };

//   return (
//     // <div>
//     <Box component="span" >
//       <Card sx={{ minWidth: 275 }}>
//         <CardContent>
//           <h4>What are your thoughts on this activity?</h4>
//             {Auth.loggedIn() ? (
//         <>
//           <p
//             className={`m-0 ${
//               characterCount === 280 || error ? 'text-danger' : ''
//             }`}
//           >
//             Character Count: {characterCount}/280
//             {error && <span className="ml-2">{error.message}</span>}
//           </p>
//           <form
//             className="flex-row justify-center justify-space-between-md align-center"
//             onSubmit={handleFormSubmit}
//           >
//             {/* <div className="col-12 col-lg-9"> */}
//             <Box component="span" sx={{ width : "100%", backgroundColor:"lightblue"}}>
//             <TextareaAutosize
//   aria-label="minimum height"
// minRows={5}
//   name="commentText"
//                 placeholder="Add your comment..."
//                 value={commentText}
//                 className="form-input w-100"
//                 style={{ width: 300 }}
// />
//               {/* <textarea
//                 name="commentText"
//                 placeholder="Add your comment..."
//                 value={commentText}
//                 className="form-input w-100"
//                 style={{ lineHeight: '1.5', resize: 'vertical' }}
//                 onChange={handleChange}
//               ></textarea> */}
//             {/* </div> */}
//             </Box>

//             <CardActions>
//               <Button size="small">Add Comment</Button>
//             </CardActions>
           
//             {/* <div className="col-12 col-lg-3">
//               <button className="btn btn-primary btn-block py-3" type="submit">
//                 Add Comment
//               </button>
//             </div> */}
//           </form>
//         </>
//       ) : (
//         // <p>
//         <CardActions>
//           You need to be logged in to share your posts. Please{' '}
//           <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>

//         </CardActions>
//           // You need to be logged in to share your posts. Please{' '}
//           // <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
//         // </p>
//       )}
//        </CardContent>

//     </Card>
// </Box>
//       // <h4>What are your thoughts on this activity?</h4>

//     // </div>
//   );
// };

// export default CommentForm;
