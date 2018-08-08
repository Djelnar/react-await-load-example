export const delay = (n = 2000) => new Promise((resolve) => {
  setTimeout(resolve, n, n)
})
