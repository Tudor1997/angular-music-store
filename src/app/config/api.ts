import { environment } from 'src/environments/environment'

export const baseUrl = environment.production ? 'https://api.shopingcart.com' : 'http://localhost:3000'
export const productsUrl = baseUrl + '/products'
export const guitarsUrl = baseUrl + '/guitars'
export const electricGuitarsUrl = baseUrl + '/electricGuitars'
export const cartUrl = baseUrl + '/cart'
export const productsPurchasedUrl = baseUrl + '/productsPurchased'