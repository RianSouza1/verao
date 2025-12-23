import React, { useState, useEffect } from 'react';
import { Zap, Flame } from 'lucide-react';
import Countdown from '@/components/Countdown';
import KitCard from '@/components/KitCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import SummerDecoration from '@/components/SummerDecoration';
import SummerIcons from '@/components/SummerIcons';
import welongLogo from '@/assets/welong-logo-summer-v2-user.png';
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
import heroBg from '@/assets/hero-beach.png';
import heroSign from '@/assets/PLACA-VERAO.png';
const Verao = () => {
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
    purchaseUrl: "https://seguro.welong.com.br/r/8O1XB34GUA?utm_source=Verao&utm_medium=Verao&utm_campaign=Verao"
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
    purchaseUrl: "https://seguro.welong.com.br/r/MBKLHMA2IV?utm_source=Verao&utm_medium=Verao&utm_campaign=Verao"
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
    purchaseUrl: "https://seguro.welong.com.br/r/HT1OQPX12V?utm_source=Verao&utm_medium=Verao&utm_campaign=Verao"
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
    purchaseUrl: "https://seguro.welong.com.br/r/KG5LJLOTT3?utm_source=Verao&utm_medium=Verao&utm_campaign=Verao"
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
    purchaseUrl: "https://seguro.welong.com.br/r/C1R8W78CN3?utm_source=Verao&utm_medium=Verao&utm_campaign=Verao"
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
    purchaseUrl: "https://seguro.welong.com.br/r/RJBYR6ESKM?utm_source=Verao&utm_medium=Verao&utm_campaign=Verao"
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
    purchaseUrl: "https://seguro.welong.com.br/r/AIOHS0CVPE?utm_source=Verao&utm_medium=Verao&utm_campaign=Verao"
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
    purchaseUrl: "https://seguro.welong.com.br/r/IDX2GCER77?utm_source=Verao&utm_medium=Verao&utm_campaign=Verao"
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
    purchaseUrl: "https://seguro.welong.com.br/r/TJPR97DVO5?utm_source=Verao&utm_medium=Verao&utm_campaign=Verao"
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
    purchaseUrl: "https://seguro.welong.com.br/r/8DIH2UP9J1?utm_source=Verao&utm_medium=Verao&utm_campaign=Verao"
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
    purchaseUrl: "https://seguro.welong.com.br/r/JF8VNX2ZW2?utm_source=Verao&utm_medium=Verao&utm_campaign=Verao"
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
    purchaseUrl: "https://seguro.welong.com.br/r/13JJZZ8Z42?utm_source=Verao&utm_medium=Verao&utm_campaign=Verao"
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
    purchaseUrl: "https://seguro.welong.com.br/b/QWVY2UAQTFK0?utm_source=Verao&utm_medium=Verao&utm_campaign=Verao"
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
    purchaseUrl: "https://seguro.welong.com.br/r/QQBXDVHP58?utm_source=Verao&utm_medium=Verao&utm_campaign=Verao"
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
    discountAmount: "R$ 21",
    purchaseUrl: "https://seguro.welong.com.br/r/6DX2BN6G9U?utm_source=Verao&utm_medium=Verao&utm_campaign=Verao"
  }];
  return <div className="min-h-screen bg-gradient-hd-sky relative overflow-hidden">
    {/* Faixa Vermelha com Cupom - Fixa -> Faixa Amarela Secundária (Promoção) */}
    <div className="fixed top-0 left-0 right-0 w-full py-1.5 sm:py-2 shadow-lg z-50" style={{
      backgroundColor: '#F97316'
    }}>
      <div className="container mx-auto text-center">
        <p className="text-white text-sm sm:text-base font-bold tracking-wide">
          🌊CUPOM JÁ APLICADO, APROVEITE🏄
        </p>
      </div>
    </div>





    {/* Header & Hero Wrapper with Background Image */}
    <div className="pt-10 sm:pt-12" style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      {/* Header */}
      <header className="relative z-10 py-1 sm:py-6 px-0 sm:px-4">

        <div className="container mx-auto flex justify-center">
          <div className="relative">
            <img
              src={welongLogo}
              alt="Welong Hair"
              className="h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-44 lg:w-44 object-contain shadow-lg"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-0 sm:px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-6 sm:mb-8">
            <div className="relative w-full max-w-3xl mx-auto mb-8">
              <img src={heroSign} alt="Oferta Verão Welong" className="w-full h-auto drop-shadow-xl" />

              <div className="absolute bottom-2 sm:bottom-[6%] left-1/2 -translate-x-1/2 w-[90%] sm:w-[85%] md:w-[80%]">
                <Countdown className="bg-transparent shadow-none border-none !py-0 sm:!p-6" />
              </div>
            </div>

            <div className="overflow-hidden whitespace-nowrap py-4 mt-4 sm:mt-6 md:mt-8 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] shadow-glow bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400">
              <div className="animate-marquee inline-block text-base sm:text-lg md:text-xl text-black font-bold">
                {Array(100).fill("🌴🌅 OFERTA DE VERÃO ⭐ 15% OFF ⭐ APROVEITE AGORA🌅🌴          ").join("")}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* Linhas de Produtos */}

    {/* Linha Crescimento e Antiqueda */}
    <section className="relative z-10 py-2 sm:py-10 md:py-12 px-0 sm:px-4 bg-ds-surface-white/50 my-4 sm:my-8 rounded-3xl mx-2 sm:mx-8 shadow-sm">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-0 sm:mb-10 md:mb-12 mt-8 sm:mt-12 md:mt-16">
          <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 mb-4 sm:mb-6">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-ds-secondary flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-ds-secondary text-center px-1 sm:px-4">
              LINHA CRESCIMENTO E ANTIQUEDA
            </h2>
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-ds-secondary flex-shrink-0" />
          </div>
          <div className="flex justify-center gap-2">
            <Flame className="w-4 h-4 text-ds-cta-secondary opacity-80" />
            <Flame className="w-4 h-4 text-ds-cta-secondary opacity-80" />
            <Flame className="w-4 h-4 text-ds-cta-secondary opacity-80" />
          </div>
        </div>

        <div key={`antiqueda-${renderKey}`} className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-3 max-w-7xl mx-auto">
          {antiquedaProducts.map((product, index) => <div key={index} className="min-h-[440px] sm:min-h-[550px] lg:min-h-[600px]">
            <KitCard {...product} />
          </div>)}
        </div>
      </div>
    </section>

    {/* Linha Cápsulas */}
    <section className="relative z-10 py-2 sm:py-10 md:py-12 px-0 sm:px-4 bg-ds-surface-white/50 my-4 sm:my-8 rounded-3xl mx-2 sm:mx-8 shadow-sm">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-0 sm:mb-10 md:mb-12 mt-8 sm:mt-12 md:mt-16">
          <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 mb-4 sm:mb-6">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-ds-secondary flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-ds-secondary text-center px-1 sm:px-4">
              LINHA CÁPSULAS
            </h2>
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-ds-secondary flex-shrink-0" />
          </div>
          <div className="flex justify-center gap-2">
            <Flame className="w-4 h-4 text-ds-cta-secondary opacity-80" />
            <Flame className="w-4 h-4 text-ds-cta-secondary opacity-80" />
            <Flame className="w-4 h-4 text-ds-cta-secondary opacity-80" />
          </div>
        </div>

        <div key={`capsulas-${renderKey}`} className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-3 max-w-7xl mx-auto">
          {capsulasProducts.map((product, index) => <div key={index} className="min-h-[440px] sm:min-h-[550px] lg:min-h-[600px]">
            <KitCard {...product} />
          </div>)}
        </div>
      </div>
    </section>

    {/* Linha Antifrizz */}
    <section className="relative z-10 py-2 sm:py-10 md:py-12 px-0 sm:px-4 bg-ds-surface-white/50 my-4 sm:my-8 rounded-3xl mx-2 sm:mx-8 shadow-sm">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-6 sm:mb-10 md:mb-12 mt-2 sm:mt-4 md:mt-6">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-ds-secondary" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-ds-secondary text-center px-4">
              LINHA ANTIFRIZZ
            </h2>
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-ds-secondary" />
          </div>
          <div className="flex justify-center gap-2">
            <Flame className="w-4 h-4 text-ds-cta-secondary opacity-80" />
            <Flame className="w-4 h-4 text-ds-cta-secondary opacity-80" />
            <Flame className="w-4 h-4 text-ds-cta-secondary opacity-80" />
          </div>
        </div>

        <div key={`antifrizz-${renderKey}`} className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-3 max-w-7xl mx-auto">
          {antiFrizzProducts.map((product, index) => <div key={index} className="min-h-[440px] sm:min-h-[550px] lg:min-h-[600px]">
            <KitCard {...product} />
          </div>)}
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
    <footer className="relative z-10 py-2 sm:py-8 px-0 sm:px-4 border-t border-black-november-gold/30">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-4 gap-3 text-black">
          <Zap className="w-4 h-4 text-black" />
          <Flame className="w-4 h-4 text-black" />
          <Zap className="w-4 h-4 text-[#120707]" />
        </div>
        <p className="text-xs sm:text-sm font-semibold text-black">
          © 2025 Welong Hair. Todos os direitos reservados.
        </p>
        <p className="text-sm mt-2 font-bold text-black">
          🏄‍♀️  Oferta de Verão - Descontos Imperdíveis ☀️
        </p>
      </div>
    </footer>

    {/* Floating WhatsApp Button */}
    <FloatingWhatsApp />
  </div>;
};
export default Verao;