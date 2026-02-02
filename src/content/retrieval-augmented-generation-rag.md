# Getting Started with Retrieval Augmented Generation (RAG)

_Giving your AI a vetted knowledge base to increase LLM response accuracy._

---

## 1. The Symbolic Example: The Open Book Exam
Imagine you are taking a test.
* **Standard AI** is like taking the test from memory. If the AI wasn't "taught" a fact in school years ago, it might guess or get confused.
* **RAG (Retrieval-Augmented Generation)** is like taking an **Open Book Exam**. Before the AI answers your question, it looks through a specific notebook you gave it, finds the right page, and reads the answer from there.

This ensures the AI uses **your** facts (like your family recipes or company policy) instead of general information from the internet.

---

## 2. Why Build RAG?
* **Accuracy:** It prevents the AI from "hallucinating" (making things up) because it must cite its source.
* **Privacy:** You can give the AI access to private documents without sending that data to the public internet to "train" the model.
* **Up-to-Date:** You don't need to retrain the AI every time a fact changes; you just update the text file in your "notebook."

---

## 3. How RAG Works (The 4-Step Process)
To the computer, RAG is a conversation of questions.

| Step | Action | The Question |
| :--- | :--- | :--- |
| **1. Chunking** | Break your text into paragraphs. | "How do we make the info bite-sized?" |
| **2. Embedding** | Turn text into "Coordinate Points." | "How does the computer find the 'location' of a meaning?" |
| **3. Vector DB** | Store those points in memory. | "Where do we keep this searchable notebook?" |
| **4. Retrieval** | Match the user's question to a point. | "Which bite-sized piece is closest to what the user asked?" |

---

## 4. Simple Use Case: "The Office Assistant"
If you have a file called `office_rules.txt`, RAG allows the AI to answer "What is the Wi-Fi password?" by finding the exact line in that file first.

### A Simple Python "In-Memory" Example
"In-Memory" means the notebook is stored in the computer's temporary memory (RAM) while the program is running. 

**Pre-requisite:** Open your Terminal/PowerShell and type: `pip install sentence-transformers`

```python
from sentence_transformers import SentenceTransformer, util

# 1. THE NOTEBOOK (Your Knowledge Base)
documents = [
    "The guest Wi-Fi password is 'GoldenRetriever2024'.",
    "The office kitchen fridge is cleaned every Friday at 4 PM.",
    "Emergency exits are located in the North and South hallways."
]

# 2. THE SEARCH ENGINE (The Embedding Model)
model = SentenceTransformer('all-MiniLM-L6-v2')
notebook_vectors = model.encode(documents, convert_to_tensor=True)

# 3. THE USER QUESTION
query = "How do I get on the internet?"
query_vector = model.encode(query, convert_to_tensor=True)

# 4. THE RETRIEVAL (Find the best match)
match = util.semantic_search(query_vector, notebook_vectors, top_k=1)
result_text = documents[match[0][0]['corpus_id']]

print(f"I found this in your notebook: {result_text}")

