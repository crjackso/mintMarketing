require 'rack/contrib/response_header'

root = ::File.dirname(__FILE__)
require ::File.join( root, 'app' )

# set default cache-control header if not set by Sinatra
use Rack::ResponseHeaders do |headers|
  if not headers['Cache-Control']
    cache_control :public, :must_revalidate, max_age: 60, expires: 100000
  end
end

configure do
  set :static_cache_control, [:public, :max_age => 18300]
end

run Sinatra::Application