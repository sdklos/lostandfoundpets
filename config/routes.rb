Rails.application.routes.draw do
  resources :addresses
  root to: "welcome#welcome"

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  get 'welcome/welcome'

  get 'welcome/home'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
