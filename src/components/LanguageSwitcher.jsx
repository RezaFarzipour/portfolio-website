'use client';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchLang = (lang) => {
    const newPath = `/${lang}${pathname.slice(3)}`;
    router.push(newPath);
  };

  return (
    <div className="inline-flex rounded-lg overflow-hidden border border-gray-600 bg-[#1f2539] text-white">
    <button
      onClick={() => switchLang('fa')}
      className={`px-4 py-1 transition-colors duration-200 ${
        locale === 'fa'
          ? 'bg-purple-600 text-white'
          : 'hover:bg-gray-700 text-gray-300'
      }`}
    >
      فارسی
    </button>
    <button
      onClick={() => switchLang('en')}
      className={`px-4 py-1 transition-colors duration-200 ${
        locale === 'en'
          ? 'bg-purple-600 text-white'
          : 'hover:bg-gray-700 text-gray-300'
      }`}
    >
      English
    </button>
  </div>
  
  );
}
