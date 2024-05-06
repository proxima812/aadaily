import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"привести-в-порядок-себя-а-не-другого\">ПРИВЕСТИ В ПОРЯДОК СЕБЯ, А НЕ ДРУГОГО</h2>\n<p><strong>Если кто-то обидел нас и нам больно, то это тоже указывает на дефект.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 102<br>\nTwelve Steps and Twelve Traditions, p. 90</em></strong></p>\n<p>Какую свободу я ощутил, когда мне указали на эти слова! Неожиданно я понял,\nчто могу что-то сделать со своей злобой. Я могу привести в порядок себя,\nвместо того чтобы <em>их</em> ставить на место. Я убежден, что исключений из этого\nположения нет. Когда я злюсь, мой гнев всегда эгоистичен. Я должен постоянно\nнапоминать себе, что я просто человек и что делаю все, что в моих силах, даже\nесли, в конце концов, этого «всего» оказывается недостаточно. Поэтому я прошу\nБога убрать мой гнев и по-настоящему освободить меня.</p>";

				const frontmatter = {"title":"10 октября","description":"Размышления АА на сегодня - 10 октября","id":"284","datePublished":"2023-05-04T00:00:00.000Z","moth":"oktyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/oktyabr/daily_10-10.md";
				const url = undefined;
				function rawContent() {
					return "\n## ПРИВЕСТИ В ПОРЯДОК СЕБЯ, А НЕ ДРУГОГО\n\n**Если кто-то обидел нас и нам больно, то это тоже указывает на дефект.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 102  \nTwelve Steps and Twelve Traditions, p. 90_**\n\nКакую свободу я ощутил, когда мне указали на эти слова! Неожиданно я понял,\nчто могу что-то сделать со своей злобой. Я могу привести в порядок себя,\nвместо того чтобы _их_ ставить на место. Я убежден, что исключений из этого\nположения нет. Когда я злюсь, мой гнев всегда эгоистичен. Я должен постоянно\nнапоминать себе, что я просто человек и что делаю все, что в моих силах, даже\nесли, в конце концов, этого «всего» оказывается недостаточно. Поэтому я прошу\nБога убрать мой гнев и по-настоящему освободить меня.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"привести-в-порядок-себя-а-не-другого","text":"ПРИВЕСТИ В ПОРЯДОК СЕБЯ, А НЕ ДРУГОГО"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
