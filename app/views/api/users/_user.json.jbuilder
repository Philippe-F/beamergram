json.extract! user, :id, :username, :email, :bio, :website
if user.photo.attached? 
  json.photoUrl url_for(user.photo) 
end 