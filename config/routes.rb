Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:new, :create, :destroy]
    resource :session, only: [:new, :create, :destroy]
  end 
end
