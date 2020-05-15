# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 
User.create(full_name: "philippe fonzin", username: "guest", 
bio: "Likes fast cars", password: "password", email: "demo@123.com") 

User.create(full_name: "Nikki O", username: "Nikki Badazz", 
bio: "Likes pretty things", password: "password", email: "nikki@123.com") 

