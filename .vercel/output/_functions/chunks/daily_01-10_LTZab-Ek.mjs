import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"избегать-самодовольства\">ИЗБЕГАТЬ САМОДОВОЛЬСТВА</h2>\n<p><strong>Очень легко забросить всю духовную Программу и почить на лаврах. Если мы\nсделаем так, нас ждет впереди беда, потому что алкоголь — коварный враг.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 82<br>\nAlcoholics Anonymous, p. 85</em></strong></p>\n<p>Когда у меня плохо на душе, я держусь поближе к друзьям, которых нашел в\nПрограмме. Облегчить страдания можно, используя решения, содержащиеся в\nДвенадцати Шагах АА. Но когда мне хорошо и все идет нормально, я могу стать\nсамодовольным. Проще говоря, я становлюсь ленивым и погружаюсь в проблему,\nвместо того чтобы решать ее. Мне надо действовать и, критически оценивая свое\nположение, уточнить: где я нахожусь и куда иду? Ежедневный самоанализ\nподскажет мне, что именно я должен изменить, чтобы восстановить душевное\nравновесие. Признание перед Богом и другим человеком того, что я в себе\nобнаруживаю, позволяет мне оставаться честным и смиренным.</p>";

				const frontmatter = {"title":"1 октября","description":"Размышления АА на сегодня - 1 октября","id":"275","datePublished":"2023-05-04T00:00:00.000Z","moth":"oktyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/oktyabr/daily_01-10.md";
				const url = undefined;
				function rawContent() {
					return "\n## ИЗБЕГАТЬ САМОДОВОЛЬСТВА\n\n**Очень легко забросить всю духовную Программу и почить на лаврах. Если мы\nсделаем так, нас ждет впереди беда, потому что алкоголь — коварный враг.**\n\n**_Анонимные Алкоголики, с. 82  \nAlcoholics Anonymous, p. 85_**\n\nКогда у меня плохо на душе, я держусь поближе к друзьям, которых нашел в\nПрограмме. Облегчить страдания можно, используя решения, содержащиеся в\nДвенадцати Шагах АА. Но когда мне хорошо и все идет нормально, я могу стать\nсамодовольным. Проще говоря, я становлюсь ленивым и погружаюсь в проблему,\nвместо того чтобы решать ее. Мне надо действовать и, критически оценивая свое\nположение, уточнить: где я нахожусь и куда иду? Ежедневный самоанализ\nподскажет мне, что именно я должен изменить, чтобы восстановить душевное\nравновесие. Признание перед Богом и другим человеком того, что я в себе\nобнаруживаю, позволяет мне оставаться честным и смиренным.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"избегать-самодовольства","text":"ИЗБЕГАТЬ САМОДОВОЛЬСТВА"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
