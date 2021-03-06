Rails.application.routes.draw do

  root to: "welcome#welcome"

  get 'pets/query', to: 'pets#query'

  resources :addresses, defaults: {format: :json}
  resources :pets, defaults: {format: :json}

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  devise_scope :user do
    get 'users/sign_out', to: 'devise/sessions#destroy'
  end

  get 'welcome/welcome'

  get 'welcome/home'

  get 'breeds/dogs'
  get 'breeds/cats'
  get 'breeds/birds'



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
