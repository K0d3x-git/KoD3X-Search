# KoD3X-Search

A lightweight JavaScript library that adds dynamic search functionality to any web page with minimal setup.

## ✨ Features

- **Simple Setup**: Just add HTML attributes to your elements
- **Zero Dependencies**: Pure vanilla JavaScript, no external libraries needed
- **Real-time Filtering**: Updates as the user types
- **Smooth Animations**: Elegant CSS transitions for hiding/showing elements
- **Responsive**: Works on all devices and screen sizes
- **No Configuration**: Works out of the box

## 🚀 Installation

### Direct Download

Download the files and include them in your project:

```html
<script src="path/to/KoD3X-Search.js"></script>
```

Or use the minified version:

```html
<script src="path/to/KoD3X-Search.min.js"></script>
```

## 🎯 Quick Start

1. Add the script to your HTML:
```html
<script src="src/KoD3X-Search.js"></script>
```

2. Add the `kod3x-search-input` attribute to your search input:
```html
<input type="text" kod3x-search-input="products" placeholder="Search...">
```

3. Add the `kod3x-search` attribute to elements you want to filter:
```html
<div kod3x-search="products">Product One</div>
<div kod3x-search="products">Product Two</div>
<div kod3x-search="products">Product Three</div>
```

4. Optional: Add an element to display "No results found":
```html
<div id="no-results" style="display: none;">
  No results found
</div>
```

5. That's it! The library initializes automatically.

## 📖 Example

An example implementation is included in the [`demos/index.html`](demos/index.html) file. This demonstration showcases:

- Basic implementation with modern styling
- Product catalog with multiple filterable items
- Search through complete textual content (name, category, description, price, tags)
- Responsive layout for all device sizes
- "No results found" message that appears when no matches are found
- Smooth animations for hiding/showing elements

To run the example:
1. Open the [`Demos`](https://k0d3x-git.github.io/KoD3X-Search/demos/) file in your browser
2. Try typing in the search box to see real-time filtering
3. Search for product names, categories, or keywords (e.g., "iPhone", "laptop", "Sony")

## 🔧 Advanced Usage

### Multiple Search Groups

You can have multiple independent search groups on the same page:

```html
<!-- Products Search -->
<input type="text" kod3x-search-input="products" placeholder="Search products...">
<div kod3x-search="products">Product One</div>
<div kod3x-search="products">Product Two</div>

<!-- Users Search -->
<input type="text" kod3x-search-input="users" placeholder="Search users...">
<div kod3x-search="users">User One</div>
<div kod3x-search="users">User Two</div>
```

### Custom Styling for No Results

```html
<div id="no-results">
  <h3>No items found</h3>
  <p>Try adjusting or modifying your search criteria</p>
</div>
```

### CSS Classes for Animations

The library uses CSS classes for animations:

```css
/* Element being hidden (with transition) */
.kod3x-search-hidden {
  opacity: 0;
  transform: scale(0.95);
  transition: all 0.3s ease;
}

/* Element completely hidden */
.kod3x-search-completely-hidden {
  display: none !important;
}
```

## 📚 API Reference

### HTML Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| `kod3x-search-input="id"` | Add to input elements to create a search field | `<input kod3x-search-input="products">` |
| `kod3x-search="id"` | Add to elements that should be filtered | `<div kod3x-search="products">Item</div>` |

### JavaScript Methods

| Method | Description |
|--------|-------------|
| `new KoD3XSearch()` | Creates a new instance and initializes the library |
| `filterItems(searchId, query)` | Filters items for a given search group |

### Special Elements

| Element | Description |
|---------|-------------|
| `#no-results` | Element displayed when no results are found (optional) |

## 🌐 Browser Support

KoD3X-Search works in all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
- Chrome for Android (latest)
- Safari iOS (latest)

## ⚡ Performance

KoD3X-Search is designed to be extremely lightweight and performant:

- No external dependencies
- Uses efficient DOM selectors
- Smooth CSS animations with transitions
- Full textual content-based search
- Minimal reflows and repaints

## 🎨 Customization

### Custom Matching Algorithm

If you need to customize how matches are determined, you can extend the library:

```javascript
// Save the original prototype method
const originalFilterItems = KoD3XSearch.prototype.filterItems;

// Override with custom logic
KoD3XSearch.prototype.filterItems = function(searchId, query) {
  // Your custom implementation here
  // or call the original with custom behavior
  originalFilterItems.call(this, searchId, query);
}
```

### Custom CSS Styles

You can customize animations and appearance:

```css
/* Customize hiding animation */
.kod3x-search-hidden {
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Style for "no results" message */
#no-results {
  text-align: center;
  padding: 2rem;
  color: #666;
  font-style: italic;
}
```

---

**Developed with ❤️ by KoD3X**
