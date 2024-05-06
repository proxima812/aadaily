import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"настоящая-терпимость\">НАСТОЯЩАЯ ТЕРПИМОСТЬ</h2>\n<p><strong>Единственное условие для того, чтобы стать членом АА, — это желание бросить\nпить.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 155<br>\nTwelve Steps and Twelve Traditions, p. 139</em></strong></p>\n<p>Краткую форму Третьей Традиции я впервые услышал в Преамбуле. В начале\nпребывания в АА я не мог принять себя, свой алкоголизм или Высшую Силу. Если\nбы для членства в АА существовали физические, умственные, моральные или\nрелигиозные требования, я был бы уже мертв. Билл У. в магнитофонной записи по\nТрадициям говорит, что Третья Традиция — это хартия индивидуальной свободы.\nБольше всего меня потрясло ощущение того, что члены АА, живущие по Третьей\nТрадиции, приняли меня. Я чувствую, что принятие — это любовь, а любовь — это\nБожья воля, которую нам надлежит исполнять.</p>";

				const frontmatter = {"title":"29 мая","description":"Размышления АА на сегодня - 29 мая","id":"150","datePublished":"2023-05-04T00:00:00.000Z","moth":"maj"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/maj/daily_29-05.md";
				const url = undefined;
				function rawContent() {
					return "\n## НАСТОЯЩАЯ ТЕРПИМОСТЬ\n\n**Единственное условие для того, чтобы стать членом АА, — это желание бросить\nпить.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 155  \nTwelve Steps and Twelve Traditions, p. 139_**\n\nКраткую форму Третьей Традиции я впервые услышал в Преамбуле. В начале\nпребывания в АА я не мог принять себя, свой алкоголизм или Высшую Силу. Если\nбы для членства в АА существовали физические, умственные, моральные или\nрелигиозные требования, я был бы уже мертв. Билл У. в магнитофонной записи по\nТрадициям говорит, что Третья Традиция — это хартия индивидуальной свободы.\nБольше всего меня потрясло ощущение того, что члены АА, живущие по Третьей\nТрадиции, приняли меня. Я чувствую, что принятие — это любовь, а любовь — это\nБожья воля, которую нам надлежит исполнять.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"настоящая-терпимость","text":"НАСТОЯЩАЯ ТЕРПИМОСТЬ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
