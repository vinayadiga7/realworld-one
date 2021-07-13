import React from "react";

const GridView = ({ data }) => {
  const displayGridItems = () => {
    if (data)
      return data.map((comment) => {
        return (
          <div className="grid-item" key={comment.id}>
            <div className="grid-item__group-id-postid">
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
    else return "There is no items to display";
  };

  return <div className="grid">{displayGridItems()}</div>;
};

export default GridView;
