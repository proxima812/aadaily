import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"нести-смысл-наших-идей\">НЕСТИ СМЫСЛ НАШИХ ИДЕЙ</h2>\n<p><strong>Ну а каково содержание Двенадцатого Шага? Та чудесная энергия, которую он\nвысвобождает, и напряженная деятельность по передаче опыта другим страдающим\nалкоголикам, которая преобразует Двенадцать Шагов в действия, оказывающие\nвлияние на все наши дела, являются платой, великолепной реальностью Анонимных\nАлкоголиков.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 123<br>\nTwelve Steps and Twelve Traditions, p. 109</em></strong></p>\n<p>Отречься от алкогольного мира. Это не значит покинуть его, но — действовать по\nпринципам, которые понравились и которые я высоко ценю; восстанавливать у тех,\nкто все еще страдает, душевный покой, который я познал и ощущаю. Если я по-\nнастоящему привержен этой цели, мало что значит моя одежда или то, как я\nзарабатываю себе на жизнь. Моя задача — нести идею выздоровления и увлекать за\nсобой своим примером, а не пропагандой.</p>";

				const frontmatter = {"title":"10 декабря","description":"Размышления АА на сегодня - 10 декабря","id":"345","datePublished":"2023-05-04T00:00:00.000Z","moth":"dekabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/dekabr/daily_10-12.md";
				const url = undefined;
				function rawContent() {
					return "\n## НЕСТИ СМЫСЛ НАШИХ ИДЕЙ\n\n**Ну а каково содержание Двенадцатого Шага? Та чудесная энергия, которую он\nвысвобождает, и напряженная деятельность по передаче опыта другим страдающим\nалкоголикам, которая преобразует Двенадцать Шагов в действия, оказывающие\nвлияние на все наши дела, являются платой, великолепной реальностью Анонимных\nАлкоголиков.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 123  \nTwelve Steps and Twelve Traditions, p. 109_**\n\nОтречься от алкогольного мира. Это не значит покинуть его, но — действовать по\nпринципам, которые понравились и которые я высоко ценю; восстанавливать у тех,\nкто все еще страдает, душевный покой, который я познал и ощущаю. Если я по-\nнастоящему привержен этой цели, мало что значит моя одежда или то, как я\nзарабатываю себе на жизнь. Моя задача — нести идею выздоровления и увлекать за\nсобой своим примером, а не пропагандой.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"нести-смысл-наших-идей","text":"НЕСТИ СМЫСЛ НАШИХ ИДЕЙ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
