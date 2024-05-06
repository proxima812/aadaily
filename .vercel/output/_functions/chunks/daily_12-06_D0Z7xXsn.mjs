import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"налаживать-подлинное-сотрудничество\">НАЛАЖИВАТЬ ПОДЛИННОЕ СОТРУДНИЧЕСТВО</h2>\n<p><strong>Но ведь многие из нас более всего страдали от испорченных отношений в семье,\nс друзьями, да и вообще с окружающими. Именно в этом мы проявляли больше всего\nглупости и упрямства. Основной факт, который мы не удосужились признать, — это\nнаша неспособность установить с другими людьми отношения, основанные на\nсотрудничестве.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 61<br>\nTwelve Steps and Twelve Traditions, p. 53</em></strong></p>\n<p>Применимы ли сегодня эти слова ко мне? Правда ли, что я <em>все еще</em> не способен\nналадить подлинное сотрудничество с другим человеком? Какой ужасной помехой\nэто может стать для моей трезвости! В трезвости я буду заниматься медитацией и\nмолиться, чтобы понять, как мне стать надежным другом и попутчиком.</p>";

				const frontmatter = {"title":"12 июня","description":"Размышления АА на сегодня - 12 июня","id":"164","datePublished":"2023-05-04T00:00:00.000Z","moth":"iyun"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/iyun/daily_12-06.md";
				const url = undefined;
				function rawContent() {
					return "\n## НАЛАЖИВАТЬ ПОДЛИННОЕ СОТРУДНИЧЕСТВО\n\n**Но ведь многие из нас более всего страдали от испорченных отношений в семье,\nс друзьями, да и вообще с окружающими. Именно в этом мы проявляли больше всего\nглупости и упрямства. Основной факт, который мы не удосужились признать, — это\nнаша неспособность установить с другими людьми отношения, основанные на\nсотрудничестве.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 61  \nTwelve Steps and Twelve Traditions, p. 53_**\n\nПрименимы ли сегодня эти слова ко мне? Правда ли, что я _все еще_ не способен\nналадить подлинное сотрудничество с другим человеком? Какой ужасной помехой\nэто может стать для моей трезвости! В трезвости я буду заниматься медитацией и\nмолиться, чтобы понять, как мне стать надежным другом и попутчиком.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"налаживать-подлинное-сотрудничество","text":"НАЛАЖИВАТЬ ПОДЛИННОЕ СОТРУДНИЧЕСТВО"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
