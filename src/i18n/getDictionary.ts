import 'server-only';

const dictionaries = {
  en: () => import('@/i18n/dictionaries/en.json').then((mod) => mod.default),
  bn: () => import('@/i18n/dictionaries/bn.json').then((mod) => mod.default),
};

const getDictionary = async (locale: string) =>
  dictionaries[locale as keyof typeof dictionaries]() ?? dictionaries.en();

export default getDictionary;
