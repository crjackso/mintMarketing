require 'rack/cache'

use Rack::Static,
    :urls => ["/images", "/js", "/css"],
    :root => "public"

use Rack::Cache,
    :verbose     => true,
    :metastore   => 'file:/var/cache/rack/meta',
    :entitystore => 'file:/var/cache/rack/body'

map "/gm" do
  run Rack::File.new("public/gm.html")
end

map "/fulton" do
  run Rack::File.new("public/fulton.html")
end

map "/staging" do
  run Rack::File.new("public/staging.html")
end

map "/crowd.wav" do
  run Rack::File.new("public/crowd.wav")
end

run lambda { |env|
  [
      200,
      {
          'Content-Type'  => 'text/html',
          'Cache-Control' => 'public, max-age=3153600'
      },
      File.open('public/general.html', File::RDONLY)
  ]
}