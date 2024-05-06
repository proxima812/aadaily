import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"ведомые\">ВЕДОМЫЕ</h2>\n<p><strong>Ведомые разными формами страха, самообмана, своекорыстия, жалости к себе, мы\nрасталкиваем локтями окружающих, а они платят нам той же монетой.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 60<br>\nAlcoholics Anonymous, p. 62</em></strong></p>\n<p>Эгоизм был движущей силой моего пьянства. Я пил, празднуя успех, и пил, чтобы\nутопить свои горести. Альтернатива этому — смирение. Я учусь перепоручать свою\nволю и жизнь Богу. Мой наставник говорит, что служение сохраняет мою\nтрезвость.</p>\n<p>Сегодня я спрашиваю себя: «Познал ли я Его волю, которую мне надлежит\nисполнить? Служу ли я моей группе АА?»</p>";

				const frontmatter = {"title":"6 августа","description":"Размышления АА на сегодня - 6 августа","id":"220","datePublished":"2023-05-04T00:00:00.000Z","moth":"avgust"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/avgust/daily_06-08.md";
				const url = undefined;
				function rawContent() {
					return "\n## ВЕДОМЫЕ\n\n**Ведомые разными формами страха, самообмана, своекорыстия, жалости к себе, мы\nрасталкиваем локтями окружающих, а они платят нам той же монетой.**\n\n**_Анонимные Алкоголики, с. 60  \nAlcoholics Anonymous, p. 62_**\n\nЭгоизм был движущей силой моего пьянства. Я пил, празднуя успех, и пил, чтобы\nутопить свои горести. Альтернатива этому — смирение. Я учусь перепоручать свою\nволю и жизнь Богу. Мой наставник говорит, что служение сохраняет мою\nтрезвость.\n\nСегодня я спрашиваю себя: «Познал ли я Его волю, которую мне надлежит\nисполнить? Служу ли я моей группе АА?»\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"ведомые","text":"ВЕДОМЫЕ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
