Here’s an optimized README for your repository:

---

# Next.js Boilerplate with ShadCN & i18n

Welcome to the **Next.js Boilerplate**! This project is set up with **ShadCN** for modern UI components and **i18n** for seamless internationalization, providing a strong foundation for building scalable, multilingual web applications.

## 🚀 Features

- **Next.js**: A powerful React framework for production-ready applications.
- **ShadCN Components**: Modern, reusable UI components with a consistent design system.
- **i18n Integration**: Fully set up for multi-language support with `i18next`.
- **TypeScript**: Fully typed for scalability and developer confidence.
- **ESLint & Prettier**: Linting and formatting to keep the code clean and consistent.
- **Folder Structure**: Organized structure for easy scalability.

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version >= 16)
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/sr-tamim/nextjs-boilerplate.git
cd nextjs-boilerplate
npm install
```

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## 📂 Folder Structure

```plaintext
├── app/               # Application-specific files (routes, layouts, pages)
│   ├── i18n/          # Translation files (en.json, es.json, etc.)
│   ├── page.tsx       # Main page file
├── components/        # Reusable UI components
├── lib/               # Helper utilities and configurations
├── public/            # Static assets (images, fonts, etc.)
├── styles/            # Global and component-specific styles
├── next.config.js     # Next.js configuration
├── tsconfig.json      # TypeScript configuration
```

---

## 🎨 Using ShadCN Components

ShadCN is preconfigured for modern and customizable UI components. 

### Example Usage

```tsx
import { Button } from '@shadcn/ui';

export default function Example() {
  return <Button onClick={() => alert('Hello!')}>Click Me</Button>;
}
```

For the full component list and usage, visit the [ShadCN GitHub Repository](https://github.com/ShadCN).

---

## 🌍 i18n Setup

Internationalization is set up using `i18next`. Language JSON files are located in the `app/i18n/` folder.

### Example Translation File (`app/i18n/en.json`)

```json
{
  "welcome": "Welcome to Next.js with i18n!"
}
```

### Accessing Translations

```tsx
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return <h1>{t('welcome')}</h1>;
}
```

### Switching Languages

```tsx
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const switchLanguage = (lang: string) => i18n.changeLanguage(lang);

  return (
    <div>
      <button onClick={() => switchLanguage('en')}>English</button>
      <button onClick={() => switchLanguage('es')}>Español</button>
    </div>
  );
}
```

---

## 🧪 Testing

Run tests using the following command:

```bash
npm run test
```

---

## 🛠️ Deployment

The easiest way to deploy this app is using [Vercel](https://vercel.com).

1. Push your repository to GitHub.
2. Connect your GitHub repo to Vercel.
3. Deploy in one click.

For more information, refer to the [Next.js Deployment Guide](https://nextjs.org/docs/app/building-your-application/deploying).

---

## 📖 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [ShadCN GitHub Repository](https://github.com/ShadCN)
- [i18next Documentation](https://react.i18next.com/)

---

## 💬 Contributing

Contributions are welcome! Feel free to fork this repository, create a branch, and submit a pull request.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

--- 

This README is tailored for your boilerplate repository and highlights the features you've integrated.
