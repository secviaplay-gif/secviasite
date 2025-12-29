// Все переводы для сайта Secvia VPN

export const translations = {
  ru: {
    // Meta
    meta: {
      title: 'Secvia — быстрый и приватный VPN',
      description: 'Защищайте соединение в один тап. Стабильная скорость и подписка через Google Play.'
    },
    
    // Navigation
    nav: {
      home: 'Главная',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
      support: 'Поддержка'
    },
    
    // Hero Section
    hero: {
      title: 'Secvia — быстрый и приватный VPN',
      subtitle: 'Защищайте соединение в один тап. Стабильная скорость и подписка через Google Play.',
      cta: 'Установить из Google Play'
    },
    
    // Features Section
    features: {
      title: 'Преимущества',
      speed: {
        title: 'Высокая скорость',
        description: 'Протокол WireGuard обеспечивает максимальную скорость соединения'
      },
      simple: {
        title: 'Простота',
        description: 'Подключение в один тап — никаких сложных настроек'
      },
      privacy: {
        title: 'Приватность',
        description: 'Ваши данные в безопасности — мы не храним историю посещений'
      },
      wifi: {
        title: 'Защита Wi-Fi',
        description: 'Безопасное подключение в публичных сетях'
      },
      subscription: {
        title: 'Удобная подписка',
        description: 'Оплата и управление через Google Play'
      }
    },
    
    // How it works
    howItWorks: {
      title: 'Как это работает',
      step1: {
        title: 'Установите приложение',
        description: 'Скачайте Secvia из Google Play'
      },
      step2: {
        title: 'Оформите подписку',
        description: 'Есть 10-дневный пробный период'
      },
      step3: {
        title: 'Подключитесь',
        description: 'Один тап — и вы защищены'
      }
    },
    
    // Pricing
    pricing: {
      title: 'Тарифы',
      trial: '10 дней бесплатно для новых пользователей',
      disclaimer: 'Пробный период предоставляется через Google Play. После окончания автоматически начинается платная подписка.',
      month: 'месяц',
      months: 'месяцев',
      year: 'месяцев',
      from: 'от',
      popular: 'Популярный',
      cta: 'Установить из Google Play'
    },
    
    // FAQ
    faq: {
      title: 'Частые вопросы',
      items: [
        {
          question: 'Что делает VPN?',
          answer: 'VPN шифрует ваш интернет-трафик и скрывает ваш IP-адрес, обеспечивая приватность и безопасность при работе в сети.'
        },
        {
          question: 'Есть ли бесплатный период?',
          answer: 'Да, для новых пользователей доступен 10-дневный пробный период через Google Play.'
        },
        {
          question: 'Какие данные собираются?',
          answer: 'Мы собираем только технический идентификатор устройства и токены подписки Google Play. Мы НЕ собираем историю посещений и содержимое трафика.'
        },
        {
          question: 'Можно ли отменить подписку?',
          answer: 'Да, вы можете отменить подписку в любой момент через Google Play. Доступ сохраняется до конца оплаченного периода.'
        },
        {
          question: 'Сколько устройств поддерживается?',
          answer: 'Одна подписка действует для одного устройства. Для использования на нескольких устройствах нужны отдельные подписки.'
        },
        {
          question: 'Какой протокол используется?',
          answer: 'Secvia использует протокол WireGuard — современный, быстрый и безопасный протокол VPN.'
        },
        {
          question: 'Работает ли на всех устройствах?',
          answer: 'Secvia работает на устройствах Android с версией 6.0 и выше.'
        }
      ]
    },
    
    // Footer
    footer: {
      rights: 'Все права защищены',
      links: {
        privacy: 'Политика конфиденциальности',
        terms: 'Условия использования',
        support: 'Поддержка'
      }
    },
    
    // Privacy Page
    privacy: {
      title: 'Политика конфиденциальности',
      lastUpdated: 'Последнее обновление',
      sections: [
        {
          title: 'Какие данные мы собираем',
          content:
            'Мы собираем минимальный объём данных, необходимый для работы сервиса:\n' +
            '• Device ID (технический идентификатор устройства)\n' +
            '• Токены подписки Google Play\n' +
            '• Минимальные диагностические логи\n' +
            '• Email (только если вы сами обращаетесь в поддержку)',
        },
        {
          title: 'Какие данные мы НЕ собираем',
          content:
            'Мы НЕ собираем:\n' +
            '• Историю посещений сайтов\n' +
            '• Содержимое вашего интернет-трафика\n' +
            '• Персональные данные сверх необходимого',
        },
        {
          title: 'Оплата и подписка',
          content:
            '• Все платежи обрабатываются через Google Play. Мы не имеем доступа к данным вашей платёжной карты.',
        },
        {
          title: 'Хранение данных',
          content: 'Технические данные хранятся в зашифрованном виде на защищённых серверах.',
        },
        {
          title: 'Контакт',
          content: 'По вопросам конфиденциальности обращайтесь: support@secvia.app',
        },
      ],
    },

    
    // Terms Page
    terms: {
      title: 'Условия использования',
      lastUpdated: 'Последнее обновление',
      sections: [
        {
          title: 'Принятие условий',
          content: 'Используя приложение Secvia VPN, вы соглашаетесь с настоящими условиями использования.'
        },
        {
          title: 'Описание сервиса',
          content: 'Secvia VPN предоставляет услуги виртуальной частной сети (VPN) для защиты вашего интернет-соединения.'
        },
        {
          title: 'Запрещённое использование',
          content: 'Запрещается использовать сервис для:\n• Незаконной деятельности\n• Распространения вредоносного ПО\n• Нарушения прав третьих лиц\n• Спама и массовых рассылок'
        },
        {
          title: 'Подписка и оплата',
          content: 'Подписка оформляется и оплачивается через Google Play. Управление подпиской (продление, отмена) осуществляется через настройки Google Play.'
        },
        {
          title: 'Отмена подписки',
          content: 'Вы можете отменить подписку в любой момент через Google Play. После отмены доступ сохраняется до конца оплаченного периода.'
        },
        {
          title: 'Ограничение ответственности',
          content: 'Сервис предоставляется «как есть». Мы не гарантируем бесперебойную работу и не несём ответственности за временные перебои в работе.'
        },
        {
          title: 'Изменение условий',
          content: 'Мы можем изменять настоящие условия. Актуальная версия всегда доступна на этой странице.'
        },
        {
          title: 'Контакт',
          content: 'По вопросам обращайтесь: support@secvia.app'
        }
      ]
    },
    
    // Support Page
    support: {
      title: 'Поддержка',
      subtitle: 'Мы готовы помочь',
      description: 'Если у вас возникли вопросы или проблемы с приложением, свяжитесь с нами.',
      email: 'Email для связи',
      emailButton: 'Написать в поддержку',
      faqTitle: 'Или посмотрите частые вопросы',
      faqLink: 'Перейти к FAQ'
    }
  },
  
  ua: {
    // Meta
    meta: {
      title: 'Secvia — швидкий і приватний VPN',
      description: 'Захистіть з\'єднання в один дотик. Стабільна швидкість і підписка через Google Play.'
    },
    
    // Navigation
    nav: {
      home: 'Головна',
      privacy: 'Політика конфіденційності',
      terms: 'Умови використання',
      support: 'Підтримка'
    },
    
    // Hero Section
    hero: {
      title: 'Secvia — швидкий і приватний VPN',
      subtitle: 'Захистіть з\'єднання в один дотик. Стабільна швидкість і підписка через Google Play.',
      cta: 'Встановити з Google Play'
    },
    
    // Features Section
    features: {
      title: 'Переваги',
      speed: {
        title: 'Висока швидкість',
        description: 'Протокол WireGuard забезпечує максимальну швидкість з\'єднання'
      },
      simple: {
        title: 'Простота',
        description: 'Підключення в один дотик — жодних складних налаштувань'
      },
      privacy: {
        title: 'Приватність',
        description: 'Ваші дані в безпеці — ми не зберігаємо історію відвідувань'
      },
      wifi: {
        title: 'Захист Wi-Fi',
        description: 'Безпечне підключення в публічних мережах'
      },
      subscription: {
        title: 'Зручна підписка',
        description: 'Оплата та керування через Google Play'
      }
    },
    
    // How it works
    howItWorks: {
      title: 'Як це працює',
      step1: {
        title: 'Встановіть застосунок',
        description: 'Завантажте Secvia з Google Play'
      },
      step2: {
        title: 'Оформіть підписку',
        description: 'Є 10-денний пробний період'
      },
      step3: {
        title: 'Підключіться',
        description: 'Один дотик — і ви захищені'
      }
    },
    
    // Pricing
    pricing: {
      title: 'Тарифи',
      trial: '10 днів безкоштовно для нових користувачів',
      disclaimer: 'Пробний період надається через Google Play. Після завершення автоматично починається платна підписка.',
      month: 'місяць',
      months: 'місяців',
      year: 'місяців',
      from: 'від',
      popular: 'Популярний',
      cta: 'Встановити з Google Play'
    },
    
    // FAQ
    faq: {
      title: 'Часті запитання',
      items: [
        {
          question: 'Що робить VPN?',
          answer: 'VPN шифрує ваш інтернет-трафік і приховує вашу IP-адресу, забезпечуючи приватність і безпеку при роботі в мережі.'
        },
        {
          question: 'Чи є безкоштовний період?',
          answer: 'Так, для нових користувачів доступний 10-денний пробний період через Google Play.'
        },
        {
          question: 'Які дані збираються?',
          answer: 'Ми збираємо тільки технічний ідентифікатор пристрою та токени підписки Google Play. Ми НЕ збираємо історію відвідувань і вміст трафіку.'
        },
        {
          question: 'Чи можна скасувати підписку?',
          answer: 'Так, ви можете скасувати підписку в будь-який момент через Google Play. Доступ зберігається до кінця оплаченого періоду.'
        },
        {
          question: 'Скільки пристроїв підтримується?',
          answer: 'Одна підписка діє для одного пристрою. Для використання на кількох пристроях потрібні окремі підписки.'
        },
        {
          question: 'Який протокол використовується?',
          answer: 'Secvia використовує протокол WireGuard — сучасний, швидкий і безпечний протокол VPN.'
        },
        {
          question: 'Чи працює на всіх пристроях?',
          answer: 'Secvia працює на пристроях Android з версією 6.0 і вище.'
        }
      ]
    },
    
    // Footer
    footer: {
      rights: 'Усі права захищені',
      links: {
        privacy: 'Політика конфіденційності',
        terms: 'Умови використання',
        support: 'Підтримка'
      }
    },
    
    // Privacy Page
    privacy: {
      title: 'Політика конфіденційності',
      lastUpdated: 'Останнє оновлення',
      sections: [
        {
          title: 'Які дані ми збираємо',
          content:
            'Ми збираємо мінімальний обсяг даних, необхідний для роботи сервісу:\n' +
            '• Device ID (технічний ідентифікатор пристрою)\n' +
            '• Токени підписки Google Play\n' +
            '• Мінімальні діагностичні логи\n' +
            '• Email (лише якщо ви самі звертаєтесь до служби підтримки)',
        },
        {
          title: 'Які дані ми НЕ збираємо',
          content:
            'Ми НЕ збираємо:\n' +
            '• Історію відвідування сайтів\n' +
            '• Вміст вашого інтернет-трафіку\n' +
            '• Персональні дані понад необхідне',
        },
        {
          title: 'Оплата та підписка',
          content:
            'Усі платежі обробляються через Google Play. Ми не маємо доступу до даних вашої платіжної картки.',
        },
        {
          title: 'Зберігання даних',
          content: 'Технічні дані зберігаються у зашифрованому вигляді на захищених серверах.',
        },
        {
          title: 'Контакти',
          content: 'З питань конфіденційності звертайтесь: support@secvia.app',
        },
      ],
    },
    
    // Terms Page
    terms: {
      title: 'Умови використання',
      lastUpdated: 'Останнє оновлення',
      sections: [
        {
          title: 'Прийняття умов',
          content: 'Використовуючи застосунок Secvia VPN, ви погоджуєтесь з цими умовами використання.'
        },
        {
          title: 'Опис сервісу',
          content: 'Secvia VPN надає послуги віртуальної приватної мережі (VPN) для захисту вашого інтернет-з\'єднання.'
        },
        {
          title: 'Заборонене використання',
          content: 'Забороняється використовувати сервіс для:\n• Незаконної діяльності\n• Розповсюдження шкідливого ПЗ\n• Порушення прав третіх осіб\n• Спаму та масових розсилок'
        },
        {
          title: 'Підписка та оплата',
          content: 'Підписка оформлюється та оплачується через Google Play. Керування підпискою (продовження, скасування) здійснюється через налаштування Google Play.'
        },
        {
          title: 'Скасування підписки',
          content: 'Ви можете скасувати підписку в будь-який момент через Google Play. Після скасування доступ зберігається до кінця оплаченого періоду.'
        },
        {
          title: 'Обмеження відповідальності',
          content: 'Сервіс надається «як є». Ми не гарантуємо безперебійну роботу і не несемо відповідальності за тимчасові перебої в роботі.'
        },
        {
          title: 'Зміна умов',
          content: 'Ми можемо змінювати ці умови. Актуальна версія завжди доступна на цій сторінці.'
        },
        {
          title: 'Контакт',
          content: 'З питань звертайтесь: support@secvia.app'
        }
      ]
    },
    
    // Support Page
    support: {
      title: 'Підтримка',
      subtitle: 'Ми готові допомогти',
      description: 'Якщо у вас виникли запитання або проблеми з застосунком, зв\'яжіться з нами.',
      email: 'Email для зв\'язку',
      emailButton: 'Написати до підтримки',
      faqTitle: 'Або перегляньте часті запитання',
      faqLink: 'Перейти до FAQ'
    }
  },
  
  en: {
    // Meta
    meta: {
      title: 'Secvia — fast and private VPN',
      description: 'Protect your connection in one tap. WireGuard speed with subscriptions via Google Play.'
    },
    
    // Navigation
    nav: {
      home: 'Home',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      support: 'Support'
    },
    
    // Hero Section
    hero: {
      title: 'Secvia — fast and private VPN',
      subtitle: 'Protect your connection in one tap. WireGuard speed with subscriptions via Google Play.',
      cta: 'Get it on Google Play'
    },
    
    // Features Section
    features: {
      title: 'Features',
      speed: {
        title: 'High Speed',
        description: 'WireGuard protocol ensures maximum connection speed'
      },
      simple: {
        title: 'Simplicity',
        description: 'Connect with one tap — no complex settings'
      },
      privacy: {
        title: 'Privacy',
        description: 'Your data is safe — we don\'t store browsing history'
      },
      wifi: {
        title: 'Wi-Fi Protection',
        description: 'Secure connection on public networks'
      },
      subscription: {
        title: 'Easy Subscription',
        description: 'Payment and management via Google Play'
      }
    },
    
    // How it works
    howItWorks: {
      title: 'How It Works',
      step1: {
        title: 'Install the app',
        description: 'Download Secvia from Google Play'
      },
      step2: {
        title: 'Subscribe',
        description: '10-day free trial available'
      },
      step3: {
        title: 'Connect',
        description: 'One tap — and you\'re protected'
      }
    },
    
    // Pricing
    pricing: {
      title: 'Pricing',
      trial: '10-day free trial for new users',
      disclaimer: 'Trial is provided via Google Play. After the trial ends, a paid subscription starts automatically.',
      month: 'month',
      months: 'months',
      year: 'months',
      from: 'from',
      popular: 'Popular',
      cta: 'Get it on Google Play'
    },
    
    // FAQ
    faq: {
      title: 'FAQ',
      items: [
        {
          question: 'What does a VPN do?',
          answer: 'A VPN encrypts your internet traffic and hides your IP address, providing privacy and security when browsing online.'
        },
        {
          question: 'Is there a free trial?',
          answer: 'Yes, new users get a 10-day free trial through Google Play.'
        },
        {
          question: 'What data is collected?',
          answer: 'We only collect a technical device identifier and Google Play subscription tokens. We DO NOT collect browsing history or traffic content.'
        },
        {
          question: 'Can I cancel my subscription?',
          answer: 'Yes, you can cancel your subscription at any time through Google Play. Access remains until the end of the paid period.'
        },
        {
          question: 'How many devices are supported?',
          answer: 'One subscription works for one device. Separate subscriptions are needed for multiple devices.'
        },
        {
          question: 'What protocol is used?',
          answer: 'Secvia uses WireGuard protocol — a modern, fast, and secure VPN protocol.'
        },
        {
          question: 'Does it work on all devices?',
          answer: 'Secvia works on Android devices version 6.0 and above.'
        }
      ]
    },
    
    // Footer
    footer: {
      rights: 'All rights reserved',
      links: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        support: 'Support'
      }
    },
    
    // Privacy Page
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated',
      sections: [
        {
          title: 'What data we collect',
          content:
            'We collect the minimum amount of data required to operate the service:\n' +
            '• Device ID (technical device identifier)\n' +
            '• Google Play subscription tokens\n' +
            '• Minimal diagnostic logs\n' +
            '• Email (only if you contact support)',
        },
        {
          title: 'What data we do NOT collect',
          content:
            'We do NOT collect:\n' +
            '• Browsing history\n' +
            '• Contents of your internet traffic\n' +
            '• Personal data beyond what is necessary',
        },
        {
          title: 'Payments and subscriptions',
          content:
           'All payments are processed via Google Play. We do not have access to your payment card details.',
        },
        {
          title: 'Data storage',
          content: 'Technical data is stored in encrypted form on secure servers.',
        },
        {
          title: 'Contact',
          content: 'For privacy-related inquiries, contact: support@secvia.app',
        },
      ],
    },
    
    // Terms Page
    terms: {
      title: 'Terms of Service',
      lastUpdated: 'Last updated',
      sections: [
        {
          title: 'Acceptance of terms',
          content: 'By using Secvia VPN app, you agree to these terms of service.'
        },
        {
          title: 'Service description',
          content: 'Secvia VPN provides virtual private network (VPN) services to protect your internet connection.'
        },
        {
          title: 'Prohibited use',
          content: 'It is prohibited to use the service for:\n• Illegal activities\n• Distributing malware\n• Violating third-party rights\n• Spam and mass mailings'
        },
        {
          title: 'Subscription and payment',
          content: 'Subscription is managed and paid through Google Play. Subscription management (renewal, cancellation) is done through Google Play settings.'
        },
        {
          title: 'Subscription cancellation',
          content: 'You can cancel your subscription at any time through Google Play. After cancellation, access remains until the end of the paid period.'
        },
        {
          title: 'Limitation of liability',
          content: 'The service is provided "as is". We do not guarantee uninterrupted operation and are not responsible for temporary service interruptions.'
        },
        {
          title: 'Changes to terms',
          content: 'We may change these terms. The current version is always available on this page.'
        },
        {
          title: 'Contact',
          content: 'For inquiries contact: support@secvia.app'
        }
      ]
    },
    
    // Support Page
    support: {
      title: 'Support',
      subtitle: 'We\'re here to help',
      description: 'If you have questions or issues with the app, contact us.',
      email: 'Contact email',
      emailButton: 'Contact Support',
      faqTitle: 'Or check the FAQ',
      faqLink: 'Go to FAQ'
    }
  }
};
