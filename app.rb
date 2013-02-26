require 'rubygems'
require 'sinatra'

before do
  headers "Content-Type" => "text/html; charset=utf8"
end

helpers do
  def cache_for(time)
    cache_control :public, :must_revalidate, max_age: time.to_i, expires: time.to_i
  end
end

get '/' do
  cache_for 604800
  redirect 'general.html'
end

get '/gm' do
  cache_for 604800
  redirect 'gm.html'
end