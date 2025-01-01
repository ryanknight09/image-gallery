echo "Regenerating client"
BASE_PATH=""
CLIENT_DIRECTORY="./utils/client/system-client"
API_URL="https://some-client"
OUTPUT_FILE="$CLIENT_DIRECTORY/openapi.yml"

# Use curl to fetch the API response and save it to the output file
curl -o $OUTPUT_FILE $API_URL

# Optional: Print a message indicating that the file has been saved
echo "API response saved to $OUTPUT_FILE"

echo "Deleting contents of $CLIENT_DIRECTORY/src..."

rm -rf $CLIENT_DIRECTORY/src

echo "Installing dependencies"
npm install @openapitools/openapi-generator-cli dts-bundle-generator --legacy-peer-deps

echo "Generating system client..."
openapi-generator-cli generate -g typescript-axios -o $CLIENT_DIRECTORY/src -i $CLIENT_DIRECTORY/openapi.yml --additional-properties=supportsES6=true,stringEnums=true,useSingleRequestParameter=true

echo "Cleaning up the tmp directory used for the system client..."
rm -rf $CLIENT_DIRECTORY/tmp
rm './openapitools.json'

echo "Removing installed packages..."
npm uninstall @openapitools/openapi-generator-cli dts-bundle-generator --legacy-peer-deps

echo "Done!"