import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"составили-список\">«СОСТАВИЛИ СПИСОК…»</h2>\n<p><strong>Составили список всех тех людей, кому мы причинили зло…</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 89<br>\nTwelve Steps and Twelve Traditions, p. 77</em></strong></p>\n<p>На «подходах» к Восьмому Шагу, я недоумевал, как можно перечислить все, что я\nсделал другим людям, ведь их так много, а кого-то уже и в живых нет?..\nНекоторые из нанесенных мною обид были незначительными, но они все же сильно\nбеспокоили меня. Главное в этом Шаге — необходимость преисполниться желанием\nсделать все для возмещения ущерба наилучшим образом, и именно сейчас. Там, где\nесть желание, найдется и способ, — потому, если я хочу чувствовать себя лучше,\nмне надо освободиться от гнетущего меня чувства вины. Для него нет места в\nдушевном покое. Если я честен с самим собой, то с помощью Высшей Силы могу\nочистить свое сознание от этих чувств.</p>";

				const frontmatter = {"title":"8 августа","description":"Размышления АА на сегодня - 8 августа","id":"222","datePublished":"2023-05-04T00:00:00.000Z","moth":"avgust"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/avgust/daily_08-08.md";
				const url = undefined;
				function rawContent() {
					return "\n## «СОСТАВИЛИ СПИСОК…»\n\n**Составили список всех тех людей, кому мы причинили зло…**\n\n**_Двенадцать шагов и двенадцать традиций, с. 89  \nTwelve Steps and Twelve Traditions, p. 77_**\n\nНа «подходах» к Восьмому Шагу, я недоумевал, как можно перечислить все, что я\nсделал другим людям, ведь их так много, а кого-то уже и в живых нет?..\nНекоторые из нанесенных мною обид были незначительными, но они все же сильно\nбеспокоили меня. Главное в этом Шаге — необходимость преисполниться желанием\nсделать все для возмещения ущерба наилучшим образом, и именно сейчас. Там, где\nесть желание, найдется и способ, — потому, если я хочу чувствовать себя лучше,\nмне надо освободиться от гнетущего меня чувства вины. Для него нет места в\nдушевном покое. Если я честен с самим собой, то с помощью Высшей Силы могу\nочистить свое сознание от этих чувств.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"составили-список","text":"«СОСТАВИЛИ СПИСОК…»"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
