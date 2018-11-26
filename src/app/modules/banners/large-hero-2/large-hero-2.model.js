const Model = {
  largeHero2: {
    baseUrl: 'assets/images/',
    image: [
          {
            isImg: false,
            low: '@large@1@1920x1440@custom@woman.jpg',
            lowWidth: '1920',
            high: '@large@2@3840x2880@custom@woman.jpg',
            highWidth: '3840',
            media: '(min-width: 992px)',
          },
          {
            isImg: false,
            low: '@medium@1@1380x1035@4x3@woman.jpg',
            lowWidth: '1380',
            high: '@medium@2@2760x2070@4x3@woman.jpg',
            highWidth: '2760',
            media: '(min-width: 768px)',
          },
          {
            isImg: false,
            low: '@small@1@990x743@4x3@woman.jpg',
            lowWidth: '990',
            high: '@small@2@1980x1484@4x3@woman.jpg',
            highWidth: '1980',
            media: '(min-width: 576px)',
          },
          {
            isImg: true,
            low: '@default@1@640x875@4x3@woman.jpg',
            lowWidth: '640',
            high: '@default@2@1280x1750@4x3@woman.jpg',
            highWidth: '1280',
            class: 'large-hero__image object-fit_cover',
            alt: 'Coastal view of ocean and mountains',
            title: 'Women Under Water | media@default'
          }

    ],
    content: {
      title: 'Inaqua',
      subTitle: 'large-hero-2.model.js',
      description: `This section is crafted in javascript functional style. Loads different images
                    depending on your monitor's resolution and dpi. Highly modular and customizable.`,
      buttonText: 'Get Source Code',
      buttonLnk: ''
    },

  }


}

export { Model as largeHero2Model };
