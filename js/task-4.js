function getShippingCost(country){
    let message
    const priceFromChina = 100
    const priceFromChile = 250
    const priceFromAustralia = 170
    const priceFromJamaica = 120
    switch (country) {
        case "China":
            message = `Shipping to ${country} will cost ${priceFromChina} credits`
            break;
    case "Chile":
        message = `Shipping to ${country} will cost ${priceFromChile} credits`
        break;
        case "Australia":
            message = `Shipping to ${country} will cost ${priceFromAustralia} credits`
            break;
            case "Jamaica":
                message = `Shipping to ${country} will cost ${priceFromJamaica} credits`
                break;
        default:
            message = "Sorry, there is no delivery to your country";
            
    }
    return message
}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"