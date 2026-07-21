with open('src/slides.tsx', 'r') as f:
    content = f.read()

content = content.replace("    );\n  ,\n  () => (", "    );\n  },\n  () => (")

with open('src/slides.tsx', 'w') as f:
    f.write(content)
