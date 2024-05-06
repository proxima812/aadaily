import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"думая-о-других\">ДУМАЯ О ДРУГИХ</h2>\n<p><strong>Само наше существование (а мы — люди, в прошлом злоупотреблявшие спиртными\nнапитками) зависит от нашей постоянной заботы о других и от того, в какой\nстепени мы сможем быть им полезными.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 19<br>\nAlcoholics Anonymous, p. 20</em></strong></p>\n<p>Мне никогда не удавалось подумать о других. Даже когда я стараюсь работать по\nПрограмме АА, я обыкновенно думаю: «Как <em>я</em> себя сегодня чувствую? Счастлива\nли <em>я</em> , радостна ли, свободна ли?</p>\n<p>Программа говорит мне, что мои мысли <em>должны</em> быть направлены на окружающих\nменя людей: «Захочет ли вон тот новичок поговорить с кем-нибудь?», «Этот\nчеловек выглядит сегодня грустным, может быть, я смогу его приободрить?»\nТолько тогда, когда я забываю о своих проблемах и стремлюсь дать что-либо\nдругим, я могу обрести то, что ищу, — душевный покой и осознание Бога.</p>";

				const frontmatter = {"title":"13 декабря","description":"Размышления АА на сегодня - 13 декабря","id":"348","datePublished":"2023-05-04T00:00:00.000Z","moth":"dekabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/dekabr/daily_13-12.md";
				const url = undefined;
				function rawContent() {
					return "\n## ДУМАЯ О ДРУГИХ\n\n**Само наше существование (а мы — люди, в прошлом злоупотреблявшие спиртными\nнапитками) зависит от нашей постоянной заботы о других и от того, в какой\nстепени мы сможем быть им полезными.**\n\n**_Анонимные Алкоголики, с. 19  \nAlcoholics Anonymous, p. 20_**\n\nМне никогда не удавалось подумать о других. Даже когда я стараюсь работать по\nПрограмме АА, я обыкновенно думаю: «Как _я_ себя сегодня чувствую? Счастлива\nли _я_ , радостна ли, свободна ли?\n\nПрограмма говорит мне, что мои мысли _должны_ быть направлены на окружающих\nменя людей: «Захочет ли вон тот новичок поговорить с кем-нибудь?», «Этот\nчеловек выглядит сегодня грустным, может быть, я смогу его приободрить?»\nТолько тогда, когда я забываю о своих проблемах и стремлюсь дать что-либо\nдругим, я могу обрести то, что ищу, — душевный покой и осознание Бога.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"думая-о-других","text":"ДУМАЯ О ДРУГИХ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
