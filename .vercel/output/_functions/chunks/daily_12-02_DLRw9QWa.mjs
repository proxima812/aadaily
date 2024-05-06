import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"корень-всех-наших-бед\">КОРЕНЬ ВСЕХ НАШИХ БЕД</h2>\n<p><strong>Себялюбие — эгоцентризм! В этом, мы полагаем, корень всех наших проблем.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 60<br>\nAlcoholics Anonymous, p. 62</em></strong></p>\n<p>Какое поразительное открытие, что мир и все в нем могут прекрасно обходиться и\nбез меня. Какое облегчение узнать, что люди и предметы могут нормально\nсуществовать без моего контроля и руководства. Не хватает слов выразить, как\nзамечательно прийти к убеждению, что Сила более могущественная, чем я,\nсуществует отдельно и независимо от меня. Я знаю — это чувство разделенности\nмежду мной и Богом когда-нибудь исчезнет. Пока же путем веры я буду стремиться\nк смыслу своей жизни.</p>";

				const frontmatter = {"title":"12 февраля","description":"Размышления АА на сегодня - 12 февраля","id":"43","datePublished":"2023-05-04T00:00:00.000Z","moth":"fevral"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/fevral/daily_12-02.md";
				const url = undefined;
				function rawContent() {
					return "\n## КОРЕНЬ ВСЕХ НАШИХ БЕД\n\n**Себялюбие — эгоцентризм! В этом, мы полагаем, корень всех наших проблем.**\n\n**_Анонимные Алкоголики, с. 60  \nAlcoholics Anonymous, p. 62_**\n\nКакое поразительное открытие, что мир и все в нем могут прекрасно обходиться и\nбез меня. Какое облегчение узнать, что люди и предметы могут нормально\nсуществовать без моего контроля и руководства. Не хватает слов выразить, как\nзамечательно прийти к убеждению, что Сила более могущественная, чем я,\nсуществует отдельно и независимо от меня. Я знаю — это чувство разделенности\nмежду мной и Богом когда-нибудь исчезнет. Пока же путем веры я буду стремиться\nк смыслу своей жизни.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"корень-всех-наших-бед","text":"КОРЕНЬ ВСЕХ НАШИХ БЕД"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
