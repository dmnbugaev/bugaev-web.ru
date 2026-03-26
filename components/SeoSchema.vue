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
      "@type": "WebSite",
      "@id": "https://bugaev-web.ru/#website",
      "url": "https://bugaev-web.ru/",
      "name": "Бугаев Веб",
      "description": "Комплексное digital-продвижение для салонов красоты, ногтевых студий и клиник в Москве",
      "publisher": { "@id": "https://bugaev-web.ru/#business" },
      "inLanguage": "ru-RU",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://bugaev-web.ru/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://bugaev-web.ru/#webpage",
      "url": "https://bugaev-web.ru/",
      "name": "Бугаев Веб — Сайт, SMM и Telegram-бот для салона красоты в Москве | от 50 000 ₽/мес",
      "description": "Комплексный digital-абонемент для салонов красоты и клиник Москвы. Сайт, Telegram-бот, SMM, CRM под ключ за 50 000 ₽/мес. Основатель — Бугаев Дмитрий.",
      "isPartOf": { "@id": "https://bugaev-web.ru/#website" },
      "about": { "@id": "https://bugaev-web.ru/#business" },
      "inLanguage": "ru-RU",
      "breadcrumb": { "@id": "https://bugaev-web.ru/#breadcrumb" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://bugaev-web.ru/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Главная",
          "item": "https://bugaev-web.ru/"
        }
      ]
    },
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://bugaev-web.ru/#business",
      "name": "Бугаев Веб",
      "alternateName": ["Bugaev Web", "BugaevWeb", "Бугаев Дмитрий digital"],
      "description": "Комплексный digital-абонемент для салонов красоты, ногтевых студий, косметологических кабинетов и клиник Москвы. Разработка сайта на Nuxt.js, Telegram-бот для онлайн-записи клиентов, ведение Instagram и Telegram-канала (SMM), настройка CRM YCLIENTS, личный менеджер — всё за 50 000 ₽ в месяц без скрытых доплат. Основатель — Бугаев Дмитрий.",
      "url": "https://bugaev-web.ru/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bugaev-web.ru/favicon.svg",
        "caption": "Бугаев Веб — digital-продвижение для салонов красоты"
      },
      "founder": {
        "@type": "Person",
        "@id": "https://bugaev-web.ru/#founder",
        "name": "Бугаев Дмитрий",
        "sameAs": [
          "https://instagram.com/dmnbugaev_",
          "https://t.me/bugggd"
        ]
      },
      "priceRange": "50000 ₽/месяц",
      "currenciesAccepted": "RUB",
      "paymentAccepted": "Перевод на карту, расчётный счёт",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Москва",
        "addressRegion": "Москва",
        "addressCountry": "RU"
      },
      "areaServed": [
        { "@type": "City", "name": "Москва" },
        { "@type": "AdministrativeArea", "name": "Московская область" },
        { "@type": "City", "name": "Химки" },
        { "@type": "City", "name": "Подольск" },
        { "@type": "City", "name": "Красногорск" },
        { "@type": "City", "name": "Одинцово" },
        { "@type": "City", "name": "Мытищи" },
        { "@type": "City", "name": "Люберцы" }
      ],
      "knowsAbout": [
        "SMM для салона красоты",
        "продвижение салона красоты",
        "разработка сайта для салона красоты",
        "Telegram-бот для записи клиентов",
        "настройка CRM YCLIENTS",
        "ведение Instagram для бьюти-бизнеса",
        "маркетинг для ногтевой студии",
        "продвижение косметолога",
        "реклама бrow bar",
        "digital-маркетинг для стоматологии"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Услуги Бугаев Веб для салонов красоты",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Сайт-визитка для салона красоты",
            "description": "Быстрый сайт на Nuxt.js с прайс-листом, портфолио, формой онлайн-записи и адаптацией под мобильные устройства",
            "itemOffered": { "@type": "Service", "name": "Разработка сайта для салона красоты на Nuxt.js" }
          },
          {
            "@type": "Offer",
            "name": "Telegram-бот для онлайн-записи",
            "description": "Автоматическая запись клиентов 24/7, напоминания о визитах, снижение неявок",
            "itemOffered": { "@type": "Service", "name": "Telegram-бот для онлайн-записи клиентов в салон красоты" }
          },
          {
            "@type": "Offer",
            "name": "Ведение Instagram салона красоты",
            "description": "Контент-план, публикации 3–4 раза в неделю, сторис, обработка директа",
            "itemOffered": { "@type": "Service", "name": "SMM и ведение Instagram для салона красоты" }
          },
          {
            "@type": "Offer",
            "name": "Ведение Telegram-канала",
            "description": "Регулярные публикации, акции, новости салона, рост подписчиков",
            "itemOffered": { "@type": "Service", "name": "Ведение Telegram-канала для салона красоты" }
          },
          {
            "@type": "Offer",
            "name": "Настройка CRM YCLIENTS",
            "description": "Полная настройка системы управления клиентами, расписанием и финансами",
            "itemOffered": { "@type": "Service", "name": "Настройка и сопровождение CRM YCLIENTS для салона красоты" }
          },
          {
            "@type": "Offer",
            "name": "Личный менеджер",
            "description": "Бугаев Дмитрий на связи 6 дней в неделю — отчёты, стратегия, поддержка",
            "itemOffered": { "@type": "Service", "name": "Личный digital-менеджер для владельца салона красоты" }
          }
        ]
      },
      "sameAs": [
        "https://t.me/bugggd",
        "https://instagram.com/dmnbugaev_"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://bugaev-web.ru/#service",
      "name": "Digital-абонемент «Digital + SMM» для салона красоты — Бугаев Веб",
      "alternateName": "Комплексный маркетинг для салона красоты под ключ",
      "provider": { "@id": "https://bugaev-web.ru/#business" },
      "description": "Ежемесячная подписка: сайт-визитка на Nuxt.js, Telegram-бот для онлайн-записи, ведение Instagram и Telegram-канала (3–4 поста в неделю), настройка CRM YCLIENTS, личный менеджер Бугаев Дмитрий, хостинг и домен в подарок. Без скрытых платежей.",
      "serviceType": [
        "SMM для салона красоты",
        "Разработка сайта для салона красоты",
        "Telegram-бот для записи клиентов",
        "Настройка CRM YCLIENTS",
        "Digital-маркетинг для бьюти-бизнеса"
      ],
      "areaServed": { "@type": "City", "name": "Москва" },
      "offers": {
        "@type": "Offer",
        "name": "Абонемент Digital + SMM",
        "price": "50000",
        "priceCurrency": "RUB",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-01-01",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "50000",
          "priceCurrency": "RUB",
          "unitText": "месяц",
          "billingIncrement": 1
        }
      }
    },
    {
      "@type": "Person",
      "@id": "https://bugaev-web.ru/#founder",
      "name": "Бугаев Дмитрий",
      "givenName": "Дмитрий",
      "familyName": "Бугаев",
      "jobTitle": "Основатель Бугаев Веб — digital-специалист для салонов красоты",
      "description": "Дмитрий Бугаев — основатель агентства Бугаев Веб (Bugaev Web). Специализируется на комплексном digital-продвижении салонов красоты, ногтевых студий и клиник в Москве: разработка сайтов, Telegram-боты для записи, SMM, CRM YCLIENTS.",
      "worksFor": { "@id": "https://bugaev-web.ru/#business" },
      "url": "https://bugaev-web.ru/",
      "knowsAbout": [
        "SMM для бьюти-бизнеса",
        "разработка сайтов для салонов красоты",
        "Telegram-боты для записи клиентов",
        "настройка CRM YCLIENTS",
        "digital-маркетинг",
        "продвижение в Instagram",
        "ведение Telegram-каналов"
      ],
      "sameAs": [
        "https://t.me/bugggd",
        "https://instagram.com/dmnbugaev_"
      ]
    },
    {
      "@type": "ItemList",
      "name": "Для кого подходит Бугаев Веб",
      "description": "Типы бьюти-бизнеса, которым помогает Бугаев Веб",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Салон красоты в Москве" },
        { "@type": "ListItem", "position": 2, "name": "Ногтевая студия" },
        { "@type": "ListItem", "position": 3, "name": "Косметологический кабинет" },
        { "@type": "ListItem", "position": 4, "name": "Brow bar (студия бровей)" },
        { "@type": "ListItem", "position": 5, "name": "Лэш-студия (наращивание ресниц)" },
        { "@type": "ListItem", "position": 6, "name": "Небольшая стоматологическая клиника" },
        { "@type": "ListItem", "position": 7, "name": "Барбершоп" },
        { "@type": "ListItem", "position": 8, "name": "Солярий и SPA" }
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
            "text": "Чтобы салон красоты начал зарабатывать больше, нужно выстроить систему: активные соцсети с регулярным контентом, сайт-визитка для доверия, Telegram-бот для удобной онлайн-записи и CRM для учёта клиентов. Бугаев Веб предоставляет всё это в рамках одной подписки за 50 000 ₽/мес. Первые результаты — в течение 2–4 недель."
          }
        },
        {
          "@type": "Question",
          "name": "Сколько стоит SMM для салона красоты в Москве?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "В среднем по рынку SMM для салона красоты в Москве стоит от 15 000 до 50 000 ₽/мес только за ведение соцсетей. У Бугаев Веб за 50 000 ₽/мес вы получаете SMM (Instagram + Telegram) плюс сайт, Telegram-бот для записи клиентов, настройку CRM YCLIENTS и личного менеджера. Никаких скрытых платежей."
          }
        },
        {
          "@type": "Question",
          "name": "Как вести Instagram для салона красоты?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Для эффективного ведения Instagram салона красоты нужны: чёткий контент-план, публикации 3–4 раза в неделю, сторис с акциями и работами, качественный визуал, посты до/после, отзывы клиентов. Бугаев Веб берёт ведение Instagram салона красоты полностью под ключ — вам нужно только изредка присылать фото новых работ."
          }
        },
        {
          "@type": "Question",
          "name": "Зачем салону красоты Telegram-канал?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Telegram-канал для салона красоты — это прямой канал связи с клиентами без алгоритмов. Посты видят все подписчики, можно публиковать акции, напоминания и новинки. В связке с Telegram-ботом для записи это мощный инструмент удержания клиентов. Бугаев Веб ведёт Telegram-канал салона красоты в рамках абонемента."
          }
        },
        {
          "@type": "Question",
          "name": "Как сделать онлайн-запись для салона красоты?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Самый удобный способ — Telegram-бот для онлайн-записи. Клиент пишет в бот, выбирает услугу, мастера и время, и получает подтверждение. Бугаев Веб разрабатывает Telegram-бот для автоматической записи клиентов в рамках ежемесячной подписки. Также подключается CRM YCLIENTS с виджетом записи для сайта."
          }
        },
        {
          "@type": "Question",
          "name": "Как привлечь клиентов в ногтевую студию?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Для привлечения клиентов в ногтевую студию лучше всего работают: активный Instagram с фото работ до/после, Telegram-канал с акциями, сайт с SEO-оптимизацией под запросы 'маникюр [район Москвы]', онлайн-запись через бот. Бугаев Веб выстраивает всю эту систему для ногтевых студий под ключ с первого месяца."
          }
        },
        {
          "@type": "Question",
          "name": "Как продвигать косметолога в Instagram?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Продвижение косметолога в Instagram строится на экспертном контенте (советы по уходу за кожей), результатах процедур до/после, отзывах клиентов и регулярных сторис. Важно SEO-оптимизировать шапку профиля под запросы 'косметолог Москва'. Бугаев Веб занимается продвижением косметологов и косметологических кабинетов в Instagram и Telegram."
          }
        },
        {
          "@type": "Question",
          "name": "Нужен ли сайт салону красоты?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да, сайт для салона красоты необходим. Он повышает доверие и помогает клиентам найти вас в Google и Яндексе по запросам 'салон красоты [район]'. Бугаев Веб разрабатывает быстрый сайт-визитку на Nuxt.js с прайсом, услугами, портфолио и формой записи. Сайт входит в абонемент без дополнительной оплаты."
          }
        },
        {
          "@type": "Question",
          "name": "Что такое CRM YCLIENTS и зачем она нужна салону красоты?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "YCLIENTS — это CRM-система специально для бьюти-бизнеса: управление записью, расписанием мастеров, базой клиентов, финансами и складом. Позволяет автоматически отправлять напоминания клиентам и анализировать доход. Настройка YCLIENTS для салона красоты входит в абонемент Бугаев Веб."
          }
        },
        {
          "@type": "Question",
          "name": "Как раскрутить салон красоты с нуля в Москве?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Чтобы раскрутить салон красоты с нуля в Москве, нужно: создать сайт, оформить Instagram и Telegram-канал, запустить Telegram-бот для записи клиентов, настроить CRM и начать публиковать контент регулярно. Бугаев Веб берёт все эти задачи на себя и запускает систему с нуля за первый месяц подписки."
          }
        },
        {
          "@type": "Question",
          "name": "Как не терять клиентов в салоне красоты?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Главные причины потери клиентов: неудобная или долгая запись, нет напоминаний о визитах, нет активности в соцсетях. Решение — Telegram-бот с автозаписью и напоминаниями, CRM YCLIENTS для учёта клиентской базы и активные соцсети. Бугаев Веб автоматизирует все эти процессы в рамках одного абонемента."
          }
        },
        {
          "@type": "Question",
          "name": "Работаете ли вы с Подмосковьем?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да. Бугаев Веб работает с салонами красоты и клиниками не только в Москве, но и в Подмосковье: Химки, Подольск, Красногорск, Одинцово, Мытищи, Люберцы и других городах. Работаем полностью удалённо — формат не зависит от адреса вашего салона."
          }
        },
        {
          "@type": "Question",
          "name": "А если у нас уже есть Instagram?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Отлично — начнём с аудита того, что есть. Доработаем оформление профиля, выстроим контент-план и улучшим вовлечённость. Ничего не удаляем, только улучшаем."
          }
        },
        {
          "@type": "Question",
          "name": "А если у нас нет фотографий работ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Не проблема. Мы помогаем с техническим заданием для съёмки, используем правильно обработанные фото работ и качественный сток. Ваше участие — изредка присылать фото новых работ. 10–15 минут в неделю."
          }
        },
        {
          "@type": "Question",
          "name": "Как быстро будут первые результаты?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Первые записи через бот и сайт — в течение 2–4 недель после запуска. Рост подписчиков и вовлечённости в соцсетях — заметен с первого месяца. SEO-трафик на сайт — через 1–3 месяца. Точные прогнозы даём после бесплатного аудита."
          }
        },
        {
          "@type": "Question",
          "name": "Что конкретно входит в абонемент и нет ли скрытых платежей?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "В подписку за 50 000 ₽/мес входит: сайт-визитка на Nuxt.js, Telegram-бот с автозаписью и напоминаниями, ведение Instagram и Telegram-канала (3–4 поста/неделю), настройка CRM YCLIENTS, еженедельные отчёты, личный менеджер 6 дней в неделю, хостинг и домен. Скрытых доплат нет."
          }
        },
        {
          "@type": "Question",
          "name": "Можно ли уйти в любой момент?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да, без штрафов. Уведомите за 14 дней — и договор закрыт. Сайт, бот, база клиентов и весь контент остаются у вас. Мы не держим данные в заложниках."
          }
        },
        {
          "@type": "Question",
          "name": "Кто такой Бугаев Дмитрий и чем занимается Бугаев Веб?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Бугаев Дмитрий — основатель агентства Бугаев Веб (Bugaev Web). Специализируется на комплексном digital-продвижении салонов красоты, ногтевых студий и клиник в Москве: разработка сайтов, Telegram-боты, CRM и ведение соцсетей в рамках единого абонемента 50 000 ₽/мес. Telegram: @bugggd, Instagram: @dmnbugaev_."
          }
        }
      ]
    }
  ]
}

const schemaJson = JSON.stringify(schema)
</script>
