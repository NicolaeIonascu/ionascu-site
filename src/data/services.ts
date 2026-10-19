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
  points: { title: string; text: string }[];
  /** YouTube ids from the portfolio shown as examples */
  videos: string[];
  faq: Faq[];
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
    // TODO(owner): replace with your own product-presentation films
    videos: ['7OU3whfF0F4', 'mu0LbcXpkIY', 'bO8hlWcV6hA'],
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
    videos: [],
    faq: [],
  },
];
