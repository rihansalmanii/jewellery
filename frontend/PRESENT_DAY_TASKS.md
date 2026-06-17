# 📅 Day 2 Tasks — E-commerce Frontend (Cart + Product Flow)

## 🟢 1. Improve Product Details Page UI

**Goal:** Make product page look like a real e-commerce site

### Tasks:

* [x] Display multiple product images (gallery/slider)
* [x] Show **sale price + original price (strike-through)**
* [x] Add **quantity selector (+ / -)**
* [x] Improve layout (spacing, alignment, font sizes)

---

## 🟢 2. Create Cart Context (Global State)

**Goal:** Manage cart globally

### Tasks:

* [x] Create `CartContext.jsx`
* [x] Add `CartProvider`
* [x] Store cart items in state
* [x] Wrap app with provider

---

## 🟢 3. Implement Add to Cart

**Goal:** Make "Add to Cart" functional

### Tasks:

* [x] Add product to cart on button click
* [x] Store:

  * id
  * name
  * price
  * image
  * quantity
* [ ] If product exists → increase quantity

---

## 🟢 4. Create Cart Page

**Goal:** Display added products

### Tasks:

* [ ] Create `/cart` route
* [ ] Show product details:

  * image
  * name
  * price
  * quantity
* [ ] Add:

  * remove item button
  * increase/decrease quantity

---

## 🟢 5. Cart Total Calculation

**Goal:** Show total pricing

### Tasks:

* [ ] Calculate total items
* [ ] Calculate total price
* [ ] Display subtotal

---

## 🟢 6. Persist Cart (LocalStorage)

**Goal:** Save cart after refresh

### Tasks:

* [ ] Save cart to localStorage
* [ ] Load cart on app start

---

## 🟢 7. Buy Now Button (Basic Flow)

**Goal:** Prepare checkout

### Tasks:

* [ ] Navigate to `/checkout`
* [ ] Pass selected product

---

## 🟢 8. Navbar Cart Indicator

**Goal:** Show cart count

### Tasks:

* [ ] Display total cart items
* [ ] Update dynamically

---

## 🟡 Optional (If Time Left)

* [ ] Add loading states
* [ ] Add error handling UI
* [ ] Format prices (₹50,000)

---

## ✅ End of Day Outcome

* Functional cart system
* Improved product page UI
* Basic e-commerce flow ready

---
