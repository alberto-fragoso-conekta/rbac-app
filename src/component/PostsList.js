import React from "react";

import posts from "../posts";
import { AuthConsumer } from "../authContext";
import Can from "./Can";

const PostsList = () => (
  <AuthConsumer>
    {({ user }) => (
      <>
        <h2>Posts List</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(({ id, title, ownerId }, index) => (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>{title}</td>
                <td>
                  <Can
                    role={user.role}
                    perform="posts:edit"
                    data={{ userId: user.id, postOwnerId: ownerId }}
                    yes={() => (
                      <button className="btn btn-sm btn-info">Edit Post</button>
                    )}
                  />
                  <Can
                    role={user.role}
                    perform="posts:delete"
                    yes={() => (
                      <button className="btn btn-sm btn-danger">
                        Delete Post
                      </button>
                    )}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )}
  </AuthConsumer>
);

export default PostsList;
