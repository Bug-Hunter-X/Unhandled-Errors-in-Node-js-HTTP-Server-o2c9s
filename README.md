# Unhandled Errors in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: insufficient error handling in HTTP servers. The `bug.js` file showcases a server without proper error handling, making it vulnerable to crashes from unexpected events.  The `bugSolution.js` provides an improved version with robust error handling.

## Bug

The original server lacks error handling for scenarios such as network issues or request timeouts. This could lead to the server silently failing or crashing without informative error messages, making debugging difficult.

## Solution

The solution involves using `try...catch` blocks and event listeners to gracefully handle errors.  This ensures that even if an error occurs, the server remains operational and provides useful error information.