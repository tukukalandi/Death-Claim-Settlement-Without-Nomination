import re

with open('server.ts', 'r') as f:
    content = f.read()

replacement = """          systemInstruction: "You are an AI assistant helping a user with questions about India Post claim procedures for deceased depositors, based on the provided presentation context. Answer the user's question accurately and concisely. Always provide your answers in a clear, point-wise format. If the context doesn't contain the answer, say you are not sure but they can check the official India Post guidelines.","""

content = re.sub(r'          systemInstruction: "You are an AI assistant helping a user with questions about India Post claim procedures for deceased depositors, based on the provided presentation context. Answer the user\'s question accurately and concisely. If the context doesn\'t contain the answer, say you are not sure but they can check the official India Post guidelines.",', replacement, content)

with open('server.ts', 'w') as f:
    f.write(content)
