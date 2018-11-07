const PATCH_ARTICLES = '/articles/'
const PATCH_NEWS = '/news/'
const PATCH_CONTRIBUTE = '/contribute/'
const PATCH_TUTORIALS = '/tutorials/'

const LABEL_ARTICLES = 'Articulos'
const LABEL_NEWS = 'Noticias'
const LABEL_CONTRIBUTE = 'Contribuir'
const LABEL_COURSES = 'Cursos'

export const getKeyPath = {
  PATCH_ARTICLES,
  PATCH_NEWS,
  PATCH_CONTRIBUTE,
  PATCH_TUTORIALS,
}

export const getPaths = [
  { label: LABEL_ARTICLES, patch: PATCH_ARTICLES, active: true },
  { label: LABEL_NEWS, patch: PATCH_NEWS, active: true },
  { label: LABEL_CONTRIBUTE, patch: PATCH_CONTRIBUTE, active: true },
  { label: LABEL_COURSES, patch: PATCH_TUTORIALS, active: true },
]

export function getPathsActives(getPaths) {
  return getPaths.filter(path => path.active)
}
