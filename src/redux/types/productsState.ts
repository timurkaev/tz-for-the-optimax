export interface IProduct {
    id: number
    name: string
    price: number
    image: string,
    amount: number
}

export interface ProductsState {
    items: IProduct[],
    loading: boolean
}
