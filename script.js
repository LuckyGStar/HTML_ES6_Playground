const lang = 'en';

const dictionary = ({
  en: {
    'Hallo': 'Hallo',
    'Goodbye': 'Goodbye',
    'castle': 'castle'
  },
  fr: {
    'Hallo': 'Bonjour',
    'Goodbye': 'Au revoir',
    'castle': 'chateau'
  },
  de: {
    'Hallo': 'Hallo',
    'Goodbye': 'Auf Wiedersehen',
    'castle': 'schloss'
  },
  zh: {
    'Hallo': '你好',
    'Goodbye': '再见',
    'castle': '成'
  }
})

Object.freeze(dictionary)

const translate = function (dictionary, code, word) {
  return dictionary[code][word]
}

const applyTemplate = function (tmpl, code) {
  const regex = /\{\{([a-zA-Z])\w+\}\}/g
  return tmpl.replace(regex, function (word) {
    return translate(dictionary, code, word.replace(/[\{\}]/g, ''))
  })
}

const changeDisplayLanguage = function (element) {
  const langCode = element.value
  
  applyLanguage(langCode)
}

const applyLanguage = function (langCode) {
  const translation  = document.querySelector('#translation')
  const template = translation.getAttribute('template')
  const html = applyTemplate(template, langCode)
  
  translation.innerHTML = html
}

applyLanguage('en')