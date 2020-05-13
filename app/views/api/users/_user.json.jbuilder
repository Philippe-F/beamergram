json.extract! user, :id, :username, :bio, :website
if user.photo.attached? 
  json.photoUrl url_for(user.photo) 
end 