
export const createLike = like => {
  return $.ajax({
    method: "POST",
    url: `api/likes`,
    data: { like }
  });
};

export const fetchLike = id => {
  return $.ajax({
    method: "GET",
    url: `api/likes/${id}`
  });
};

export const deleteLike = post_id => {
  return $.ajax({
    method: "DELETE",
    url: `/api/likes/${post_id}`
  });
}