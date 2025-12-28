import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, HelpCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useLanguageContext } from '../context/LanguageContext';
import { CONFIG } from '../data/config';

export const SupportPage = () => {
  const { t, currentLanguage } = useLanguageContext();
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              {t('support.title')}
            </h1>
            <p className="text-xl text-slate-600">
              {t('support.subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Description */}
            <p className="text-lg text-slate-600 text-center mb-12">
              {t('support.description')}
            </p>
            
            {/* Contact Card */}
            <Card className="mb-12 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-violet-100 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-violet-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {t('support.email')}
                </h3>
                <p className="text-2xl font-bold text-violet-600 mb-6">
                  {CONFIG.supportEmail}
                </p>
                <Button 
                  asChild
                  size="lg"
                  className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8"
                >
                  <a href={`mailto:${CONFIG.supportEmail}`}>
                    {t('support.emailButton')}
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            {/* FAQ Link */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-slate-600 mb-4">
                <HelpCircle className="h-5 w-5" />
                <span>{t('support.faqTitle')}</span>
              </div>
              <div>
                <Link 
                  to={`/${currentLanguage}#faq`}
                  className="text-violet-600 hover:text-violet-700 font-medium text-lg hover:underline"
                >
                  {t('support.faqLink')} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
