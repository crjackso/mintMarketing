require 'rubygems'
require 'sinatra'

before do
  headers "Content-Type" => "text/html; charset=utf8"
end

helpers do
  def cache_for(time)
    response['Cache-Control'] = "public, max-age=#{time.to_i}"
  end
end

get '/' do
  cache_for 10*60
  redirect 'general.html'
end

get '/gm' do
  redirect 'gm.html'
end