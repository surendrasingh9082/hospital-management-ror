Rails.application.routes.draw do
  resources :appointments
  resources :doctors do 
    resources :appointments, only: [:index, :new]
  end
  resources :patients do 
    resources :doctors, only: [:index]
    resources :appointments, only: [:index, :new]
  end
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' } do
    get 'sign_in' => 'users/sessions#new'
    get 'sign_up' => 'users/registrations#new'
    get 'signup_success' => 'users/registrations#signup_success'
    get 'users/profile' => 'users/registrations#profile',
        :as => 'user_profile_settings'
  end
  root 'patients#index'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
