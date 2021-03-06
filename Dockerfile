FROM cmosetick/pushstate-server

COPY . /root

WORKDIR /root

RUN npm install -g yarn && \
    yarn install --production && \
    yarn build

WORKDIR /root/build

EXPOSE 9000
