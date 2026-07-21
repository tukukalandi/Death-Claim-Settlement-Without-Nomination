import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

replacement = """  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);"""

content = re.sub(r'  useEffect\(\(\) => \{\n    const handleKeyDown = \(e: KeyboardEvent\) => \{\n      if \(e\.key === \'ArrowRight\' \|\| e\.key === \' \'\) \{\n        e\.preventDefault\(\);\n        nextSlide\(\);\n      \} else if \(e\.key === \'ArrowLeft\'\) \{\n        e\.preventDefault\(\);\n        prevSlide\(\);\n      \}\n    \};\n\n    window\.addEventListener\(\'keydown\', handleKeyDown\);\n    return \(\) => window\.removeEventListener\(\'keydown\', handleKeyDown\);\n  \}, \[nextSlide, prevSlide\]\);', replacement, content)

with open('src/App.tsx', 'w') as f:
    f.write(content)
