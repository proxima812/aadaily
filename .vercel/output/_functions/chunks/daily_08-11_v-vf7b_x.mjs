import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"индивидуальное-путешествие\">ИНДИВИДУАЛЬНОЕ ПУТЕШЕСТВИЕ</h2>\n<p><strong>Искусство медитации всегда может совершенствоваться. Для этого не существует\nграниц ни в ширину, ни в высоту. После такого наставления… становится ясно,\nчто медитация — это индивидуальное путешествие в неизведанное, которое каждый\nиз нас совершает по-своему.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 109<br>\nTwelve Steps and Twelve Traditions, p. 101</em></strong></p>\n<p>Духовно я расту с Богом, как я Его понимаю, и с Ним обретаю себя истинного.\nЕжедневные размышления и молитвы укрепляют и обновляют мой источник\nблагополучия. Тогда я открываюсь, чтобы принять все, что Он мне предлагает. С\nБогом я уверен, что мое жизненное путешествие будет таким, как хочет Он. Я\nблагодарен, что в моей жизни есть Бог.</p>";

				const frontmatter = {"title":"8 ноября","description":"Размышления АА на сегодня - 8 ноября","id":"313","datePublished":"2023-05-04T00:00:00.000Z","moth":"noyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/noyabr/daily_08-11.md";
				const url = undefined;
				function rawContent() {
					return "\n## ИНДИВИДУАЛЬНОЕ ПУТЕШЕСТВИЕ\n\n**Искусство медитации всегда может совершенствоваться. Для этого не существует\nграниц ни в ширину, ни в высоту. После такого наставления… становится ясно,\nчто медитация — это индивидуальное путешествие в неизведанное, которое каждый\nиз нас совершает по-своему.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 109  \nTwelve Steps and Twelve Traditions, p. 101_**\n\nДуховно я расту с Богом, как я Его понимаю, и с Ним обретаю себя истинного.\nЕжедневные размышления и молитвы укрепляют и обновляют мой источник\nблагополучия. Тогда я открываюсь, чтобы принять все, что Он мне предлагает. С\nБогом я уверен, что мое жизненное путешествие будет таким, как хочет Он. Я\nблагодарен, что в моей жизни есть Бог.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"индивидуальное-путешествие","text":"ИНДИВИДУАЛЬНОЕ ПУТЕШЕСТВИЕ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
