import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"вера-круглые-сутки\">ВЕРА КРУГЛЫЕ СУТКИ</h2>\n<p><strong>Вера должна творить в нас и нашими руками 24 часа в сутки, иначе мы\nпогибнем.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 15<br>\nAlcoholics Anonymous, p. 16</em></strong></p>\n<p>Сущность моей духовности и трезвости зиждется на ежечасной вере в Высшую Силу.\nМне необходимо помнить об этом и полагаться на Бога, как я Его понимаю, в моей\nежедневной деятельности. Каким утешением для меня является то, что Бог\nдействует в людях и через людей! Вспоминаю ли я в течение дня о конкретных\nпримерах Божьего присутствия? Радуюсь ли очевидности его проявления? Я полон\nблагодарности за присутствие Бога в моем выздоровлении. Без присутствия этой\nвсемогущей Силы во всех моих делах я бы опять упал в пучину моей болезни — и\nумер бы.</p>";

				const frontmatter = {"title":"19 января","description":"Размышления АА на сегодня - 19 января","id":"19","datePublished":"2023-05-04T00:00:00.000Z","moth":"yanvar"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/yanvar/daily_19-01.md";
				const url = undefined;
				function rawContent() {
					return "\n## ВЕРА КРУГЛЫЕ СУТКИ\n\n**Вера должна творить в нас и нашими руками 24 часа в сутки, иначе мы\nпогибнем.**\n\n**_Анонимные Алкоголики, с. 15  \nAlcoholics Anonymous, p. 16_**\n\nСущность моей духовности и трезвости зиждется на ежечасной вере в Высшую Силу.\nМне необходимо помнить об этом и полагаться на Бога, как я Его понимаю, в моей\nежедневной деятельности. Каким утешением для меня является то, что Бог\nдействует в людях и через людей! Вспоминаю ли я в течение дня о конкретных\nпримерах Божьего присутствия? Радуюсь ли очевидности его проявления? Я полон\nблагодарности за присутствие Бога в моем выздоровлении. Без присутствия этой\nвсемогущей Силы во всех моих делах я бы опять упал в пучину моей болезни — и\nумер бы.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"вера-круглые-сутки","text":"ВЕРА КРУГЛЫЕ СУТКИ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
