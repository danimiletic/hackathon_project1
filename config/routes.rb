Rails.application.routes.draw do
  get 'trips/index'
  get 'trips/show'
  get 'trips/new'
  get 'trips/edit'
  root 'users#index'

  resources :users 
end
