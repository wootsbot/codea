export const ARTICLES = '/articles/'
const NEWS = '/news/'
const CONTRIBUTE = '/contribute/'
const TUTORIALS = '/tutorials/'

export const getKeyPath = { ARTICLES, NEWS, CONTRIBUTE, TUTORIALS }

export const getPaths = [
  { key: ARTICLES, label: 'Articulos', href: ARTICLES, active: true },
  { key: NEWS, label: 'noticias', href: NEWS, active: true },
  { key: CONTRIBUTE, label: 'Contribuir', href: CONTRIBUTE, active: true },
  { key: TUTORIALS, label: 'Cursos', href: TUTORIALS, active: true },
]

export function getPathsActives(getPaths) {
  return getPaths.filter(path => path.active)
}
