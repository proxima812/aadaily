import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"восстанавливая-порушенное\">ВОССТАНАВЛИВАЯ ПОРУШЕННОЕ</h2>\n<p><strong>Здравость суждений, тщательный выбор времени, смелость и благоразумие — вот\nте качества, которые необходимы для осуществления Девятого Шага.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 95<br>\nTwelve Steps and Twelve Traditions, p. 83</em></strong></p>\n<p>Заглаживание вины можно рассматривать двояко. Первое — если, к примеру, я\nсломал забор соседа, — починить его, — и это «прямое возмещение». Второе —\nизменить свое поведение, так как мои действия кому-то причинили зло, и\nпостараться не делать этого в дальнейшем. Я изменяю свой способ жить, и это\nкосвенное возмещение. Какой подход лучше? Единственно верный, при условии, что\nон никому не повредит. Другими словами, при соответствующих условиях и тот, и\nдругой. Если я причинил вред, то просто «чиню свои дороги», стараясь исправить\nположение. Это и есть честное возмещение ущерба.</p>";

				const frontmatter = {"title":"13 сентября","description":"Размышления АА на сегодня - 13 сентября","id":"257","datePublished":"2023-05-04T00:00:00.000Z","moth":"sentyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/sentyabr/daily_13-09.md";
				const url = undefined;
				function rawContent() {
					return "\n## ВОССТАНАВЛИВАЯ ПОРУШЕННОЕ\n\n**Здравость суждений, тщательный выбор времени, смелость и благоразумие — вот\nте качества, которые необходимы для осуществления Девятого Шага.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 95  \nTwelve Steps and Twelve Traditions, p. 83_**\n\nЗаглаживание вины можно рассматривать двояко. Первое — если, к примеру, я\nсломал забор соседа, — починить его, — и это «прямое возмещение». Второе —\nизменить свое поведение, так как мои действия кому-то причинили зло, и\nпостараться не делать этого в дальнейшем. Я изменяю свой способ жить, и это\nкосвенное возмещение. Какой подход лучше? Единственно верный, при условии, что\nон никому не повредит. Другими словами, при соответствующих условиях и тот, и\nдругой. Если я причинил вред, то просто «чиню свои дороги», стараясь исправить\nположение. Это и есть честное возмещение ущерба.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"восстанавливая-порушенное","text":"ВОССТАНАВЛИВАЯ ПОРУШЕННОЕ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };