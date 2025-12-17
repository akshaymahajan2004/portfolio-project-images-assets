# 📂 Asset Vault 

A lightweight, static image gallery built with **React** and **Vite**. This project serves as a personal "Content Delivery Network" (CDN) to host and manage static assets (images, logos, screenshots) for my main developer portfolio.

### 🚀 Why I Built This
My main portfolio uses a dynamic **Admin Dashboard** to manage projects and skills. While Firebase Storage handles uploads, I needed a fast, reliable, and permanent way to host static project screenshots and assets without relying on complex storage buckets or temporary links. 

This project allows me to:
1. Upload images to the repository.
2. Automatically deploy them to a live URL (via Vercel).
3. Copy the permanent, optimized link with one click.
4. Paste the link directly into my Portfolio Admin Panel.

### 🛠️ Tech Stack
* **Framework:** React + Vite
* **Language:** TypeScript
* **Styling:** CSS (Cyberpunk/Glassmorphism Theme)
* **Icons:** Lucide React
* **Deployment:** Vercel

### ⚡ How It Works
1.  **Upload:** Drop images into the `/public` folder.
2.  **Register:** Add the filename to the `myImages` array in `App.tsx`.
3.  **Deploy:** Push changes to GitHub (Vercel auto-deploys).
4.  **Use:** The live site generates a "Copy Link" button for every asset, providing the clean URL needed for my portfolio.

---
*Maintained by Akshay Mahajan*