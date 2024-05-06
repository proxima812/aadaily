import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"устранить-угрозу-для-трезвости\">УСТРАНИТЬ УГРОЗУ ДЛЯ ТРЕЗВОСТИ</h2>\n<p><strong>…за исключением тех случаев, когда это могло повредить им или кому-нибудь\nдругому.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 57<br>\nAlcoholics Anonymous, p. 59</em></strong></p>\n<p>Девятый Шаг восстанавливает у меня ощущение общности не только со всем\nчеловечеством, но и с окружающими меня в повседневной жизни людьми. Во-первых,\nэтот Шаг позволяет мне выходить из-под опеки АА и общаться с людьми «там», вне\nАА, причем на их условиях, а не на моих. Это страшно, но это необходимо, если\nя хочу вернуться к нормальной жизни. Во-вторых, Девятый Шаг восстанавливает и\nулаживает мои взаимоотношения с людьми, и, расчищая завалы прошлого, которое\nможет погубить меня, устра-няет угрозу моей трезвости. Таким образом Девятый\nШаг указывает мне путь к более спокойной трезвости.</p>";

				const frontmatter = {"title":"6 сентября","description":"Размышления АА на сегодня - 6 сентября","id":"250","datePublished":"2023-05-04T00:00:00.000Z","moth":"sentyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/sentyabr/daily_06-09.md";
				const url = undefined;
				function rawContent() {
					return "\n## УСТРАНИТЬ УГРОЗУ ДЛЯ ТРЕЗВОСТИ\n\n**…за исключением тех случаев, когда это могло повредить им или кому-нибудь\nдругому.**\n\n**_Анонимные Алкоголики, с. 57  \nAlcoholics Anonymous, p. 59_**\n\nДевятый Шаг восстанавливает у меня ощущение общности не только со всем\nчеловечеством, но и с окружающими меня в повседневной жизни людьми. Во-первых,\nэтот Шаг позволяет мне выходить из-под опеки АА и общаться с людьми «там», вне\nАА, причем на их условиях, а не на моих. Это страшно, но это необходимо, если\nя хочу вернуться к нормальной жизни. Во-вторых, Девятый Шаг восстанавливает и\nулаживает мои взаимоотношения с людьми, и, расчищая завалы прошлого, которое\nможет погубить меня, устра-няет угрозу моей трезвости. Таким образом Девятый\nШаг указывает мне путь к более спокойной трезвости.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"устранить-угрозу-для-трезвости","text":"УСТРАНИТЬ УГРОЗУ ДЛЯ ТРЕЗВОСТИ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
