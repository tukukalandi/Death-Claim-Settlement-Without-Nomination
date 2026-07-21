import re

with open('src/slides.tsx', 'r') as f:
    content = f.read()

# Replace existing red with orange
content = re.sub(r'\bred-(\d{2,3})', r'orange-\1', content)

# Replace existing emerald with red
content = re.sub(r'\bemerald-', 'red-', content)

with open('src/slides.tsx', 'w') as f:
    f.write(content)

with open('src/App.tsx', 'r') as f:
    app_content = f.read()

app_content = re.sub(r'\bemerald-', 'red-', app_content)

with open('src/App.tsx', 'w') as f:
    f.write(app_content)
