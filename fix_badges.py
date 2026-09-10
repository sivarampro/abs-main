import re
import glob

def remove_icons(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Pattern to match the badge div, then any whitespace, then a self-closing component tag like <Compass className="..." />
    pattern = r'(<div className="inline-flex items-center gap-2[^>]*>)\s*<[A-Z][a-zA-Z0-9]*\s+className="[^"]*"\s*/>'
    
    new_content = re.sub(pattern, r'\1', content)
    
    # Also some might not be self-closing, but usually they are from lucide-react. Let's assume self-closing for now.
    
    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for f in glob.glob('src/**/*.tsx', recursive=True):
    remove_icons(f)

