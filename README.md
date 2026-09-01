# APEX IG Popup LOV Async Loading

A Dynamic Action JavaScript solution for Oracle APEX Interactive Grids that handles asynchronous resolution of a Popup LOV column's display value, complete with a "Loading..." indicator while the server call is in progress.

## 📌 Overview

When a user selects a value from the Popup LOV, a Dynamic Action is triggered and performs additional processing. Since the processing may take a short amount of time, the selected cell temporarily displays **"Loading..."** until the final value is available.

Once the AJAX process completes, the required value is set in the Popup LOV column and the related description is updated. If the AJAX process fails, the original selected value is restored.

## ✨ Features

- Oracle APEX Interactive Grid
- Popup LOV handling
- Asynchronous processing using AJAX
- Interactive Grid model API
- Dynamic Action integration
- Temporary "Loading..." indication
- Updating Popup LOV values using `{v, d}`
- Updating related grid columns
- AJAX success and error handling

## 🗂️ File

**`popup_lov_async_loading.js`**

The JavaScript handles the Interactive Grid record, captures the selected Popup LOV value, displays the temporary loading state, performs the AJAX request, and updates the required columns after processing.

## 📄 License

MIT License — feel free to use and modify for your own APEX projects.
