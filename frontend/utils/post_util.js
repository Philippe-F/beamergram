import { postUser } from "./session";

export const allPosts = () => (
  $.ajax({
    method: "GET",
    url: "/api/posts"
  })
);

export const createPost = (post) => (
  $.ajax({
    method: "POST",
    url: `/api/posts`,
    data: { post } 
  })
);

export const showPost = (postId) => (
  $.ajax({
    method: "GET",
    url: `/api/posts/${postId}`,
  })
);

export const updatePost = (post) => (
  $.ajax({
    method: "PATCH",
    url: `/api/posts/${post.id}`,
    data: { post },
  })
);

export const destroyPost = (postId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/posts/${postId}`,
  })
);