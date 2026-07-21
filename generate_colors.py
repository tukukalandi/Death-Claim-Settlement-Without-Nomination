import json

colors = {
    'slate': {
        50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1', 400: '#94a3b8',
        500: '#64748b', 600: '#475569', 700: '#334155', 800: '#1e293b', 900: '#0f172a', 950: '#020617'
    },
    'emerald': {
        50: '#ecfdf5', 100: '#d1fae5', 200: '#a7f3d0', 300: '#6ee7b7', 400: '#34d399',
        500: '#10b981', 600: '#059669', 700: '#047857', 800: '#065f46', 900: '#064e3b', 950: '#022c22'
    },
    'red': {
        400: '#f87171', 500: '#ef4444', 900: '#7f1d1d', 950: '#450a0a'
    }
}

# The mapping for inversion
inversion = {
    50: 900, 100: 800, 200: 700, 300: 600, 400: 500,
    500: 400, 600: 300, 700: 200, 800: 100, 900: 50, 950: 50
}

emerald_inversion = {
    50: 900, 100: 800, 200: 700, 300: 600, 400: 500,
    500: 600, 600: 400, 700: 300, 800: 200, 900: 100, 950: 50
}

theme_css = []
light_css = []
dark_css = []

for name, shades in colors.items():
    for shade, hex_val in shades.items():
        # In Tailwind v4, we can just define --color-* inside @theme
        theme_css.append(f"  --color-{name}-{shade}: var(--th-{name}-{shade});")
        
        dark_css.append(f"  --th-{name}-{shade}: {hex_val};")
        
        inv_shade = inversion[shade]
        if name == 'emerald':
            inv_shade = emerald_inversion[shade]
            
        light_hex = shades.get(inv_shade, '#ffffff')
        light_css.append(f"  --th-{name}-{shade}: {light_hex};")

theme_css.append("  --color-white: var(--th-white);")
theme_css.append("  --color-black: var(--th-black);")

dark_css.append("  --th-white: #ffffff;")
dark_css.append("  --th-black: #000000;")

light_css.append("  --th-white: #020617; /* Mapped to slate-950 */")
light_css.append("  --th-black: #ffffff; /* Mapped to white */")

css = f"""@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

@theme {{
{chr(10).join(theme_css)}
}}

:root, .light {{
{chr(10).join(light_css)}
  --th-red-400: #dc2626; /* red-600 */
  --th-red-500: #ef4444; /* red-500 */
  --th-red-900: #fca5a5; /* red-300 */
  --th-red-950: #fee2e2; /* red-100 */
}}

.dark {{
{chr(10).join(dark_css)}
}}
"""

print(css)
