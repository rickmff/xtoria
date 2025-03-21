import { Locale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default function IndexPage({ params }: Props) {
  const { locale } = use(params);

  setRequestLocale(locale);

  const t = useTranslations('home');

  return (
    <div className="bg-black text-white">
      <div className="relative z-10 flex flex-col items-center justify-center h-screen bg-[url('/images/hero.png')] bg-cover bg-center">
        <div className="mb-10">
          <Image src="/images/logo.webp" alt="XTORIA" width={350} height={100} />
        </div>

        <div className="fixed bottom-10 right-10 flex gap-4 flex-col items-end">

          <div className="flex bg-white/90 rounded-full overflow-hidden p-1">
            <Link
              href="/en"
              className={` text-black px-3 py-1 text-xs rounded-full flex flex-row items-center gap-2 transition-all duration-500 ease-in-out transform hover:scale-105 ${locale === 'en'
                ? 'bg-red-600 text-white shadow-md'
                : 'hover:bg-gray-100'
                }`}
            >
              <Image
                src="/images/eng-flag.png"
                alt="EN"
                width={20}
                height={20}
                className="transition-transform duration-500 hover:rotate-12"
              />
              <span className="relative">
                EN
              </span>
            </Link>
            <Link
              href="/pt"
              className={` text-black px-3 py-1 text-xs rounded-full flex flex-row items-center gap-2 transition-all duration-500 ease-in-out transform hover:scale-105 ${locale === 'pt'
                ? 'bg-red-600 text-white shadow-md'
                : 'hover:bg-gray-100'
                }`}
            >
              <Image
                src="/images/pt-flag.webp"
                alt="PT"
                width={20}
                height={20}
                className="transition-transform duration-500 hover:rotate-12"
              />
              <span className="relative">
                PT
              </span>
            </Link>
          </div>
          <button className="bg-red-600 text-white px-4 py-2 rounded">
            {t('makeReservation')}
          </button>
        </div>

        <div className="absolute bottom-10 left-16 text-sm">
          <div className="flex gap-14 mb-12">
            {[1, 2, 3].map((i) => (
              <Image
                key={`michelin-${i}`}
                src={`/images/michelin${i}.png`}
                alt="Award"
                width={50}
                height={50}
              />
            ))}
            <Image src="/images/travelers-choice.png" alt="Award" width={50} height={50} />
          </div>
          <p>{t('address')}</p>
        </div>
      </div>

      <div className="relative h-[80vh] px-8 md:px-16 flex flex-col items-center md:flex-row">
        <div className="w-1/3">
          <h2 className="text-2xl mb-6">{t('hello')}</h2>
          <p className="mb-4">{t('aboutLine1')}</p>
          <p className="mb-4">{t('aboutLine2')}</p>
          <p className="mb-4">{t('aboutLine3')}</p>
          <p className="mb-6">{t('aboutLine4')}</p>

          <button className="bg-red-600 text-white px-4 py-2 rounded">
            {t('seeMenu')}
          </button>
        </div>

        <div className="absolute right-0">
          <Image
            src="/images/arrabida.png"
            alt={t('aboutImageAlt')}
            width={1000}
            height={400}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Food Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative h-100">
          <Image
            src="/images/food-1.png"
            alt={t('galleryImage1Alt')}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-100">
          <Image
            src="/images/food-2.png"
            alt={t('galleryImage2Alt')}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-100">
          <Image
            src="/images/food-3.png"
            alt={t('galleryImage3Alt')}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Special Menu Section */}
      <div className="py-16 px-8 md:px-16 text-center">
        <h2 className="text-2xl mb-10">{t('specialLunch')}</h2>
        <p className="mb-4">{t('specialDate')}</p>
        <p className="mb-6">{t('coverCharge')}</p>

        <div className="max-w-md mx-auto">
          <p className="mb-4">{t('menuItem1')}</p>
          <p className="mb-4">{t('menuItem2')}</p>
          <p className="mb-4">{t('menuItem3')}</p>
          <p className="mb-4">{t('menuItem4')}</p>
          <p className="mb-4">30€</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-10 px-8 md:px-16 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-4 mb-6 md:mb-0">
            <Link href="#" aria-label="Facebook">
              <span className="text-xl">f</span>
            </Link>
            <Link href="#" aria-label="Instagram">
              <span className="text-xl">Ⓘ</span>
            </Link>
            <Link href="#" aria-label="TripAdvisor">
              <span className="text-xl">⊙</span>
            </Link>
          </div>

          <div className="text-sm mb-6 md:mb-0">
            <p>{t('openingHours')}</p>
            <p>{t('openingHours2')}</p>
            <p>{t('openingHours3')}</p>
          </div>

          <div className="text-sm">
            <p>{t('address')}</p>
            <p className="text-right">{t('phone')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
