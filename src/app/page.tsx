"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import TextAbout from '@/components/sections/about/TextAbout';
import { Award, CheckCircle, Shield, Star, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="medium"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Naslovnica",          id: "hero"},
        {
          name: "O nama",          id: "about"},
        {
          name: "Usluge",          id: "features"},
        {
          name: "Kontakt",          id: "contact"},
      ]}
      brandName="UTVRDA d.o.o."
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "plain"}}
      title="UTVRDA d.o.o. - Vaš pouzdan građevinski partner"
      description="Profesionalne građevinske usluge u Višnjevcu i okolici. Kvaliteta i sigurnost na prvom mjestu."
      carouselItems={[
        { id: "1", imageSrc: "http://img.b2bpic.net/free-photo/crane-building_23-2147785502.jpg", imageAlt: "Gradilište" },
        { id: "2", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-architect-with-helmet-looking-away_23-2148269408.jpg", imageAlt: "Gradilište" },
        { id: "3", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-portrait-engineer-holding-plans_23-2148233682.jpg", imageAlt: "Gradilište" },
        { id: "4", imageSrc: "http://img.b2bpic.net/free-photo/close-up-modern-office-buildings-shanghai_1359-644.jpg", imageAlt: "Gradilište" },
        { id: "5", imageSrc: "http://img.b2bpic.net/free-photo/construction-work-site_1398-2982.jpg", imageAlt: "Gradilište" },
        { id: "6", imageSrc: "http://img.b2bpic.net/free-photo/illustration-construction-site_23-2151850241.jpg", imageAlt: "Gradilište" }
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="O nama"
      buttons={[
        {
          text: "Saznajte više",          href: "#"},
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Novogradnja",          description: "Izgradnja stambenih i poslovnih objekata po sistemu ključ u ruke.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/close-up-male-carpenter-s-hand-making-measurement-wooden-block_23-2147944869.jpg",            imageAlt: "Novogradnja"},
          items: [
            { icon: CheckCircle, text: "Stručna izvedba" },
            { icon: Shield, text: "Visoka kvaliteta materijala" }
          ],
          reverse: false
        },
        {
          title: "Renovacije",          description: "Kompletna adaptacija i uređenje postojećih prostora.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/white-business-center-with-beautiful-textures-unique-design-with-interior-staircases_181624-5365.jpg",            imageAlt: "Renovacije"},
          items: [
            { icon: Zap, text: "Brza adaptacija" },
            { icon: Award, text: "Moderni dizajn" }
          ],
          reverse: true
        },
        {
          title: "Održavanje",          description: "Tehničko održavanje i sanacije objekata.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/construction-new-skycraper-dubai-united-arab-emirates_231208-7552.jpg",            imageAlt: "Održavanje"},
          items: [
            { icon: Star, text: "Pouzdanost" },
            { icon: CheckCircle, text: "Dugoročna podrška" }
          ],
          reverse: false
        }
      ]}
      title="Naše usluge"
      description="Nudimo kompletnu paletu građevinskih radova s fokusom na kvalitetu i trajnost izvedbe."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="Izuzetno profesionalan pristup i izvedba. Sve preporuke za UTVRDA d.o.o.!"
      rating={5}
      author="Marko Horvat"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/man-woman-holding-hands-kitchen_23-2148363553.jpg", alt: "Klijent 1" },
        { src: "http://img.b2bpic.net/free-photo/engineers-throwing-papers-air_23-2147704212.jpg", alt: "Klijent 2" },
        { src: "http://img.b2bpic.net/free-photo/portrait-construction-worker-with-plans_329181-3732.jpg", alt: "Klijent 3" },
        { src: "http://img.b2bpic.net/free-photo/close-up-side-view-engineer-architect-supervising-construction_23-2148233789.jpg", alt: "Klijent 4" },
        { src: "http://img.b2bpic.net/free-photo/medium-shot-men-shaking-hands_23-2148920604.jpg", alt: "Klijent 5" }
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="Kontakt"
      title="Trebate građevinske radove?"
      description="Javite nam se na Ul. Petra Svačića 37A, Višnjevac ili nas nazovite na 098 232 063. Spremni smo za upite!"
      imageSrc="http://img.b2bpic.net/free-photo/three-architects-with-plan-table_23-2147702513.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="UTVRDA d.o.o."
      copyrightText="© 2025 UTVRDA d.o.o."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
