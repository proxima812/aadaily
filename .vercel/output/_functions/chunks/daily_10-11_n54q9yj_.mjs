import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"чувство-сопричастности\">ЧУВСТВО СОПРИЧАСТНОСТИ</h2>\n<p><strong>Возможно, одна из самых больших наград, которую мы получаем за наши молитвы\nи медитацию, это чувство</strong> _ <strong>приобщения</strong>_ <strong>.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 119<br>\nTwelve Steps and Twelve Traditions, p. 105</em></strong></p>\n<p>Так вот оно что — сопричастность! После углубленного размышления я понял, что\nчувство, охватившее меня, было приобщением, чувством общности с другими, ведь\nмне было так легко и свободно. Я ощущал внутренний покой и готовность\nустранять мелкие неурядицы. Мне нравится мое чувство юмора. В ежедневной суете\nу меня возникает удивительное ощущение сопричастности созидательному потоку\nБожьего мира. То, что молитва и медитация напрямую вписаны в образ жизни АА,\nнеобычайно благотворно для всех нас.</p>";

				const frontmatter = {"title":"10 ноября","description":"Размышления АА на сегодня - 10 ноября","id":"315","datePublished":"2023-05-04T00:00:00.000Z","moth":"noyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/noyabr/daily_10-11.md";
				const url = undefined;
				function rawContent() {
					return "\n## ЧУВСТВО СОПРИЧАСТНОСТИ\n\n**Возможно, одна из самых больших наград, которую мы получаем за наши молитвы\nи медитацию, это чувство** _ **приобщения**_ **.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 119  \nTwelve Steps and Twelve Traditions, p. 105_**\n\nТак вот оно что — сопричастность! После углубленного размышления я понял, что\nчувство, охватившее меня, было приобщением, чувством общности с другими, ведь\nмне было так легко и свободно. Я ощущал внутренний покой и готовность\nустранять мелкие неурядицы. Мне нравится мое чувство юмора. В ежедневной суете\nу меня возникает удивительное ощущение сопричастности созидательному потоку\nБожьего мира. То, что молитва и медитация напрямую вписаны в образ жизни АА,\nнеобычайно благотворно для всех нас.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"чувство-сопричастности","text":"ЧУВСТВО СОПРИЧАСТНОСТИ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
