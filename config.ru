root = ::File.dirname(__FILE__)
require ::File.join( root, 'app' )

configure do
  set :static_cache_control, [:public, :max_age => 18300]
end

run Sinatra::Application