source "https://rubygems.org"

# to publish on github page
gem 'github-pages', group: :jekyll_plugins

group :jekyll_plugins do
    gem 'jekyll-commonmark-ghpages'
  end

  install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
    gem "tzinfo", "~> 1.2"
    gem "tzinfo-data"
  end
  
  # Performance-booster for watching directories on Windows
  gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?
  
  gem "webrick", "~> 1.7"

# to publich without github page
#gem "jekyll"
