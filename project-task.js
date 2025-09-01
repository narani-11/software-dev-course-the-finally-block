/*
===========================================
📂 File Processing Simulation with Exceptions
===========================================

🎯 Objective:
This activity will help students:

- Identify and explain JavaScript's standard exceptions through practical examples
- Implement `finally` blocks to manage resources and ensure consistent cleanup

---
📘 Scenario:
You’ve been hired to create a system that simulates file processing for a virtual library.

The system must:
- Validate user input (file names and data)
- Simulate file reading/writing operations
- Ensure all resources (e.g., file handles) are closed, even if errors occur

---
🧭 Instructions:

Step 1: Debug Standard Exceptions  
- Run the starter code and identify the standard exceptions being thrown  
- Correct the issues and observe output

Step 2: Add Input Validation and Custom Exceptions  
- Validate:
  • Missing file names 
  • Non-string file data  
  • Empty string data 

Step 3: Implement a `finally` Block  
- Simulate releasing resources, regardless of whether an error occurred

Step 4: Test Your Solution  
- Use a variety of inputs to confirm the `finally` block always executes
*/

// ============================================
// 🛠️ Starter Code: processFile Function
// ============================================
class LibraryItem {
    constructor(title, id) {
        this.title = title;
        this.id = id;
        this.isAvailable = true;
    }
    checkOut() {
        if(this.isAvailable) {
            this.isAvailable = false;
            console.log(`Thank you for checking out ${this.title}.  It will be due back in two weeks.`);
        } else {
            console.log(`${this.title} is currently not available.`)
        }
    }
   returnItem() {
        if(!this.isAvailable) {
            this.isAvailable = true;
            console.log(`Thank you for returning ${this.title}.`);
        } else {
            console.log(`${this.title} is currently not checked out.`)
        }
    }
}
class Book extends LibraryItem {
    constructor (title, id, author, genre) {
        super (title, id);
        this.author = author;
        this.genre = genre;
    }
}
class DVD extends LibraryItem {
    constructor (title, id, director, duration) {
        super (title, id);
        this.director = director;
        this.duration = duration;
    }
}
class Magazine extends LibraryItem {
    constructor (title, id, pubilsher, issueNumber) {
        super (title, id);
        this.pubilsher = pubilsher;
        this.issueNumber = issueNumber;
    }
}
function processFile(fileName, fileData) {
  try {
    // TODO: Add input validation here
    if (!fileName) {
            throw new ReferenceError("File name is missing");
        } if (typeof fileData !== "string") {
            throw new TypeError("File data must be a string");
        }
        if (fileData.trim() === "") {
            throw new Error("File data cannot be empty");
        }
    // TODO: Implement simulated file processing here
    console.log(`Processing file: ${fileName}`);
    console.log(`File content: ${fileData}`);
    
    // TODO: Add simulated file operations (reading/writing)
    
  } catch (err) {
    // TODO: Implement error handling
    console.error("Error:", err.message);
  }
  // TODO: Implement a finally block to close resources
  finally {
        console.log("Finished processing attempt.\n");
    }
}

// ============================================
// 🧪 Test Cases Below
// ============================================

processFile(); // ❌ ReferenceError: File name is missing
processFile("myFile.txt", 42); // ❌ TypeError: File data must be a string
processFile("myFile.txt", ""); // ❌ Error: File data cannot be empty
processFile("myFile.txt", "Hello, world!"); // ✅ Should process successfully
