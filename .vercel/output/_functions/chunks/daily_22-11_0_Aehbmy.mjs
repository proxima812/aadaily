import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"только-два-греха\">ТОЛЬКО ДВА ГРЕХА</h2>\n<p><strong>…есть только два греха: первый — мешать росту другого человека, второй —\nмешать своему собственному росту.</strong></p>\n<p><strong><em>Анонимные Алкоголики<br>\nAlcoholics Anonymous, p. 542</em></strong></p>\n<p>Счастье — состояние весьма иллюзорное. Как часто мои «молитвы» о других имеют\nподтекстом «скрытые» просьбы о себе? Как часто мои поиски счастья создают\nзавалы на пути духовного роста других людей и даже меня самого? Поиск, в\nсмирении и принятии, путей духовного роста приводит иногда к таким плодам,\nкоторые на первый взгляд не назовешь добрыми, целостными и жизненно важными. И\nвсе же, оглядываясь назад, я вижу, что даже боль, борьба и неудачи в конечном\nитоге способствовали моему духовному росту в Программе — а значит, и душевному\nпокою.</p>";

				const frontmatter = {"title":"22 ноября","description":"Размышления АА на сегодня - 22 ноября","id":"327","datePublished":"2023-05-04T00:00:00.000Z","moth":"noyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/noyabr/daily_22-11.md";
				const url = undefined;
				function rawContent() {
					return "\n## ТОЛЬКО ДВА ГРЕХА\n\n**…есть только два греха: первый — мешать росту другого человека, второй —\nмешать своему собственному росту.**\n\n**_Анонимные Алкоголики  \nAlcoholics Anonymous, p. 542_**\n\nСчастье — состояние весьма иллюзорное. Как часто мои «молитвы» о других имеют\nподтекстом «скрытые» просьбы о себе? Как часто мои поиски счастья создают\nзавалы на пути духовного роста других людей и даже меня самого? Поиск, в\nсмирении и принятии, путей духовного роста приводит иногда к таким плодам,\nкоторые на первый взгляд не назовешь добрыми, целостными и жизненно важными. И\nвсе же, оглядываясь назад, я вижу, что даже боль, борьба и неудачи в конечном\nитоге способствовали моему духовному росту в Программе — а значит, и душевному\nпокою.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"только-два-греха","text":"ТОЛЬКО ДВА ГРЕХА"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
