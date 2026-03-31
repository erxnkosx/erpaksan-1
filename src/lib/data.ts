import { Award, Users, Star, Lightbulb, Shield, Leaf } from "lucide-react";
// NAV
export const navLinks = [
  { label: "Home", href: "#" },
  { label: "Producten", href: "#producten" },
  { label: "Over ons", href: "#over-ons" },
  { label: "Contact", href: "#contact" },
  { label: "Online catalogus", href: "#" },
];

// STATS
export const stats = [
  { value: "20+", label: "Jaar ervaring" },
  { value: "500+", label: "Tevreden klanten" },
  { value: "2.000+", label: "Producten" },
  { value: "24–48u", label: "Leveringstijd" },
];

// IMPORT JSON 
import verpakking from "@/data/categories/Verpakking/verpakking_from_pdf.json";
import tafelkunst from "@/data/categories/Tafelkunst/tafelkunst_from_pdf.json";
import hygiene from "@/data/categories/Hygiëne/hygiene_from_pdf.json";

// TYPE 
type Category = {
  title: string;
  description: string;
  image: string;
  data: any[];
};

// CATEGORIES 
export const categories: Category[] = [
  {
    title: "Verpakking",
    description: "Dozen, trays, bekers en meer voor elke verpakkingsbehoefte.",
    image: "/verpakking.png",
    data: verpakking,
  },
  {
    title: "Tafelkunst",
    description: "Professioneel tafeltextiel, servetten en disposables.",
    image: "/tafelkunst.png",
    data: tafelkunst,
  },
  {
    title: "Hygiëne",
    description: "Reiniging, desinfectie en persoonlijke hygiëne producten.",
    image: "/hygiene.png",
    data: hygiene,
  },
];

// BESTSELLERS
export const bestsellers = [
  {
    title: "Kartonnen zakken",
    description: "Stevige kartonnen zakken voor takeaway. Ideaal voor retail en horeca.",   
    customImage: "/Kartonnen-zakken.png",
  },
  {
    title: "Pizza dozen",
    description: "Stevige pizzadozen voor takeaway en levering. Geschikt voor verschillende formaten pizza's.",  
    customImage: "/pizza-box.png",
  },
  {
    title: "Servietten",
    description: "Kwalitatieve servietten voor horeca en events. Zacht, sterk en ideaal voor dagelijks gebruik.",    customImage: "/Servietten.png",
  },
];

// BENEFITS
export const benefits = [
  {
    title: "Kwaliteit",
    text: "Alle producten voldoen aan de strengste kwaliteitsnormen en certificeringen.",
    icon: Award,
  },
  {
    title: "Klantgericht",
    text: "Persoonlijke begeleiding van offerte tot levering en nazorg.",
    icon: Users,
  },
  {
    title: "Expertise",
    text: "20+ jaar ervaring in de verpakkingssector en diepgaande productkennis.",
    icon: Star,
  },
  {
    title: "Innovatie",
    text: "Voortdurend op zoek naar nieuwe en betere verpakkingsoplossingen.",
    icon: Lightbulb,
  },
  {
    title: "Betrouwbaarheid",
    text: "Vast aanspreekpunt, correcte leveringen en transparante communicatie.",
    icon: Shield,
  },
  {
    title: "Duurzaamheid",
    text: "Breed gamma eco-producten en engagement voor een groenere toekomst.",
    icon: Leaf,
  },
];
