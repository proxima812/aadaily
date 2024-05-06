import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"и-хорошее-и-плохое\">«И ХОРОШЕЕ, И ПЛОХОЕ»</h2>\n<p><strong>«Создатель, я хочу, чтобы Ты принял меня со всем, что во мне есть, и\nхорошим, и плохим».</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 74<br>\nAlcoholics Anonymous, p. 76</em></strong></p>\n<p>Радость жизни заключается в том, чтобы отдавать. Избавившись от каких-то своих\nнедостатков, я могу больше заниматься служением, да и смирение во мне\nукрепляется. Мои недостатки могут быть смиренно переданы на волю Бога и\nустранены Им. Сущность Седьмого Шага — в смирении, и нет лучшего пути для\nпоиска смирения, чем отдать всего себя, хорошего или плохого, Богу. Он может\nустранить плохое и вернуть мне хорошее.</p>";

				const frontmatter = {"title":"22 июля","description":"Размышления АА на сегодня - 22 июля","id":"204","datePublished":"2023-05-04T00:00:00.000Z","moth":"iyul"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/iyul/daily_22-07.md";
				const url = undefined;
				function rawContent() {
					return "\n## «И ХОРОШЕЕ, И ПЛОХОЕ»\n\n**«Создатель, я хочу, чтобы Ты принял меня со всем, что во мне есть, и\nхорошим, и плохим».**\n\n**_Анонимные Алкоголики, с. 74  \nAlcoholics Anonymous, p. 76_**\n\nРадость жизни заключается в том, чтобы отдавать. Избавившись от каких-то своих\nнедостатков, я могу больше заниматься служением, да и смирение во мне\nукрепляется. Мои недостатки могут быть смиренно переданы на волю Бога и\nустранены Им. Сущность Седьмого Шага — в смирении, и нет лучшего пути для\nпоиска смирения, чем отдать всего себя, хорошего или плохого, Богу. Он может\nустранить плохое и вернуть мне хорошее.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"и-хорошее-и-плохое","text":"«И ХОРОШЕЕ, И ПЛОХОЕ»"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
