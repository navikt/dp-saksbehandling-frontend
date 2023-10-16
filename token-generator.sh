#!/usr/bin/env bash

# https://stackoverflow.com/questions/5947742/how-to-change-the-output-color-of-echo-in-linux
Cyan='\033[0;36m'         # Cyan
Red='\033[0;31m'          # Red
Purple='\033[0;35m'       # Purple
Yellow='\033[0;33m'       # Yellow
BPurple='\033[1;35m'      # Purple bold
UGreen='\033[4;32m'       # Green underline

# Env file 
envFile='.env'

# Check if user has `jq` installed
# https://formulae.brew.sh/formula/jq
function verifyJQ() {
  brew list jq > /dev/null 2>&1 || brew install jq 
}

# Main script
function init() {
  # Welcome text
  echo -e "${Cyan}::: ${BPurple}dp-saksbehandling-frontend token generator ${Cyan}::: \n"

  # Check if jq package is installed 
  verifyJQ

  # Generate wonderwalled-azure token
  handleWonderwalledAzure

  # Generate azure-token-generator token
  handleAzureTokenGenerator

  sleep 1
  echo -e "🌈 ${Purple}You're good to go! Restart your dev-server."
}

function handleWonderwalledAzure() {
  # First wonderwalled-azure url from json config
  url=$(jq '.' token-generator.config.json | jq '.wonderwalledAzure | .[0].url' | tr -d '"')
  
  # Show link to wonderwalledAzure to user
  echo -e "${Cyan}Visit: ${UGreen}${url}\n"
  echo -e "${Cyan}Find and copy ${Yellow}io.nais.wonderwall.session ${Cyan}cookie from ${Yellow}DevTools > Application > Cookies"

  # Ask for wonderwall cookie,
  echo -e "${Cyan}Paste in cookie: "
  read wonderwalledAzureCookie
  echo -e "\n"

  # Loop through wonderwalledAzure configs and create environment variable
  for config in $(jq -r '.wonderwalledAzure | .[] | @base64' token-generator.config.json);
    do
      _jq() {
        echo ${config} | base64 --decode | jq -r ${1}
      }

      env=$(_jq '.env')
      url=$(_jq '.url')

      generateAndUpdateEnvFile "$env" "$url" "$wonderwalledAzureCookie"
  done

  echo -e "\n"
}

function handleAzureTokenGenerator() {
  # First azure-token-generator url from json config
  url=$(jq '.' token-generator.config.json | jq '.azureTokenGenerator | .[0].url' | tr -d '"')
  
  # Show link to azureTokenGenerator to user
  echo -e "${Cyan}Visit: ${UGreen}${url}\n"
  echo -e "${Cyan}Find and copy ${Yellow}io.nais.wonderwall.session ${Cyan}cookie from ${Yellow}DevTools > Application > Cookies"

  # Ask for wonderwall cookie,
  echo -e "${Cyan}Paste in cookie: "
  read azureTokenGeneratorCookie
  echo -e "\n"

  # Loop through wonderwalledAzure configs and create environment variable
  for config in $(jq -r '.azureTokenGenerator | .[] | @base64' token-generator.config.json);
    do
      _jq() {
        echo ${config} | base64 --decode | jq -r ${1}
      }

      env=$(_jq '.env')
      url=$(_jq '.url')

      generateAndUpdateEnvFile "$env" "$url" "$azureTokenGeneratorCookie"
  done

  echo -e "\n"
}


# This function make curl request with `-b` flag to send cookie with the request
# | jq ".access_token" returns oboToken string
function generateAndUpdateEnvFile() {
  # function parameters
  env=$1
  url=$2 | tr -d '"'
  cookie=$3

  # Store access token in variable
  accessToken=$(curl -s -b "io.nais.wonderwall.session=${cookie}" ${url}| jq ".access_token") 

  if [ -z $accessToken ]; then
    echo -e "❌ ${Yellow}${env} ${Red} error"
  else
     # Full generated env string
    generatedEnv="${env}=${accessToken}"

    # Update generated env string to env file
    printf '%s\n' H ",g/^${env}.*/s//${generatedEnv}/" wq | ed -s "$envFile"

    echo -e "✅ ${Yellow}${env} ${Cyan}updated"
  fi
}

# Start script
init