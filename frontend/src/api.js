import { cryptoAssets, cryptoData } from "./data";

export function fakeFetchCrypto() {
    return new Promise(result => {
        setTimeout(() => {
            result(cryptoData)
        }, 1500)
    })
}
export function FetchAssets() {
    return new Promise(result => {
        setTimeout(() => {
            result(cryptoAssets)
        }, 2000)
    })
}