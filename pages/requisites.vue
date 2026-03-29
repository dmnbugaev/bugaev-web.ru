<template>
  <div class="min-h-screen" style="background: var(--surface);">
    <Header />
    <main class="pt-28 pb-20">
      <div class="section-container">

        <!-- Page header -->
        <div class="mb-12" data-animate="fade-up">
          <span class="badge mb-5">Юридическая информация</span>
          <h1 class="section-title mb-4">Реквизиты<br>исполнителя</h1>
          <p class="section-subtitle max-w-xl">
            Полные сведения об индивидуальном предпринимателе, осуществляющем деятельность
            под коммерческим обозначением «Bugaev Web».
          </p>
        </div>

        <!-- Divider -->
        <div class="h-px mb-12" style="background: var(--border);" />

        <!-- Content -->
        <div class="legal-body max-w-3xl">

          <section class="legal-section">
            <h2>1. Общие сведения</h2>
            <table class="req-table">
              <tbody>
                <tr>
                  <td>Организационно-правовая форма</td>
                  <td>Индивидуальный предприниматель</td>
                </tr>
                <tr>
                  <td>Полное наименование</td>
                  <td>Индивидуальный предприниматель Бугаев Дмитрий Сергеевич</td>
                </tr>
                <tr>
                  <td>Коммерческое обозначение</td>
                  <td>«Bugaev Web» — студия цифровых решений и SMM для салонов красоты и клиник (не является фирменным наименованием юридического лица)</td>
                </tr>
                <tr>
                  <td>ОГРНИП</td>
                  <td>326645700031745</td>
                </tr>
                <tr>
                  <td>ИНН</td>
                  <td>645212058772</td>
                </tr>
                <tr>
                  <td>Дата регистрации в качестве ИП</td>
                  <td>19 марта 2026 г.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section class="legal-section">
            <h2>2. Регистрирующий орган</h2>
            <table class="req-table">
              <tbody>
                <tr>
                  <td>Наименование регистратора</td>
                  <td>Межрайонная инспекция Федеральной налоговой службы №&nbsp;22 по Саратовской области</td>
                </tr>
                <tr>
                  <td>Дата постановки на учёт</td>
                  <td>19 марта 2026 г.</td>
                </tr>
                <tr>
                  <td>Налоговый орган по месту учёта</td>
                  <td>Межрайонная инспекция ФНС России №&nbsp;23 по Саратовской области</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section class="legal-section">
            <h2>3. Регистрация в Социальном фонде России</h2>
            <table class="req-table">
              <tbody>
                <tr>
                  <td>Регистрационный номер в СФР</td>
                  <td>1401747629</td>
                </tr>
                <tr>
                  <td>Дата регистрации</td>
                  <td>19 марта 2026 г.</td>
                </tr>
                <tr>
                  <td>Территориальный орган</td>
                  <td>Отделение Фонда пенсионного и социального страхования Российской Федерации по Саратовской области</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section class="legal-section">
            <h2>4. Налоговый режим</h2>
            <p>Специальный налоговый режим не применяется. ИП применяет общую систему налогообложения.</p>
          </section>

          <section class="legal-section">
            <h2>5. Контактные данные</h2>
            <table class="req-table">
              <tbody>
                <tr>
                  <td>Электронная почта</td>
                  <td><a href="mailto:dmnbugaev@gmail.com">dmnbugaev@gmail.com</a></td>
                </tr>
                <tr>
                  <td>Телефон</td>
                  <td><a href="tel:+79964145143">+7 (996) 414-51-43</a></td>
                </tr>
                <tr>
                  <td>Telegram</td>
                  <td><a href="https://t.me/bugggd" target="_blank" rel="noopener noreferrer">@bugggd</a></td>
                </tr>
                <tr>
                  <td>Адрес осуществления деятельности</td>
                  <td>Услуги оказываются дистанционно, г. Саратов, Российская Федерация</td>
                </tr>
                <tr>
                  <td>Почтовый адрес для корреспонденции</td>
                  <td>Направляйте обращения на электронную почту или в Telegram</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section class="legal-section">
            <h2>6. Банковские реквизиты</h2>
            <p>Банковские реквизиты для безналичной оплаты предоставляются в счёте на оплату, направляемом Заказчику после подписания (акцепта) договора оферты.</p>
          </section>

          <div class="legal-updated">
            Актуальность сведений: март 2026 г.
          </div>

        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Реквизиты исполнителя — Bugaev Web',
  meta: [
    { name: 'description', content: 'Полные реквизиты ИП Бугаева Дмитрия Сергеевича: ОГРНИП, ИНН, регистрационные данные, контакты. Студия цифровых решений Bugaev Web.' },
    { name: 'robots', content: 'noindex, nofollow' },
  ],
  link: [{ rel: 'canonical', href: 'https://bugaev-web.ru/requisites' }],
})
</script>

<style scoped>
.legal-body {
  font-size: 0.9375rem;
  line-height: 1.75;
  color: var(--ink-2);
}

.legal-section {
  margin-bottom: 2.5rem;
}

.legal-section h2 {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--ink);
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border);
}

.legal-section h3 {
  font-family: 'Syne', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: var(--ink);
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
}

.legal-section p {
  margin-bottom: 0.75rem;
}

.legal-section ul,
.legal-section ol {
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
}

.legal-section li {
  margin-bottom: 0.35rem;
}

.legal-section a {
  color: var(--accent-text);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.req-table {
  width: 100%;
  border-collapse: collapse;
}

.req-table td {
  padding: 0.65rem 0.875rem;
  vertical-align: top;
  border-bottom: 1px solid var(--border);
  font-size: 0.9rem;
}

.req-table td:first-child {
  width: 42%;
  color: var(--ink-3);
  font-weight: 500;
  white-space: nowrap;
}

.req-table td a {
  color: var(--accent-text);
  text-decoration: underline;
  text-underline-offset: 3px;
}

@media (max-width: 600px) {
  .req-table td:first-child {
    width: 100%;
    white-space: normal;
  }
  .req-table tr {
    display: block;
    margin-bottom: 0.75rem;
  }
  .req-table td {
    display: block;
    padding: 0.3rem 0;
    border: none;
  }
}

.legal-updated {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
  font-size: 0.8rem;
  color: var(--ink-3);
  font-family: 'Syne Mono', monospace;
}
</style>
