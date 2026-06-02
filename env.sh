#!/usr/bin/env sh
# ================================================================================
# File: env.sh
# Description: Replaces environment variable placeholders in built asset files.
# Usage: Ensure APP_PREFIX and ASSET_DIR are set before running.
#   APP_PREFIX  - prefix of the runtime env vars to inject (e.g. PREFIX_)
#   ASSET_DIR   - path to the built assets directory (e.g. .next/static)
# ================================================================================

# Set the exit flag to exit immediately if any command fails
set -e

# Check if APP_PREFIX is set
: "${APP_PREFIX:?APP_PREFIX must be set (e.g. APP_PREFIX='APP_PREFIX_')}"

# Check if ASSET_DIRS is set
: "${ASSET_DIR:?Must set ASSET_DIR to one path}"

# Check if the directory exists
if [ ! -d "$ASSET_DIR" ]; then
    echo "Error: directory '$ASSET_DIR' not found."
    exit 1
fi

# Display the current directory being scanned
echo "Scanning directory: $ASSET_DIR"

# Iterate through each environment variable that starts with APP_PREFIX
env | grep "^${APP_PREFIX}" | while IFS='=' read -r key value; do
    # Display the variable being replaced
    echo "  • Replacing ${key} → ${value}"

    # Use find and sed to replace the variable in all files within the directory
    find "$ASSET_DIR" -type f \
        -exec sed -i "s|${key}|${value}|g" {} +
done