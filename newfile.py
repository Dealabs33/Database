import tkinter as tk
from tkinter import messagebox
import numpy as np


def calculate():
    try:
        # Fetch the matrices from the input fields
        matrix_a = np.array([[float(a.get()) for a in row] for row in matrix_a_entries])
        matrix_b = np.array([[float(b.get()) for b in row] for row in matrix_b_entries])
        operation = operation_var.get()

        result = None
        if operation == "Determinant (A)":
            result = np.linalg.det(matrix_a)
        elif operation == "Determinant (B)":
            result = np.linalg.det(matrix_b)
        elif operation == "Addition":
            result = matrix_a + matrix_b
        elif operation == "Subtraction":
            result = matrix_a - matrix_b
        elif operation == "Multiplication":
            result = np.dot(matrix_a, matrix_b)
        elif operation == "Transpose (A)":
            result = matrix_a.T
        elif operation == "Transpose (B)":
            result = matrix_b.T

        # Display the result
        result_text.delete(1.0, tk.END)
        result_text.insert(tk.END, f"Result:\n{result}")
    except Exception as e:
        messagebox.showerror("Error", str(e))


def create_matrix_fields(rows, cols, parent):
    entries = []
    for i in range(rows):
        row_entries = []
        for j in range(cols):
            entry = tk.Entry(parent, width=5)
            entry.grid(row=i, column=j, padx=2, pady=2)
            row_entries.append(entry)
        entries.append(row_entries)
    return entries


def update_matrix_a():
    global matrix_a_entries
    for widget in matrix_a_frame.winfo_children():
        widget.destroy()
    rows = int(rows_a_var.get())
    cols = int(cols_a_var.get())
    matrix_a_entries = create_matrix_fields(rows, cols, matrix_a_frame)


def update_matrix_b():
    global matrix_b_entries
    for widget in matrix_b_frame.winfo_children():
        widget.destroy()
    rows = int(rows_b_var.get())
    cols = int(cols_b_var.get())
    matrix_b_entries = create_matrix_fields(rows, cols, matrix_b_frame)


# GUI setup
root = tk.Tk()
root.title("Matrix Solver")

# Matrix A configuration
matrix_a_frame = tk.LabelFrame(root, text="Matrix A")
matrix_a_frame.grid(row=0, column=0, padx=10, pady=10)

rows_a_var = tk.StringVar(value="2")
cols_a_var = tk.StringVar(value="2")

tk.Label(root, text="Rows (A):").grid(row=1, column=0, sticky="e")
tk.Entry(root, textvariable=rows_a_var, width=5).grid(row=1, column=1)
tk.Label(root, text="Cols (A):").grid(row=2, column=0, sticky="e")
tk.Entry(root, textvariable=cols_a_var, width=5).grid(row=2, column=1)

tk.Button(root, text="Update Matrix A", command=update_matrix_a).grid(row=3, column=0, pady=5)

# Matrix B configuration
matrix_b_frame = tk.LabelFrame(root, text="Matrix B")
matrix_b_frame.grid(row=0, column=2, padx=10, pady=10)

rows_b_var = tk.StringVar(value="2")
cols_b_var = tk.StringVar(value="2")

tk.Label(root, text="Rows (B):").grid(row=1, column=2, sticky="e")
tk.Entry(root, textvariable=rows_b_var, width=5).grid(row=1, column=3)
tk.Label(root, text="Cols (B):").grid(row=2, column=2, sticky="e")
tk.Entry(root, textvariable=cols_b_var, width=5).grid(row=2, column=3)

tk.Button(root, text="Update Matrix B", command=update_matrix_b).grid(row=3, column=2, pady=5)

# Operations dropdown
operation_var = tk.StringVar(value="Determinant (A)")
operations = [
    "Determinant (A)",
    "Determinant (B)",
    "Addition",
    "Subtraction",
    "Multiplication",
    "Transpose (A)",
    "Transpose (B)",
]
tk.OptionMenu(root, operation_var, *operations).grid(row=4, column=1, columnspan=2, pady=10)

# Calculate button
tk.Button(root, text="Calculate", command=calculate).grid(row=5, column=1, columnspan=2, pady=10)

# Result display
result_text = tk.Text(root, width=50, height=10)
result_text.grid(row=6, column=0, columnspan=4, padx=10, pady=10)

# Initialize matrices
matrix_a_entries = []
matrix_b_entries = []
update_matrix_a()
update_matrix_b()

root.mainloop()