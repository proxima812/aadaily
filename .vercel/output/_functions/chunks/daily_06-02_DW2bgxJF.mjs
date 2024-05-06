import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"отправная-точка\">ОТПРАВНАЯ ТОЧКА</h2>\n<p><strong>Поэтому Второй Шаг является отправной точкой для всех нас. Агностики,\nатеисты и бывшие верующие, мы можем совершить этот Шаг вместе.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 40<br>\nTwelve Steps and Twelve Traditions, p. 33</em></strong></p>\n<p>Я уверен, что Программа АА создавалась Промыслом Божьим и что Бог присутствует\nна каждом собрании АА. Я вижу, верю и знаю, что АА спасает, — потому что\nсегодня я остаюсь трезвым. Я препоручаю свою жизнь АА и Богу уже тем, что хожу\nна собрания АА. Если Бог в сердце моем и в сердцах других людей, тогда я —\nсущественная часть целого, а не обособленная сущность. Если Бог в сердце моем\nи обращается ко мне через других людей, тогда и через меня Он говорит что-то\nдругим людям. Я буду стремиться исполнять Его волю, следуя духовным принципам,\nи наградой мне будут здравомыслие и эмоциональная трезвость.</p>";

				const frontmatter = {"title":"6 февраля","description":"Размышления АА на сегодня - 6 февраля","id":"37","datePublished":"2023-05-04T00:00:00.000Z","moth":"fevral"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/fevral/daily_06-02.md";
				const url = undefined;
				function rawContent() {
					return "\n## ОТПРАВНАЯ ТОЧКА\n\n**Поэтому Второй Шаг является отправной точкой для всех нас. Агностики,\nатеисты и бывшие верующие, мы можем совершить этот Шаг вместе.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 40  \nTwelve Steps and Twelve Traditions, p. 33_**\n\nЯ уверен, что Программа АА создавалась Промыслом Божьим и что Бог присутствует\nна каждом собрании АА. Я вижу, верю и знаю, что АА спасает, — потому что\nсегодня я остаюсь трезвым. Я препоручаю свою жизнь АА и Богу уже тем, что хожу\nна собрания АА. Если Бог в сердце моем и в сердцах других людей, тогда я —\nсущественная часть целого, а не обособленная сущность. Если Бог в сердце моем\nи обращается ко мне через других людей, тогда и через меня Он говорит что-то\nдругим людям. Я буду стремиться исполнять Его волю, следуя духовным принципам,\nи наградой мне будут здравомыслие и эмоциональная трезвость.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"отправная-точка","text":"ОТПРАВНАЯ ТОЧКА"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };