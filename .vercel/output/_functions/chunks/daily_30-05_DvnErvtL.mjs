import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"наша-главная-цель\">НАША ГЛАВНАЯ ЦЕЛЬ</h2>\n<p><strong>Чем больше АА придерживается своей основной цели, тем весомее будет от него\nпольза повсюду.</strong></p>\n<p><strong><em>АА взрослеет<br>\nAA Comes of Age, p. 109</em></strong></p>\n<p>Я с благодарностью думаю о первоначальном периоде нашего Содружества и о\nмудрых и преданных его «первопроходцах», провозгласивших, что мы не должны\nотклоняться от нашей главной цели — доносить смысл наших идей до все еще\nстрадающих алкоголиков.</p>\n<p>Четко осознавая, что АА не занимается никакими другими делами, кроме своих\nсобственных, я испытываю уважение и ко всем тем, кто работает в области\nалкоголизма. Я должен помнить, что АА не претендует на монополию творить\nчудеса, и остаюсь смиренно благодарным любящему Богу, Который сделал возможным\nсуществование АА.</p>";

				const frontmatter = {"title":"30 мая","description":"Размышления АА на сегодня - 30 мая","id":"151","datePublished":"2023-05-04T00:00:00.000Z","moth":"maj"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/maj/daily_30-05.md";
				const url = undefined;
				function rawContent() {
					return "\n## НАША ГЛАВНАЯ ЦЕЛЬ\n\n**Чем больше АА придерживается своей основной цели, тем весомее будет от него\nпольза повсюду.**\n\n**_АА взрослеет  \nAA Comes of Age, p. 109_**\n\nЯ с благодарностью думаю о первоначальном периоде нашего Содружества и о\nмудрых и преданных его «первопроходцах», провозгласивших, что мы не должны\nотклоняться от нашей главной цели — доносить смысл наших идей до все еще\nстрадающих алкоголиков.\n\nЧетко осознавая, что АА не занимается никакими другими делами, кроме своих\nсобственных, я испытываю уважение и ко всем тем, кто работает в области\nалкоголизма. Я должен помнить, что АА не претендует на монополию творить\nчудеса, и остаюсь смиренно благодарным любящему Богу, Который сделал возможным\nсуществование АА.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"наша-главная-цель","text":"НАША ГЛАВНАЯ ЦЕЛЬ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
