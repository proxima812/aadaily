import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"вступая-в-новое-измерение\">ВСТУПАЯ В НОВОЕ ИЗМЕРЕНИЕ</h2>\n<p><strong>На поздней стадии пьянства исчезла наша воля к сопротивлению. И все же,\nкогда мы признáем полное поражение и станем полностью готовы испробовать\nпринципы АА, одержимость покинет нас, и мы войдем в новое измерение — свободу\nпод Богом, как мы Его понимаем.</strong></p>\n<p><strong><em>Как это видит Билл<br>\nAs Bill Sees It, p. 283</em></strong></p>\n<p>Я счастлив, что нахожусь среди тех, кто испытал эти потрясающие изменения в\nжизни. Когда я, одинокий и отчаявшийся, вошел в двери АА, я готов был верить\nвсему, что слышал. Среди прочего я услышал: «Это может быть твоим последним\nпохмельем, или ты будешь вертеться по кругу». Мужчина, который сказал это,\nявно чувствовал себя и выглядел лучше, чем я. Мне понравилась идея признания\nсвоего поражения, и с того момента я был свободен! Мое сердце услышало то,\nчего никогда не мог услышать разум: «В бессилии перед алкоголем нет ничего\nособенного». Я свободен, и я благодарен!</p>";

				const frontmatter = {"title":"25 апреля","description":"Размышления АА на сегодня - 25 апреля","id":"116","datePublished":"2023-05-04T00:00:00.000Z","moth":"april"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/april/daily_25-04.md";
				const url = undefined;
				function rawContent() {
					return "\n## ВСТУПАЯ В НОВОЕ ИЗМЕРЕНИЕ\n\n**На поздней стадии пьянства исчезла наша воля к сопротивлению. И все же,\nкогда мы признáем полное поражение и станем полностью готовы испробовать\nпринципы АА, одержимость покинет нас, и мы войдем в новое измерение — свободу\nпод Богом, как мы Его понимаем.**\n\n**_Как это видит Билл  \nAs Bill Sees It, p. 283_**\n\nЯ счастлив, что нахожусь среди тех, кто испытал эти потрясающие изменения в\nжизни. Когда я, одинокий и отчаявшийся, вошел в двери АА, я готов был верить\nвсему, что слышал. Среди прочего я услышал: «Это может быть твоим последним\nпохмельем, или ты будешь вертеться по кругу». Мужчина, который сказал это,\nявно чувствовал себя и выглядел лучше, чем я. Мне понравилась идея признания\nсвоего поражения, и с того момента я был свободен! Мое сердце услышало то,\nчего никогда не мог услышать разум: «В бессилии перед алкоголем нет ничего\nособенного». Я свободен, и я благодарен!\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"вступая-в-новое-измерение","text":"ВСТУПАЯ В НОВОЕ ИЗМЕРЕНИЕ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
