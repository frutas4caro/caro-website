# ONE-PAGER 1: THE LOCAL SANDBOX

## EXECUTIVE SUMMARY: CREATING YOUR STAGING GROUND
Before code goes to the "real world," it needs a **Local Environment** [A private workspace on your computer]. This phase ensures that all **Dependencies** [External tools and libraries] are installed and that your code can "talk" to a database without exposing secrets to the internet.

---

## HOW IT WORKS: THE TECHNICAL ARCHITECTURE
Local development is defined by **Isolation** and **Configuration**. You are replicating a professional server environment on your personal machine to ensure the code behaves predictably.



* **Dependency Isolation:** Using a **Virtual Environment** ensures that the libraries for "Project A" do not conflict with "Project B."
* **Interface:** You interact with the system via the **CLI [Command Line Interface]**, executing scripts and managing the server lifecycle.
* **Security:** Sensitive data is kept in an **Environment File (`.env`)**, which the code reads at runtime but never stores permanently in the logic.

| Component | Technical Role | Implementation |
| :--- | :--- | :--- |
| **venv / conda** | Runtime Isolation | Prevents "Library Contamination" across projects. |
| **requirements.txt** | Manifest File | The authoritative list of external packages required. |
| **localhost** | Loopback Address | The private IP (`127.0.0.1`) used to host the app locally. |

---

## DEVELOPER’S CORNER: THE "BOOT UP" SEQUENCE
Once the AI gives you code, run these commands in your Terminal to bring it to life:

1.  **Create the environment:** `python -m venv venv`
2.  **Activate the environment:** * Mac/Linux: `source venv/bin/activate` 
    * Windows: `.\venv\Scripts\activate`
3.  **Install dependencies:** `pip install -r requirements.txt`
4.  **Inject Secrets:** Create a file named `.env` and add: `DATABASE_URL=your_secret_link_here`

---

## WATCH OUT FOR
* **Pathing Errors:** Ensure your Terminal "Working Directory" is the folder containing your script.
* **Missing Ingredients:** If you see `ModuleNotFoundError`, a library was used in the code but omitted from `requirements.txt`.

**Next Step:** Once your code is running locally, proceed to the **Test Driven Development** one pager to verify logic integrity.