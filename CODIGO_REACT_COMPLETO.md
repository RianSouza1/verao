# Código React Completo - Landing Page Welong Hair

Este documento contém todo o código React da landing page Black November da Welong Hair.

## Estrutura do Projeto

```
src/
├── App.tsx
├── main.tsx
├── index.css
├── pages/
│   └── LG4.tsx
├── components/
│   ├── Countdown.tsx
│   ├── KitCard.tsx
│   ├── FloatingWhatsApp.tsx
│   ├── WhatsAppButton.tsx
│   ├── LightningEffect.tsx
│   └── BlackNovemberDecoration.tsx
└── assets/
    └── [imagens dos produtos]
```

---

## 1. App.tsx

```tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LG4 from "./pages/LG4";
import NotFound from "./pages/NotFound";
import LightningEffect from "./components/LightningEffect";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="relative min-h-screen bg-background">
        <LightningEffect />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
        <Route path="/" element={<LG4 />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```

---

## 2. main.tsx

```tsx
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
```

---

## 3. pages/LG4.tsx

```tsx
import React, { useState, useEffect } from 'react';
import { Zap, Flame } from 'lucide-react';
import Countdown from '@/components/Countdown';
import KitCard from '@/components/KitCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BlackNovemberDecoration from '@/components/BlackNovemberDecoration';
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

const LG4 = () => {
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
      purchaseUrl: "https://seguro.welong.com.br/r/8O1XB34GUA?utm_source=lg4&utm_medium=lg4&utm_campaign=lg4"
    },
    {
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
      purchaseUrl: "https://seguro.welong.com.br/r/MBKLHMA2IV?utm_source=lg4&utm_medium=lg4&utm_campaign=lg4"
    },
    {
      image: kitCrescimento3CompletoImg,
      title: "3 TÔNICOS + 1 SHAMPOO + 1 CONDICIONADOR",
      subtitle: "Welong 90 dias",
      daysOfUse: "90 dias de uso", 
      unitPrice: "Cada unidade por R$ 50",
      originalPrice: "de R$ 297 por",
      currentPrice: "R$ 252",
      installments: "",
      badgeColor: 'purple' as const,
      shippingText: "Frete Grátis + Brindes",
      discountPercentage: 15,
      showDiscountBadge: true,
      discountAmount: "R$ 45",
      purchaseUrl: "https://seguro.welong.com.br/r/HT1OQPX12V?utm_source=lg4&utm_medium=lg4&utm_campaign=lg4"
    },
    {
      image: kitCrescimento3Img,
      title: "3 UNIDADES TÔNICO WELONG HAIR",
      subtitle: "Welong 90 dias",
      daysOfUse: "90 dias de uso",
      unitPrice: "Cada unidade por R$ 56",
      originalPrice: "de R$ 197 por",
      currentPrice: "R$ 167",
      installments: "",
      badgeColor: 'orange' as const,
      discountPercentage: 15,
      showDiscountBadge: true,
      discountAmount: "R$ 30",
      purchaseUrl: "https://seguro.welong.com.br/r/KG5LJLOTT3?utm_source=lg4&utm_medium=lg4&utm_campaign=lg4"
    },
    {
      image: kitCrescimento1Img,
      title: "1 UNIDADE TÔNICO WELONG HAIR",
      subtitle: "Welong 30 dias",
      daysOfUse: "30 dias de uso",
      unitPrice: "Cada unidade por R$ 133",
      originalPrice: "de R$ 157 por",
      currentPrice: "R$ 133",
      installments: "",
      badgeColor: 'teal' as const,
      discountPercentage: 15,
      showDiscountBadge: true,
      discountAmount: "R$ 24",
      purchaseUrl: "https://seguro.welong.com.br/r/C1R8W78CN3?utm_source=lg4&utm_medium=lg4&utm_campaign=lg4"
    }
  ];

  const antiFrizzProducts = [
    {
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
      purchaseUrl: "https://seguro.welong.com.br/r/RJBYR6ESKM?utm_source=lg4&utm_medium=lg4&utm_campaign=lg4"
    },
    {
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
      purchaseUrl: "https://seguro.welong.com.br/r/AIOHS0CVPE?utm_source=lg4&utm_medium=lg4&utm_campaign=lg4"
    },
    {
      image: antifrizz3BrindesImg,
      title: "3 UNIDADES ANTIFRIZZ + SHAMPOO E CONDICIONADOR",
      subtitle: "150 Dias de Uso",
      daysOfUse: "150 Dias de Uso",
      unitPrice: "Cada unidade por R$ 50", 
      originalPrice: "de R$ 297 por",
      currentPrice: "R$ 252",
      installments: "",
      badgeColor: 'purple' as const,
      shippingText: "Frete Grátis + Brindes",
      discountPercentage: 15,
      showDiscountBadge: true,
      discountAmount: "R$ 45",
      purchaseUrl: "https://seguro.welong.com.br/r/IDX2GCER77?utm_source=lg4&utm_medium=lg4&utm_campaign=lg4"
    },
    {
      image: antifrizz3Img,
      title: "3 UNIDADES ANTIFRIZZ WELONG HAIR",
      subtitle: "90 dias de Uso",
      daysOfUse: "90 dias de Uso",
      unitPrice: "Cada unidade por R$ 56",
      originalPrice: "de R$ 197 por", 
      currentPrice: "R$ 167",
      installments: "",
      badgeColor: 'orange' as const,
      discountPercentage: 15,
      showDiscountBadge: true,
      discountAmount: "R$ 30",
      purchaseUrl: "https://seguro.welong.com.br/r/TJPR97DVO5?utm_source=lg4&utm_medium=lg4&utm_campaign=lg4"
    },
    {
      image: antifrizz1Img,
      title: "1 UNIDADE ANTIFRIZZ WELONG HAIR",
      subtitle: "30 dias de Uso",
      daysOfUse: "30 dias de Uso",
      unitPrice: "Cada unidade por R$ 133",
      originalPrice: "de R$ 157 por",
      currentPrice: "R$ 133",
      installments: "",
      badgeColor: 'green' as const,
      discountPercentage: 15,
      showDiscountBadge: true,
      discountAmount: "R$ 24",
      purchaseUrl: "https://seguro.welong.com.br/r/8DIH2UP9J1?utm_source=lg4&utm_medium=lg4&utm_campaign=lg4"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-dark relative overflow-hidden">
      {/* Faixa Vermelha com Cupom - Fixa */}
      <div className="fixed top-0 left-0 right-0 w-full py-1.5 sm:py-2 shadow-lg z-50" style={{ backgroundColor: '#FF0000' }}>
        <div className="container mx-auto text-center">
          <p className="text-white text-sm sm:text-base font-bold tracking-wide">
            ⚡ CUPOM: <span className="text-yellow-300">BLACK15</span> ⚡
          </p>
        </div>
      </div>
      
      {/* Espaçamento para compensar a faixa fixa */}
      <div className="h-10 sm:h-12"></div>
      
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
      <header className="relative z-10 py-1 sm:py-6 px-0 sm:px-4">
        <div className="container mx-auto flex justify-center">
          <div className="relative">
            <img 
              src={welongLogo} 
              alt="Welong Hair" 
              className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 object-contain"
            />
            <div className="absolute -top-2 -right-2">
              <BlackNovemberDecoration size="sm" className="opacity-80" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-1 sm:py-8 px-0 sm:px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-black-november-gold" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                <span className="bg-gradient-to-r from-black-november-gold via-black-november-orange to-black-november-gold bg-clip-text text-transparent">
                  OFERTA RELÂMPAGO
                </span>
              </h1>
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-black-november-gold" />
            </div>
            <div className="flex items-center justify-center gap-4 mb-2">
              <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-black-november-orange" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-black-november-orange to-black-november-gold bg-clip-text text-transparent">
                BLACK NOVEMBER
              </h2>
              <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-black-november-orange" />
            </div>
          </div>
          
          <Countdown />
          
          <div className="overflow-hidden whitespace-nowrap bg-gradient-to-r from-black-november-orange via-black-november-gold to-black-november-orange py-4 mt-4 sm:mt-6 md:mt-8 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] shadow-glow">
            <div className="animate-marquee inline-block text-base sm:text-lg md:text-xl text-black font-bold">
              {Array(100).fill("⚡ BLACK NOVEMBER 🔥 ÚLTIMAS UNIDADES 🔥 APROVEITE AGORA ⚡          ").join("")}
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
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black-november-gold flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-black-november-gold to-black-november-orange bg-clip-text text-transparent text-center px-1 sm:px-4">
                LINHA CRESCIMENTO E ANTIQUEDA
              </h2>
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black-november-gold flex-shrink-0" />
            </div>
            <div className="flex justify-center gap-2">
              <Flame className="w-4 h-4 text-black-november-orange opacity-80" />
              <Flame className="w-4 h-4 text-black-november-orange opacity-80" />
              <Flame className="w-4 h-4 text-black-november-orange opacity-80" />
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
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black-november-gold" />
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-black-november-gold to-black-november-orange bg-clip-text text-transparent text-center px-4">
                LINHA ANTIFRIZZ
              </h2>
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black-november-gold" />
            </div>
            <div className="flex justify-center gap-2">
              <Flame className="w-4 h-4 text-black-november-orange opacity-80" />
              <Flame className="w-4 h-4 text-black-november-orange opacity-80" />
              <Flame className="w-4 h-4 text-black-november-orange opacity-80" />
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
      <footer className="relative z-10 py-2 sm:py-8 px-0 sm:px-4 border-t border-black-november-gold/30 bg-card">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-4 gap-3">
            <Zap className="w-4 h-4 text-black-november-gold" />
            <Flame className="w-4 h-4 text-black-november-orange" />
            <Zap className="w-4 h-4 text-black-november-gold" />
          </div>
          <p className="text-foreground text-xs sm:text-sm font-semibold">
            © 2025 Welong Hair. Todos os direitos reservados.
          </p>
          <p className="text-black-november-orange text-sm mt-2 font-bold">
            ⚡ BLACK NOVEMBER - DESCONTOS IMPERDÍVEIS! 🔥
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default LG4;
```

---

## 4. components/Countdown.tsx

```tsx
import { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 5,
    seconds: 0
  });

  const today = format(new Date(), "dd/MM/yyyy", { locale: ptBR });

  useEffect(() => {
    const calculateTimeLeft = () => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        // Decrementa um segundo
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
        } else {
          // Timer chegou a 00:00:00
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        
        return { hours, minutes, seconds };
      });
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 bg-card rounded-xl sm:rounded-2xl lg:rounded-3xl border border-border shadow-card max-w-2xl mx-auto">
      <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-vermelho-claro uppercase tracking-wider text-center">
          CUPOM VÁLIDO PARA OS PRÓXIMOS:
        </h2>
      </div>
      
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6 text-center mb-4 sm:mb-6">
        <div className="flex flex-col items-center">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm md:text-base text-muted-foreground uppercase tracking-wider">
            HORAS
          </div>
        </div>
        
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground">:</div>
        
        <div className="flex flex-col items-center">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm md:text-base text-muted-foreground uppercase tracking-wider">
            MINUTOS
          </div>
        </div>
        
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground">:</div>
        
        <div className="flex flex-col items-center">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm md:text-base text-muted-foreground uppercase tracking-wider">
            SEGUNDOS
          </div>
        </div>
      </div>
      
      <p className="text-center text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-4 leading-relaxed">
        Aproveite esta oferta limitada - Válida somente por hoje ({today})
      </p>
    </div>
  );
};

export default Countdown;
```

---

## 5. components/KitCard.tsx

```tsx
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface KitCardProps {
  image: string;
  title: string;
  subtitle: string;
  daysOfUse: string;
  unitPrice?: string;
  originalPrice: string;
  currentPrice: string;
  installments: string;
  badge?: string;
  badgeColor?: 'blue' | 'green' | 'purple' | 'orange' | 'teal';
  isHighlighted?: boolean;
  shippingText?: string;
  discountPercentage?: number;
  showDiscountBadge?: boolean;
  discountAmount?: string;
  purchaseUrl?: string;
}

const KitCard = ({ 
  image,
  title, 
  subtitle,
  daysOfUse,
  unitPrice,
  originalPrice, 
  currentPrice, 
  installments,
  badge,
  badgeColor = 'blue',
  isHighlighted = false,
  shippingText = "Frete Grátis",
  discountPercentage,
  showDiscountBadge = false,
  discountAmount,
  purchaseUrl
}: KitCardProps) => {
  const badgeStyles = {
    blue: 'bg-slate-700 text-white',
    green: 'bg-emerald-700 text-white',
    purple: 'bg-violet-700 text-white', 
    orange: 'bg-amber-700 text-white',
    teal: 'bg-cyan-700 text-white'
  };

  return (
    <div className="flex flex-col h-full relative">
      {/* Top Badge */}
      {badge && (badge === 'MAIS COMPLETO' || badge === 'MAIS VENDIDO') && (
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
          <Badge className={`${badgeStyles[badgeColor]} px-3 py-1 sm:px-4 sm:py-1 text-xs sm:text-sm font-bold rounded-full shadow-lg whitespace-nowrap`}>
            {badge}
          </Badge>
        </div>
      )}
      
      {/* Card container with white background matching the prints */}
      <div className="relative bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl py-1 px-0 sm:p-4 lg:p-6 h-full flex flex-col justify-between shadow-lg sm:border sm:border-gray-200 min-h-[420px] sm:min-h-[520px] lg:min-h-[560px]">
        
        {/* Product Image */}
        <div className="mb-4 sm:mb-4 lg:mb-6 mx-0 sm:-mx-4 lg:-mx-6 -mt-1 sm:-mt-4 lg:-mt-6 relative">
          <img 
            src={image} 
            alt={title}
            className="block w-full h-auto sm:h-48 md:h-52 lg:h-60 xl:h-64 object-contain sm:object-cover rounded-t-xl sm:rounded-t-2xl lg:rounded-t-3xl bg-gray-50"
            style={{ objectPosition: 'center top' }}
          />
          
          {/* Discount Badge positioned over image */}
          {showDiscountBadge && discountPercentage && (
            <div className="absolute top-4 right-4 z-10">
              <Badge className="bg-rose-600 text-white px-3 py-2 text-sm font-bold rounded-full shadow-md">
                {discountPercentage}% OFF
              </Badge>
            </div>
          )}
        </div>

        {/* Regular badges (not MAIS COMPLETO or MAIS VENDIDO) */}
        {badge && badge !== 'MAIS COMPLETO' && badge !== 'MAIS VENDIDO' && (
          <div className="flex justify-center mb-4 sm:mb-4 px-3 sm:px-0">
            <Badge className={`${badgeStyles[badgeColor]} px-3 sm:px-4 py-2 sm:py-2 text-sm sm:text-sm font-bold rounded-full`}>
              {badge}
            </Badge>
          </div>
        )}

        {/* Product Info */}
        <div className="text-center mb-4 sm:mb-4 flex-grow flex flex-col px-3 sm:px-0">
          <div className="h-20 lg:h-24 xl:h-20 flex items-center justify-center mb-3">
            <h3 className={`font-bold text-gray-800 leading-tight px-1 text-center ${
              title.length > 40 
                ? 'text-sm sm:text-xs md:text-sm lg:text-base' 
                : 'text-base sm:text-sm md:text-base lg:text-lg'
            }`}>
              {title}
            </h3>
          </div>
          
          <p className="text-gray-700 text-sm sm:text-sm md:text-base mb-3 font-semibold">
            {daysOfUse}
          </p>

          {unitPrice && (
            <p className="text-gray-600 text-sm sm:text-sm mb-3">
              {unitPrice}
            </p>
          )}
        </div>

        {/* Pricing */}
        <div className="text-center mb-4 sm:mb-4 px-3 sm:px-0">
          {/* Promotional Text */}
          {showDiscountBadge && (
            <div className="flex items-center justify-center gap-1 sm:gap-2 mb-3 px-2">
              <span className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide text-center leading-tight">
                Promoção Especial
              </span>
            </div>
          )}
          
          {originalPrice && (
            <div className="text-gray-500 text-lg sm:text-xl md:text-2xl line-through mb-2 font-medium">
              {originalPrice}
            </div>
          )}
          
          <div className="relative">
            <div className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-emerald-600">
              {currentPrice}
            </div>
          </div>
          
          {/* Savings Amount */}
          {discountAmount && showDiscountBadge && (
            <div className="flex items-center justify-center gap-1 sm:gap-2 mb-2 px-2">
              <span className="text-xs sm:text-sm font-medium text-emerald-700 px-2 sm:px-3 py-1 rounded-md whitespace-nowrap">
                Economize {discountAmount}
              </span>
            </div>
          )}
          
          <div className="text-sm sm:text-sm text-gray-600">
            {installments}
          </div>
        </div>
        
        {/* Free Shipping */}
        <div className="flex items-center justify-center gap-2 mb-4 sm:mb-4 px-3 sm:px-0">
          <span className="text-base sm:text-sm">🚛</span>
          <span className="text-sm sm:text-sm font-semibold text-gray-700">{shippingText}</span>
        </div>
        
        {/* CTA Button */}
        <div className="px-3 sm:px-0">
          <Button 
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-4 sm:py-4 sm:px-6 md:py-5 md:px-8 rounded-xl sm:rounded-2xl text-base sm:text-base md:text-lg lg:text-xl transition-all duration-300 hover:shadow-lg flex items-center justify-center whitespace-normal break-words text-center min-h-[56px] sm:min-h-[52px] md:min-h-[56px]"
            onClick={() => purchaseUrl && window.open(purchaseUrl, '_blank')}
          >
            COMPRAR AGORA
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KitCard;
```

---

## 6. components/FloatingWhatsApp.tsx

```tsx
import whatsappFloat from '@/assets/whatsapp-float.png';

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "5511911725889"; // Format: country code + area code + number
    const message = encodeURIComponent("👋 Olá! Gostaria de um kit personalizado da Welong Hair!");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <img 
        src={whatsappFloat} 
        alt="WhatsApp" 
        onClick={handleWhatsAppClick}
        className="w-16 h-16 sm:w-20 sm:h-20 cursor-pointer hover:scale-110 transition-all duration-300 drop-shadow-lg hover:drop-shadow-xl"
      />
    </div>
  );
};

export default FloatingWhatsApp;
```

---

## 7. components/WhatsAppButton.tsx

```tsx
import { Button } from '@/components/ui/button';
import whatsappButton from '@/assets/whatsapp-button.webp';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "5511911725889"; // Format: country code + area code + number
    const message = encodeURIComponent("👋 Olá! Gostaria de um kit personalizado da Welong Hair!");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex flex-col items-center justify-center py-6 sm:py-8 md:py-12 px-4">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground text-center mb-4 sm:mb-6 px-4">
        DESEJA UM KIT PERSONALIZADO?
      </h3>
      
      <img 
        src={whatsappButton} 
        alt="Compre pelo WhatsApp" 
        onClick={handleWhatsAppClick}
        className="w-64 h-auto sm:w-80 sm:h-auto md:w-96 md:h-auto cursor-pointer hover:scale-105 transition-all duration-300"
      />
    </div>
  );
};

export default WhatsAppButton;
```

---

## 8. components/LightningEffect.tsx

```tsx
import { Zap } from 'lucide-react';

const LightningEffect = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Lightning bolts espalhados pela página */}
      <Zap className="fixed top-[5%] left-[8%] w-3 h-3 text-black-november-gold/20 rotate-12" fill="currentColor" />
      <Zap className="fixed top-[15%] right-[12%] w-4 h-4 text-black-november-gold/25 -rotate-45" fill="currentColor" />
      <Zap className="fixed top-[25%] left-[85%] w-3 h-3 text-black-november-gold/15 rotate-90" fill="currentColor" />
      <Zap className="fixed top-[35%] left-[5%] w-5 h-5 text-black-november-gold/20 -rotate-12" fill="currentColor" />
      <Zap className="fixed top-[45%] right-[90%] w-3 h-3 text-black-november-gold/30 rotate-45" fill="currentColor" />
      <Zap className="fixed top-[55%] left-[75%] w-4 h-4 text-black-november-gold/15 -rotate-90" fill="currentColor" />
      <Zap className="fixed top-[65%] left-[15%] w-3 h-3 text-black-november-gold/25 rotate-180" fill="currentColor" />
      <Zap className="fixed top-[75%] right-[20%] w-5 h-5 text-black-november-gold/20 -rotate-45" fill="currentColor" />
      <Zap className="fixed top-[85%] left-[50%] w-3 h-3 text-black-november-gold/30 rotate-12" fill="currentColor" />
      <Zap className="fixed top-[10%] left-[40%] w-4 h-4 text-black-november-gold/15 -rotate-12" fill="currentColor" />
      <Zap className="fixed top-[30%] right-[35%] w-3 h-3 text-black-november-gold/20 rotate-90" fill="currentColor" />
      <Zap className="fixed top-[50%] left-[25%] w-5 h-5 text-black-november-gold/25 -rotate-45" fill="currentColor" />
      <Zap className="fixed top-[70%] right-[60%] w-3 h-3 text-black-november-gold/15 rotate-45" fill="currentColor" />
      <Zap className="fixed top-[90%] left-[70%] w-4 h-4 text-black-november-gold/30 -rotate-90" fill="currentColor" />
      <Zap className="fixed top-[20%] right-[50%] w-3 h-3 text-black-november-gold/20 rotate-12" fill="currentColor" />
      <Zap className="fixed top-[40%] left-[60%] w-5 h-5 text-black-november-gold/15 -rotate-12" fill="currentColor" />
      <Zap className="fixed top-[60%] right-[80%] w-3 h-3 text-black-november-gold/25 rotate-90" fill="currentColor" />
      <Zap className="fixed top-[80%] left-[35%] w-4 h-4 text-black-november-gold/20 -rotate-45" fill="currentColor" />
    </div>
  );
};

export default LightningEffect;
```

---

## 9. components/BlackNovemberDecoration.tsx

```tsx
import { Zap } from 'lucide-react';

interface BlackNovemberDecorationProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const BlackNovemberDecoration = ({ size = 'md', className = '' }: BlackNovemberDecorationProps) => {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <Zap className="w-full h-full text-black-november-gold" fill="currentColor" />
    </div>
  );
};

export default BlackNovemberDecoration;
```

---

## 10. Imagens Necessárias

As seguintes imagens devem estar na pasta `src/assets/`:

1. welong-logo-circular.png
2. kit-crescimento-8-updated.png
3. kit-crescimento-5.png
4. kit-crescimento-3-completo.png
5. kit-crescimento-3.png
6. kit-crescimento-1.png
7. kit-antifrizz-1.png
8. kit-antifrizz-3.png
9. kit-antifrizz-3-brindes.png
10. kit-antifrizz-6.png
11. kit-antifrizz-12.png
12. whatsapp-float.png
13. whatsapp-button.webp

---

## 11. Dependências Necessárias

```json
{
  "dependencies": {
    "@radix-ui/react-slot": "^1.2.3",
    "@tanstack/react-query": "^5.83.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^3.6.0",
    "lucide-react": "^0.462.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.30.1",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7"
  }
}
```

---

## Como Usar

1. Copie todos os arquivos para as respectivas pastas
2. Certifique-se de que todas as imagens estão na pasta `src/assets/`
3. Instale as dependências: `npm install`
4. Execute o projeto: `npm run dev`

---

## Observações

- Este projeto usa Tailwind CSS para estilização
- Utiliza React Router para roteamento
- Usa Lucide React para ícones
- Integração com WhatsApp para contato direto
- Layout responsivo para mobile, tablet e desktop
- Countdown timer funcional
- Tema Black November com gradientes dourados e laranja

---

**Última atualização:** 2025
**Versão:** 1.0
