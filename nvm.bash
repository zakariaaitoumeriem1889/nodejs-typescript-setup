NODE_VERSION=$(cat .nvmrc)
nvm install "$NODE_VERSION"
nvm use "$NODE_VERSION"