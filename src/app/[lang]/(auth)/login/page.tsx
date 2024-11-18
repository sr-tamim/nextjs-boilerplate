import getDictionary from '@/i18n/getDictionary';

export default async function Home({
  params,
}: {
  params: Promise<{
    lang: string;
  }>;
}) {
  const dict = await getDictionary((await params).lang);
  return <h1 className="text-4xl font-bold text-center my-12">{dict.login.title}</h1>;
}
