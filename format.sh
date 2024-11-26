#!/bin/bash

# Find all MDX files recursively, excluding node_modules
find . -name "*.mdx" -not -path "*/node_modules/*" | while read -r file; do
    echo "Processing $file..."
    
    # Create temporary files
    temp_file=$(mktemp)
    final_file=$(mktemp)
    
    # Check if file has frontmatter
    if grep -q "^---$" "$file"; then
        # Extract title and link from frontmatter
        title=$(grep 'title:' "$file" | sed 's/title: "\(.*\)"/\1/')
        link=$(grep 'link:' "$file" | sed 's/link: "\(.*\)"/\1/')
        
        # Save the content after frontmatter (everything after the second ---)
        awk '/^---$/ { if (++count == 2) { save=1; next } } save { print }' "$file" > "$temp_file"
        
        # Remove any existing headers that match our patterns
        sed -E '/^# \[.*\](@.*)/d' "$temp_file" | sed -E '/^# \[.*\]\(.*\)/d' > "$final_file"
        
        # Add new header and content
        if [ ! -z "$title" ] && [ ! -z "$link" ]; then
            {
                echo "# [$title](@$link)"
                echo
                cat "$final_file"
            } > "$file"
        else
            cat "$final_file" > "$file"
        fi
    fi
    
    # Clean up
    rm "$temp_file"
    rm "$final_file"
    
    echo "Updated $file"
done