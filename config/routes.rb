Rails.application.routes.draw do
  root 'static_pages#root' 
  
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :index, :update, :show] do 
      resources :follows, only: [:index]
    end 


    resources :follows, only: [:create, :show, :destroy] 
    resources :posts, only: [:index, :create, :show, :update, :destroy] do 
      resources :comments, only: [:index]
      resources :likes, only: [:index]
    end 

    resources :comments, only: [:create,:destroy,:show]
    resource :session, only: [:new, :create, :destroy]
    resources :likes, only: [:create, :destroy, :show]
    get 'users/posts/:id', :to => 'posts#user_posts'
  end 
end
