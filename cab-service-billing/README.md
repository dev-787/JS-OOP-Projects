# 🚕 Cab Service Billing System

This project demonstrates how to use **Object-Oriented Programming (OOP)** concepts in JavaScript to create a simple cab billing system.

---

## 📌 Problem Statement

Build a cab service billing system where:
- The user inputs the **car type** (`Ac` or `Non-ac`)
- The user inputs the **kilometers travelled**
- Based on the input, the system calculates the total **bill amount**

---

## 🧠 OOP Concepts Used

- **Class**: `CabService`
- **Constructor**
- **Methods**: `accept()`, `calculate()`, `display()`

---

## 🧾 Billing Logic

| Car Type | Base Fare (up to 5 km) | Extra Fare per km |
|----------|------------------------|-------------------|
| AC       | ₹150                   | ₹10/km            |
| Non-AC   | ₹120                   | ₹8/km             |

---

## ▶️ How to Run

1. Install `prompt-sync` if not already installed:
```bash
   npm install prompt-sync
```

2. Run the program:
```
node App.js
```