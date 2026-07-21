import re
import sys

def invert_slate(shade):
    # Mapping for light mode equivalent of slate
    mapping = {
        50: 900, 100: 800, 200: 700, 300: 600, 400: 500,
        500: 500, 600: 400, 700: 300, 800: 200, 900: 100, 950: 50
    }
    return mapping.get(int(shade), shade)

def invert_emerald(shade):
    mapping = {
        50: 900, 100: 800, 200: 700, 300: 600, 400: 500,
        500: 600, 600: 400, 700: 300, 800: 200, 900: 100, 950: 50
    }
    return mapping.get(int(shade), shade)

def invert_red(shade):
    mapping = {
        50: 900, 100: 800, 200: 700, 300: 600, 400: 500,
        500: 500, 600: 400, 700: 300, 800: 200, 900: 100, 950: 50
    }
    return mapping.get(int(shade), shade)

def replacer(match):
    prefix = match.group(1) # bg, text, border, ring, etc
    color = match.group(2) # slate, emerald, red
    shade = match.group(3) # 50-950
    opacity = match.group(4) or "" # /50 etc
    
    shade_int = int(shade)
    
    if color == "slate":
        light_shade = invert_slate(shade_int)
    elif color == "emerald":
        light_shade = invert_emerald(shade_int)
    elif color == "red":
        light_shade = invert_red(shade_int)
    else:
        return match.group(0)
        
    return f"{prefix}-{color}-{light_shade}{opacity} dark:{prefix}-{color}-{shade}{opacity}"

def simple_replacer(match):
    full = match.group(0)
    prefix = match.group(1)
    color = match.group(2)
    opacity = match.group(3) or ""
    
    if color == "white":
        return f"{prefix}-slate-950{opacity} dark:{prefix}-white{opacity}"
    elif color == "black":
        return f"{prefix}-white{opacity} dark:{prefix}-black{opacity}"
    return full

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Avoid replacing already replaced ones. If it has dark: right after, skip it.
    # To do this safely, we will just replace all, but if we run it multiple times it might duplicate.
    # Let's assume it's clean (I will git checkout or just rely on the fact it's fresh).
    
    # regex for color classes like bg-slate-900, text-emerald-400, border-slate-700/50
    pattern = r'\b(bg|text|border|ring|from|to|via)-(slate|emerald|red)-(\d{2,3})(/[0-9]+)?\b'
    content = re.sub(pattern, replacer, content)
    
    # regex for white and black
    pattern_simple = r'\b(bg|text|border|ring|from|to|via)-(white|black)(/[0-9]+)?\b'
    content = re.sub(pattern_simple, simple_replacer, content)
    
    with open(filepath, 'w') as f:
        f.write(content)

process_file('src/slides.tsx')
process_file('src/App.tsx')
