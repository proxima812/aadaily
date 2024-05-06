import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"сокровища-прошлого\">СОКРОВИЩА ПРОШЛОГО</h2>\n<p><strong>…показать другим, как к нам в схожей ситуации пришла помощь. Именно это\nделает нашу жизнь более ценной. Вы должны думать, что в руках Всевышнего наше\nтемное прошлое превращается в величайшее достояние — ключ к жизни и счастью\nдругих. Ваш опыт поможет другим избежать смерти и горя.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 120<br>\nAlcoholics Anonymous, p. 124</em></strong></p>\n<p>Какой же это подарок для меня — обнаружить, что все эти бесполезные, казалось\nбы, годы не прошли впустую. Опыт самых страшных падений и унижений оказывается\nсамым мощным инструментом для помощи другим в их выздоровлении. Познав глубины\nстыда и отчаяния, я могу протянуть руку любви и сострадания, и я знаю, что мне\nдоступ-на Божья благодать.</p>";

				const frontmatter = {"title":"28 января","description":"Размышления АА на сегодня - 28 января","id":"26","datePublished":"2023-05-04T00:00:00.000Z","moth":"yanvar"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/yanvar/daily_28-01.md";
				const url = undefined;
				function rawContent() {
					return "\n## СОКРОВИЩА ПРОШЛОГО\n\n**…показать другим, как к нам в схожей ситуации пришла помощь. Именно это\nделает нашу жизнь более ценной. Вы должны думать, что в руках Всевышнего наше\nтемное прошлое превращается в величайшее достояние — ключ к жизни и счастью\nдругих. Ваш опыт поможет другим избежать смерти и горя.**\n\n**_Анонимные Алкоголики, с. 120  \nAlcoholics Anonymous, p. 124_**\n\nКакой же это подарок для меня — обнаружить, что все эти бесполезные, казалось\nбы, годы не прошли впустую. Опыт самых страшных падений и унижений оказывается\nсамым мощным инструментом для помощи другим в их выздоровлении. Познав глубины\nстыда и отчаяния, я могу протянуть руку любви и сострадания, и я знаю, что мне\nдоступ-на Божья благодать.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"сокровища-прошлого","text":"СОКРОВИЩА ПРОШЛОГО"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
