export default class Tax {
    constructor(subTotalValue, personita) {
        console.log(personita)
        this.taxes = this.selectTaxes(subTotalValue, personita)
    }

    //todos
    iva(subTotal) {
        let tax = subTotal * 0.19
        console.log("Tax: iva " + tax)
        return tax
    }

    //empresa
    reteica(subTotal) {
        let tax = subTotal * 0.10
        console.log("Tax: reteica " + tax)
        return tax
    }

    //persona natural
    tax_by_breathe(subTotal) {
        let tax = subTotal * 0.05
        console.log("Tax: breathe " + tax)
        return tax
    }

    //empresa
    alimentosUltraprocesados(subTotal) {
        let tax = subTotal * 0.02
        console.log("Tax: alimentosUltraprocesados " + tax)
        return tax
    }

    //todos
    toll(subTotal) {
        let tax = subTotal * 0.03
        console.log("Tax: toll " + tax)
        return tax
    }

    taxNaturalPerson(subTotalValue) {
        return this.iva(subTotalValue) + this.tax_by_breathe(subTotalValue) + this.toll(subTotalValue)
    }

    taxCompany(subTotalValue) {
        return this.iva(subTotalValue) + this.reteica(subTotalValue) + this.alimentosUltraprocesados(subTotalValue) + this.toll(subTotalValue)
    }

    selectTaxes(subTotalValue, legalIdType) {
        console.log(legalIdType)
        if (legalIdType["legal_id_type"] == "nit") {
            return this.taxCompany(subTotalValue)
        } else {
            return this.taxNaturalPerson(subTotalValue)
        }
    }
}