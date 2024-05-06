import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"партнеры-по-выздоровлению\">ПАРТНЕРЫ ПО ВЫЗДОРОВЛЕНИЮ</h2>\n<p><strong>…наиболее стойкий иммунитет против алкоголя дает интенсивная работа с\nдругими алкоголиками. …Вы должны вместе с вашим подопечным день за днем\nдвигаться по пути духовного прогресса… Следуйте велениям Высшей Силы, и со\nвременем вы будете жить в новом, замечательном мире, какими бы ни были ваши\nтеперешние обстоятельства.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 86, 97<br>\nAlcoholics Anonymous, pp. 89, 100</em></strong></p>\n<p>Поступать правильно и обоснованно — это мой способ контролировать и свой\nэгоизм, и свое себялюбие. Я осознаю, что зависимость от Высшей Силы расчищает\nмне путь к душевному покою, счастью и трезвости. Каждый день я молюсь о том,\nчтобы избегать повторения прежних неверных поступков и таким образом приносить\nпользу другим.</p>";

				const frontmatter = {"title":"16 декабря","description":"Размышления АА на сегодня - 16 декабря","id":"351","datePublished":"2023-05-04T00:00:00.000Z","moth":"dekabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/dekabr/daily_16-12.md";
				const url = undefined;
				function rawContent() {
					return "\n## ПАРТНЕРЫ ПО ВЫЗДОРОВЛЕНИЮ\n\n**…наиболее стойкий иммунитет против алкоголя дает интенсивная работа с\nдругими алкоголиками. …Вы должны вместе с вашим подопечным день за днем\nдвигаться по пути духовного прогресса… Следуйте велениям Высшей Силы, и со\nвременем вы будете жить в новом, замечательном мире, какими бы ни были ваши\nтеперешние обстоятельства.**\n\n**_Анонимные Алкоголики, с. 86, 97  \nAlcoholics Anonymous, pp. 89, 100_**\n\nПоступать правильно и обоснованно — это мой способ контролировать и свой\nэгоизм, и свое себялюбие. Я осознаю, что зависимость от Высшей Силы расчищает\nмне путь к душевному покою, счастью и трезвости. Каждый день я молюсь о том,\nчтобы избегать повторения прежних неверных поступков и таким образом приносить\nпользу другим.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"партнеры-по-выздоровлению","text":"ПАРТНЕРЫ ПО ВЫЗДОРОВЛЕНИЮ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
