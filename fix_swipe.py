import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

# Remove states
content = re.sub(r'  const \[touchStart, setTouchStart\] = useState<number \| null>\(null\);\n  const \[touchEnd, setTouchEnd\] = useState<number \| null>\(null\);\n', '', content)

# Remove handlers
handlers = r"""  const minSwipeDistance = 50;

  const onTouchStart = \(e: React\.TouchEvent\) => \{
    setTouchEnd\(null\);
    setTouchStart\(e\.targetTouches\[0\]\.clientX\);
  \};

  const onTouchMove = \(e: React\.TouchEvent\) => \{
    setTouchEnd\(e\.targetTouches\[0\]\.clientX\);
  \};

  const onTouchEnd = \(\) => \{
    if \(!touchStart \|\| !touchEnd\) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if \(isLeftSwipe\) \{
      nextSlide\(\);
    \}
    if \(isRightSwipe\) \{
      prevSlide\(\);
    \}
  \};
"""
content = re.sub(handlers, '', content)

# Remove onTouch properties
content = re.sub(r'        onTouchStart=\{onTouchStart\}\n        onTouchMove=\{onTouchMove\}\n        onTouchEnd=\{onTouchEnd\}\n', '', content)

with open('src/App.tsx', 'w') as f:
    f.write(content)
