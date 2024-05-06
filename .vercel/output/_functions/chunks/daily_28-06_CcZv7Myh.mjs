import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"решимость-наших-основателей\">РЕШИМОСТЬ НАШИХ ОСНОВАТЕЛЕЙ</h2>\n<p><strong>Через полтора года эти трое сумели спасти еще семь человек.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 155<br>\nAlcoholics Anonymous, p. 159</em></strong></p>\n<p>Если бы не твердая решимость наших основателей, АА быстро исчезло бы подобно\nмногим другим так называемым добрым делам. Я знаю, что в нашем городе каждую\nнеделю проходят сотни собраний и что АА доступно 24 часа в сутки. Если бы у\nменя не было ничего, кроме надежды и желания бросить пить, и меня везде\nотвергли, я стал бы искать более легкие и мягкие пути и вернулся бы к прежнему\nобразу жизни.</p>";

				const frontmatter = {"title":"28 июня","description":"Размышления АА на сегодня - 28 июня","id":"180","datePublished":"2023-05-04T00:00:00.000Z","moth":"iyun"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/iyun/daily_28-06.md";
				const url = undefined;
				function rawContent() {
					return "\n## РЕШИМОСТЬ НАШИХ ОСНОВАТЕЛЕЙ\n\n**Через полтора года эти трое сумели спасти еще семь человек.**\n\n**_Анонимные Алкоголики, с. 155  \nAlcoholics Anonymous, p. 159_**\n\nЕсли бы не твердая решимость наших основателей, АА быстро исчезло бы подобно\nмногим другим так называемым добрым делам. Я знаю, что в нашем городе каждую\nнеделю проходят сотни собраний и что АА доступно 24 часа в сутки. Если бы у\nменя не было ничего, кроме надежды и желания бросить пить, и меня везде\nотвергли, я стал бы искать более легкие и мягкие пути и вернулся бы к прежнему\nобразу жизни.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"решимость-наших-основателей","text":"РЕШИМОСТЬ НАШИХ ОСНОВАТЕЛЕЙ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
