<template>
  <div>
    <component :is="'script'" type="application/ld+json" v-html="schemaJson" />
  </div>
</template>

<script setup>
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://bugaev-web.ru/#business",
      "name": "Бугаев Веб",
      "alternateName": "Bugaev Web",
      "description": "Комплексный digital-абонемент для салонов красоты и клиник Москвы. Разработка сайта, Telegram-бот для записи клиентов, ведение Instagram и Telegram-канала, настройка CRM YCLIENTS — всё за 50 000 ₽ в месяц. Основатель — Бугаев Дмитрий.",
      "url": "https://bugaev-web.ru/",
      "founder": {
        "@type": "Person",
        "name": "Бугаев Дмитрий",
        "sameAs": [
          "https://instagram.com/dmnbugaev_",
          "https://t.me/bugggd"
        ]
      },
      "priceRange": "50000 ₽/месяц",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Москва",
        "addressCountry": "RU"
      },
      "areaServed": [
        { "@type": "City", "name": "Москва" },
        { "@type": "AdministrativeArea", "name": "Московская область" }
      ],
      "serviceType": "Digital маркетинг, SMM, разработка сайтов для салонов красоты",
      "sameAs": [
        "https://t.me/bugggd",
        "https://instagram.com/dmnbugaev_"
      ]
    },
    {
      "@type": "Service",
      "name": "Digital-абонемент для салона красоты — Бугаев Веб",
      "provider": { "@id": "https://bugaev-web.ru/#business" },
      "description": "Ежемесячная подписка: сайт-визитка на Nuxt.js, Telegram-бот для онлайн-записи, ведение Instagram и Telegram-канала (3-4 поста в неделю), настройка CRM YCLIENTS, личный менеджер — Бугаев Дмитрий.",
      "offers": {
        "@type": "Offer",
        "price": "50000",
        "priceCurrency": "RUB",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "50000",
          "priceCurrency": "RUB",
          "unitText": "месяц"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Что входит в абонемент Бугаев Веб",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Сайт-визитка для салона красоты на Nuxt.js" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Telegram-бот для онлайн-записи клиентов" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ведение Instagram салона красоты" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ведение Telegram-канала салона красоты" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Настройка CRM YCLIENTS" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Личный менеджер в Telegram" } }
        ]
      }
    },
    {
      "@type": "Person",
      "@id": "https://bugaev-web.ru/#founder",
      "name": "Бугаев Дмитрий",
      "jobTitle": "Основатель Бугаев Веб — digital-специалист для салонов красоты",
      "worksFor": { "@id": "https://bugaev-web.ru/#business" },
      "url": "https://bugaev-web.ru/",
      "sameAs": [
        "https://t.me/bugggd",
        "https://instagram.com/dmnbugaev_"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Как салону красоты начать зарабатывать больше?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Чтобы салон красоты начал зарабатывать больше, нужно выстроить систему привлечения и удержания клиентов: активные соцсети с регулярными постами, сайт-визитка для доверия, Telegram-бот для удобной онлайн-записи и CRM для учёта клиентов. Бугаев Веб предоставляет всё это в рамках одной подписки за 50 000 ₽/мес."
          }
        },
        {
          "@type": "Question",
          "name": "Сколько стоит ведение соцсетей для салона красоты?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Комплексный digital-абонемент от Бугаев Веб стоит 50 000 ₽ в месяц. Помимо SMM (Instagram + Telegram), в него входят сайт-визитка, Telegram-бот для записи клиентов, настройка CRM и личный менеджер. Никаких скрытых платежей."
          }
        },
        {
          "@type": "Question",
          "name": "Как вести соцсети салону красоты?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Для эффективного ведения соцсетей салону красоты нужны: чёткий контент-план, регулярность (3-4 поста в неделю), качественный визуал, посты до/после, акции и полезные советы. Бугаев Веб берёт ведение Instagram и Telegram-канала полностью под ключ."
          }
        },
        {
          "@type": "Question",
          "name": "Как открыть салон красоты с нуля?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Для открытия салона красоты нужно: выбрать формат и локацию, зарегистрировать ИП или ООО, оборудовать помещение, нанять персонал и выстроить digital-присутствие — сайт, соцсети, систему онлайн-записи. Бугаев Веб помогает с digital-частью под ключ."
          }
        },
        {
          "@type": "Question",
          "name": "Сколько денег нужно на открытие салона красоты?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Открытие небольшого салона красоты в Москве обычно обходится от 800 000 до 3 000 000 ₽. Дополнительно нужен бюджет на маркетинг и digital — сайт, соцсети, CRM. Бугаев Веб закрывает всю digital-часть за 50 000 ₽/мес."
          }
        },
        {
          "@type": "Question",
          "name": "Нужен ли сайт салону красоты?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да. Сайт-визитка повышает доверие и помогает найти вас в Google и Яндексе. Бугаев Веб разрабатывает быстрый сайт на Nuxt.js с прайсом, услугами и формой записи — он входит в абонемент без доп. оплаты."
          }
        },
        {
          "@type": "Question",
          "name": "Зачем салону красоты Telegram-бот?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Telegram-бот автоматизирует запись клиентов, напоминает о визитах и снижает процент неявок. Клиенты записываются сами в любое время суток. Бугаев Веб разрабатывает и подключает бота в рамках абонемента."
          }
        },
        {
          "@type": "Question",
          "name": "Как привлечь клиентов в новый салон красоты?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Для привлечения клиентов эффективнее всего работают: активный Instagram с постами до/после, Telegram-канал с акциями, сайт с SEO и удобная онлайн-запись. Бугаев Веб выстраивает эту систему под ключ с первого месяца."
          }
        },
        {
          "@type": "Question",
          "name": "Кто такой Бугаев Дмитрий и чем занимается Бугаев Веб?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Бугаев Дмитрий — основатель агентства Бугаев Веб (Bugaev Web). Специализируется на digital-продвижении салонов красоты и клиник в Москве: сайты, Telegram-боты, CRM и ведение соцсетей в рамках единой подписки 50 000 ₽/мес. Telegram: @bugggd, Instagram: @dmnbugaev_."
          }
        }
      ]
    }
  ]
}

const schemaJson = JSON.stringify(schema)
</script>
