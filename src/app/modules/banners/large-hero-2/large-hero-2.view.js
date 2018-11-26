import { map, partial } from 'ramda';
import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
const { div, h1, h4, p, img, picture, source, section, a } = hh(h);


// PRIVATE
function hasAttr(key, value){
  if (key) return { [key]: value };
}

// PRIVATE
function transformSources(baseUrl, className, image) {
  const attributes = { base: baseUrl, ...image };
  let { base, isImg, low, lowWidth, high, highWidth, media, alt, title } = attributes;

  // HAS ELEMENT ATTRIBUTES DEFINED?
  alt = hasAttr('alt', alt);
  media = hasAttr('media', media);
  className = hasAttr('className', className);
  title = hasAttr('title', title);

  // GENERATE IMAGE MARKUP
  if (!isImg) {
    return source({ srcset:`${base}${high} ${highWidth}w, ${base}${low} ${lowWidth}w`, ...media });
  }
  return img({ srcset:`${base}${high} ${highWidth}w, ${base}${low} ${lowWidth}w`, src:`${base}${low}`, ...className, ...alt, ...title });
}

// PRIVATE
function generateResponsiveImage(className, model) {
  const { baseUrl, image } = model.largeHero2;
  if (image.length === 0) {
    return div({ className: 'mv1 pa1 i red'}, 'Image sources missing. ');
  }
  const sources = map(partial(transformSources, [baseUrl, className]), image);
  return picture(sources);
}

// PRIVATE
function generateContent(model) {
  const { content, image } = model.largeHero2;

  if (image.length === 0) return;

  return div({className: 'large-hero__text-content absolute left-0 w-100 tc'}, [
    div({ className: 'wrapper center mw6 mw7-l ph2' }, [
      h1({ className: 'large-hero__title f1 fw4 o-60 bg-black-20 lh-copy white pa1 tracked-tight cursive' }, [`${content.title}`]),
      h4({ className: 'large-hero__subtitle f3 normal o-60 bg-black-20 lh-copy white pa1 ' }, [`${content.subTitle}`]),
      div({ className: ' o-60'}, [
      a({
          className: 'large-hero__button dib dim shaking-fix f5 ph4 pv3 ml2 link br-pill ba white',
          href: 'https://github.com',
          title: 'GitHub'
          }, 'More Info'),
        a({
          className: 'large-hero__button dib dim shaking-fix f5 ph4 pv3 ml2 link br-pill ba white',
          href: 'https://github.com',
          title: 'GitHub'
        }, 'Get Started'),
      ])
    ])
  ])
}

// PUBLIC
function view(dispatch, model) {
  return section({ className: 'large-hero border-box relative questrial'}, [
    generateResponsiveImage('large-hero__image custom-image-cover', model),
    generateContent(model),
  ]);
}


export { view as largeHero2View };
