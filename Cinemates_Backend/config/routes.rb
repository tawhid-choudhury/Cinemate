Rails.application.routes.draw do
  devise_for :users, path_names: {
    sign_in: 'sign_in',
    sign_out: 'sign_out',
    registration: 'sign_up'
  },controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations',
    passwords: 'users/passwords'
  }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/*
  get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
  get "manifest" => "rails/pwa#manifest", as: :pwa_manifest

  get '/status', to: proc { [200, { 'Content-Type' => 'application/json' }, [{ status: 'OK', code: 200 }.to_json]] }
  # Defines the root path route ("/")
  # root "posts#index"
  resources :movies, only: [:create, :index] do
    collection do
      get :featured_today
    end
    resources :watchlists, only: [:create]
  end

  resources :watchlists, only: [:index, :destroy]

  resources :posts
end
