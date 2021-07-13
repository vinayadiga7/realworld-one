import React from "react";

const ListView = ({ data }) => {
  const displayListItems = () => {
    if (data)
      return data.map((comment) => {
        return (
          <div className="list-item" key={comment.id}>
            <div className="list-item__group-id-postid">
              <div>
                <label>Id: </label>
                {comment.id}
              </div>
              <div>
                <label>Post Id: </label>
                {comment.postId}
              </div>
            </div>

            <div>
              <label>Email: </label>
              {comment.email}
            </div>
            <div>
              <label>Message: </label>
              {comment.body}
            </div>
          </div>
        );
      });
    else return "There is no items to display!";
  };

  return <div className="list">{displayListItems()}</div>;
};

export default ListView;
