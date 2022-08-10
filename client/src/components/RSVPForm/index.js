import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_RSVP } from "../../utils/mutations";
import { QUERY_POSTS, QUERY_ME } from "../../utils/queries";

import Auth from "../../utils/auth";
const styles = {
  cardStyles: {
    width: "12vw",
    margin: "10px",
  },
};

const RSVPForm = () => {
  const [goingToForm, setgoingToForm] = useState({
    postText: "",
    location: "",
    contact: "",
    time: "",
    volunteerDate: "",
    title:"",
  });


  const [addRsvp, { error }] = useMutation(ADD_RSVP, {
    update(cache, { data: { addpost } }) {
      try {
        const { posts } = cache.readQuery({ query: QUERY_POSTS });

        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addpost, ...posts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, posts: [...me.posts, addRsvp] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addRsvp({
        variables: {
          postText: goingToForm.postText,
          location: goingToForm.location,
          contact: goingToForm.contact,
          time: goingToForm.time,
          volunteerDate: goingToForm.volunteerDate,
          title: goingToForm.title
        },
      });
      setgoingToForm({
        postText: goingToForm.postText,
        location: goingToForm.location,
        contact: goingToForm.contact,
        time: goingToForm.time,
        volunteerDate: goingToForm.volunteerDate,
        title: goingToForm.title
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const element = event.target;
    const temp = {};
    temp[element.name] = element.value;
    setgoingToForm({ ...goingToForm, ...temp });
  };

  return (
    <div>
    

      {Auth.loggedIn() ? (
        <>
         
          <form
            className="flex-row  justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
           
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Post
              </button>
        
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

export default RSVPForm;
