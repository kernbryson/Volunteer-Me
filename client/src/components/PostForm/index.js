import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_POST } from "../../utils/mutations";
import { QUERY_POSTS, QUERY_ME } from "../../utils/queries";

import Auth from "../../utils/auth";
const styles = {
  cardStyles: {
    width: "12vw",
    margin: "10px",
  },
};

const PostForm = () => {
  const [postForm, setPostForm] = useState({
    postText: "",
    location: "",
    contact: "",
    time: "",
    volunteerDate: "",
    title:"",
  });

  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        const { posts } = cache.readQuery({ query: QUERY_POSTS });

        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addPost, ...posts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, posts: [...me.posts, addPost] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPost({
        variables: {
          postText: postForm.postText,
          location: postForm.location,
          contact: postForm.contact,
          time: postForm.time,
          volunteerDate: postForm.volunteerDate,
          title: postForm.title
        },
      });
      setPostForm({
        postText: "",
        location: "",
        contact: "",
        time: "",
        volunteerDat: "",
        title: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const element = event.target;
    const temp = {};
    temp[element.name] = element.value;
    setPostForm({ ...postForm, ...temp });
  };

  return (
    <div>
      <h3>Explain what kind of volunteer work you will be doing</h3>

      {Auth.loggedIn() ? (
        <>
         
          <form
            className="flex-row  justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
            <input
                  className="form-input w-15"
                  type="search"
                  style={styles.cardStyles}
                  placeholder="title"
                  aria-label="Search"
                  onChange={handleChange}
                  name="title"
                  value={postForm.title}
                ></input>
              <textarea
                name="postText"
                placeholder="Give a little information about the volunteer work"
                value={postForm.postText}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
              <div className="row">
                <select
                  style={styles.cardStyles}
                  className="form-select w-10"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option defaultValue>Category</option>
                  <option value="1">Homeless</option>
                  <option value="2">Environmental</option>
                  <option value="3">Animal Shelter</option>
                </select>

                <input
                  className="form-input w-15"
                  type="search"
                  style={styles.cardStyles}
                  placeholder="location"
                  aria-label="Search"
                  onChange={handleChange}
                  name="location"
                  value={postForm.location}
                ></input>
                <input
                  className="form-input w-15"
                  type="search"
                  style={styles.cardStyles}
                  placeholder="Volunteer date"
                  aria-label="Search"
                  onChange={handleChange}
                  name="volunteerDate"
                  value={postForm.volunteerDate}
                ></input>
                <input
                  className="form-input w-15"
                  type="search"
                  style={styles.cardStyles}
                  placeholder="time"
                  aria-label="Search"
                  onChange={handleChange}
                  name="time"
                  value={postForm.time}
                ></input>
                <input
                  className="form-input w-15"
                  type="search"
                  style={styles.cardStyles}
                  placeholder="Phone number "
                  aria-label="Search"
                  onChange={handleChange}
                  name="contact"
                  value={postForm.contact}
                ></input>
              </div>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Post
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your posts. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default PostForm;
