export const logout = () => {
  localStorage.removeItem('name')
  localStorage.removeItem('profile')
  localStorage.removeItem('carts')

  location.href = '/login'
}
