// Service pages. Each becomes /services/<slug>/ and targets one search intent.
// TODO(owner): review wording, deliverables and FAQ answers so they match what you actually offer.

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  /** <title> tag, keep under ~60 chars */
  seoTitle: string;
  /** meta description, ~150 chars */
  seoDescription: string;
  h1: string;
  /** one short line for cards on the home page */
  blurb?: string;
  lead: string;
  /** long-form article blocks shown under the lead (HTML allowed in bullets only) */
  sections?: { title: string; paragraphs?: string[]; bullets?: string[] }[];
  /** one large featured film with a short description, shown under the article */
  featured?: { id: string; title: string; text: string };
  points: { title: string; text: string }[];
  /** YouTube ids from the portfolio shown as examples */
  videos: string[];
  faq: Faq[];
};

/** Titles for example videos that are not portfolio projects (YouTube id -> title). */
export const videoTitles: Record<string, string> = {
  's7h52WPbWOg': 'AVA HTC process – 3D animation',
};

export const commonFaq: Faq[] = [
  {
    q: 'What do you need to start a project?',
    a: 'Your existing assembly or installation guide (PDF, drawings or text) and any 3D or CAD files, drawings or photos of the product. Send what you have and we will agree what is still missing.',
  },
  {
    q: 'Do I see the animation before it is final?',
    a: 'Yes. The work starts with a timed script and a rough animation preview, so you can approve the sequence before the final render.',
  },
  {
    q: 'Where can I use the finished video?',
    a: 'On your website, YouTube, product pages, in-store screens, trade shows and training. Delivered as a standard video file.',
  },
];

export const services: Service[] = [
  {
    slug: '3d-assembly-instruction-animation',
    name: '3D Assembly & Installation Animation',
    seoTitle: '3D Assembly & Installation Instruction Animation | IONASCU',
    seoDescription:
      'Step-by-step 3D animation of how to assemble or install your product, made from your manual or CAD. For furniture, building products and equipment.',
    h1: '3D Assembly & Installation Instruction Animation',
    blurb: 'Step-by-step videos that replace long manuals.',
    lead: 'Customers do not read 18-page manuals, and installers cannot guess the order of steps. A short animation shows every step from the first part to the finished result, so people get it right the first time, with fewer support calls and returns.',
    points: [
      { title: 'From your manual to a video', text: 'We turn your text, drawings or PDF guide into a clear, timed animation.' },
      { title: 'Assembly or installation', text: 'On a table at home or on site on a roof, wall or ground: the animation shows how the product fits into the real structure.' },
      { title: 'Every step visible', text: 'Parts, tools and fasteners are shown in the exact order of the work.' },
      { title: 'Short and clear', text: 'The IKEA HELMER cabinet guide, 18 pages in print, became a one-minute animation.' },
      { title: 'Video and print together', text: 'Use the animation online and its step images in the printed guide.' },
      { title: 'Ready for any channel', text: 'Product page, YouTube, QR code on the box, in-store screen.' },
    ],
    sections: [
      {
        title: 'From a printed manual to an animated instruction',
        paragraphs: [
          'Most manufacturers already have an assembly or installation guide: a printed booklet, a PDF, a set of drawings. It is accurate, and still many people cannot follow it. We turn that guide into an animated instruction. Every step is shown in order, from the first part to the finished result, so the customer sees what to do instead of decoding two-dimensional drawings.',
          'The animation keeps the logic of your manual: the same parts, the same sequence, the same safety notes. What changes is how it is understood. Motion shows where each part goes, which way it turns and how it fits, and nobody has to read a word.',
        ],
      },
      {
        title: 'No printed manual? That is not a problem',
        paragraphs: [
          'The animation does not have to start from a printed version. The product can be new and may have no manual at all. If we have a 3D or CAD model, drawings or photos, and your engineer explains the sequence, we can build the installation video directly. The film then becomes the primary instruction, and the printed pages can be created from its frames.',
          'For the viewer this is far more intuitive. A short film lets people follow the work at their own pace on a phone, at the table or on site.',
        ],
      },
      {
        title: 'Assembly on a table, installation on site',
        paragraphs: [
          'Assembly happens on a table at home. Installation happens on a roof, a wall or the ground, where the product meets the real structure. We show both: the animation places the product in its surroundings and shows how it fits into the building, with the tools and fasteners used at each step.',
        ],
      },
      {
        title: 'What you receive',
        bullets: [
          '<strong>A timed script.</strong> The process is split into short actions, so you see the length and the structure before anything is animated.',
          '<strong>A rough preview.</strong> You and your technical specialist check the order of steps, the position of every part and the pace.',
          '<strong>The final film</strong> as a standard video file, ready for your website, YouTube, a QR code on the box or an in-store screen.',
          '<strong>Step images</strong> for the printed guide, so video and print show the same sequence.',
        ],
      },
    ],
    videos: ['lrt3ct5HByI', 'd-UUjJY0BCw', '3y16XYr2j8o', 'jEhK-wPAPUo', 'wqqrdCAVzXU', 'bQvHA4M-3Fw'],
    faq: [
      {
        q: 'How is an animation better than a printed manual?',
        a: 'People who struggle to visualise 2D drawings follow motion easily. A short animation shows what to do, in which order and where each part goes, without reading.',
      },
      {
        q: 'Can you animate a whole product range?',
        a: 'Yes. A consistent look across many products is common: one visual style and one structure, repeated for each product.',
      },
      {
        q: 'Can I also get images for a printed guide?',
        a: 'Yes. Individual frames can be exported as numbered step images, so the video and the printed guide show the same sequence.',
      },
      {
        q: 'Do we need an existing printed manual?',
        a: 'No. A manual helps, but it is not required. For a new product we can work from a 3D or CAD model, drawings or photos, together with your engineer who explains the sequence, and make the installation film directly.',
      },
    ],
  },
  {
    slug: '3d-product-animation',
    name: '3D Product Animation',
    seoTitle: '3D Product Animation & Explainer Video | IONASCU',
    seoDescription:
      'Animated 3D product films that show what your product is, what it is for and why it is better. For your website, sales, trade shows and social media.',
    h1: '3D Product Animation & Explainer Video',
    blurb: 'Films that show what your product is and why it is better.',
    lead: 'A film that presents your product: what it is, what it is for and why it is better than the alternatives. 3D animation can show things a camera cannot: the inside, the materials, how it works, and a product that is not built yet.',
    points: [
      { title: 'What it is and what it is for', text: 'A clear story in one to two minutes, so a buyer understands the product at a glance.' },
      { title: 'Benefits, not just features', text: 'Key advantages are shown and called out on screen, in simple language.' },
      { title: 'See inside', text: 'Cutaways and exploded views show the structure, layers and materials.' },
      { title: 'Before it is built', text: 'Made from CAD, so you can present a product before the first one is produced.' },
      { title: 'For every channel', text: 'Website, sales presentations, trade shows, social media and distributors.' },
      { title: 'One look for the whole range', text: 'A consistent style across all your products.' },
    ],
    sections: [
      {
        title: 'More than installation: the whole story of the product',
        paragraphs: [
          'An instruction film shows how to install a product. A product animation tells the whole story. It shows what the product is, what it was created for, how it works, what makes it better, and what its characteristics are. It is a longer, richer film, made for the buyer as much as for the installer.',
          'Because it is built in 3D, the film can show what a camera cannot: the inside of a unit, the layers and materials, the way parts work together under load, and a product that has not been manufactured yet.',
        ],
      },
      {
        title: 'What a product film can contain',
        bullets: [
          '<strong>Purpose and use.</strong> What the product is for and where it is used.',
          '<strong>How it works.</strong> Cutaways and exploded views that make the principle visible.',
          '<strong>Advantages and characteristics.</strong> The key benefits and technical data, called out on screen in simple language.',
          '<strong>Installation in brief.</strong> How the product is mounted, shown as part of the story rather than as a full guide.',
          '<strong>The product in its setting.</strong> A building, a plant, a yard: the viewer sees how it fits.',
        ],
      },
      {
        title: 'Where the film works',
        paragraphs: [
          'On the product page, in sales presentations, at trade shows, with distributors and in social media. Many clients use both films: the product animation for marketing and sales, and the instruction animation for after-sale support.',
        ],
      },
    ],
    featured: {
      id: 'VnTKpfw-2y8',
      title: 'Weighing modules for silos',
      text: 'A film about weighing modules that make it possible to weigh silos. It presents the product, its advantages and how it is mounted, so the buyer understands what it does and why it is worth choosing.',
    },
    // product films: Opure, Ecomodule, AVA HTC process (the silo film above is shown separately)
    videos: ['bO8hlWcV6hA', 'mqF5zQI0bek', 's7h52WPbWOg'],
    faq: [
      {
        q: 'What is the difference between a product animation and an instruction animation?',
        a: 'An instruction film shows how to assemble or install the product. A product animation presents what it is, what it does and why it is worth buying. Many clients use both: one for marketing, one for after-sale support.',
      },
    ],
  },
  {
    slug: 'interactive-3d-product-instructions',
    name: 'Interactive 3D (WebGL) Instructions',
    seoTitle: 'Interactive 3D Product Instructions (WebGL) | IONASCU',
    seoDescription:
      'Interactive 3D instructions in the browser: rotate, zoom and click parts to see how they install. No plugins, works on any device.',
    h1: 'Interactive 3D Product Instructions',
    blurb: 'Rotate, zoom and click parts in the browser.',
    lead: 'Go beyond video: customers rotate and zoom the product in their browser and click a part to watch how it is installed. Works on phones and desktops with no plugins.',
    points: [
      { title: 'Click to see the step', text: 'Examples: deck drain channel, elbow and endcap installation, rainwater system.' },
      { title: 'Runs in the browser', text: 'WebGL, no app or plugin to install. Fast on mobile.' },
      { title: 'Embed on your product page', text: 'Add to your own website with a link or an embed.' },
    ],
    sections: [
      {
        title: 'A product you can explore',
        paragraphs: [
          'Interactive 3D instructions are demonstration applications that run directly in the browser. They are built with WebGL, on Verge3D technology, so there is nothing to install and they work on phones, tablets and desktops. The customer does not watch a story. The customer takes the product in hand and looks at it from every side.',
        ],
      },
      {
        title: 'What the viewer can do',
        bullets: [
          '<strong>Rotate</strong> the 3D model around the object and zoom in on any detail.',
          '<strong>Hide and show parts</strong> to see inside and to look at one module more closely.',
          '<strong>Read hints.</strong> Pop-up labels, explanatory texts and icons appear where they are needed.',
          '<strong>Hear sound.</strong> Audio supports the explanation where it helps.',
        ],
      },
      {
        title: 'Configurators: from choice to production',
        paragraphs: [
          'The same technology builds product configurators. The visitor rotates the 3D model in the browser and chooses colour, shape, texture and dimensions interactively. The result is not just a picture. The chosen configuration can be sent straight to the production department, which plans the work, and to the finance department, which prepares the price and the invoice.',
          'All the information is collected without staff in between, with no re-typing and no misunderstandings. For the sales manager this greatly simplifies the work: the order arrives complete, and the time goes into talking to customers instead of collecting parameters.',
        ],
      },
      {
        title: 'Where it fits',
        paragraphs: [
          'On a product page that has to explain a complex product, for a distributor who needs to demonstrate it, at a trade show on a tablet, and in the sales process where every customer wants a slightly different variant. An interactive model can be added to your own website with a link or an embed.',
        ],
      },
    ],
    videos: [],
    faq: [
      {
        q: 'Do customers need to install anything?',
        a: 'No. Interactive instructions run in the browser on WebGL, on phones, tablets and desktops, with no app or plugin.',
      },
      {
        q: 'Can a configurator pass the order to our production and finance departments?',
        a: 'Yes. The configuration chosen by the visitor can be sent on to production and finance. How it connects to your systems is agreed for each project.',
      },
    ],
  },
];
