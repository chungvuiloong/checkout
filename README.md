# Supermarket E-Commerce Application

This is a Supermarket web application built with React 19, TypeScript, TailwindCSS, and Vite.

## Tech Stack
- **React 19.2.0** - Latest React with modern features
- **TypeScript 5.9.3** - Full type safety throughout
- **Vite 7.2.4** - Fast build tool and dev server
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **ESLint** - Code quality and consistency

## Features

### Core Functionality
- **Product Catalog**: Browse 10 grocery products across 6 categories (fruit, vegetable, dairy, bakery, snack, beverage)
- **Shopping Cart**: Real-time cart management with add/remove functionality and persistent state
- **Dynamic Pricing**: Weekly bundle offers that vary by day of the week
- **Category Filtering**: Filter products by type or view all
- **Stock Management**: Real-time inventory tracking with out-of-stock indicators
- **Responsive Design**: Mobile-first design that adapts to all screen sizes

### Unique Features
- **Day-Based Promotions**: Bundle offers automatically activate on specific days (e.g., "2 for €0.45" on Sundays)
- **Smart Price Calculation**: Automatically applies the best pricing mix of bundles and regular prices
- **Visual Discount Tags**: Shows active promotions with bundle details
- **Empty Cart Illustration**: Friendly visual feedback when cart is empty

## Project Structure

```
src/
├── components/
│   ├── common/              # Reusable UI components
│   │   ├── Button.tsx       # Configurable button with variants
│   │   ├── DiscountTag.tsx  # Bundle offer display
│   │   ├── Filter.tsx       # Category filter buttons
│   │   ├── H.tsx            # Dynamic heading component
│   │   └── ProductCard.tsx  # Dual-mode product display
│   └── layout/              # Layout components
│       ├── Cart.tsx         # Shopping cart sidebar
│       ├── Container.tsx    # Responsive container wrapper
│       ├── Content.tsx      # Main product grid
│       └── Header.tsx       # App header with logo
├── context/
│   └── CartContext.tsx      # Global cart state management
├── data/
│   └── products.ts          # Product data (10 items)
├── utils/
│   ├── helpers/
│   │   ├── cartUtils.tsx    # Cart helper functions
│   │   ├── dayUtils.tsx     # Date-based offer logic
│   │   └── productUtils.tsx # Product operations (13 functions)
│   ├── hook/
│   │   └── useCart.tsx      # Cart business logic hook
│   └── types/
│       ├── cart.ts          # CartItem type
│       ├── filter.ts        # Filter types
│       └── product.ts       # Product type
├── App.tsx                  # Root component
├── main.tsx                 # Entry point
└── index.css                # Global styles
```

## Getting Started

### Prerequisites
- Node.js (version 16 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd checkout

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# The app will be available at http://localhost:5173
```

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Key Architectural Decisions

### State Management
- **Context API** for global cart state (lightweight alternative to Redux)
- **Custom hooks** pattern for clean separation of concerns
- **Local state** with useState for UI-specific states

### Component Design
- **Dual-mode components**: ProductCard renders differently for catalog vs. cart
- **Separation of concerns**: Common components vs. layout components
- **React.memo()**: Performance optimization for layout components

### Type Safety
- Comprehensive TypeScript interfaces for all data structures
- Strict TypeScript configuration with type-aware linting
- Type-safe helper functions throughout the application

### Pricing System
The bundle discount algorithm:
1. Calculates number of full bundles from cart quantity
2. Applies bundle price to full bundles
3. Adds remainder items at regular price
4. Only applies on days specified in the offer

Example: 5 apples with "2 for €0.45" offer:
- 2 bundles (4 apples) = 2 × €0.45 = €0.90
- 1 remaining apple = €0.50
- Total = €1.40

### Utility Functions
- **productUtils.tsx**: 13 functions for product operations
  - Getters (by ID, by type)
  - Stock checkers and updaters
  - Price calculations
  - Offer availability checks
- **cartUtils.tsx**: Cart item management
- **dayUtils.tsx**: Date-based offer validation

## Component Props

### ProductCard
```typescript
interface ProductCardProps {
  productId: number;
  inCart?: boolean;
}
```

### Button
```typescript
interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  method?: 'increase' | 'decrease' | 'remove' | 'add-to-cart';
  disabled?: boolean;
  belowImage?: boolean;
}
```

## Styling

- **Tailwind CSS** utility classes throughout
- **Custom theme** with primary brand color (#028194 - teal)
- **Custom font**: Haiilo Matter with 5 weight variants (300-700)
- **Responsive breakpoints**: Mobile-first approach with sm/md/lg variants

## Data Structure

### Product
```typescript
interface Product {
  id: number;
  name: string;
  type: ProductType;
  price: number;
  quantityInStock: number;
  imgUrl: string;
  weeklyBundleOffer?: {
    bundleQuantity: number;
    bundlePrice: number;
    availableOnDays: number[];  // 0=Sunday to 6=Saturday
  };
}
```

### CartItem
```typescript
interface CartItem {
  id: number;
  quantity: number;
}
```

## Future Enhancements

Potential improvements for production:
- Persist cart state to localStorage or online Cloud
- Backend integration for product data and inventory
- User authentication and order history
- Payment processing integration
- Advanced filtering (price range, search)
- Product detail pages
- Checkout flow with address and payment
- Admin dashboard for product management


## License

This project is part of the Haiilo company portfolio.
