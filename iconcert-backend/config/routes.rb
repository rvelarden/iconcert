Rails.application.routes.draw do
  get '/artists' => 'artists#index'
  get '/venues' => 'venues#index'
  get '/concert_dates' => 'concert_dates#index'
  post '/artists' => 'artists#create'
  delete '/artists/:id' => 'artists#destroy'
   
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
