import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"анонимные-добрые-дела\">АНОНИМНЫЕ ДОБРЫЕ ДЕЛА</h2>\n<p><strong>Будучи пьющими алкоголиками, мы в той или иной форме всегда искали\nподачек.</strong></p>\n<p><strong><em>Двенадцать Традиций в иллюстрациях<br>\nThe Twelve Traditions Illustrated, p. 14</em></strong></p>\n<p>Седьмая Традиция — это личный вызов, напоминающий мне о необходимости делиться\nс другими и отдавать себя. В пьянстве единственным, что я когда-либо\nкультивировал, была привычка пить. Сейчас же улыбка, доброе слово и доброта —\nвот на что направлены все мои усилия.</p>\n<p>Я понял, что мне необходимо начать делать свое дело и позволить новым друзьям\nидти рядом со мной, поскольку благодаря работе по Двенадцати Шагам и\nДвенадцати Традициям мне хорошо как никогда раньше.</p>";

				const frontmatter = {"title":"29 июля","description":"Размышления АА на сегодня - 29 июля","id":"211","datePublished":"2023-05-04T00:00:00.000Z","moth":"iyul"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/iyul/daily_29-07.md";
				const url = undefined;
				function rawContent() {
					return "\n## АНОНИМНЫЕ ДОБРЫЕ ДЕЛА\n\n**Будучи пьющими алкоголиками, мы в той или иной форме всегда искали\nподачек.**\n\n**_Двенадцать Традиций в иллюстрациях  \nThe Twelve Traditions Illustrated, p. 14_**\n\nСедьмая Традиция — это личный вызов, напоминающий мне о необходимости делиться\nс другими и отдавать себя. В пьянстве единственным, что я когда-либо\nкультивировал, была привычка пить. Сейчас же улыбка, доброе слово и доброта —\nвот на что направлены все мои усилия.\n\nЯ понял, что мне необходимо начать делать свое дело и позволить новым друзьям\nидти рядом со мной, поскольку благодаря работе по Двенадцати Шагам и\nДвенадцати Традициям мне хорошо как никогда раньше.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"анонимные-добрые-дела","text":"АНОНИМНЫЕ ДОБРЫЕ ДЕЛА"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
