import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"перепоручаем\">ПЕРЕПОРУЧАЕМ</h2>\n<p><strong>Всякий, вступивший в АА с намерением присоединиться к Содружеству, уже\nприступил к выполнению Третьего Шага, хотя еще и не осознает это. Разве вы не\nдоверили решение всех проблем, связанных с алкоголем, Содружеству Анонимных\nАлкоголиков, полагаясь при этом на его заботу, защиту и руководство?.. Каждый\nдобровольно вступивший в Содружество, чувствует уверенность в том, что это\nединственное пристанище для такого, терпящего бедствие судна, которым стал он.\nЕсли это не вручение своей воли и жизни некоему найденному Провидению, то что\nже это?</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 42-43<br>\nTwelve Steps and Twelve Traditions, p. 35</em></strong></p>\n<p>Покорность Богу была первым моим шагом к выздоровлению. Я верю, что наше\nСодружество стремится к духовности, открытой для нового уровня родства с\nБогом. Когда я стараюсь следовать по пути Шагов, я ощущаю свободу,\nпредоставляющую мне способность подумать о себе. Мое пагубное пристрастие\nдержало меня в своем бесконечном плену без всякой надежды на освобождения из\nэтого моего добровольного заточения. Но АА указывает мне путь вперед.\nДелиться, быть внимательным и заботиться о людях — это наш природный дар по\nотношению друг к другу, и по мере изменения моего отношения к Богу\nувеличивается и дар. Я учусь подчиняться Божьей воле, уважать себя и сохранять\nэти качества, отдавая другим то, что получаю.</p>";

				const frontmatter = {"title":"8 марта","description":"Размышления АА на сегодня - 8 марта","id":"68","datePublished":"2023-05-04T00:00:00.000Z","moth":"mart"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/mart/daily_08-03.md";
				const url = undefined;
				function rawContent() {
					return "\n## ПЕРЕПОРУЧАЕМ\n\n**Всякий, вступивший в АА с намерением присоединиться к Содружеству, уже\nприступил к выполнению Третьего Шага, хотя еще и не осознает это. Разве вы не\nдоверили решение всех проблем, связанных с алкоголем, Содружеству Анонимных\nАлкоголиков, полагаясь при этом на его заботу, защиту и руководство?.. Каждый\nдобровольно вступивший в Содружество, чувствует уверенность в том, что это\nединственное пристанище для такого, терпящего бедствие судна, которым стал он.\nЕсли это не вручение своей воли и жизни некоему найденному Провидению, то что\nже это?**\n\n**_Двенадцать шагов и двенадцать традиций, с. 42-43  \nTwelve Steps and Twelve Traditions, p. 35_**\n\nПокорность Богу была первым моим шагом к выздоровлению. Я верю, что наше\nСодружество стремится к духовности, открытой для нового уровня родства с\nБогом. Когда я стараюсь следовать по пути Шагов, я ощущаю свободу,\nпредоставляющую мне способность подумать о себе. Мое пагубное пристрастие\nдержало меня в своем бесконечном плену без всякой надежды на освобождения из\nэтого моего добровольного заточения. Но АА указывает мне путь вперед.\nДелиться, быть внимательным и заботиться о людях — это наш природный дар по\nотношению друг к другу, и по мере изменения моего отношения к Богу\nувеличивается и дар. Я учусь подчиняться Божьей воле, уважать себя и сохранять\nэти качества, отдавая другим то, что получаю.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"перепоручаем","text":"ПЕРЕПОРУЧАЕМ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
