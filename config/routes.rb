Rails.application.routes.draw do
  resources :project_technologies
  
  get '/hello', to: 'application#hello_world'
  
  resources :data_structure_algos
  resources :technologies
  resources :projects
  

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
