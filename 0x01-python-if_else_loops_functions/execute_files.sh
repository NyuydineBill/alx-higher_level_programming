#!/bin/bash

# Add file paths here
files=(
    "/path/to/file1"
    "/path/to/file2"
    "/path/to/file3"
)

# Loop through the file paths and set executable permissions
for file in "${files[@]}"; do
    chmod +x "$file"
done
