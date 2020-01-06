Rails.application.routes.draw do
  get 'hello', to: 'welcome#index'
  resources 'blogs'
end
