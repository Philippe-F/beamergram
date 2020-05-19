json.extract! user, :id, :username, :email, :bio, :website, :likes
if user.photo.attached? 
  json.photoUrl url_for(user.photo) 
end 
json.followerIds user.followers.pluck(:id)
json.followingIds user.followings.pluck(:id)