import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"преодоление-одиночества\">ПРЕОДОЛЕНИЕ ОДИНОЧЕСТВА</h2>\n<p><strong>Почти все без исключения алкоголики знают пытку одиночества. Еще до того как\nнаше пьянство приняло угрожающие размеры и люди стали сторониться нас, почти\nвсе мы страдали от чувства какой-то оторванности.</strong></p>\n<p><strong><em>Как это видит Билл<br>\nAs Bill Sees It, p. 90</em></strong></p>\n<p>Агонии и пустота, которые я часто ощущал внутри себя, сегодня все реже и реже\nпоявляются в моей жизни. Я научился справляться с одиночеством. Я могу\nобщаться с Богом, только когда я один и спокоен, но если я в суете, то даже Он\nне может достучаться до меня. В любое время хорошо быть в контакте с Богом, но\nкогда все, как мне кажется, плохо, исключительно важно молитвой и\nразмышлениями поддерживать с Ним этот контакт.</p>";

				const frontmatter = {"title":"17 ноября","description":"Размышления АА на сегодня - 17 ноября","id":"322","datePublished":"2023-05-04T00:00:00.000Z","moth":"noyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/noyabr/daily_17-11.md";
				const url = undefined;
				function rawContent() {
					return "\n## ПРЕОДОЛЕНИЕ ОДИНОЧЕСТВА\n\n**Почти все без исключения алкоголики знают пытку одиночества. Еще до того как\nнаше пьянство приняло угрожающие размеры и люди стали сторониться нас, почти\nвсе мы страдали от чувства какой-то оторванности.**\n\n**_Как это видит Билл  \nAs Bill Sees It, p. 90_**\n\nАгонии и пустота, которые я часто ощущал внутри себя, сегодня все реже и реже\nпоявляются в моей жизни. Я научился справляться с одиночеством. Я могу\nобщаться с Богом, только когда я один и спокоен, но если я в суете, то даже Он\nне может достучаться до меня. В любое время хорошо быть в контакте с Богом, но\nкогда все, как мне кажется, плохо, исключительно важно молитвой и\nразмышлениями поддерживать с Ним этот контакт.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"преодоление-одиночества","text":"ПРЕОДОЛЕНИЕ ОДИНОЧЕСТВА"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
