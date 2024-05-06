import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"честность-с-новичками\">ЧЕСТНОСТЬ С НОВИЧКАМИ</h2>\n<p><strong>Расскажите ему всю правду, как это произошло. Подчеркните духовную сторону\nвашего исцеления.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 90<br>\nAlcoholics Anonymous, p. 93</em></strong></p>\n<p>АА замечательно тем, что я рассказываю только то, что происходит со мной. Я не\nтрачу время на советы потенциальным новичкам, поскольку, если бы советы\nпомогали, никто бы в АА не приходил. Все, что мне надо делать, так это\nпоказывать — как я стал трезвым и что изменило мою жизнь. Если мне не удается\nподчеркнуть духовный аспект Программы АА, значит, я нечестен. У новичка не\nдолжно складываться ложного представления о трезвости. Я трезв только по\nмилости Высшей Силы и поэтому могу делиться своим опытом с другими.</p>";

				const frontmatter = {"title":"18 декабря","description":"Размышления АА на сегодня - 18 декабря","id":"353","datePublished":"2023-05-04T00:00:00.000Z","moth":"dekabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/dekabr/daily_18-12.md";
				const url = undefined;
				function rawContent() {
					return "\n## ЧЕСТНОСТЬ С НОВИЧКАМИ\n\n**Расскажите ему всю правду, как это произошло. Подчеркните духовную сторону\nвашего исцеления.**\n\n**_Анонимные Алкоголики, с. 90  \nAlcoholics Anonymous, p. 93_**\n\nАА замечательно тем, что я рассказываю только то, что происходит со мной. Я не\nтрачу время на советы потенциальным новичкам, поскольку, если бы советы\nпомогали, никто бы в АА не приходил. Все, что мне надо делать, так это\nпоказывать — как я стал трезвым и что изменило мою жизнь. Если мне не удается\nподчеркнуть духовный аспект Программы АА, значит, я нечестен. У новичка не\nдолжно складываться ложного представления о трезвости. Я трезв только по\nмилости Высшей Силы и поэтому могу делиться своим опытом с другими.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"честность-с-новичками","text":"ЧЕСТНОСТЬ С НОВИЧКАМИ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
