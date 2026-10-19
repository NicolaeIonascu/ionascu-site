// Imported from ionascu.com/journal/. Quotes are excerpts, exactly as on the old site.
// TODO(owner): replace the "…" excerpts with the full text of each testimonial.

import type { ImageMetadata } from 'astro';

export type Testimonial = {
  name: string;
  role?: string;
  company?: string;
  /** file name in src/assets/people/ (square portrait). Without it the card shows initials. */
  photo?: string;
  /** scan of the original recommendation letter (src/assets/letters/) shown in a viewer */
  letter?: { file: string; title: string };
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Matt Swinarski',
    photo: 'matt-swinarski.jpg',
    letter: { file: 'sagiper.jpg', title: 'Recommendation letter, Sagiper North America' },
    role: 'Director of Business Development',
    company: 'Sagiper',
    text: 'I wanted to take this opportunity to thank you for your hard work and dedication that you put into creating our animated installation videos. Your communication and attention to detail made this project flow effortlessly…',
  },
  {
    name: 'Martin Alan',
    photo: 'martin-alan.jpg',
    role: 'CEO',
    company: 'Vodaland',
    text: 'Perfect, excellent communication and the result is beautiful.',
  },
  {
    name: 'Mason Burchette',
    photo: 'mason-burchette.jpg',
    company: 'True Metal Supply',
    text: 'Extremely professional to work with. The end result was exactly what I had envisioned. Highly recommended.',
  },
  {
    name: 'Darina H.',
    photo: 'darina-h.jpg',
    role: 'Managing Director',
    text: 'This was my companies first time working with any form of animation for a product. When looking for animators, I came across Nicolae and from the very beginning of our interactions, he has been exceptionally helpful! He is very well informed.',
  },
  {
    name: 'Uwe Kuhnle',
    photo: 'uwe-kuhnle.jpg',
    letter: { file: 'ipi.jpg', title: 'Recommendation letter, International Power Invest (IPI), 2018' },
    role: 'CEO',
    company: 'IPI GmbH',
    text: 'We were very impressed by the work Nicolae has done for our company and the quality of his video shooting. He is talented and responsible showing a great commitment during our collaboration…',
  },
  {
    name: 'Fred Chergui',
    photo: 'fred-chergui.jpg',
    role: 'CEO',
    company: 'Ecomodule',
    text: 'Collaboration fructueuse avec Nicolae. Un travail très pro pour un résultat au-delà de nos attentes. Je recommande.',
  },
  {
    name: 'Tudor Stefan',
    photo: 'tudor-stefan.jpg',
    letter: { file: 'synergy.jpg', title: 'Recommendation letter, Synergy Eur/Est, 2018 (in Romanian)' },
    company: 'SsYNERGY EUR/EST',
    text: "I highly recommend Nicolae Ionascu as a top 3D and video professional. We worked together on a number of WHO and UN-funded projects, such as 'Energy and Biomass Project', 'Be Healthy Wherever You Are' and 'Moldova for Citizens'.",
  },
  {
    name: 'Octavian Mohorea',
    photo: 'octavian-mohorea.jpg',
    letter: { file: 'unhcr.jpg', title: 'Recommendation letter, UNHCR Moldova' },
    company: 'UNHCR',
    text: '…The work assigned to Mr. Ionascu was always of good quality and completed in a timely fashion. In his cooperation with UNHCR Mr. Ionascu demonstrated creative, responsible and meticulous approach…',
  },
];

// Logos in src/assets/clients (used in the "worked with" strip)
const logos = import.meta.glob<{ default: ImageMetadata }>('/src/assets/clients/*.{png,jpg}', { eager: true });
export const clientLogos = Object.entries(logos).map(([path, m]) => ({
  // file names end with "-logo.png"; the suffix also makes browsers fetch a fresh copy when a logo is replaced
  name: path.split('/').pop()!.replace(/-logo\.\w+$/, ''),
  src: m.default,
}));

// Portraits in src/assets/people (cropped square from the originals).
const photos = import.meta.glob<{ default: ImageMetadata }>('/src/assets/people/*.jpg', { eager: true });
export const testimonialPhoto = (t: Testimonial) => (t.photo ? photos[`/src/assets/people/${t.photo}`]?.default : undefined);

const letters = import.meta.glob<{ default: ImageMetadata }>('/src/assets/letters/*.jpg', { eager: true });
export const testimonialLetter = (t: Testimonial) => (t.letter ? letters[`/src/assets/letters/${t.letter.file}`]?.default : undefined);
