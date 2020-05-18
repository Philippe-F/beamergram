Rails.application.routes.draw do
  root 'static_pages#root' 
  
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :index, :update, :show] do 
      resources :follows, only: [:index]
    end 


    resources :follows, only: [:create, :show, :destroy] 
    resources :posts, only: [:index, :create, :show, :update, :destroy] do 
      resources :comments, only: [:index]
    end 

    resources :comments, only: [:create,:destroy,:show]
    resource :session, only: [:new, :create, :destroy]
  end 
end
