FROM node:lts

LABEL maintainer="git@aungmyokyaw.com"

WORKDIR /home/zuitch

RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "zsh"]
RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh || true

ENTRYPOINT ["/bin/zsh"]
