class IuguUtils {
  validateCreditCardNumber (value: string): boolean {
    if (/[^0-9-\s]+/.test(value)) return false

    // The Luhn Algorithm. It's so pretty.
    let nCheck = 0
    let bEven = false
    value = value.replace(/\D/g, '')

    for (let n = value.length - 1; n >= 0; n--) {
      const cDigit = value.charAt(n)
      let nDigit = parseInt(cDigit, 10)

      if (bEven && (nDigit *= 2) > 9) nDigit -= 9

      nCheck += nDigit
      bEven = !bEven
    }

    return nCheck % 10 === 0
  }

  formatUUID (e: string): string {
    const t = e.toUpperCase().replace('-', '')
    return (
      t.substr(0, 8) +
      '-' +
      t.substr(8, 4) +
      '-' +
      t.substr(12, 4) +
      '-' +
      t.substr(16, 4) +
      '-' +
      t.substr(20, 12)
    )
  }

  validateAccountID (accountID: string): boolean {
    return /^[a-fA-F0-9]{8}[a-fA-F0-9]{4}[a-fA-F0-9]{4}[a-fA-F0-9]{4}[a-fA-F0-9]{12}$/.test(
      accountID
    )
  }

  interpolateURL (url: string, data: Map<string, string>): string {
    return url.replace(/\{([\s\S]+?)\}/g, function (
      substring: string,
      ...args: string[]
    ): string {
      return data.get(args[0]) || substring
    })
  }

  interpolateQueryParams (params: Map<string, string>): string {
    let qs = '?'
    params.forEach((value, key) => {
      qs += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&'
    })

    qs = qs.substring(0, qs.length - 1)

    return qs
  }
}

export default new IuguUtils()
