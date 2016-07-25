# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)

Gem::Specification.new do |spec|
  spec.name          = "betterplace_explorer"
  spec.version       = '0.0.1-alpha38'
  spec.authors       = ["betterplace developers"]
  spec.email         = ["developers@betterplace.org"]
  spec.description   = %q{An awesome explorer}
  spec.summary       = %q{An awesome explorer}
  spec.homepage      = "https://github.com/betterplace/betterplace_explorer"
  spec.license       = "Apache v2"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(lib|app)/}) }
end
