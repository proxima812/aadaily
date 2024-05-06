import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"просить-ежедневно\">ПРОСИТЬ ЕЖЕДНЕВНО</h2>\n<p><strong>Каждый день мы должны вносить в наши действия идею Божьей воли.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 82<br>\nAlcoholics Anonymous, p. 85</em></strong></p>\n<p>Как я поддерживаю свое духовное состояние? Для меня это просто: утром я прошу\nсвою Высшую Силу даровать мне трезвость на предстоящий день! Я разговаривал со\nмногими алкоголиками, снова начавшими пить, и всегда спрашивал их: «Ты молился\nо трезвости в тот день, когда выпил первую рюмку?» Ни один из них не ответил\n«да». Работая по Десятому Шагу и ежедневно стараясь содержать «свой дом» в\nпорядке, я знаю, что, если я попрошу отсрочки на один день, я ее получу.</p>";

				const frontmatter = {"title":"17 октября","description":"Размышления АА на сегодня - 17 октября","id":"291","datePublished":"2023-05-04T00:00:00.000Z","moth":"oktyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/oktyabr/daily_17-10.md";
				const url = undefined;
				function rawContent() {
					return "\n## ПРОСИТЬ ЕЖЕДНЕВНО\n\n**Каждый день мы должны вносить в наши действия идею Божьей воли.**\n\n**_Анонимные Алкоголики, с. 82  \nAlcoholics Anonymous, p. 85_**\n\nКак я поддерживаю свое духовное состояние? Для меня это просто: утром я прошу\nсвою Высшую Силу даровать мне трезвость на предстоящий день! Я разговаривал со\nмногими алкоголиками, снова начавшими пить, и всегда спрашивал их: «Ты молился\nо трезвости в тот день, когда выпил первую рюмку?» Ни один из них не ответил\n«да». Работая по Десятому Шагу и ежедневно стараясь содержать «свой дом» в\nпорядке, я знаю, что, если я попрошу отсрочки на один день, я ее получу.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"просить-ежедневно","text":"ПРОСИТЬ ЕЖЕДНЕВНО"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
