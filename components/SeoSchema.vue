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
      "breadcrumb": { "@id": "https://bugaev-web.ru/#breadcrumb" },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", ".section-title"]
      }
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
      "alternateName": ["Bugaev Web", "BugaevWeb"],
      "description": "Комплексный digital-абонемент для салонов красоты, ногтевых студий, косметологических кабинетов и клиник Москвы. Разработка сайта на Nuxt.js, Telegram-бот для онлайн-записи, ведение Instagram и Telegram (SMM), настройка CRM YCLIENTS — всё за 50 000 ₽/мес. Основатель — Бугаев Дмитрий.",
      "url": "https://bugaev-web.ru/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bugaev-web.ru/og-image.png",
        "width": 1200,
        "height": 630,
        "caption": "Бугаев Веб — digital-продвижение для салонов красоты"
      },
      "image": "https://bugaev-web.ru/og-image.png",
      "founder": {
        "@type": "Person",
        "@id": "https://bugaev-web.ru/#founder",
        "name": "Бугаев Дмитрий"
      },
      "priceRange": "50000 ₽/месяц",
      "currenciesAccepted": "RUB",
      "paymentAccepted": "Банковский перевод, расчётный счёт",
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
        { "@type": "City", "name": "Люберцы" },
        { "@type": "City", "name": "Балашиха" },
        { "@type": "City", "name": "Коломна" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "47",
        "reviewCount": "47"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Анна Соколова"
          },
          "reviewBody": "Раньше тратила 2 часа в день на соцсети и всё равно выходило плохо. Теперь ведение Instagram и Telegram отдала Бугаев Веб — подписчики растут, записей стало больше. Сайт окупился в первую неделю. Записей через сайт стало больше на 40% за первый месяц.",
          "datePublished": "2025-11-15",
          "name": "+40% записей через сайт за 1 месяц"
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Марина Ковалёва"
          },
          "reviewBody": "Думала, что digital — это сложно и дорого. За 50 000 ₽ получаешь полноценный отдел маркетинга. Telegram-бот сам записывает клиентов, я занимаюсь косметологией, а не соцсетями. 35% всех новых клиентов теперь приходит через бот.",
          "datePublished": "2025-12-03",
          "name": "Запись через бот — 35% всех новых клиентов"
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Дмитрий Орлов"
          },
          "reviewBody": "CRM настроили за неделю, перенесли всю базу. Клиенты теперь получают автоматические напоминания, отмены упали с 25% до 8%. Вижу цифры каждую неделю в отчёте — понятно, откуда идут заявки.",
          "datePublished": "2026-01-20",
          "name": "Отмены записей снизились с 25% до 8%"
        }
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
        "digital-маркетинг для стоматологии",
        "продвижение барбершопа",
        "маркетинг для лэш-студии"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Услуги Бугаев Веб для салонов красоты",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Сайт-визитка для салона красоты",
            "description": "Быстрый сайт на Nuxt.js с прайс-листом, портфолио, формой онлайн-записи и SEO-оптимизацией",
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
            "itemOffered": { "@type": "Service", "name": "Настройка CRM YCLIENTS для салона красоты" }
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
      "@id": "https://bugaev-web.ru/#service-main",
      "name": "Digital-абонемент «Digital + SMM» для салона красоты",
      "alternateName": "Комплексный маркетинг для салона красоты под ключ",
      "provider": { "@id": "https://bugaev-web.ru/#business" },
      "description": "Ежемесячная подписка: сайт-визитка на Nuxt.js, Telegram-бот для онлайн-записи, ведение Instagram и Telegram (3–4 поста/неделю), настройка CRM YCLIENTS, личный менеджер, хостинг и домен. 50 000 ₽/мес без скрытых платежей.",
      "serviceType": [
        "SMM для салона красоты",
        "Разработка сайта для салона красоты",
        "Telegram-бот для записи клиентов",
        "Настройка CRM YCLIENTS",
        "Digital-маркетинг для бьюти-бизнеса"
      ],
      "areaServed": [
        { "@type": "City", "name": "Москва" },
        { "@type": "AdministrativeArea", "name": "Московская область" }
      ],
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
          "unitText": "месяц"
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
      "description": "Дмитрий Бугаев — основатель агентства Бугаев Веб (Bugaev Web). Комплексное digital-продвижение салонов красоты, ногтевых студий и клиник в Москве: сайты, Telegram-боты, SMM, CRM YCLIENTS.",
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
      "@type": "HowTo",
      "name": "Как привлечь клиентов в салон красоты",
      "description": "Пошаговое руководство по выстраиванию системы привлечения клиентов в салон красоты через digital-инструменты",
      "totalTime": "P1M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "RUB",
        "value": "50000"
      },
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Создать профессиональный сайт для салона красоты",
          "text": "Разработать быстрый сайт-визитку с прайс-листом, портфолио работ, формой онлайн-записи и SEO-оптимизацией под запросы 'маникюр [район]', 'косметолог Москва' и другие геозапросы."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Запустить Telegram-бот для онлайн-записи",
          "text": "Подключить Telegram-бот, который автоматически принимает записи клиентов 24/7, отправляет напоминания о визитах и снижает процент неявок. Записей становится больше на 30–40% уже в первый месяц."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Настроить активные соцсети",
          "text": "Запустить регулярное ведение Instagram и Telegram-канала: контент-план, 3–4 публикации в неделю, сторис с акциями, фото работ до/после. Активный аккаунт приносит новых клиентов органически."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Настроить CRM YCLIENTS",
          "text": "Внедрить CRM-систему для учёта клиентской базы, управления расписанием мастеров и автоматической отправки напоминаний. Не терять клиентов из-за неудобной записи или забывчивости администратора."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Получать аналитику и оптимизировать",
          "text": "Еженедельно отслеживать откуда приходят новые клиенты (сайт, соцсети, бот), какие услуги популярнее, и корректировать контент и рекламу под реальные данные."
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "Как раскрутить ногтевую студию с нуля",
      "description": "Пошаговый план продвижения ногтевой студии через Instagram, Telegram и сайт",
      "totalTime": "P1M",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Оформить Instagram для ногтевой студии",
          "text": "Создать бизнес-аккаунт, заполнить шапку профиля с ключевыми словами (маникюр, гель-лак, [город/район]), начать публиковать фото работ до/после."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Создать сайт-визитку для ногтевой студии",
          "text": "Сайт с прайсом, портфолио и онлайн-записью помогает клиентам найти студию в Google и Яндексе по запросам 'маникюр рядом', 'ногтевая студия [район]'."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Подключить онлайн-запись через Telegram-бот",
          "text": "Клиенты записываются самостоятельно в любое время без звонков. Бот отправляет напоминания, что снижает неявки."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Типы бьюти-бизнеса, которым помогает Бугаев Веб",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Салон красоты в Москве" },
        { "@type": "ListItem", "position": 2, "name": "Ногтевая студия" },
        { "@type": "ListItem", "position": 3, "name": "Косметологический кабинет" },
        { "@type": "ListItem", "position": 4, "name": "Brow bar (студия бровей)" },
        { "@type": "ListItem", "position": 5, "name": "Лэш-студия (наращивание ресниц)" },
        { "@type": "ListItem", "position": 6, "name": "Барбершоп" },
        { "@type": "ListItem", "position": 7, "name": "Стоматологическая клиника" },
        { "@type": "ListItem", "position": 8, "name": "SPA и солярий" }
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
            "text": "Чтобы салон красоты начал зарабатывать больше, нужна система: активные соцсети, сайт для доверия, Telegram-бот для онлайн-записи и CRM. Бугаев Веб предоставляет всё в рамках одной подписки за 50 000 ₽/мес. Первые результаты — в течение 2–4 недель."
          }
        },
        {
          "@type": "Question",
          "name": "Сколько стоит SMM для салона красоты в Москве?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "В среднем SMM только для соцсетей обходится в 15 000–50 000 ₽/мес. У Бугаев Веб за 50 000 ₽/мес вы получаете SMM (Instagram + Telegram) плюс сайт, Telegram-бот, CRM YCLIENTS и личного менеджера. Никаких скрытых платежей."
          }
        },
        {
          "@type": "Question",
          "name": "Как вести Instagram для салона красоты?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Эффективное ведение Instagram для салона красоты: контент-план, публикации 3–4 раза в неделю, сторис с акциями и работами, фото до/после, отзывы клиентов. Бугаев Веб берёт ведение под ключ — вам нужно только изредка присылать фото новых работ."
          }
        },
        {
          "@type": "Question",
          "name": "Как сделать онлайн-запись для салона красоты?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Самый удобный способ — Telegram-бот для онлайн-записи. Клиент пишет в бот, выбирает услугу, мастера и время, получает подтверждение. Бугаев Веб разрабатывает бот в рамках ежемесячной подписки. Также подключается виджет записи CRM YCLIENTS для сайта."
          }
        },
        {
          "@type": "Question",
          "name": "Как привлечь клиентов в ногтевую студию?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Для привлечения клиентов в ногтевую студию: активный Instagram с фото работ до/после, Telegram-канал с акциями, сайт с SEO под запросы 'маникюр [район]', онлайн-запись через бот. Бугаев Веб выстраивает всю систему под ключ с первого месяца."
          }
        },
        {
          "@type": "Question",
          "name": "Как продвигать косметолога в Instagram?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Продвижение косметолога в Instagram: экспертный контент (советы по уходу за кожей), результаты процедур до/после, отзывы клиентов, регулярные сторис. SEO-оптимизация шапки профиля под 'косметолог Москва'. Бугаев Веб занимается продвижением косметологов под ключ."
          }
        },
        {
          "@type": "Question",
          "name": "Нужен ли сайт салону красоты?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да. Сайт повышает доверие и помогает найти вас в Google и Яндексе. Бугаев Веб разрабатывает быстрый сайт на Nuxt.js с прайсом, портфолио и онлайн-записью — входит в абонемент без доплат."
          }
        },
        {
          "@type": "Question",
          "name": "Что такое CRM YCLIENTS и зачем она нужна?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "YCLIENTS — CRM для бьюти-бизнеса: управление записью, расписанием мастеров, базой клиентов, финансами. Автоматические напоминания клиентам снижают неявки. Настройка YCLIENTS для салона входит в абонемент Бугаев Веб."
          }
        },
        {
          "@type": "Question",
          "name": "Как раскрутить салон красоты с нуля в Москве?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Для раскрутки с нуля: сайт, Instagram и Telegram-канал, Telegram-бот для записи, CRM. Бугаев Веб запускает всё за первый месяц подписки. Уже на 2–4 неделе идут первые записи через бот."
          }
        },
        {
          "@type": "Question",
          "name": "Как не терять клиентов в салоне красоты?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Главные причины потери клиентов: неудобная запись, нет напоминаний, нет активности в соцсетях. Решение: Telegram-бот с автозаписью и напоминаниями, CRM для клиентской базы, активные соцсети. Бугаев Веб автоматизирует всё это."
          }
        },
        {
          "@type": "Question",
          "name": "Работаете ли вы с Подмосковьем?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да. Работаем с салонами и клиниками в Химках, Подольске, Красногорске, Одинцово, Мытищах, Люберцах, Балашихе и других городах Подмосковья. Формат полностью удалённый — адрес не важен."
          }
        },
        {
          "@type": "Question",
          "name": "Какие результаты получают клиенты Бугаев Веб?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Реальные результаты: +40% записей через сайт за первый месяц (студия Prism Beauty, Митино), 35% новых клиентов через Telegram-бот (косметолог, Бутово), снижение отмен с 25% до 8% (барбершоп NordCut, Люблино)."
          }
        },
        {
          "@type": "Question",
          "name": "Что входит в подписку и нет ли скрытых платежей?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "В подписку 50 000 ₽/мес входит: сайт-визитка на Nuxt.js, Telegram-бот с автозаписью и напоминаниями, ведение Instagram и Telegram-канала (3–4 поста/неделю), настройка CRM YCLIENTS, еженедельные отчёты, личный менеджер 6 дней в неделю, хостинг и домен. Скрытых доплат нет."
          }
        },
        {
          "@type": "Question",
          "name": "Кто такой Бугаев Дмитрий и чем занимается Бугаев Веб?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Бугаев Дмитрий — основатель агентства Бугаев Веб (Bugaev Web). Специализируется на комплексном digital-продвижении салонов красоты и клиник в Москве: сайты, Telegram-боты, SMM, CRM — в рамках единого абонемента 50 000 ₽/мес. Telegram: @bugggd, Instagram: @dmnbugaev_."
          }
        }
      ]
    }
  ]
}

const schemaJson = JSON.stringify(schema)
</script>
