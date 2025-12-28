import React from 'react';
import { Zap, MousePointer, Shield, Wifi, CreditCard, Download, UserPlus, Power } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { useLanguageContext } from '../context/LanguageContext';
import { CONFIG } from '../data/config';

const FeatureIcon = ({ name }) => {
  const icons = {
    speed: Zap,
    simple: MousePointer,
    privacy: Shield,
    wifi: Wifi,
    subscription: CreditCard
  };
  const Icon = icons[name] || Shield;
  return <Icon className="h-6 w-6" />;
};

const StepIcon = ({ step }) => {
  const icons = [Download, UserPlus, Power];
  const Icon = icons[step - 1] || Download;
  return <Icon className="h-8 w-8" />;
};

export const HomePage = () => {
  const { t, currentLanguage } = useLanguageContext();
  
  const features = [
    { key: 'speed', icon: 'speed' },
    { key: 'simple', icon: 'simple' },
    { key: 'privacy', icon: 'privacy' },
    { key: 'wifi', icon: 'wifi' },
    { key: 'subscription', icon: 'subscription' }
  ];
  
  const steps = ['step1', 'step2', 'step3'];
  
  const pricingPlans = [
    { period: '1', key: 'month1', price: CONFIG.pricing.month1.price, label: t('pricing.month') },
    { period: '6', key: 'month6', price: CONFIG.pricing.month6.price, label: t('pricing.months'), popular: true },
    { period: '12', key: 'year1', price: CONFIG.pricing.year1.price, label: t('pricing.year') }
  ];
  
  const faqItems = t('faq.items') || [];
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-violet-50 to-white py-20 lg:py-32">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-violet-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Logo Icon */}
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-white rounded-2xl shadow-lg shadow-violet-200/50">
                <img 
                  src={CONFIG.logos.icon} 
                  alt="Secvia" 
                  className="h-16 w-16"
                />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            <Button 
              asChild
              size="lg"
              className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-violet-300/50 hover:shadow-violet-400/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              <a href={CONFIG.googlePlayUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                {t('hero.cta')}
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              {t('features.title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.key} 
                className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center mb-6 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                    <FeatureIcon name={feature.icon} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {t(`features.${feature.key}.title`)}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {t(`features.${feature.key}.description`)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              {t('howItWorks.title')}
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connection line (desktop only) */}
              <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-violet-200" style={{ left: '16.66%', right: '16.66%' }} />
              
              {steps.map((step, index) => (
                <div key={step} className="relative text-center">
                  <div className="relative z-10 w-24 h-24 mx-auto mb-6 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-violet-100">
                    <div className="text-violet-600">
                      <StepIcon step={index + 1} />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {t(`howItWorks.${step}.title`)}
                  </h3>
                  <p className="text-slate-600">
                    {t(`howItWorks.${step}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              {t('pricing.title')}
            </h2>
            <p className="text-lg text-violet-600 font-medium">
              {t('pricing.trial')}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {pricingPlans.map((plan) => (
                <Card 
                  key={plan.key}
                  className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                    plan.popular 
                      ? 'border-2 border-violet-500 shadow-xl' 
                      : 'border border-slate-200 shadow-md hover:shadow-lg'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-violet-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                      {t('pricing.popular')}
                    </div>
                  )}
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-slate-900 mb-1">
                      {plan.period}
                    </div>
                    <div className="text-slate-600 mb-4">
                      {plan.label}
                    </div>
                    <div className="text-lg text-slate-700">
                      {t('pricing.from')} <span className="font-bold text-violet-600">{plan.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Disclaimer */}
            <div className="bg-slate-50 rounded-xl p-6 text-center mb-8">
              <p className="text-sm text-slate-600">
                {t('pricing.disclaimer')}
              </p>
            </div>
            
            {/* CTA */}
            <div className="text-center">
              <Button 
                asChild
                size="lg"
                className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-10 py-6 text-lg rounded-xl shadow-lg shadow-violet-300/50"
              >
                <a href={CONFIG.googlePlayUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                  </svg>
                  {t('pricing.cta')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              {t('faq.title')}
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {Array.isArray(faqItems) && faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-xl shadow-sm border-0 px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-lg font-medium text-slate-900 hover:text-violet-600 py-5 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-20 lg:py-28 bg-violet-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <img 
                src={CONFIG.logos.icon} 
                alt="Secvia" 
                className="h-16 w-16 filter brightness-0 invert"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {t('hero.title')}
            </h2>
            <p className="text-xl text-violet-100 mb-10">
              {t('pricing.trial')}
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-white hover:bg-slate-100 text-violet-600 font-semibold px-10 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <a href={CONFIG.googlePlayUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                {t('hero.cta')}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
