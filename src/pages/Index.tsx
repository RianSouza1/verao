import React, { useState, useEffect } from 'react';
import { Sparkles, Gift } from 'lucide-react';
import Countdown from '@/components/Countdown';
import KitCard from '@/components/KitCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ChristmasDecoration from '@/components/ChristmasDecoration';
import SnowEffect from '@/components/SnowEffect';
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

const Index = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [renderKey, setRenderKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setRenderKey(prev => prev + 1); // Force re-render
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    
    // Also listen for orientation changes
    window.addEventListener('orientationchange', () => {
      setTimeout(handleResize, 100);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  const isDesktop = windowWidth >= 1024;
  
  const antiquedaProducts = [
    {
      image: kitCrescimento8Img,
      title: "8 TÔNICOS + 2 SHAMPOOS + 2 CONDICIONADORES",
      subtitle: "Welong 300 dias",
      daysOfUse: "300 dias de uso",
      unitPrice: "Cada unidade por R$ 35",
      originalPrice: "de R$ 597 por",
      currentPrice: "R$ 417",
      installments: "",
      badge: "MAIS COMPLETO",
      badgeColor: 'blue' as const,
      isHighlighted: true,
      shippingText: "Frete Grátis + Brindes",
      discountPercentage: 30,
      showDiscountBadge: true,
      discountAmount: "R$ 180",
      purchaseUrl: "https://seguro.welong.com.br/r/QBY29C6JEJ?utm_source=lg1&utm_medium=lg1&utm_campaign=fb"
    },
    {
      image: kitCrescimento5Img,
      title: "5 TÔNICOS + 1 SHAMPOO + 1 CONDICIONADOR",
      subtitle: "Welong 180 dias", 
      daysOfUse: "180 dias de uso",
      unitPrice: "Cada unidade por R$ 45",
      originalPrice: "de R$ 397 por",
      currentPrice: "R$ 317",
      installments: "",
      badge: "MAIS VENDIDO",
      badgeColor: 'green' as const,
      isHighlighted: true,
      shippingText: "Frete Grátis + Brindes",
      discountPercentage: 20,
      showDiscountBadge: true,
      discountAmount: "R$ 80",
      purchaseUrl: "https://seguro.welong.com.br/r/9L9UN5MH0K?utm_source=lg1&utm_medium=lg1&utm_campaign=fb"
    },
    {
      image: kitCrescimento3CompletoImg,
      title: "3 TÔNICOS + 1 SHAMPOO + 1 CONDICIONADOR",
      subtitle: "Welong 90 dias",
      daysOfUse: "90 dias de uso", 
      unitPrice: "Cada unidade por R$ 51",
      originalPrice: "de R$ 297 por",
      currentPrice: "R$ 257",
      installments: "",
      badgeColor: 'purple' as const,
      shippingText: "Frete Grátis + Brindes",
      discountPercentage: 13,
      showDiscountBadge: true,
      discountAmount: "R$ 40",
      purchaseUrl: "https://seguro.welong.com.br/r/KLF7DEKSW5?utm_source=lg1&utm_medium=lg1&utm_campaign=fb"
    },
    {
      image: kitCrescimento3Img,
      title: "3 UNIDADES TÔNICO WELONG HAIR",
      subtitle: "Welong 90 dias",
      daysOfUse: "90 dias de uso",
      unitPrice: "Cada unidade por R$ 59",
      originalPrice: "de R$ 197 por",
      currentPrice: "R$ 177",
      installments: "",
      badgeColor: 'orange' as const,
      discountPercentage: 10,
      showDiscountBadge: true,
      discountAmount: "R$ 20",
      purchaseUrl: "https://seguro.welong.com.br/r/6RVKQ5APYU?utm_source=lg1&utm_medium=lg1&utm_campaign=fb"
    },
    {
      image: kitCrescimento1Img,
      title: "1 UNIDADE TÔNICO WELONG HAIR",
      subtitle: "Welong 30 dias",
      daysOfUse: "30 dias de uso",
      unitPrice: "Cada unidade por R$ 147",
      originalPrice: "de R$ 157 por",
      currentPrice: "R$ 147",
      installments: "",
      badgeColor: 'teal' as const,
      discountPercentage: 6,
      showDiscountBadge: true,
      discountAmount: "R$ 10",
      purchaseUrl: "https://seguro.welong.com.br/r/CCC0SPDKKZ?utm_source=lg1&utm_medium=lg1&utm_campaign=fb"
    }
  ];

  const antiFrizzProducts = [
    {
      image: antifrizz12Img,
      title: "12 UNIDADES ANTIFRIZZ WELONG HAIR",
      subtitle: "365 Dias de Uso",
      daysOfUse: "365 Dias de Uso",
      unitPrice: "Cada unidade por R$ 35",
      originalPrice: "de R$ 597 por",
      currentPrice: "R$ 417",
      installments: "",
      badge: "MAIS COMPLETO",
      badgeColor: 'blue' as const,
      shippingText: "Frete Grátis + Brindes",
      discountPercentage: 30,
      showDiscountBadge: true,
      discountAmount: "R$ 180",
      purchaseUrl: "https://seguro.welong.com.br/r/GVVRX4SMKV?utm_source=lg1&utm_medium=lg1&utm_campaign=fb"
    },
    {
      image: antifrizz6Img,
      title: "6 UNIDADES ANTIFRIZZ WELONG HAIR",
      subtitle: "180 Dias de Uso",
      daysOfUse: "180 Dias de Uso", 
      unitPrice: "Cada unidade por R$ 53",
      originalPrice: "de R$ 397 por",
      currentPrice: "R$ 317",
      installments: "",
      badge: "MAIS VENDIDO",
      badgeColor: 'green' as const,
      shippingText: "Frete Grátis + Brindes",
      discountPercentage: 20,
      showDiscountBadge: true,
      discountAmount: "R$ 80",
      purchaseUrl: "https://seguro.welong.com.br/r/AMXSPBBJXG?utm_source=lg1&utm_medium=lg1&utm_campaign=fb"
    },
    {
      image: antifrizz3BrindesImg,
      title: "3 UNIDADES ANTIFRIZZ + SHAMPOO E CONDICIONADOR",
      subtitle: "150 Dias de Uso",
      daysOfUse: "150 Dias de Uso",
      unitPrice: "Cada unidade por R$ 51", 
      originalPrice: "de R$ 297 por",
      currentPrice: "R$ 257",
      installments: "",
      badgeColor: 'purple' as const,
      shippingText: "Frete Grátis + Brindes",
      discountPercentage: 13,
      showDiscountBadge: true,
      discountAmount: "R$ 40",
      purchaseUrl: "https://seguro.welong.com.br/r/IIDRJIZWDF?utm_source=lg1&utm_medium=lg1&utm_campaign=fb"
    },
    {
      image: antifrizz3Img,
      title: "3 UNIDADES ANTIFRIZZ WELONG HAIR",
      subtitle: "90 dias de Uso",
      daysOfUse: "90 dias de Uso",
      unitPrice: "Cada unidade por R$ 59",
      originalPrice: "de R$ 197 por", 
      currentPrice: "R$ 177",
      installments: "",
      badgeColor: 'orange' as const,
      discountPercentage: 10,
      showDiscountBadge: true,
      discountAmount: "R$ 20",
      purchaseUrl: "https://seguro.welong.com.br/r/R9UWZJHO8V?utm_source=lg1&utm_medium=lg1&utm_campaign=fb"
    },
    {
      image: antifrizz1Img,
      title: "1 UNIDADE ANTIFRIZZ WELONG HAIR",
      subtitle: "30 dias de Uso",
      daysOfUse: "30 dias de Uso",
      unitPrice: "Cada unidade por R$ 147",
      originalPrice: "de R$ 157 por",
      currentPrice: "R$ 147",
      installments: "",
      badgeColor: 'green' as const,
      discountPercentage: 6,
      showDiscountBadge: true,
      discountAmount: "R$ 10",
      purchaseUrl: "https://seguro.welong.com.br/r/553JDA3KRS?utm_source=lg1&utm_medium=lg1&utm_campaign=fb"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-dark relative overflow-hidden">
      {/* Efeito de neve */}
      <SnowEffect />
      
      {/* Decorações Natal */}
      <div className="fixed top-10 left-10 opacity-30 z-0">
        <ChristmasDecoration size="lg" />
      </div>
      <div className="fixed top-32 right-16 opacity-20 z-0">
        <ChristmasDecoration size="md" />
      </div>
      <div className="fixed bottom-20 left-16 opacity-25 z-0">
        <ChristmasDecoration size="sm" />
      </div>
      <div className="fixed bottom-40 right-10 opacity-30 z-0">
        <ChristmasDecoration size="lg" />
      </div>
      
      {/* Header */}
      <header className="relative z-10 py-1 sm:py-6 px-0 sm:px-4">
        <div className="container mx-auto flex justify-center">
          <div className="relative">
            <img 
              src={welongLogo} 
              alt="Welong Hair" 
              className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 object-contain"
            />
            <div className="absolute -top-2 -right-2">
              <ChristmasDecoration size="sm" className="opacity-80" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-1 sm:py-8 px-0 sm:px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 animate-twinkle" fill="currentColor" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold px-6 py-2 bg-black/40 rounded-lg">
                <span className="text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,1)]">
                  MEGA PROMOÇÃO
                </span>
              </h1>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 animate-twinkle" fill="currentColor" />
            </div>
            <div className="flex items-center justify-center gap-4 mb-2">
              <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" fill="currentColor" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold px-6 py-2 bg-black/40 rounded-lg text-yellow-400 drop-shadow-[0_0_40px_rgba(250,204,21,1)]">
                NATAL VERMELHO
              </h2>
              <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" fill="currentColor" />
            </div>
            <p className="text-base sm:text-lg md:text-xl text-yellow-400 font-bold mb-4 sm:mb-6 md:mb-8 px-6 py-2 bg-black/30 rounded-lg inline-block drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
              🔥 ATÉ 30% OFF - O PRESENTE PERFEITO PARA O NATAL! 🎁
            </p>
          </div>
          
          <Countdown />
          
          <div className="overflow-hidden whitespace-nowrap bg-gradient-to-r from-christmas-red via-christmas-gold to-christmas-red py-4 mt-4 sm:mt-6 md:mt-8 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] shadow-glow">
            <div className="animate-marquee inline-block text-base sm:text-lg md:text-xl text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {Array(100).fill("🎁 NATAL VERMELHO 🎁 ATÉ 30% DE DESCONTO 🔥 ENTREGA GARANTIDA PARA O NATAL 🎁 APROVEITE JÁ 🔥          ").join("")}
            </div>
          </div>
        </div>
      </section>

      {/* Linhas de Produtos */}
      
      {/* Linha Crescimento e Antiqueda */}
      <section className="relative z-10 py-2 sm:py-10 md:py-12 px-0 sm:px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-0 sm:mb-10 md:mb-12">
            <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 mb-4 sm:mb-6">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 flex-shrink-0 animate-twinkle" fill="currentColor" />
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 drop-shadow-[0_0_25px_rgba(250,204,21,1)] text-center px-3 py-2 bg-black/30 rounded-lg">
                CRESCIMENTO E ANTIQUEDA
              </h2>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 flex-shrink-0 animate-twinkle" fill="currentColor" />
            </div>
            <div className="flex justify-center gap-2">
              <Gift className="w-4 h-4 text-yellow-400 animate-pulse" fill="currentColor" />
              <Gift className="w-5 h-5 text-yellow-400" fill="currentColor" />
              <Gift className="w-4 h-4 text-yellow-400 animate-pulse" fill="currentColor" />
            </div>
          </div>
          
          <div 
            key={`antiqueda-${renderKey}`}
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-3 max-w-7xl mx-auto"
          >
            {antiquedaProducts.map((product, index) => (
              <div key={index} className="min-h-[440px] sm:min-h-[550px] lg:min-h-[600px]">
                <KitCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Linha Antifrizz */}
      <section className="relative z-10 py-2 sm:py-10 md:py-12 px-0 sm:px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-0 sm:mb-10 md:mb-12">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 animate-twinkle" fill="currentColor" />
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 drop-shadow-[0_0_25px_rgba(250,204,21,1)] text-center px-4 py-2 bg-black/30 rounded-lg">
                ANTIFRIZZ
              </h2>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 animate-twinkle" fill="currentColor" />
            </div>
            <div className="flex justify-center gap-2">
              <Gift className="w-4 h-4 text-yellow-400 animate-pulse" fill="currentColor" />
              <Gift className="w-5 h-5 text-yellow-400" fill="currentColor" />
              <Gift className="w-4 h-4 text-yellow-400 animate-pulse" fill="currentColor" />
            </div>
          </div>
          
          <div 
            key={`antifrizz-${renderKey}`}
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-3 max-w-7xl mx-auto"
          >
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
      <footer className="relative z-10 py-2 sm:py-8 px-0 sm:px-4 border-t border-yellow-400/40 bg-card">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-4 gap-3">
            <Sparkles className="w-4 h-4 text-yellow-400 animate-twinkle" fill="currentColor" />
            <Gift className="w-5 h-5 text-yellow-400 animate-pulse" fill="currentColor" />
            <Sparkles className="w-4 h-4 text-yellow-400 animate-twinkle" fill="currentColor" />
          </div>
          <p className="text-yellow-400 text-xs sm:text-sm font-semibold">
            © 2025 Welong Hair. Todos os direitos reservados.
          </p>
          <p className="text-yellow-400 text-sm mt-2 font-bold drop-shadow-lg">
            🎁 NATAL VERMELHO - O MELHOR PRESENTE ESTÁ AQUI! 🔥
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;