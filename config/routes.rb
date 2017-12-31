Rails.application.routes.draw do
  devise_for :users
  root to: "welcome#welcome"

  get 'welcome/welcome'

  get 'welcome/home'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
