import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"сделать-все-чтобы-помочь\">СДЕЛАТЬ ВСЕ, ЧТОБЫ ПОМОЧЬ</h2>\n<p><strong>Предложите ему [алкоголику] вашу помощь и дружбу. Скажите ему, что, если он\nхочет бросить пить, вы сделаете все, чтобы помочь ему.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 92<br>\nAlcoholics Anonymous, p. 95</em></strong></p>\n<p>Помню, как сильно привязался я к двум собратьям из АА, которые работали со\nмной по Двенадцатому Шагу. Они говорили, что я могу иметь то, что есть у них,\nпричем без всяких дополнительных условий. Все, что от меня требуется, — это\nпринять свое собственное решение присоединиться к ним на пути к выздоровлению.\nЕсли я начинаю убеждать новичка поступать, как я поступаю, значит, я позабыл,\nкак помогли мне эти двое своей непредвзятой щедростью.</p>";

				const frontmatter = {"title":"15 декабря","description":"Размышления АА на сегодня - 15 декабря","id":"350","datePublished":"2023-05-04T00:00:00.000Z","moth":"dekabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/dekabr/daily_15-12.md";
				const url = undefined;
				function rawContent() {
					return "\n## СДЕЛАТЬ ВСЕ, ЧТОБЫ ПОМОЧЬ\n\n**Предложите ему [алкоголику] вашу помощь и дружбу. Скажите ему, что, если он\nхочет бросить пить, вы сделаете все, чтобы помочь ему.**\n\n**_Анонимные Алкоголики, с. 92  \nAlcoholics Anonymous, p. 95_**\n\nПомню, как сильно привязался я к двум собратьям из АА, которые работали со\nмной по Двенадцатому Шагу. Они говорили, что я могу иметь то, что есть у них,\nпричем без всяких дополнительных условий. Все, что от меня требуется, — это\nпринять свое собственное решение присоединиться к ним на пути к выздоровлению.\nЕсли я начинаю убеждать новичка поступать, как я поступаю, значит, я позабыл,\nкак помогли мне эти двое своей непредвзятой щедростью.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"сделать-все-чтобы-помочь","text":"СДЕЛАТЬ ВСЕ, ЧТОБЫ ПОМОЧЬ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
