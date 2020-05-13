Rails.application.routes.draw do
  root 'static_pages#root' 
  
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :index, :update, :show] 
    resources :posts, only: [:index, :create, :show, :update, :destroy]
    resource :session, only: [:new, :create, :destroy]
  end 
end
