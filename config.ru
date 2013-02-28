require 'rack/cache'

use Rack::Static,
    :urls => ["/images", "/js", "/css"],
    :root => "public"

use Rack::Cache,
    :verbose     => true,
    :metastore   => 'file:/var/cache/rack/meta',
    :entitystore => 'file:/var/cache/rack/body'

run lambda { |env|
  [
      200,
      {
          'Content-Type'  => 'text/html',
          'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/general.html', File::RDONLY)
  ]
}