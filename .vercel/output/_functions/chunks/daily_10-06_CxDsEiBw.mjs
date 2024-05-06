import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"нет-сил-терпеть--попытайся-посмотреть-на-это-сверху\">НЕТ СИЛ ТЕРПЕТЬ? — ПОПЫТАЙСЯ ПОСМОТРЕТЬ НА ЭТО СВЕРХУ</h2>\n<p><strong>Мы реагировали на разочарования сильнее, чем нормальные люди.</strong></p>\n<p><strong><em>Как это видит Билл<br>\nAs Bill Sees It, p. 111</em></strong></p>\n<p>Нетерпимость в отношениях с другими людьми — один из моих основных\nнедостатков. Езда за медленно движущимся автомобилем, если обгон запрещен, или\nожидание чека в ресторане приводят меня в бешенство. Прежде чем дать Богу\nвозможность успокоить меня, я взрываюсь. И называю это «быть быстрее Бога».\nЭти неоднократные ситуации навели меня на мысль: а что, если я смогу взглянуть\nна них глазами Бога? Возможно, мне удастся лучше контролировать свои чувства и\nповедение. Я попробовал, и когда догнал очередного медленного водителя, то\n«посмотрел сверху» на эту автомашину и на самого себя. Я увидел: едет пожилая\nсемейная пара и радостно обсуждает своих внуков. За ними с выпученными глазами\nи красным лицом следую я, причем мне, в общем-то, некуда особо спешить. Я\nвыглядел так глупо, что вернулся в реальную действительность и сбавил\nскорость. Взгляд на вещи глазами Бога может помочь расслабиться.</p>";

				const frontmatter = {"title":"10 июня","description":"Размышления АА на сегодня - 10 июня","id":"162","datePublished":"2023-05-04T00:00:00.000Z","moth":"iyun"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/iyun/daily_10-06.md";
				const url = undefined;
				function rawContent() {
					return "\n## НЕТ СИЛ ТЕРПЕТЬ? — ПОПЫТАЙСЯ ПОСМОТРЕТЬ НА ЭТО СВЕРХУ\n\n**Мы реагировали на разочарования сильнее, чем нормальные люди.**\n\n**_Как это видит Билл  \nAs Bill Sees It, p. 111_**\n\nНетерпимость в отношениях с другими людьми — один из моих основных\nнедостатков. Езда за медленно движущимся автомобилем, если обгон запрещен, или\nожидание чека в ресторане приводят меня в бешенство. Прежде чем дать Богу\nвозможность успокоить меня, я взрываюсь. И называю это «быть быстрее Бога».\nЭти неоднократные ситуации навели меня на мысль: а что, если я смогу взглянуть\nна них глазами Бога? Возможно, мне удастся лучше контролировать свои чувства и\nповедение. Я попробовал, и когда догнал очередного медленного водителя, то\n«посмотрел сверху» на эту автомашину и на самого себя. Я увидел: едет пожилая\nсемейная пара и радостно обсуждает своих внуков. За ними с выпученными глазами\nи красным лицом следую я, причем мне, в общем-то, некуда особо спешить. Я\nвыглядел так глупо, что вернулся в реальную действительность и сбавил\nскорость. Взгляд на вещи глазами Бога может помочь расслабиться.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"нет-сил-терпеть--попытайся-посмотреть-на-это-сверху","text":"НЕТ СИЛ ТЕРПЕТЬ? — ПОПЫТАЙСЯ ПОСМОТРЕТЬ НА ЭТО СВЕРХУ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };