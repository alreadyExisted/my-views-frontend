#!/bin/sh

check_param() {
  if [ -z "$2" ]; then
	echo $1 "not set"
	exit 1
  fi
} 

check_param "MAIN_API" $MAIN_API

echo "var config = {
  api: { main: '$MAIN_API' }
}" | tee /usr/share/nginx/html/config.js
