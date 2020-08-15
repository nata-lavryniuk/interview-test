#!/usr/bin/env bash
# pass DISPLAY variable pointing at the host's X11 server
# like XQuartz
# read https://sourabhbajaj.com/blog/2017/02/07/gui-applications-docker-mac/

#IP=$(ipconfig getifaddr en0) # Mac
IP=$(ifconfig `route | grep ^default | sed "s/.* //"` | grep -Po '(?<=inet )[\d.]+') # Linux
# this assumes that X11 server allows connections over the network
# after we execute "/usr/X11/bin/xhost + $IP"
#xhost +
DISPLAY=$IP #localhost:0

# explanation of the "docker run" command line arguments
#
#  -it          = interactive terminal
#  -v $PWD:/e2e = map current folder to /e2e inside the container
#  -v /tmp/.X11-unix:/tmp/.X11-unix = map X11 socket file to communicate
#  -w /e2e      = set working directy to /e2e
#  -e DISPLAY   = pass environment variable DISPLAY to the container
#  --entrypoint cypress = run "cypress" command
#     with arguments AFTER Docker image name
#     in our case they are "--project ." to point globally installed Cypress
#     at the current working directory /e2e inside the container
  #-v /tmp/.X11-unix:/tmp/.X11-unix \
docker run -it \
  -v $PWD:/e2e \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  -w /e2e \
  -e DISPLAY \
  --entrypoint cypress \
  cypress/included:4.12.0 open --project .
