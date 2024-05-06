import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"активные-защитники\">«АКТИВНЫЕ ЗАЩИТНИКИ»</h2>\n<p><strong>Для нас, однако, она представляет собой нечто большее, чем разумная политика\nпо отношению к общественности. Это не просто отказ от личной выгоды. Эта\nТрадиция постоянно напоминает, что в АА не место личным амбициям. Каждый член\nАА должен активно охранять интересы Товарищества.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 203<br>\nTwelve Steps and Twelve Traditions, p. 183</em></strong></p>\n<p>Основная концепция смирения сформулирована в Одиннадцатой Традиции. Смирение\nпозволяет мне полноценно участвовать в Программе очень простым и, в то же\nвремя, глубоким образом, оно удовлетворяет мою потребность быть неотъемлемой\nчастью очень важного целого. Смирение подводит меня ближе к истинному духу\nцелост-ности и единства, без чего я не смог бы оставаться трезвым. Помня, что\nкаждый член Содружества — это пример трезвости, что каждый живет по\nОдиннадцатой Традиции, я ощущаю свободу, потому что каждый из нас поддерживает\nанонимность.</p>";

				const frontmatter = {"title":"29 ноября","description":"Размышления АА на сегодня - 29 ноября","id":"334","datePublished":"2023-05-04T00:00:00.000Z","moth":"noyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/noyabr/daily_29-11.md";
				const url = undefined;
				function rawContent() {
					return "\n## «АКТИВНЫЕ ЗАЩИТНИКИ»\n\n**Для нас, однако, она представляет собой нечто большее, чем разумная политика\nпо отношению к общественности. Это не просто отказ от личной выгоды. Эта\nТрадиция постоянно напоминает, что в АА не место личным амбициям. Каждый член\nАА должен активно охранять интересы Товарищества.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 203  \nTwelve Steps and Twelve Traditions, p. 183_**\n\nОсновная концепция смирения сформулирована в Одиннадцатой Традиции. Смирение\nпозволяет мне полноценно участвовать в Программе очень простым и, в то же\nвремя, глубоким образом, оно удовлетворяет мою потребность быть неотъемлемой\nчастью очень важного целого. Смирение подводит меня ближе к истинному духу\nцелост-ности и единства, без чего я не смог бы оставаться трезвым. Помня, что\nкаждый член Содружества — это пример трезвости, что каждый живет по\nОдиннадцатой Традиции, я ощущаю свободу, потому что каждый из нас поддерживает\nанонимность.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"активные-защитники","text":"«АКТИВНЫЕ ЗАЩИТНИКИ»"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };