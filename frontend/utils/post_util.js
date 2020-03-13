import { postUser } from "./session";

export const allPosts = () => (
  $.ajax({
    method: "GET",
    url: "/api/posts"
  })
);

export const createPost = (post) => {
  return $.ajax({
    method: "POST",
    url: `/api/posts`,
    data: post,
    // Let ajax method know that we should not be messing with the the
    // formData object to format it for rails backend 
    // (let rails do all the work)
    contentType: false,
    processData: false
  })
};

export const showPost = (postId) => (
  $.ajax({
    method: "GET",
    url: `/api/posts/${postId}`,
  })
);

export const updatePost = (post, postId) => {

  return $.ajax({
    method: "PATCH",
    url: `/api/posts/${postId}`,
    data: { post, "hello": "hello" },
  })
};

export const destroyPost = (postId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/posts/${postId}`,
  })
);