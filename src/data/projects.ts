// Portfolio imported from the old ionascu.com (23 videos).
// TODO(owner): titles/descriptions below are generated from client + category + image names.
// Replace `product` and `summary` with the real product names and one-line descriptions.

export type Project = {
  slug: string;
  brand: string;
  /** Product shown in the video, e.g. "Deck drain channel". Used in titles. */
  product?: string;
  category: 'Drainage' | 'Furniture' | 'Lighting' | 'Roofing' | 'Siding' | 'Yard' | 'Other';
  youtube: string;
  /** file name inside src/assets/portfolio/ */
  image: string;
  summary?: string;
  /** true = own showcase / not a commissioned client project */
  showcase?: boolean;
  /** Set when the same YouTube video appears twice on the old site */
  duplicateOf?: string;
};

export const projects: Project[] = [
  { slug: 'ikea-helmer-assembly-animation', brand: 'IKEA', product: 'HELMER cabinet', category: 'Furniture', youtube: 'lrt3ct5HByI', image: 'ikea.jpg', showcase: true,
    summary: 'A personal showcase: the 18-page IKEA HELMER manual turned into a one-minute 3D assembly animation.' },
  { slug: 'vodaland-sand-trap-base', brand: 'Vodaland', product: 'Sand trap base', category: 'Drainage', youtube: 'bQvHA4M-3Fw', image: 'vodaland-sand-trap-base.jpg',
    summary: 'Installation animation of the Vodaland plastic sand trap base 4" (DN100) for drainage systems.' },
  { slug: 'cambridge-skylights', brand: 'Cambridge Skylights', category: 'Roofing', youtube: 'd-UUjJY0BCw', image: 'cambridge-skylights.png' },
  { slug: 'metigla', brand: 'Metigla', category: 'Drainage', youtube: 'wqqrdCAVzXU', image: 'metigla.png' },
  { slug: 'marantec-wke', brand: 'Marantec', product: 'WKE', category: 'Other', youtube: 'FfcG5tQrpBY', image: 'marantec-wke.png' },
  { slug: 'marantec', brand: 'Marantec', category: 'Other', youtube: '1QNZpLGdPHs', image: 'marantec.png' },
  { slug: 'ledi', brand: 'LEDI', category: 'Lighting', youtube: 'aCUobad3Vg0', image: 'ledi.png' },
  { slug: 'ts-pool', brand: 'TS-Pool', category: 'Yard', youtube: 'jEhK-wPAPUo', image: 'ts-pool.jpg' },
  { slug: 'true-metal-supply', brand: 'True Metal Supply', category: 'Siding', youtube: '1CRYbBy0QGg', image: 'true-metal-supply.jpg' },
  { slug: 'vodaland-border', brand: 'Vodaland', product: 'Border', category: 'Yard', youtube: 'us2FKK7Oxy4', image: 'vodaland.png' },
  { slug: 'vodaland-separator', brand: 'Vodaland', product: 'Separator', category: 'Drainage', youtube: 'suLbWIjFZVk', image: 'vodaland-separator.png' },
  { slug: 'roofart', brand: 'Roofart', category: 'Roofing', youtube: '7OU3whfF0F4', image: 'roofart.jpg' },
  { slug: 'vodaland-minislot', brand: 'Vodaland', product: 'Minislot', category: 'Drainage', youtube: 'pEefFVWs0Ls', image: 'vodaland-minislot-th.jpg' },
  { slug: 'sagiwall', brand: 'Sagiwall', category: 'Siding', youtube: '3y16XYr2j8o', image: 'sagiwall.png' },
  { slug: 'vodaland-easypave', brand: 'Vodaland', product: 'Easypave', category: 'Drainage', youtube: 'zyIjwu_158I', image: 'vodaland-easypave.png' },
  { slug: 'aquasystem', brand: 'Aquasystem', category: 'Roofing', youtube: '9MC9kK1LClo', image: 'aquasystem.png' },
  { slug: 'roofart-tdm', brand: 'Roofart', product: 'TDM', category: 'Roofing', youtube: 'm4yaLGzyHNw', image: 'roofart-tdm.png' },
  { slug: 'sagiper', brand: 'Sagiper', category: 'Siding', youtube: 'V_HbIOmpYrA', image: 'sagiper.png' },
  { slug: 'roofart-opritor', brand: 'Roofart', product: 'Opritor', category: 'Roofing', youtube: '3n9nmCm96xA', image: 'roofart-opritor-1.png' },
  { slug: 'fourseasons', brand: 'Four Seasons', category: 'Roofing', youtube: 'mu0LbcXpkIY', image: 'fourseasons.png' },
  { slug: 'opure', brand: 'Opure', category: 'Yard', youtube: 'bO8hlWcV6hA', image: 'opure.jpg' },
  // TODO(owner): on the old site this card used the SAME YouTube video as Roofart TDM. Provide the right link or delete.
  { slug: 'double-modular', brand: 'Double modular', category: 'Roofing', youtube: 'm4yaLGzyHNw', image: 'double-modular.jpg', duplicateOf: 'roofart-tdm' },
  { slug: 'pvc-fence', brand: 'PVC Fence', category: 'Yard', youtube: 'RJ39HbYS098', image: 'pvc-fence.png' },
  { slug: 'ecomodule', brand: 'Ecomodule', category: 'Yard', youtube: 'mqF5zQI0bek', image: 'ecomodule.jpg' },
];

export const categories = ['Drainage', 'Furniture', 'Lighting', 'Roofing', 'Siding', 'Yard', 'Other'] as const;

export const projectTitle = (p: Project) =>
  p.showcase
    ? `${p.brand} ${p.product} 3D Assembly Animation`
    : `${p.brand}${p.product ? ' ' + p.product : ''} – 3D Installation Animation`;

export const projectSummary = (p: Project) =>
  p.summary ??
  `Step-by-step 3D installation animation for ${p.brand}${p.product ? ' ' + p.product : ''} (${p.category.toLowerCase()}), created from the client's assembly instructions.`;

// Images are bundled at build time so Astro can resize and convert them (WebP).
const imgs = import.meta.glob<{ default: ImageMetadata }>('/src/assets/portfolio/*.{png,jpg}', { eager: true });
export const projectImage = (p: Project) => imgs[`/src/assets/portfolio/${p.image}`].default;

export const ytThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
