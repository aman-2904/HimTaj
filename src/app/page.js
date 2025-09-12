"use client";
import { useState } from "react";
import Collections from "@/components/Home/Collections";

import DiscoverIcons from "@/components/Home/DiscoverIcons";
import DiscoverSection from "@/components/Home/DiscoverSection";



import InstagramGallery from "@/components/Home/InstagramGallery";
import Newsletter from "@/components/Home/Newsletter";
import ProductCarousel from "@/components/Home/ProductCarousel";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";







export default function Home() {
  return (
    <>
  
    <Collections/>
    <ProductCarousel/>
    <Services/>
    <DiscoverSection/>
    
    
    <Testimonials/>
    <Newsletter/>
    <InstagramGallery/>
    
    <DiscoverIcons/>
    </>
  );
}
