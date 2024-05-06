import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"мы-преисполнились-желанием\">МЫ ПРЕИСПОЛНИЛИСЬ ЖЕЛАНИЕМ</h2>\n<p><strong>В данный момент мы пытаемся привести в порядок нашу собственную жизнь. Но\nэто не самоцель.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 74<br>\nAlcoholics Anonymous, p. 77</em></strong></p>\n<p>Как легко я могу сбиться с пути на подступах к Восьмому Шагу! Я хочу быть\nсвободным и как-то измениться, работая по Шестому и Седьмому Шагам. Сейчас,\nболее чем когда-либо, мне угрожают своекорыстие и скрытые намерения. Я\nстараюсь помнить, что самодовольство, наступающее порой, когда меня прощают\nте, кому я навредил, отнюдь не есть моя главная цель. Я преисполняюсь желанием\nвозместить причиненный мною ущерб, понимая при этом, что таким образом я\nисправляюсь и могу двигаться дальше к познанию Божьей воли в отношении меня.</p>";

				const frontmatter = {"title":"2 августа","description":"Размышления АА на сегодня - 2 августа","id":"216","datePublished":"2023-05-04T00:00:00.000Z","moth":"avgust"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/avgust/daily_02-08.md";
				const url = undefined;
				function rawContent() {
					return "\n## МЫ ПРЕИСПОЛНИЛИСЬ ЖЕЛАНИЕМ\n\n**В данный момент мы пытаемся привести в порядок нашу собственную жизнь. Но\nэто не самоцель.**\n\n**_Анонимные Алкоголики, с. 74  \nAlcoholics Anonymous, p. 77_**\n\nКак легко я могу сбиться с пути на подступах к Восьмому Шагу! Я хочу быть\nсвободным и как-то измениться, работая по Шестому и Седьмому Шагам. Сейчас,\nболее чем когда-либо, мне угрожают своекорыстие и скрытые намерения. Я\nстараюсь помнить, что самодовольство, наступающее порой, когда меня прощают\nте, кому я навредил, отнюдь не есть моя главная цель. Я преисполняюсь желанием\nвозместить причиненный мною ущерб, понимая при этом, что таким образом я\nисправляюсь и могу двигаться дальше к познанию Божьей воли в отношении меня.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"мы-преисполнились-желанием","text":"МЫ ПРЕИСПОЛНИЛИСЬ ЖЕЛАНИЕМ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
