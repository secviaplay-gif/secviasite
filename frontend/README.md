# Secvia VPN - Сайт-визитка

Статический сайт-визитка для VPN-сервиса "Secvia" под домен secvia.app.

## Структура проекта

```
src/
├── App.js                     # Главный роутинг приложения
├── App.css                    # Базовые стили
├── index.css                  # Tailwind и глобальные стили
├── components/
│   ├── Header.jsx             # Шапка сайта с навигацией и переключателем языка
│   ├── Footer.jsx             # Подвал сайта
│   └── ui/                    # UI компоненты (shadcn)
├── context/
│   └── LanguageContext.js     # Контекст для управления языком
├── data/
│   ├── config.js              # ⚙️ КОНФИГУРАЦИЯ (ссылка Google Play, email, цены)
│   └── translations.js        # 🌐 ВСЕ ПЕРЕВОДЫ (RU/UA/EN)
├── hooks/
│   └── useLanguage.js         # Хук для работы с языком
├── layouts/
│   └── Layout.jsx             # Общий layout с Header и Footer
└── pages/
    ├── HomePage.jsx           # Главная страница
    ├── PrivacyPage.jsx        # Политика конфиденциальности
    ├── TermsPage.jsx          # Условия использования
    └── SupportPage.jsx        # Страница поддержки
```

## Где менять тексты и настройки

### 1. Ссылка на Google Play
Файл: `src/data/config.js`
```javascript
googlePlayUrl: 'https://play.google.com/store/apps/details?id=app.secvia.vpn',
```

### 2. Email поддержки
Файл: `src/data/config.js`
```javascript
supportEmail: 'support@secvia.app',
```

### 3. Цены (информационные)
Файл: `src/data/config.js`
```javascript
pricing: {
  month1: { price: '$4.99', period: '1' },
  month6: { price: '$23.99', period: '6' },
  year1: { price: '$39.99', period: '12' }
}
```

### 4. Тексты на всех языках
Файл: `src/data/translations.js`
- Все тексты разделены по секциям: `meta`, `nav`, `hero`, `features`, `howItWorks`, `pricing`, `faq`, `footer`, `privacy`, `terms`, `support`
- Каждый язык (ru, ua, en) имеет идентичную структуру

## URL структура

```
/               → Редирект на язык по умолчанию (/ru)
/ru             → Главная (русский)
/ua             → Главная (украинский)
/en             → Главная (английский)
/ru/privacy     → Политика конфиденциальности
/ru/terms       → Условия использования
/ru/support     → Поддержка
```

## Деплой на Cloudflare Pages

1. Собрать проект:
```bash
yarn build
```

2. В Cloudflare Pages:
   - Build command: `yarn build`
   - Build output directory: `build`
   - Root directory: `/` (или `frontend` если в монорепо)

3. Добавить редиректы в `public/_redirects`:
```
/*    /index.html   200
```

## Деплой на Vercel

1. Подключить репозиторий к Vercel
2. В настройках:
   - Framework Preset: Create React App
   - Build Command: `yarn build`
   - Output Directory: `build`
3. Добавить `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## Деплой на Netlify

1. Подключить репозиторий
2. В настройках:
   - Build command: `yarn build`
   - Publish directory: `build`
3. Добавить `public/_redirects`:
```
/*    /index.html   200
```

## Соответствие требованиям Google Play

✅ **Privacy Policy** - страница `/privacy` со всей необходимой информацией
✅ **Terms of Service** - страница `/terms` с условиями использования
✅ **Support/Contact** - страница `/support` с email support@secvia.app
✅ **Pricing disclosure** - информация о ценах с дисклеймером о trial
✅ **Локализация** - RU/UA/EN версии всех страниц

## Используемые технологии

- React 19
- React Router DOM 7
- Tailwind CSS 3
- Radix UI (через shadcn/ui)
- Lucide Icons

## Логотипы

- `logo-light.png` - для светлого фона (header, hero)
- `logo-dark.png` - для тёмного фона
- `logo-icon.png` - иконка для favicon и social preview
