export const fetchUsers = () => (
  $.ajax({
    url: `api/users`,
    method: 'GET'
  })
);

export const fetchUser = (userId) => (
  $.ajax({
    url: `api/users/${userId}`,
    method: 'GET'
  })
);

export const updateUser = (formData, userId) => (
  $.ajax({
    url: `api/users/${userId}`,
    method: 'PATCH',
    data: formData,
    contentType: false,
    processData: false
  })
);

export const deleteUser = (userId) => (
  $.ajax({
    url: `api/users/${userId}`,
    method: 'DELETE'
  })
);
