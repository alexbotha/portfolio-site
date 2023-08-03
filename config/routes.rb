Rails.application.routes.draw do
  resources :data_structure_algos
  resources :technologies
  resources :projects
  get '/hello', to: 'application#hello_world'
end
