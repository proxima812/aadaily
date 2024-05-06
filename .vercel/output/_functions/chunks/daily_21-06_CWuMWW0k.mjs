import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"страх-и-вера\">СТРАХ И ВЕРА</h2>\n<p><strong>Освобождение от страха — это дело всей жизни, которое вряд ли можно\nполностью довести до конца. В случае неожиданной серьезной болезни или в\nкакой-то другой опасной ситуации все мы проявляем это эмоциональное состояние\n— плохо, хорошо ли, это уж как придется. Только те, кто занимается\nсамообманом, заявляют о полной свободе от страха.</strong></p>\n<p><strong><em>Как это видит Билл<br>\nAs Bill Sees It, p. 263</em></strong></p>\n<p>Страх был причиной страданий в те времена, когда мне не хватало веры. Порой\nнеожиданно страх рвет меня на части, причем именно тогда, когда я радуюсь,\nсчастлива и на душе у меня легко. Вера и чувство моей ценности для Высшей Силы\nпомогают мне переносить и трагедии, и восторги. Только отдав все свои страхи\nВысшей Силе, я буду свободна.</p>";

				const frontmatter = {"title":"21 июня","description":"Размышления АА на сегодня - 21 июня","id":"173","datePublished":"2023-05-04T00:00:00.000Z","moth":"iyun"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/iyun/daily_21-06.md";
				const url = undefined;
				function rawContent() {
					return "\n## СТРАХ И ВЕРА\n\n**Освобождение от страха — это дело всей жизни, которое вряд ли можно\nполностью довести до конца. В случае неожиданной серьезной болезни или в\nкакой-то другой опасной ситуации все мы проявляем это эмоциональное состояние\n— плохо, хорошо ли, это уж как придется. Только те, кто занимается\nсамообманом, заявляют о полной свободе от страха.**\n\n**_Как это видит Билл  \nAs Bill Sees It, p. 263_**\n\nСтрах был причиной страданий в те времена, когда мне не хватало веры. Порой\nнеожиданно страх рвет меня на части, причем именно тогда, когда я радуюсь,\nсчастлива и на душе у меня легко. Вера и чувство моей ценности для Высшей Силы\nпомогают мне переносить и трагедии, и восторги. Только отдав все свои страхи\nВысшей Силе, я буду свободна.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"страх-и-вера","text":"СТРАХ И ВЕРА"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
