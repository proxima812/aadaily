import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"деревья-и-лес\">ДЕРЕВЬЯ И ЛЕС</h2>\n<p><strong>Когда мы одни, случившееся с нами может быть искажено нашими рассуждениями и\nнашими благими пожеланиями. Беседа с другим человеком поможет нам услышать его\nмнение и получить совет…</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 69-70<br>\nTwelve Steps and Twelve Traditions, p. 60</em></strong></p>\n<p>Не сосчитать, сколько раз в приступах злости и разочарования я говорил себе:\n«За деревьями я не вижу леса!» Наконец я понял, что в такие болезненные\nмоменты мне нужен кто-то, кто направлял бы меня, чтобы я мог отделить деревья\nот леса; кто предложил бы лучшую дорогу, по которой мне надо идти; кто помог\nбы мне тушить пожары, помог бы миновать утесы и колдобины.</p>\n<p>Когда я «в лесу», я прошу Бога дать мне мужество позвонить кому-либо из членов\nАА.</p>";

				const frontmatter = {"title":"5 мая","description":"Размышления АА на сегодня - 5 мая","id":"126","datePublished":"2023-05-04T00:00:00.000Z","moth":"maj"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/maj/daily_05-05.md";
				const url = undefined;
				function rawContent() {
					return "\n## ДЕРЕВЬЯ И ЛЕС\n\n**Когда мы одни, случившееся с нами может быть искажено нашими рассуждениями и\nнашими благими пожеланиями. Беседа с другим человеком поможет нам услышать его\nмнение и получить совет…**\n\n**_Двенадцать шагов и двенадцать традиций, с. 69-70  \nTwelve Steps and Twelve Traditions, p. 60_**\n\nНе сосчитать, сколько раз в приступах злости и разочарования я говорил себе:\n«За деревьями я не вижу леса!» Наконец я понял, что в такие болезненные\nмоменты мне нужен кто-то, кто направлял бы меня, чтобы я мог отделить деревья\nот леса; кто предложил бы лучшую дорогу, по которой мне надо идти; кто помог\nбы мне тушить пожары, помог бы миновать утесы и колдобины.\n\nКогда я «в лесу», я прошу Бога дать мне мужество позвонить кому-либо из членов\nАА.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"деревья-и-лес","text":"ДЕРЕВЬЯ И ЛЕС"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
