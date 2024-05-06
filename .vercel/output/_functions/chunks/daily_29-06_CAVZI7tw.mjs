import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"эффект-волны\">ЭФФЕКТ ВОЛНЫ</h2>\n<p><strong>Научившись жить счастливо, мы покажем другим, как достичь этого… Да, мы [в\nАА] мечтали обо всем этом. Это было совершенно естественно, поскольку\nбольшинство алкоголиков — обанкротившиеся идеалисты… Почему бы нам на\nподелиться секретом нашего образа жизни со всеми другими людьми?</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 174<br>\nTwelve Steps and Twelve Traditions, p. 156</em></strong></p>\n<p>Великое открытие трезвости вызвало у меня желание непременно поделиться\n«доброй вестью» со всем миром. Ко мне вернулись грандиозные мысли времен моего\nпьянства. Позже я узнал, что концентрация внимания на собственном\nвыздоровлении — дело нелегкое, занимающее все время. Став трезвым гражданином\nэтого мира, я заметил эффект волны, который без всяких сознательных усилий с\nмоей стороны доходит до любого «родственного учреждения или стороннего\nпредприятия», не отвлекая меня от моей основной цели, — оставаться трезвым и\nпомогать другим алкоголикам обрести трезвость.</p>";

				const frontmatter = {"title":"29 июня","description":"Размышления АА на сегодня - 29 июня","id":"181","datePublished":"2023-05-04T00:00:00.000Z","moth":"iyun"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/iyun/daily_29-06.md";
				const url = undefined;
				function rawContent() {
					return "\n## ЭФФЕКТ ВОЛНЫ\n\n**Научившись жить счастливо, мы покажем другим, как достичь этого… Да, мы [в\nАА] мечтали обо всем этом. Это было совершенно естественно, поскольку\nбольшинство алкоголиков — обанкротившиеся идеалисты… Почему бы нам на\nподелиться секретом нашего образа жизни со всеми другими людьми?**\n\n**_Двенадцать шагов и двенадцать традиций, с. 174  \nTwelve Steps and Twelve Traditions, p. 156_**\n\nВеликое открытие трезвости вызвало у меня желание непременно поделиться\n«доброй вестью» со всем миром. Ко мне вернулись грандиозные мысли времен моего\nпьянства. Позже я узнал, что концентрация внимания на собственном\nвыздоровлении — дело нелегкое, занимающее все время. Став трезвым гражданином\nэтого мира, я заметил эффект волны, который без всяких сознательных усилий с\nмоей стороны доходит до любого «родственного учреждения или стороннего\nпредприятия», не отвлекая меня от моей основной цели, — оставаться трезвым и\nпомогать другим алкоголикам обрести трезвость.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"эффект-волны","text":"ЭФФЕКТ ВОЛНЫ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };