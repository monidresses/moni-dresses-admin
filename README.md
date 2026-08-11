# Moni Dresses Admin

Admin control panel. Production hostname: `admin.monidresses.com`.

## Responsibilities
- Product and category CRUD
- Homepage/banner/content management
- Offers and coupons
- Customer and order management
- Delivery/payment settings
- Admin role management

All customer-facing catalog data is stored in Firestore and consumed by the B2C Client repository. Payment and shipping secrets remain server-side in Firebase Cloud Functions.
