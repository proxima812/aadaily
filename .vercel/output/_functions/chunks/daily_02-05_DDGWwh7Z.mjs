import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"освещаем-темное-прошлое\">ОСВЕЩАЕМ ТЕМНОЕ ПРОШЛОЕ</h2>\n<p><strong>Вы должны думать, что в руках Всевышнего ваше темное прошлое превращается в\nвеличайшее достояние — ключ к жизни и счастью других. Ваш опыт поможет другим\nизбежать смерти и горя.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 120<br>\nAlcoholics Anonymous, p. 124</em></strong></p>\n<p>Мое прошлое больше не автобиография. Это справочник, который надо взять,\nоткрыть и содержанием которого с кем-нибудь поделиться. Сегодня, приходя на\nработу, я вижу чудесную картину. Я уверен, что, даже если этот день и\nсумрачен, как и положено быть отдельным дням, чуть позже ярко засияют звезды.\nИ мое присутствие при этом сиянии будет зафиксировано и проявится уже в\nближайшем будущем. В этот день все мое прошлое будет частью меня, потому что\nоно — ключ, а не замок.</p>";

				const frontmatter = {"title":"2 мая","description":"Размышления АА на сегодня - 2 мая","id":"123","datePublished":"2023-05-04T00:00:00.000Z","moth":"maj"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/maj/daily_02-05.md";
				const url = undefined;
				function rawContent() {
					return "\n## ОСВЕЩАЕМ ТЕМНОЕ ПРОШЛОЕ\n\n**Вы должны думать, что в руках Всевышнего ваше темное прошлое превращается в\nвеличайшее достояние — ключ к жизни и счастью других. Ваш опыт поможет другим\nизбежать смерти и горя.**\n\n**_Анонимные Алкоголики, с. 120  \nAlcoholics Anonymous, p. 124_**\n\nМое прошлое больше не автобиография. Это справочник, который надо взять,\nоткрыть и содержанием которого с кем-нибудь поделиться. Сегодня, приходя на\nработу, я вижу чудесную картину. Я уверен, что, даже если этот день и\nсумрачен, как и положено быть отдельным дням, чуть позже ярко засияют звезды.\nИ мое присутствие при этом сиянии будет зафиксировано и проявится уже в\nближайшем будущем. В этот день все мое прошлое будет частью меня, потому что\nоно — ключ, а не замок.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"освещаем-темное-прошлое","text":"ОСВЕЩАЕМ ТЕМНОЕ ПРОШЛОЕ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
