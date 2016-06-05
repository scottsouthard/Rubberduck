Rails.application.routes.draw do

  resources :users

  resources :students, only: [:new, :create, :show]
  resources :mentors, only: [:new, :create, :show]
  resources :questions do
    resources :ratings, only: [:new, :create]
  end

  root 'welcome#index'

  get 'sessions/new' => "sessions#new"
  post 'sessions/create' => "sessions#create"
  get 'sessions/logout' => "sessions#logout"

  mount ActionCable.server => '/cable'
end
