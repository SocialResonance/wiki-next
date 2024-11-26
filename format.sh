#!/bin/bash

# Find all MDX files recursively, excluding node_modules
find . -name "*.mdx" -not -path "*/node_modules/*" | while read -r file; do
    echo "Processing $file..."
    
    # Create temporary files
    temp_file=$(mktemp)
    
    # Check if file has frontmatter
    if grep -q "^---$" "$file"; then
        # Extract title and link from frontmatter
        title=$(grep 'title:' "$file" | sed 's/title: "\(.*\)"/\1/')
        link=$(grep 'link:' "$file" | sed 's/link: "\(.*\)"/\1/')
        
        # Check if file already has the header format
        if grep -q "^# \[.*\](@.*)" "$file"; then
            # If header exists, just remove frontmatter
            sed '1,/^---$/!b;{/^---$/!d}' "$file" | sed '1,/^---$/d' > "$temp_file"
            cat "$temp_file" > "$file"
        else
            # If header doesn't exist and we have title/link
            if [ ! -z "$title" ] && [ ! -z "$link" ]; then
                # Remove frontmatter and add new header
                sed '1,/^---$/!b;{/^---$/!d}' "$file" | sed '1,/^---$/d' > "$temp_file"
                {
                    echo "# [$title](@$link)"
                    echo
                    cat "$temp_file"
                } > "$file"
            fi
        fi
    fi
    
    # Clean up
    rm "$temp_file"
    
    echo "Updated $file"
done