import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"задача-на-всю-жизнь\">ЗАДАЧА НА ВСЮ ЖИЗНЬ</h2>\n<p><strong>«Но неужели в моих обстоятельствах человеку говорят «успокойся»? Вот что мне\nхотелось бы знать».</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 32<br>\nTwelve Steps and Twelve Traditions, p. 26</em></strong></p>\n<p>Терпение — это не самая сильная моя черта. Сколько раз я спрашивал: «Почему я\nдолжен ждать, если могу иметь все прямо сейчас?» И правда, когда я впервые\nпознакомился с Двенадцатью Шагами, я походил на «ребенка в кондитерской\nлавке». Я не мог до-ждаться, когда же, наконец, приступлю к Двенадцатому Шагу.\n«Наверняка это работа всего нескольких месяцев», — думал я! Сейчас я понимаю,\nчто Двенадцать Шагов АА — это дело всей жизни.</p>";

				const frontmatter = {"title":"5 марта","description":"Размышления АА на сегодня - 5 марта","id":"65","datePublished":"2023-05-04T00:00:00.000Z","moth":"mart"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/mart/daily_05-03.md";
				const url = undefined;
				function rawContent() {
					return "\n## ЗАДАЧА НА ВСЮ ЖИЗНЬ\n\n**«Но неужели в моих обстоятельствах человеку говорят «успокойся»? Вот что мне\nхотелось бы знать».**\n\n**_Двенадцать шагов и двенадцать традиций, с. 32  \nTwelve Steps and Twelve Traditions, p. 26_**\n\nТерпение — это не самая сильная моя черта. Сколько раз я спрашивал: «Почему я\nдолжен ждать, если могу иметь все прямо сейчас?» И правда, когда я впервые\nпознакомился с Двенадцатью Шагами, я походил на «ребенка в кондитерской\nлавке». Я не мог до-ждаться, когда же, наконец, приступлю к Двенадцатому Шагу.\n«Наверняка это работа всего нескольких месяцев», — думал я! Сейчас я понимаю,\nчто Двенадцать Шагов АА — это дело всей жизни.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"задача-на-всю-жизнь","text":"ЗАДАЧА НА ВСЮ ЖИЗНЬ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
