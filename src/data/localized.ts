// Picks the English, Romanian or Russian version of shared content.
import type { Lang } from '../i18n';
import { services, commonFaq, videoTitles } from './services';
import { servicesRo, commonFaqRo } from './services.ro';
import { servicesRu, commonFaqRu } from './services.ru';
import { testimonials } from './testimonials';
import { projectTitle, projectSummary, type Project } from './projects';
import { descriptions } from './descriptions';
import { projectTitleRo, projectSummaryRo, descriptionsRo } from './projects.ro';
import { projectTitleRu, projectSummaryRu, descriptionsRu } from './projects.ru';

export const getServices = (lang: Lang) => (lang === 'ro' ? servicesRo : lang === 'ru' ? servicesRu : services);
export const getCommonFaq = (lang: Lang) => (lang === 'ro' ? commonFaqRo : lang === 'ru' ? commonFaqRu : commonFaq);

// Quotes stay in the language the clients wrote them in; only the job titles are translated.
const roleRo: Record<string, string> = {
  'Director of Business Development': 'Director dezvoltare afaceri',
  'Managing Director': 'Director general',
  CEO: 'CEO',
};
const roleRu: Record<string, string> = {
  'Director of Business Development': 'Директор по развитию бизнеса',
  'Managing Director': 'Генеральный директор',
  CEO: 'CEO',
};
export const getTestimonials = (lang: Lang) => {
  const roles = lang === 'ro' ? roleRo : lang === 'ru' ? roleRu : null;
  return roles ? testimonials.map((t) => ({ ...t, role: t.role ? roles[t.role] ?? t.role : t.role })) : testimonials;
};

export { videoTitles };

export const getProjectTitle = (p: Project, lang: Lang) => (lang === 'ro' ? projectTitleRo(p) : lang === 'ru' ? projectTitleRu(p) : projectTitle(p));
export const getProjectSummary = (p: Project, lang: Lang) => (lang === 'ro' ? projectSummaryRo(p) : lang === 'ru' ? projectSummaryRu(p) : projectSummary(p));
export const getDescription = (slug: string, lang: Lang) => (lang === 'ro' ? descriptionsRo[slug] : lang === 'ru' ? descriptionsRu[slug] : descriptions[slug]);
