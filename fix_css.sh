cat << 'CSSEOF' > src/index.css
@import "tailwindcss";
@custom-variant dark (&:is(.dark *));
CSSEOF
