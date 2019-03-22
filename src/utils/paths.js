export const PATCH_ARTICLES = '/articles/'
export const PATCH_NEWS = '/news/'
export const PATCH_CONTRIBUTE = '/contribute/'
export const PATCH_TUTORIALS = '/tutorials/'
export const PATCH_ARCHIVE_TAGS = '/archive-tags/'

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
  {
    label: LABEL_ARTICLES,
    patch: PATCH_ARTICLES,
    active: true,
    disable: false,
  },
  {
    label: LABEL_NEWS,
    patch: PATCH_NEWS,
    active: true,
    disable: true,
  },
  {
    label: LABEL_CONTRIBUTE,
    patch: PATCH_CONTRIBUTE,
    active: true,
    disable: true,
  },
  {
    label: LABEL_COURSES,
    patch: PATCH_TUTORIALS,
    active: true,
    disable: true,
  },
]

export function getPathsActives(getPaths) {
  return getPaths.filter(path => path.active)
}

export function paginationPreviousPage(index, pathPrefix) {
  const previousUrl =
    index - 1 == 1 ? `${pathPrefix}` : `${pathPrefix}${(index - 1).toString()}`

  return previousUrl
}

export function paginationNextPage(index, pathPrefix) {
  const nextUrl = `${pathPrefix}${(index + 1).toString()}`

  return nextUrl
}
