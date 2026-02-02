# Terminal and Command Line

_Navigate your system like a true engineer._

---

## 1. The Concept: Point-and-Click vs. Text-Command
When you use a computer **Mouse**, you are navigating a visual layer (the GUI or Graphical User Interface). You see a folder, you click it to open it.
When you use the **Terminal** or **Command Line**, you are using the text layer (the CLI). Instead of clicking a folder, you type its "address" to enter it. 

**Think of it like a GPS:** Using a Mouse is like driving around until you recognize a landmark; using the Terminal is like entering the exact coordinates into your GPS to arrive instantly.

---

## 2. Why Use the Terminal for AI & Engineering?
* **Efficiency:** Perform repetitive tasks (like renaming 100 files) with one command.
* **Connectivity:** Most AI models and servers do not have a visual interface; you must talk to them via text.
* **Automation:** You can save "scripts" (saved sequences of commands) to perform complex workflows automatically.

---

## 3. Getting Started
Open your command interface to begin:
* **Mac:** `Cmd + Space` > type "Terminal" > Enter.
* **Windows:** `Win Key` > type "PowerShell" or "cmd" > Enter.
* **On Linux:** Press `Ctrl + Alt + T`.

---

## 4. Core Navigation Commands
These are the foundational commands for moving through your files.(PowerShell allows you to use Mac commands (like `ls`) in windows, the older Command Prompt (cmd) does not.) Use this table as your guide:

| Action | Mac / Linux / **PowerShell** | **Windows Legacy (cmd)** | The Question (What it stands for) | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Identify Location** | `pwd` | `cd` | **P**rint **W**orking **D**irectory: "Where am I standing right now?" | Tells you the full path of your current folder. |
| **List Contents** | `ls` | `dir` | **L**i**s**t: "What is inside this room?" | Shows all files and folders in your current spot. |
| **Enter Folder** | `cd [Name]` | `cd [Name]` | **C**hange **D**irectory: "Can I go into that room?" | Walks you forward into a specific folder. |
| **Exit Folder** | `cd ..` | `cd ..` | **C**hange **D**irectory [Back]: "Can I go back to the hallway?" | Moves you back one level to the "Parent" folder. |
| **Create Folder** | `mkdir [Name]` | `mkdir [Name]` | **M**ake **D**irectory: "Can I build a new room here?" | Builds a brand new folder at your location. |
| **Clear Screen** | `clear` | `cls` | **Clear**: "Can we start with a clean slate?" | Wipes the window clean so you have a fresh workspace. |

---
**Next Step:** Open your terminal and try the `ls` command. Can you see your "Desktop" or "Documents" folder in the list?

## 5. Scripting: Automating a Sequence
A script is a file containing a list of commands that run in order. This is the first step toward "engineering" your environment.

### Mac/Linux (Bash Script)
1. Type `nano setup.sh` to open a text editor in the terminal.
2. Enter these commands:
   ```bash
   mkdir AI_Project
   cd AI_Project
   touch notes.txt
   ls
   ```
### Additional Script Example: Creating a "Morning Routine"
Imagine you want to create a new folder for a "Project" and put a blank "To-Do" list inside it every morning.

#### For Mac Users (The Bash Script)
1.  Type `nano morning.sh` in your terminal. (This opens a simple text editor).
2.  Type these lines:
    ```bash
    mkdir My_New_Project
    cd My_New_Project
    touch todo.txt
    echo "Task 1: Learn Terminal" > todo.txt
    ```
3.  Press `Ctrl + O` then `Enter` (to Save), and `Ctrl + X` (to Exit).
4.  **Run it:** Type `bash morning.sh`. You just told your system to do 4 things at once!

#### For Windows Users (The PowerShell Script)
1.  Type `notepad morning.ps1` and hit Enter.
2.  In the Notepad window that opens, paste this:
    ```powershell
    New-Item -ItemType Directory -Name "My_New_Project"
    Set-Location "My_New_Project"
    New-Item "todo.txt"
    Add-Content "todo.txt" "Task 1: Learn Terminal"
    ```
3.  Save and close Notepad.
4.  **Run it:** Type `./morning.ps1` in your PowerShell window.

