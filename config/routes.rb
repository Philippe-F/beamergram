Rails.application.routes.draw do
  root 'static_pages#root' 
  
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create]  
      # resources :posts, only: [:index, :create, :show, :update, :destroy]
    # end 

    resources :posts, only: [:index, :create, :show, :update, :destroy]
    resource :session, only: [:new, :create, :destroy]
  end 
end
