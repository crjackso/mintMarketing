require 'rubygems'
require 'sinatra'

get '/' do
  redirect '/presentation.html'
end

get '/gm' do
  redirect '/gm.html'
end