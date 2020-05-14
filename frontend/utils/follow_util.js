
export const createFollow = follow => {
  return $.ajax({
    method: "POST",
    url: `api/follows`,
    data: { follow }
  });
};

export const fetchFollow = id => {
  return $.ajax({
    method: "GET",
    url: `api/follows/${id}`
  });
};

export const fetchUserFollows = user_id => {
  return $.ajax({
    method: "GET",
    url: `api/users/${user_id}/follows`
  });
};

export const deleteFollow = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/follows/${id}`
  });
};
