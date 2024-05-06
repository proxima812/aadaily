import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"жить-возмещая-ущерб\">ЖИТЬ, ВОЗМЕЩАЯ УЩЕРБ</h2>\n<p><strong>Годы жизни с алкоголиком почти наверняка превращают жену или ребенка в\nневротика. Вся семья в какой-то мере больна.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 118<br>\nAlcoholics Anonymous, p. 122</em></strong></p>\n<p>Мне важно осознать, что как алкоголик я вредил не только себе, но и\nокружающим. Возмещение ущерба своей семье и все еще страдающим семьям других\nалкоголиков всегда будет крайне важно для меня. Понимание ущерба, причиненного\nмною, и попытки восстановить разрушенное станут -делом всей моей жизни. Пример\nмоей трезвости может и другим дать надежду и веру в помощь самим себе.</p>";

				const frontmatter = {"title":"13 июня","description":"Размышления АА на сегодня - 13 июня","id":"165","datePublished":"2023-05-04T00:00:00.000Z","moth":"iyun"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/iyun/daily_13-06.md";
				const url = undefined;
				function rawContent() {
					return "\n## ЖИТЬ, ВОЗМЕЩАЯ УЩЕРБ\n\n**Годы жизни с алкоголиком почти наверняка превращают жену или ребенка в\nневротика. Вся семья в какой-то мере больна.**\n\n**_Анонимные Алкоголики, с. 118  \nAlcoholics Anonymous, p. 122_**\n\nМне важно осознать, что как алкоголик я вредил не только себе, но и\nокружающим. Возмещение ущерба своей семье и все еще страдающим семьям других\nалкоголиков всегда будет крайне важно для меня. Понимание ущерба, причиненного\nмною, и попытки восстановить разрушенное станут -делом всей моей жизни. Пример\nмоей трезвости может и другим дать надежду и веру в помощь самим себе.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"жить-возмещая-ущерб","text":"ЖИТЬ, ВОЗМЕЩАЯ УЩЕРБ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
