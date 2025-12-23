import React, { useState, useEffect } from 'react';
import { Zap, Flame } from 'lucide-react';
import Countdown from '@/components/Countdown';
import KitCard from '@/components/KitCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BlackNovemberDecoration from '@/components/BlackNovemberDecoration';
import ChristmasIcons from '@/components/ChristmasIcons';
import welongLogo from '@/assets/welong-logo-circular.png';
import kitCrescimento8Img from '@/assets/kit-crescimento-8-updated.png';
import kitCrescimento5Img from '@/assets/kit-crescimento-5.png';
import kitCrescimento3CompletoImg from '@/assets/kit-crescimento-3-completo.png';
import kitCrescimento3Img from '@/assets/kit-crescimento-3.png';
import kitCrescimento1Img from '@/assets/kit-crescimento-1.png';
import antifrizz1Img from '@/assets/kit-antifrizz-1.png';
import antifrizz3Img from '@/assets/kit-antifrizz-3.png';
import antifrizz3BrindesImg from '@/assets/kit-antifrizz-3-brindes.png';
import antifrizz6Img from '@/assets/kit-antifrizz-6.png';
import antifrizz12Img from '@/assets/kit-antifrizz-12.png';
import capsulas1Img from '@/assets/capsulas-1-unidade.png';
import capsulas3Img from '@/assets/capsulas-3-unidades.png';
import capsulas5Img from '@/assets/capsulas-5-unidades.png';
import capsulas10Img from '@/assets/capsulas-10-unidades.png';
import capsulasKitCompletoImg from '@/assets/capsulas-kit-completo.png';

const LG5 = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [renderKey, setRenderKey] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setRenderKey(prev => prev + 1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', () => {
      setTimeout(handleResize, 100);
    });
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  const isDesktop = windowWidth >= 1024;

  const antiquedaProducts = [{
    image: kitCrescimento8Img,
    title: "8 TÔNICOS + 2 SHAMPOOS + 2 CONDICIONADORES",
    subtitle: "Welong 300 dias",
    daysOfUse: "300 dias de uso",
    unitPrice: "Cada unidade por R$ 42",
    originalPrice: "de R$ 597 por",
    currentPrice: "R$ 507",
    installments: "",
    badge: "MAIS COMPLETO",
    badgeColor: 'blue' as const,
    isHighlighted: true,
    shippingText: "Frete Grátis + Brindes",
    discountPercentage: 15,
    showDiscountBadge: true,
    discountAmount: "R$ 90",
    purchaseUrl: "https://seguro.welong.com.br/r/8XS231Z2E2?utm_source=Natal&utm_medium=lg4&utm_campaign=Roleta"
  }, {
    image: kitCrescimento5Img,
    title: "5 TÔNICOS + 1 SHAMPOO + 1 CONDICIONADOR",
    subtitle: "Welong 180 dias",
    daysOfUse: "180 dias de uso",
    unitPrice: "Cada unidade por R$ 48",
    originalPrice: "de R$ 397 por",
    currentPrice: "R$ 337",
    installments: "",
    badge: "MAIS VENDIDO",
    badgeColor: 'green' as const,
    isHighlighted: true,
    shippingText: "Frete Grátis + Brindes",
    discountPercentage: 15,
    showDiscountBadge: true,
    discountAmount: "R$ 60",
    purchaseUrl: "https://seguro.welong.com.br/r/LJRKLC27ZM?utm_source=Natal&utm_medium=lg4&utm_campaign=Roleta"
  }, {
    image: kitCrescimento3CompletoImg,
    title: "3 TÔNICOS + 1 SHAMPOO + 1 CONDICIONADOR",
    subtitle: "Welong 90 dias",
    daysOfUse: "90 dias de uso",
    unitPrice: "Kit completo",
    originalPrice: "de R$ 297 por",
    currentPrice: "R$ 252",
    installments: "",
    badgeColor: 'purple' as const,
    shippingText: "Frete Grátis + Brindes",
    discountPercentage: 15,
    showDiscountBadge: true,
    discountAmount: "R$ 45",
    purchaseUrl: "https://seguro.welong.com.br/r/FD4K9PSQAM?utm_source=Natal&utm_medium=lg4&utm_campaign=Roleta"
  }, {
    image: kitCrescimento3Img,
    title: "3 UNIDADES TÔNICO WELONG HAIR",
    subtitle: "Welong 90 dias",
    daysOfUse: "90 dias de uso",
    unitPrice: "Cada unidade por R$ 56",
    originalPrice: "de R$ 193 por",
    currentPrice: "R$ 167",
    installments: "",
    badgeColor: 'orange' as const,
    discountPercentage: 15,
    showDiscountBadge: true,
    discountAmount: "R$ 26",
    purchaseUrl: "https://seguro.welong.com.br/r/I12JQ9EW62?utm_source=Natal&utm_medium=lg4&utm_campaign=Roleta"
  }, {
    image: kitCrescimento1Img,
    title: "1 UNIDADE TÔNICO WELONG HAIR",
    subtitle: "Welong 30 dias",
    daysOfUse: "30 dias de uso",
    unitPrice: "Cada unidade por R$ 133",
    originalPrice: "de R$ 154 por",
    currentPrice: "R$ 133",
    installments: "",
    badgeColor: 'teal' as const,
    discountPercentage: 15,
    showDiscountBadge: true,
    discountAmount: "R$ 21",
    purchaseUrl: "https://seguro.welong.com.br/r/PMTH7XOQT0?utm_source=Natal&utm_medium=lg4&utm_campaign=Roleta"
  }];

  const antiFrizzProducts = [{
    image: antifrizz12Img,
    title: "12 UNIDADES ANTIFRIZZ WELONG HAIR",
    subtitle: "365 Dias de Uso",
    daysOfUse: "365 Dias de Uso",
    unitPrice: "Cada unidade por R$ 42",
    originalPrice: "de R$ 597 por",
    currentPrice: "R$ 507",
    installments: "",
    badge: "MAIS COMPLETO",
    badgeColor: 'blue' as const,
    shippingText: "Frete Grátis + Brindes",
    discountPercentage: 15,
    showDiscountBadge: true,
    discountAmount: "R$ 90",
    purchaseUrl: "https://seguro.welong.com.br/r/EKBPIOTT2X?utm_source=Natal&utm_medium=lg4&utm_campaign=Roleta"
  }, {
    image: antifrizz6Img,
    title: "6 UNIDADES ANTIFRIZZ WELONG HAIR",
    subtitle: "180 Dias de Uso",
    daysOfUse: "180 Dias de Uso",
    unitPrice: "Cada unidade por R$ 56",
    originalPrice: "de R$ 397 por",
    currentPrice: "R$ 337",
    installments: "",
    badge: "MAIS VENDIDO",
    badgeColor: 'green' as const,
    shippingText: "Frete Grátis + Brindes",
    discountPercentage: 15,
    showDiscountBadge: true,
    discountAmount: "R$ 60",
    purchaseUrl: "https://seguro.welong.com.br/r/5346O6ROMB?utm_source=Natal&utm_medium=lg4&utm_campaign=Roleta"
  }, {
    image: antifrizz3BrindesImg,
    title: "3 UNIDADES ANTIFRIZZ + SHAMPOO E CONDICIONADOR",
    subtitle: "150 Dias de Uso",
    daysOfUse: "150 Dias de Uso",
    unitPrice: "Kit completo",
    originalPrice: "de R$ 297 por",
    currentPrice: "R$ 252",
    installments: "",
    badgeColor: 'purple' as const,
    shippingText: "Frete Grátis + Brindes",
    discountPercentage: 15,
    showDiscountBadge: true,
    discountAmount: "R$ 45",
    purchaseUrl: "https://seguro.welong.com.br/r/EZ07XXUVL8?utm_source=Natal&utm_medium=lg4&utm_campaign=Roleta"
  }, {
    image: antifrizz3Img,
    title: "3 UNIDADES ANTIFRIZZ WELONG HAIR",
    subtitle: "90 dias de Uso",
    daysOfUse: "90 dias de Uso",
    unitPrice: "Cada unidade por R$ 56",
    originalPrice: "de R$ 193 por",
    currentPrice: "R$ 167",
    installments: "",
    badgeColor: 'orange' as const,
    discountPercentage: 15,
    showDiscountBadge: true,
    discountAmount: "R$ 26",
    purchaseUrl: "https://seguro.welong.com.br/r/K85541H6H2?utm_source=Natal&utm_medium=lg4&utm_campaign=Roleta"
  }, {
    image: antifrizz1Img,
    title: "1 UNIDADE ANTIFRIZZ WELONG HAIR",
    subtitle: "30 dias de Uso",
    daysOfUse: "30 dias de Uso",
    unitPrice: "Cada unidade por R$ 133",
    originalPrice: "de R$ 154 por",
    currentPrice: "R$ 133",
    installments: "",
    badgeColor: 'green' as const,
    discountPercentage: 15,
    showDiscountBadge: true,
    discountAmount: "R$ 21",
    purchaseUrl: "https://seguro.welong.com.br/r/9KRT6F4R0A?utm_source=Natal&utm_medium=lg4&utm_campaign=Roleta"
  }];

  const capsulasProducts = [{
    image: capsulas10Img,
    title: "10 UNIDADES CÁPSULAS WELONG",
    subtitle: "300 Dias de Uso",
    daysOfUse: "300 Dias de Uso",
    unitPrice: "Cada unidade por R$ 42",
    originalPrice: "de R$ 485 por",
    currentPrice: "R$ 422",
    installments: "",
    badge: "MAIS COMPLETO",
    badgeColor: 'blue' as const,
    shippingText: "Frete Grátis + Brindes",
    discountPercentage: 15,
    showDiscountBadge: true,
    discountAmount: "R$ 63",
    purchaseUrl: "https://seguro.welong.com.br/r/6BB23EZVL0?utm_source=Natal&utm_medium=lg4&utm_campaign=Roleta"
  }, {
    image: capsulas5Img,
    title: "5 UNIDADES CÁPSULAS WELONG",
    subtitle: "150 Dias de Uso",
    daysOfUse: "150 Dias de Uso",
    unitPrice: "Cada unidade por R$ 50",
    originalPrice: "de R$ 291 por",
    currentPrice: "R$ 252",
    installments: "",
    badge: "MAIS VENDIDO",
    badgeColor: 'green' as const,
    shippingText: "Frete Grátis + Brindes",
    discountPercentage: 15,
    showDiscountBadge: true,
    discountAmount: "R$ 39",
    purchaseUrl: "https://seguro.welong.com.br/r/3BHQ3J94UY?utm_source=Natal&utm_medium=lg4&utm_campaign=Roleta"
  }, {
    image: capsulasKitCompletoImg,
    title: "KIT COMPLETO CÁPSULAS + TÔNICO + SHAMPOO + CONDICIONADOR",
    subtitle: "180 Dias de Uso",
    daysOfUse: "180 Dias de Uso",
    unitPrice: "Kit completo",
    originalPrice: "de R$ 241 por",
    currentPrice: "R$ 210",
    installments: "",
    badgeColor: 'purple' as const,
    shippingText: "Frete Grátis + Brindes",
    discountPercentage: 15,
    showDiscountBadge: true,
    discountAmount: "R$ 31",
    purchaseUrl: "https://seguro.welong.com.br/b/R5B1ET8PDK0K?utm_source=Natal&utm_medium=lg4&utm_campaign=Roleta"
  }, {
    image: capsulas3Img,
    title: "3 UNIDADES CÁPSULAS WELONG",
    subtitle: "90 Dias de Uso",
    daysOfUse: "90 Dias de Uso",
    unitPrice: "Cada unidade por R$ 56",
    originalPrice: "de R$ 193 por",
    currentPrice: "R$ 167",
    installments: "",
    badgeColor: 'orange' as const,
    discountPercentage: 15,
    showDiscountBadge: true,
    discountAmount: "R$ 26",
    purchaseUrl: "https://seguro.welong.com.br/r/87M0S32RWQ?utm_source=Natal&utm_medium=lg4&utm_campaign=Roleta"
  }, {
    image: capsulas1Img,
    title: "1 UNIDADE CÁPSULAS WELONG",
    subtitle: "30 Dias de Uso",
    daysOfUse: "30 Dias de Uso",
    unitPrice: "Cada unidade por R$ 133",
    originalPrice: "de R$ 154 por",
    currentPrice: "R$ 133",
    installments: "",
    badgeColor: 'teal' as const,
    discountPercentage: 15,
    showDiscountBadge: true,
    discountAmount: "R$ 21",
    purchaseUrl: "https://seguro.welong.com.br/r/2O3C5G3PYL?utm_source=Natal&utm_medium=lg4&utm_campaign=Roleta"
  }];

  return (
    <div className="min-h-screen bg-gradient-dark relative overflow-hidden">
      {/* Faixa Vermelha com Cupom - Fixa */}
      <div className="fixed top-0 left-0 right-0 w-full py-1.5 sm:py-2 shadow-lg z-50 bg-black" style={{
        backgroundColor: '#FF0000'
      }}>
        <div className="container mx-auto text-center">
          <p className="text-yellow-300 text-sm sm:text-base font-bold tracking-wide">
            ⚡CUPOM JÁ APLICADO APROVEITE!⚡
          </p>
        </div>
      </div>
      
      {/* Espaçamento para compensar a faixa fixa */}
      <div className="h-10 sm:h-12 bg-black"></div>
      
      {/* Decorações Black November */}
      <div className="fixed top-10 left-10 opacity-30 z-0">
        <BlackNovemberDecoration size="lg" />
      </div>
      <div className="fixed top-32 right-16 opacity-20 z-0">
        <BlackNovemberDecoration size="md" />
      </div>
      <div className="fixed bottom-20 left-16 opacity-25 z-0">
        <BlackNovemberDecoration size="sm" />
      </div>
      <div className="fixed bottom-40 right-10 opacity-30 z-0">
        <BlackNovemberDecoration size="lg" />
      </div>
      
      {/* Header */}
      <header className="relative z-10 py-1 sm:py-6 px-0 sm:px-4 bg-black">
        <ChristmasIcons />
        <div className="container mx-auto flex justify-center">
          <div className="relative">
            <img src={welongLogo} alt="Welong Hair" className="h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-44 lg:w-44 object-contain" />
            <div className="absolute -top-2 -right-2">
              <BlackNovemberDecoration size="sm" className="opacity-80" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-0 sm:px-4 bg-black">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-1 sm:gap-2 mb-2">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
              <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                OFERTA NATALINA RELÂMPAGO
              </h1>
              <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
            </div>
          </div>
          
          <Countdown />
          
          <div className="overflow-hidden whitespace-nowrap py-4 mt-4 sm:mt-6 md:mt-8 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] shadow-glow" style={{
            backgroundColor: '#FF0000'
          }}>
            <div className="animate-marquee inline-block text-base sm:text-lg md:text-xl text-white font-bold">
              {Array(100).fill("🎄 OFERTA NATALINA ⭐ ÚLTIMAS UNIDADES ⭐ APROVEITE AGORA 🎄          ").join("")}
            </div>
          </div>
        </div>
      </section>

      {/* Linhas de Produtos */}
      
      {/* Linha Crescimento e Antiqueda */}
      <section className="relative z-10 py-2 sm:py-10 md:py-12 px-0 sm:px-4 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-0 sm:mb-10 md:mb-12 mt-8 sm:mt-12 md:mt-16">
            <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 mb-4 sm:mb-6">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-300 flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent text-center px-1 sm:px-4">
                LINHA CRESCIMENTO E ANTIQUEDA
              </h2>
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-300 flex-shrink-0" />
            </div>
            <div className="flex justify-center gap-2">
              <Flame className="w-4 h-4 text-white opacity-80" />
              <Flame className="w-4 h-4 text-white opacity-80" />
              <Flame className="w-4 h-4 text-white opacity-80" />
            </div>
          </div>
          
          <div key={`antiqueda-${renderKey}`} className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-3 max-w-7xl mx-auto">
            {antiquedaProducts.map((product, index) => (
              <div key={index} className="min-h-[440px] sm:min-h-[550px] lg:min-h-[600px]">
                <KitCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Linha Cápsulas */}
      <section className="relative z-10 py-2 sm:py-10 md:py-12 px-0 sm:px-4 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-0 sm:mb-10 md:mb-12">
          </div>
          
          <div key={`capsulas-${renderKey}`} className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-3 max-w-7xl mx-auto">
            {capsulasProducts.map((product, index) => (
              <div key={index} className="min-h-[440px] sm:min-h-[550px] lg:min-h-[600px]">
                <KitCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Linha Antifrizz */}
      <section className="relative z-10 py-2 sm:py-10 md:py-12 px-0 sm:px-4 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-6 sm:mb-10 md:mb-12 mt-2 sm:mt-4 md:mt-6">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-300" />
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent text-center px-4">
                LINHA ANTIFRIZZ
              </h2>
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-300" />
            </div>
            <div className="flex justify-center gap-2">
              <Flame className="w-4 h-4 text-white opacity-80" />
              <Flame className="w-4 h-4 text-white opacity-80" />
              <Flame className="w-4 h-4 text-white opacity-80" />
            </div>
          </div>
          
          <div key={`antifrizz-${renderKey}`} className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-3 max-w-7xl mx-auto">
            {antiFrizzProducts.map((product, index) => (
              <div key={index} className="min-h-[440px] sm:min-h-[550px] lg:min-h-[600px]">
                <KitCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="relative z-10 py-2 sm:py-10 md:py-12 px-0 sm:px-4">
        <div className="container mx-auto max-w-4xl">
          <WhatsAppButton />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-2 sm:py-8 px-0 sm:px-4 border-t border-black-november-gold/30 bg-card">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2024 Welong Hair - Todos os direitos reservados
          </p>
          <p className="text-yellow-400 text-xs mt-2">
            🎄 Aproveite as ofertas natalinas! 🎄
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
};

export default LG5;
