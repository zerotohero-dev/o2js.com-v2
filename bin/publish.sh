#! /bin/bash
cd ..;
jekyll build --config _config.yml;
rsync -a _site/ /var/www/o2js.com
