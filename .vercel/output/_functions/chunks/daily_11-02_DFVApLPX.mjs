import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"пределы-самостоятельности\">ПРЕДЕЛЫ САМОСТОЯТЕЛЬНОСТИ</h2>\n<p><strong>Мы спросили себя: откуда у нас эти страхи? Не было ли причиной то, что мы во\nвсем полагались на себя, и это нас подвело?</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 66<br>\nAlcoholics Anonymous, p. 68</em></strong></p>\n<p>Мои недостатки отделяют меня от Божьей воли. Когда я отворачиваюсь от своей\nсвязи с Ним, я оказываюсь один на один с миром и со своим алкоголизмом и\nвынужден сам за все отвечать. Пока я полагался лишь на самого себя, у меня не\nбыло ощущения покоя и безопасности, и единственным результатом этого была\nжизнь в страхе и недовольстве. Бог простирает мне дорогу назад, к Нему и Его\nдару гармонии и умиротворения. Но прежде мне нужно решиться увидеть свои\nстрахи, понять их природу и власть надо мной. Поэтому я часто прошу Бога\nуказать мне, чем я отделяю себя от Него.</p>";

				const frontmatter = {"title":"11 февраля","description":"Размышления АА на сегодня - 11 февраля","id":"42","datePublished":"2023-05-04T00:00:00.000Z","moth":"fevral"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/fevral/daily_11-02.md";
				const url = undefined;
				function rawContent() {
					return "\n## ПРЕДЕЛЫ САМОСТОЯТЕЛЬНОСТИ\n\n**Мы спросили себя: откуда у нас эти страхи? Не было ли причиной то, что мы во\nвсем полагались на себя, и это нас подвело?**\n\n**_Анонимные Алкоголики, с. 66  \nAlcoholics Anonymous, p. 68_**\n\nМои недостатки отделяют меня от Божьей воли. Когда я отворачиваюсь от своей\nсвязи с Ним, я оказываюсь один на один с миром и со своим алкоголизмом и\nвынужден сам за все отвечать. Пока я полагался лишь на самого себя, у меня не\nбыло ощущения покоя и безопасности, и единственным результатом этого была\nжизнь в страхе и недовольстве. Бог простирает мне дорогу назад, к Нему и Его\nдару гармонии и умиротворения. Но прежде мне нужно решиться увидеть свои\nстрахи, понять их природу и власть надо мной. Поэтому я часто прошу Бога\nуказать мне, чем я отделяю себя от Него.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"пределы-самостоятельности","text":"ПРЕДЕЛЫ САМОСТОЯТЕЛЬНОСТИ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
