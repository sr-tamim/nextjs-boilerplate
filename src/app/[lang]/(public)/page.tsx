import LocaleSwitcher from '@/components/shared/LocaleSwitcher';
import getDictionary from '@/i18n/getDictionary';
import Link from 'next/link';

export default async function Home({
  params,
}: {
  params: Promise<{
    lang: string;
  }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <div className="h-[90vh] grid place-content-center">
      <h1 className="text-4xl font-bold text-center">{dict.public.welcome}</h1>
      <div className="flex justify-center mt-4 text-xl">
        <Link href={`/${lang}/login`}>{dict.login.title}</Link>
      </div>
      <div className="text-center mt-8">
        <LocaleSwitcher />
      </div>
    </div>
  );
}
