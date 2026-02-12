# THE SAFETY NET - Test Driven Development (TDD)

## EXECUTIVE SUMMARY: PROVING IT WORKS
In AI Engineering, "it looks right" is not enough. You need **Automated Tests** [Scripts that check other scripts]. By using **TDD [Test-Driven Development]**, you define the expected output before the logic is even written. This prevents **Regression** [When a new change breaks an old feature].

---

## HOW IT WORKS: THE VERIFICATION LOOP
Testing replaces manual "trial and error" with a mathematical certainty. You are building a suite of constraints that the AI-generated code must satisfy.



* **The Assertion:** The fundamental unit of a test. It compares the **Actual Output** of a function against the **Expected Output**.
* **The Test Runner:** A tool (like `pytest`) that scans your project for tests, executes them, and reports failures.
* **State Management:** Tests should be "Stateless," meaning they don't leave messy data in your database after they finish running.

| Test Type | Technical Scope | Primary Goal |
| :--- | :--- | :--- |
| **Unit Test** | Function-level | Validates logic of a single, isolated component. |
| **Integration Test** | Workflow-level | Validates interaction between code and Database/APIs. |

---

## DEVELOPER’S CORNER: THE "GUARDRAIL" PROMPT
Don't ask the AI to "Fix the code." Ask it to "Secure the code" using this prompt:

> "I need to modify the `update_user` function. Before providing the updated code, generate a **Pytest** script that validates the existing 'Email' validation logic. I will use this as a baseline to ensure your new changes do not break existing functionality."

**The Assertion Logic:**
```python
def test_user_creation():
    # We define the expectation (The 'Success' state)
    response = create_user("test_user")
    assert response["status"] == "success"  # If this is False, the test fails.