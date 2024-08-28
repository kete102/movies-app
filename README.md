# 🎬 Movie Search App

This project is a web application that allows users to search for movies using a movie API. It provides a simple interface to input a search term and filter results. Additionally, it includes advanced functionalities such as movie sorting, error handling, and performance optimization using **debounce**, **useCallback**, **useMemo**, and **useRef**.

## 🚀 Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **Vite**: A fast and optimized build tool for React.
- **Bootstrap**: CSS library for creating a responsive design.
- **API Fetch**: To make HTTP requests to an external movie API.

## 📂 Project Structure

```plaintext
src/
│
├── components/             # Reusable UI components
│   ├── Filters.tsx
│   ├── MovieItem.tsx
│   └── MoviesList.tsx
│
├── hooks/                  # Custom hooks for reusable logic
│   ├── useMovies.ts
│   └── useSearch.ts
│
├── services/               # Services to interact with APIs
│   └── movies.ts
│
├── App.tsx                 # Main application component
└── index.tsx               # Application entry point

```

## 📝 Features

**1. Movie Search**

The application allows users to search for movies by name using an input field. The search is handled by a custom hook useSearch that controls the search term state and manages input validation.

**2. Sort Movies**

A sort button toggles the order (ascending/descending) of the movie list. This is managed through the useMovies hook, which makes a new API request when the sort state changes.

**3. Debounce Search**

Implemented using the useRef hook and setTimeout. The debounce function prevents API requests from firing each time the user types in the search input. Instead, it waits for a predefined time (e.g., 500 ms) after the user stops typing.

**4. Optimization with useCallback and useMemo**

useCallback: Used to memoize event handler functions (handleSubmit, handleSort, etc.) to avoid recreating them on every render, improving performance.
useMemo: Used to memoize computed results, such as the sorted movie list, avoiding costly recalculations on each render.

**5. Error Handling**

Search errors (such as an empty or too-short search term) are managed and displayed to the user through the error state in the useSearch hook.
