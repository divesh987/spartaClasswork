Rails.application.routes.draw do
  devise_for :users

  resources :users
  resources :posts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static#home"
   get "/users/myposts", to: "users#show"
   get "/users/myposts/:id", to: "users#post"

end
