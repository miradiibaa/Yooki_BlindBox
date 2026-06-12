# Yooki Blind Box — E-Commerce Website

A cute blind box collectible e-commerce website built with vanilla HTML, CSS, and JavaScript — powered by PHP & MySQL on the backend.

---

## Features

- **Product Catalog** Browse new collections and gallery items
- **Shopping Cart** Add, update, and remove items with quantity control
- **Checkout** Supports Transfer Bank, COD, and DANA (e-wallet)
- **Promo Codes** Built-in discount system with multiple promo codes
- **Order Tracking** Track orders by order code or WhatsApp number
- **Admin Dashboard** View revenue charts, order management, and top products
- **Responsive** Works on mobile and desktop

---

## Project Structure

```
yooki/
├── index.html          # Homepage
├── products.html       # New collection page
├── detail.html         # Product detail page
├── gallery.html        # Gallery page
├── cart.html           # Shopping cart
├── checkout.html       # Checkout page
├── success.html        # Order success page
├── my-orders.html      # Order tracking page
├── contact.html        # Contact page
├── dashboard.html      # Admin dashboard
├── database.sql        # Database schema
├── api/
│   ├── db.php          # Database connection
│   ├── get-orders.php  # Fetch all orders
│   ├── get-order.php   # Fetch single order
│   ├── save-order.php  # Save new order
│   └── update-status.php # Update order status
└── assets/
    ├── css/style.css   # Global stylesheet
    ├── js/app.js       # Product data & cart logic
    └── img/            # Product images
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML, CSS, JavaScript (Vanilla) |
| Backend | PHP |
| Database | MySQL |
| Charts | Chart.js |
| Icons | Font Awesome 6.5 |
| Fonts | Google Fonts — Nunito |
| Local Server | XAMPP / WAMP / Laragon |

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/username/yooki.git
```

### 2. Move to server directory

```
XAMPP  → C:/xampp/htdocs/yooki
WAMP   → C:/wamp64/www/yooki
Laragon → C:/laragon/www/yooki
```

### 3. Import the database

1. Open **phpMyAdmin** → `http://localhost/phpmyadmin`
2. Create a new database called `yooki_db`
3. Import `database.sql`

### 4. Configure database connection

Edit `api/db.php`:

```php
$host = 'localhost';
$db   = 'yooki_db';
$user = 'root';
$pass = '';
```

### 5. Run the project

Open your browser and go to:

```
http://localhost/yooki/
```

---

## Promo Codes

| Code | Discount | Min. Order |
|------|----------|------------|
| `WELCOME` | 15% off | No minimum |
| `YOOKI10` | 10% off | Rp 100.000 |
| `NEWCOLLECT` | Rp 20.000 off | Rp 150.000 |

---

## Admin Dashboard

Access the admin dashboard at:

```
http://localhost/yooki/dashboard.html
```

Features :
- Revenue & order charts (7 days / 30 days)
- Top products by sales
- Payment method breakdown
- Order status management
- City distribution

---

## Pages Preview

| Page | Description |
|------|-------------|
| `/index.html` | Homepage with hero, collections, and gallery preview |
| `/products.html` | Full new collection listing |
| `/gallery.html` | Classic Yooki gallery |
| `/cart.html` | Shopping cart with promo code input |
| `/checkout.html` | Checkout with shipping & payment selection |
| `/my-orders.html` | Order tracking by code or WhatsApp number |
| `/dashboard.html` | Admin panel |

---
