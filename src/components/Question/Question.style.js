function bodies(variant = 'body1') {
  const variants = {
    body1: {
      fontSize: `1.6rem`,
    },
    body2: {
      fontSize: `1.4rem`,
    },
  }

  return variants[variant]
}

function headerSize(variant = 'h3') {
  const sizes = {
    h1: 9.6,
    h2: 6,
    h3: 4.8,
    h4: 3.4,
    h5: 2.4,
    h6: 2,
  }

  return sizes[variant]
}

export const title = ({ variant }) => ({
  color: `rgba(0, 0, 0, 0.87)`,
  fontSize: `${headerSize(variant)}rem`,
  fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`, //eslint-disable-line
  fontWeight: `300`,
  lineHeight: `1`,
  marginBottom: `0.35em`,
})

export const content = ({ variant }) => ({
  color: `rgba(0, 0, 0, 0.54)`,
  fontSize: `1.6rem`,
  fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`, //eslint-disable-line
  fontWeight: `400`,
  lineHeight: `1.5`,
  marginBottom: `0.35em`,
  ...bodies(variant),
})
