import { Award, Users, Star, Lightbulb, Shield, Leaf } from "lucide-react";

// IMPORT JSON
import verpakking from "@/data/categories/Verpakking/verpakking_from_pdf.json";
import tafelkunst from "@/data/categories/Tafelkunst/tafelkunst_from_pdf.json";
import hygiene from "@/data/categories/Hygiëne/hygiene_from_pdf.json";

// NAV
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Producten", href: "/producten" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "/#contact" },
  { label: "Online catalogus", href: "#" },
];

// STATS
export const stats = [
  { value: "20+", label: "Jaar ervaring" },
  { value: "500+", label: "Tevreden klanten" },
  { value: "2.000+", label: "Producten" },
  { value: "24–48u", label: "Leveringstijd" },
];

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
    image: "/images/home/verpakking.png",
    data: verpakking,
  },
  {
    title: "Tafelkunst",
    description: "Professioneel tafeltextiel, servetten en disposables.",
    image: "/images/home/tafelkunst.png",
    data: tafelkunst,
  },
  {
    title: "Hygiëne",
    description: "Reiniging, desinfectie en persoonlijke hygiëne producten.",
    image: "/images/home/hygiene.png",
    data: hygiene,
  },
];

// BESTSELLERS
export const bestsellers = [
  {
    title: "Kartonnen zakken",
    description:
      "Stevige kartonnen zakken voor takeaway. Ideaal voor retail en horeca.",
    customImage: "/images/home/Kartonnen-zakken.png",
  },
  {
    title: "Pizza dozen",
    description:
      "Stevige pizzadozen voor takeaway en levering. Geschikt voor verschillende formaten pizza's.",
    customImage: "/images/home/pizza-box.png",
  },
  {
    title: "Servietten",
    description:
      "Kwalitatieve servietten voor horeca en events. Zacht, sterk en ideaal voor dagelijks gebruik.",
    customImage: "/images/home/Servietten.png",
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

// PRODUCTEN PAGINA
export type MainCategory = "Alle" | "Verpakking" | "Tafelkunst" | "Hygiëne";

export type PackagingSubgroup =
  | "Alle"
  | "Zakken & draagtassen"
  | "Dozen & food containers"
  | "Papier & folies";

export type ProductGridItem = {
  id: string;
  title: string;
  description: string;
  category: "Verpakking" | "Tafelkunst" | "Hygiëne";
  image: string;
  slug: string;
  subgroup?: Exclude<PackagingSubgroup, "Alle">;
  variants: any[];
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function getPackagingImage(title: string) {
  switch (title.toLowerCase()) {
    case "pizza box":
      return "/images/home/pizza-box.png";
    case "paper bags":
      return "/images/producten/verpakking/paper-bags/KR32.png";
    case "fast food paper bag":
      return "/images/producten/verpakking/paper-bags/fastfoodpaperbag.png";
    case "sauce pot / lid":
      return "/images/producten/verpakking/sauce-pot-lid/SD500.png";
    case "plastic bags - bio bags":
      return "/images/producten/verpakking/plastic-bags/bio-bags1.png";
    case "plastic bags - white bags":
      return "/images/producten/verpakking/plastic-bags/white-bags.png";
    case "reusable bags":
      return "/images/producten/verpakking/plastic-bags/reusable-35mic.png";
    case "containers":
      return "/images/producten/verpakking/containers/groot.png";
    case "lids":
      return "/images/producten/verpakking/containers/deksel.png";
    case "foam boxes":
      return "/images/producten/verpakking/foamboxes/MB3.png";
    case "kraft box":
      return "/images/producten/verpakking/kraft-box/HB6.png";
    case "aluminium foil":
      return "/images/producten/verpakking/aluminiumfolie/aluminium-11mic.png";
    case "freshpack paper":
      return "/images/producten/verpakking/freshpack-paper/freshpack-paper.png";
    case "casse paper":
      return "/images/producten/verpakking/casse-paper/cassepaper.png";
    case "strech foil":
      return "/images/producten/verpakking/stretchfoil/5472.png";
    default:
      return "/images/home/x.png";
  }
}

export function getVariantImage(productTitle: string, code?: string) {
  const title = productTitle.toLowerCase();
  const variantCode = code?.toLowerCase();

  if (title === "aluminium foil") {
    switch (variantCode) {
      case "8060":
      case "8070":
      case "8080":
      case "8090":
      case "8100":
        return "/images/producten/verpakking/aluminiumfolie/aluminium-11mic.png";

      case "7070":
      case "7080":
      case "7090":
      case "7100":
      case "7120":
        return "/images/producten/verpakking/aluminiumfolie/aluminium-14mic70.png";

      case "7135":
      case "7140":
      case "7150":
      case "7160":
      case "7200":
        return "/images/producten/verpakking/aluminiumfolie/aluminium-14mic71.png";

      default:
        return "/images/producten/verpakking/aluminiumfolie/aluminium-11mic.png";
    }
  }

  if (title === "strech foil") {
    switch (variantCode) {
      case "5170":
        return "/images/producten/verpakking/stretchfoil/5170.png";
      case "5172":
        return "/images/producten/verpakking/stretchfoil/5472.png";
      case "v30":
        return "/images/producten/verpakking/stretchfoil/v30.png";
      case "v45":
        return "/images/producten/verpakking/stretchfoil/v45.png";
      case "pallet foil":
        return "/images/producten/verpakking/stretchfoil/pallet-foil.png";
      default:
        return "/images/producten/verpakking/stretchfoil/5170.png";
    }
  }

  if (title === "sauce pot / lid") {
    switch (variantCode) {
      case "sd100":
        return "/images/producten/verpakking/sauce-pot-lid/SD100.png";
      case "sd500":
        return "/images/producten/verpakking/sauce-pot-lid/SD500.png";
      case "sd800":
        return "/images/producten/verpakking/sauce-pot-lid/SD800.png";
      default:
        return "/images/producten/verpakking/sauce-pot-lid/SD500.png";
    }
  }

  if (title === "paper bags") {
    switch (variantCode) {
      case "kr22":
        return "/images/producten/verpakking/paper-bags/KR22.png";
      case "kr28":
        return "/images/producten/verpakking/paper-bags/KR28.png";
      case "kr32":
        return "/images/producten/verpakking/paper-bags/KR32.png";
      default:
        return "/images/producten/verpakking/paper-bags/KR32.png";
    }
  }

  if (title === "kraft box") {
    switch (variantCode) {
      case "hb7":
        return "/images/producten/verpakking/kraft-box/HB7.png";
      case "hb6":
        return "/images/producten/verpakking/kraft-box/HB6.png";
      case "hb10":
        return "/images/producten/verpakking/kraft-box/HB10.png";
      default:
        return "/images/producten/verpakking/kraft-box/HB6.png";
    }
  }

  if (title === "foam boxes") {
    switch (variantCode) {
      case "mb1":
        return "/images/producten/verpakking/foamboxes/MB1.png";
      case "mb2":
        return "/images/producten/verpakking/foamboxes/MB2.png";
      case "mb3":
        return "/images/producten/verpakking/foamboxes/MB3.png";
      case "hb6":
        return "/images/producten/verpakking/foamboxes/HB6.png";
      case "hb7":
        return "/images/producten/verpakking/foamboxes/HB7.png";
      case "hb9":
        return "/images/producten/verpakking/foamboxes/HB9.png";
      case "hb10":
        return "/images/producten/verpakking/foamboxes/HB10.png";
      default:
        return "/images/producten/verpakking/foamboxes/MB3.png";
    }
  }

  if (title === "fast food paper bag") {
    switch (variantCode) {
      case "5252":
        return "/images/producten/verpakking/paper-bags/fastfoodpaperbag.png";
      case "0440":
        return "/images/producten/verpakking/paper-bags/fastfoodpaperbag.png";
      case "5623":
        return "/images/producten/verpakking/paper-bags/fastfoodpaperbag.png";
      default:
        return "/images/producten/verpakking/paper-bags/fastfoodpaperbag.png";
    }
  }

  if (title === "freshpack paper") {
    return "/images/producten/verpakking/freshpack-paper/freshpack-paper.png";
  }

  if (title === "casse paper") {
    return "/images/producten/verpakking/casse-paper/cassepaper.png";
  }

  if (title === "plastic bags - bio bags") {
    return "/images/producten/verpakking/plastic-bags/bio-bags1.png";
  }

  if (title === "plastic bags - white bags") {
    return "/images/producten/verpakking/plastic-bags/white-bags.png";
  }

  if (title === "reusable bags") {
    return "/images/producten/verpakking/plastic-bags/reusable-35mic.png";
  }

  if (title === "containers") {
    return "/images/producten/verpakking/containers/groot.png";
  }

  if (title === "lids") {
    return "/images/producten/verpakking/containers/deksel.png";
  }

  return getPackagingImage(productTitle);
}

function buildCategorySummary(items: any[]): string {
  return `${items.length} varianten beschikbaar`;
}

function getPackagingSubgroup(
  title: string
): Exclude<PackagingSubgroup, "Alle"> {
  const key = title.toLowerCase();

  if (
    [
      "paper bags",
      "plastic bags - bio bags",
      "plastic bags - white bags",
      "reusable bags",
      "fast food paper bag",
    ].includes(key)
  ) {
    return "Zakken & draagtassen";
  }

  if (
    [
      "pizza box",
      "kraft box",
      "foam boxes",
      "sauce pot / lid",
      "containers",
      "lids",
    ].includes(key)
  ) {
    return "Dozen & food containers";
  }

  if (
    [
      "casse paper",
      "freshpack paper",
      "greaseproof wrapping paper",
      "strech foil",
      "aluminium foil",
    ].includes(key)
  ) {
    return "Papier & folies";
  }

  return "Dozen & food containers";
}

function mapPackagingProducts(items: any[]): ProductGridItem[] {
  const grouped = items.reduce((acc: Record<string, any[]>, item) => {
    const key = item.category || "Verpakking product";

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(item);
    return acc;
  }, {});

  return Object.entries(grouped).map(([title, group]) => ({
    id: slugify(title),
    title,
    description: buildCategorySummary(group),
    category: "Verpakking" as const,
    image: getPackagingImage(title),
    slug: slugify(title),
    subgroup: getPackagingSubgroup(title),
    variants: group,
  }));
}

export const packagingProducts: ProductGridItem[] =
  mapPackagingProducts(verpakking);

export const mainFilters: MainCategory[] = [
  "Alle",
  "Verpakking",
  "Tafelkunst",
  "Hygiëne",
];

export const packagingSubgroups: PackagingSubgroup[] = [
  "Alle",
  "Zakken & draagtassen",
  "Dozen & food containers",
  "Papier & folies",
];

export function groupVariantsByImage(productTitle: string, variants: any[]) {
  const title = productTitle.toLowerCase();

  if (title === "aluminium foil") {
    return [
      {
        image: "/images/producten/verpakking/aluminiumfolie/aluminium-11mic.png",
        title: "Aluminium foil 11 mic",
        variants: variants.filter((variant) =>
          ["8060", "8070", "8080", "8090", "8100"].includes(String(variant.code))
        ),
      },
      {
        image: "/images/producten/verpakking/aluminiumfolie/aluminium-14mic70.png",
        title: "Aluminium foil 14 mic",
        variants: variants.filter((variant) =>
          ["7070", "7080", "7090", "7100", "7120"].includes(String(variant.code))
        ),
      },
      {
        image: "/images/producten/verpakking/aluminiumfolie/aluminium-14mic71.png",
        title: "Aluminium foil 14 mic",
        variants: variants.filter((variant) =>
          ["7135", "7140", "7150", "7160", "7200"].includes(String(variant.code))
        ),
      },
    ].filter((group) => group.variants.length > 0);
  }

  if (title === "strech foil") {
    return [
      {
        image: "/images/producten/verpakking/stretchfoil/5170.png",
        title: "Strech foil",
        variants: variants.filter((variant) =>
          ["5170", "5172"].includes(String(variant.code))
        ),
      },
      {
        image: "/images/producten/verpakking/stretchfoil/v30.png",
        title: "Strech foil",
        variants: variants.filter((variant) =>
          ["V30", "V45"].includes(String(variant.code))
        ),
      },
      {
        image: "/images/producten/verpakking/stretchfoil/pallet-foil.png",
        title: "Pallet foil",
        variants: variants.filter((variant) =>
          ["Pallet foil"].includes(String(variant.code))
        ),
      },
    ].filter((group) => group.variants.length > 0);
  }

  return [
    {
      image: getPackagingImage(productTitle),
      title: productTitle,
      variants,
    },
  ];
}