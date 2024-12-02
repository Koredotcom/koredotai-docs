import os
import re

def process_md_file(file_path):
    # Read the original content
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Extract the description (content after <a name="Description"></a>)
    description_match = re.search(r'<a name="Description"></a>(.*?)(?=\n\n|$)', content, re.DOTALL)
    if not description_match:
        print(f"No description found in {file_path}")
        return
    
    description = description_match.group(1).strip()
    
    # Get the filename without extension for the permalink
    filename = os.path.basename(file_path)
    filename_without_ext = os.path.splitext(filename)[0]
    
    # Create the new content structure with exact formatting
    new_content = f"""---
title: {filename_without_ext}

permalink: platform/marketplace/en/latest/Actions/{filename_without_ext}
---
### Description
{description}

{content.split('<a name="Description"></a>')[1].strip() if len(content.split('<a name="Description"></a>')) > 1 else ''}"""
    
    # Write the new content back to the file
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(new_content)
    
    print(f"Processed: {file_path}")

def process_all_md_files(directory):
    # Walk through all files in the directory
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                try:
                    process_md_file(file_path)
                except Exception as e:
                    print(f"Error processing {file_path}: {str(e)}")

# Directory containing the md files
directory_path = r"C:\Users\shukla.ram\Desktop\Kore_shiva\koredotai-docs\docs\platform\marketplace\GaleAgentTemplates"

# Process all md files
process_all_md_files(directory_path)