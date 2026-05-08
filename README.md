# 🐉 Dragon News

A high-performance, modern news portal built with **Next.js 15**, **React 19**, and **Tailwind CSS**. **Dragon News** delivers a seamless experience for browsing global headlines and categorized news with a focus on speed, SEO, and minimalist design.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://dragon-news-adil.vercel.app/)
[![Tech Stack](https://img.shields.io/badge/Stack-MERN%20/%20Next.js-blue?style=for-the-badge)](https://github.com/SyntaxAdil/dragon-news)

---

## ✨ Features

- **Dynamic Routing:** Leveraging Next.js App Router for blazing-fast navigation.
- **SEO Optimized:** Dynamic metadata generation for every news article.
- **Modern UI/UX:** Clean, minimalist interface using **Tailwind CSS** and **DaisyUI**.
- **Category-based Filtering:** Easily browse news by technology, sports, politics, etc.
- **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop views.
- **Skeleton Loading:** Smooth user experience during data fetching with custom blur placeholders.

---

## 🚀 Tech Stack

- **Framework:** [Next.js 16+](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🛠️ Installation & Setup

Follow these steps to run the project locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/SyntaxAdil/dragon-news.git](https://github.com/SyntaxAdil/dragon-news.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd dragon-news
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```
5.  **Open in your browser:**
    Visit `http://localhost:3000` to see the app.

---

## 📂 Project Structure

```text
├── public/          # Static assets (favicons, logos)
├── src/
│   ├── app/         # App Router (Pages, Layouts, API Routes)
│   ├── components/  # Reusable UI Components
│   ├── lib/         # API fetching and helper functions
│   └── styles/      # Global CSS and Tailwind config
└── tailwind.config.js
```
````

---

## 📝 Key Implementation

On the news details page, I implemented **Dynamic Metadata** to ensure each article is SEO-friendly:

```javascript
export async function generateMetadata({ params }) {
  const { id } = await params;
  const news = await getNewsDeatiles(id);
  return {
    title: `${news[0]?.title} | Dragon News`,
    description: news[0]?.details.slice(0, 150),
  };
}
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/SyntaxAdil/dragon-news/issues).

---

## 👤 Author

**Abdur Rahman (Adil)**

- GitHub: [@SyntaxAdil](https://github.com/SyntaxAdil)

---
