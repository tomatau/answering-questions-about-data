describe(`For loops`, () => {
  describe(`getTriangularNumber(layers)`, () => {
    it(`returns 0 by default`, () => {
      expect(getTriangularNumber()).to.eql(0)
    })

    it(`returns 1 when number of layers is 1`, () => {
      expect(getTriangularNumber(1)).to.eql(1)
    })

    it(`returns 3 when number of layers is 2`, () => {
      expect(getTriangularNumber(2)).to.eql(3)
    })

    it(`returns 28 when number of layers is 7`, () => {
      expect(getTriangularNumber(7)).to.eql(28)
    })
  })

  describe(`getCountdown(from)`, () => {
    it(`returns just 'BOOM!' by default`, () => {
      expect(getCountdown()).to.eql('BOOM!')
    })

    it(`returns '1... BOOM!' when given 1`, () => {
      expect(getCountdown(1)).to.eql('1... BOOM!')
    })

    it(`returns '3... 2... 1... BOOM!' when given 3`, () => {
      expect(getCountdown(3)).to.eql('3... 2... 1... BOOM!')
    })

    it(`returns countdown from 6 when given 6`, () => {
      expect(getCountdown(6)).to.eql(
        '6... 5... 4... 3... 2... 1... BOOM!'
      )
    })
  })

  describe(`getFizzBuzzTotal(n)`, () => {
    it(`returns 0 by default`, () => {
      expect(getFizzBuzzTotal()).to.eql(0)
    })

    it(`returns 0 when given non-fizzbuzz numbers (1 and 2)`, () => {
      expect(getFizzBuzzTotal(1)).to.eql(0)
      expect(getFizzBuzzTotal(2)).to.eql(0)
    })

    it(`returns 3 for the first fizzbuzz number (3) and the non-fizzbuzz number after the first fizzbuzz number (4)`, () => {
      expect(getFizzBuzzTotal(3)).to.eql(3)
      expect(getFizzBuzzTotal(4)).to.eql(3)
    })

    it(`returns the total (8 == 3+5) of the second fizzbuzz number (5)`, () => {
      expect(getFizzBuzzTotal(5)).to.eql(8)
    })

    it(`returns the total (3+5+6) of the third fizzbuzz number (6)`, () => {
      expect(getFizzBuzzTotal(6)).to.eql(14)
    })

    it(`returns the total of many fizzbuzz numbers: given 25, expect 168`, () => {
      expect(getFizzBuzzTotal(25)).to.eql(168)
    })
  })

  describe(`getMultipliedSums(nestedArray)`, () => {
    it(`returns 1 by default`, () => {
      expect(getMultipliedSums([])).to.eql(0)
    })

    it(`returns 1 when nested array contains nothing, [[]]`, () => {
      expect(getMultipliedSums([[]])).to.eql(1)
    })

    it(`returns 1 when nested array contains 1, [[1]]`, () => {
      expect(getMultipliedSums([[1]])).to.eql(1)
    })

    it(`returns 1 when nested array contains [1, 1]`, () => {
      expect(getMultipliedSums([[1, 1, 1]])).to.eql(1)
    })

    it(`returns 4 when nested array contains [[1, 4]]`, () => {
      expect(getMultipliedSums([[1, 4]])).to.eql(4)
    })

    it(`returns 10 when nested array contains [[1, 4], [1, 2, 3]]`, () => {
      expect(getMultipliedSums([[1, 4], [1, 2, 3]])).to.eql(10)
    })

    it(`sums the result of nested arrays: [[1, 1], [1, 1]]`, () => {
      expect(getMultipliedSums([[1, 1], [1, 1]])).to.eql(2)
      expect(getMultipliedSums([[1, 1], [2, 2, 2]])).to.eql(9)
      expect(getMultipliedSums([[3, 3, 3], [4, 4], [1]])).to.eql(44)
    })
  })
})

describe(`For-of loops`, () => {
  describe(`getArrayTotal(arr)`, () => {
    it(`returns 0 by default with an empty array`, () => {
      expect(getArrayTotal([])).to.eql(0)
    })

    it(`if only 1 item, returns it`, () => {
      expect(getArrayTotal([1])).to.eql(1)
      expect(getArrayTotal([6])).to.eql(6)
      expect(getArrayTotal([8])).to.eql(8)
      expect(getArrayTotal([800])).to.eql(800)
      expect(getArrayTotal([123])).to.eql(123)
    })

    it(`returns total of two items`, () => {
      expect(getArrayTotal([1, 1])).to.eql(2)
      expect(getArrayTotal([4, 5])).to.eql(9)
      expect(getArrayTotal([10000, 10000])).to.eql(20000)
    })

    it(`returns total of multiple items`, () => {
      expect(getArrayTotal([1, 1, 2, 3, 5, 6])).to.eql(18)
      expect(getArrayTotal([10, 10, 10, 10])).to.eql(40)
    })
  })

  describe(`getShoppingListTotalPrice(arr)`, () => {
    it(`returns 0 by default with an empty array`, () => {
      expect(getShoppingListTotalPrice([])).to.eql(0)
    })

    it(`returns item price when only one item`, () => {
      const items = [{ price: 999 }]
      expect(getShoppingListTotalPrice(items)).to.eql(999)
    })

    it(`returns total of all item's prices`, () => {
      const items = [
        { price: 999 },
        { price: 123 },
        { price: 321 }
      ]
      expect(getShoppingListTotalPrice(items)).to.eql(1443)
    })
  })

  describe(`getStringOfDivs(arr)`, () => {
    it(`returns '' by default with an empty array`, () => {
      expect(getStringOfDivs([])).to.eql('')
    })

    it(`returns '<div>' around supplied item`, () => {
      expect(getStringOfDivs(['foo'])).to.eql('<div>foo</div>')
    })

    it(`returns '<div>' around multiple supplied items`, () => {
      expect(
        getStringOfDivs(['foo', 'bar', 'herp', 'derp'])
      ).to.eql(
        '<div>foo</div>' +
        '<div>bar</div>' +
        '<div>herp</div>' +
        '<div>derp</div>'
      )
    })
  })

  describe(`arrayIncludes(array, thingToFind)`, () => {
    it(`returns false by default`, () => {
      expect(arrayIncludes([])).to.eql(false)
    })

    it(`returns false when nothing to find`, () => {
      expect(arrayIncludes(['one', 'two'])).to.eql(false)
      expect(arrayIncludes([1, 2, 3, 4])).to.eql(false)
    })

    it(`returns true when thing to find is in array`, () => {
      expect(arrayIncludes(['one', 'two'], 'one')).to.eql(true)
      expect(arrayIncludes([1, 2, 3, 4], 1)).to.eql(true)
    })
  })
})

describe(`For-in loops`, () => {
  describe(`concatKeys(object)`, () => {
    it(`returns an empty string by default`, () => {
      expect(concatKeys()).to.eql('')
    })

    it(`returns only key when object has one key`, () => {
      expect(concatKeys({ 'abc': 123 })).to.eql('abc')
      expect(concatKeys({ 'foo': true })).to.eql('foo')
      expect(concatKeys({ 'oof': false })).to.eql('oof')
    })

    it(`concats all keys in object`, () => {
      expect(
        concatKeys({ 'key1': false, 'key2': false, 'key3': false })
      ).to.eql('key1key2key3')
      expect(
        concatKeys({ 'abc': 123, 'def': true, 'ghi': false })
      ).to.eql('abcdefghi')
      expect(
        concatKeys({ 'foo': true, 'moo': false, 'true': [] })
      ).to.eql('foomootrue')
    })
  })

  describe(`getObjectTotal(object)`, () => {
    it(`returns 0 by default with an empty array`, () => {
      expect(getObjectTotal({})).to.eql(0)
    })

    it(`if only 1 key, returns it's value as total`, () => {
      expect(getObjectTotal({a: 1})).to.eql(1)
      expect(getObjectTotal({a: 6})).to.eql(6)
      expect(getObjectTotal({a: 8})).to.eql(8)
      expect(getObjectTotal({a: 800})).to.eql(800)
      expect(getObjectTotal({a: 123})).to.eql(123)
    })

    it(`returns total of two properties in object`, () => {
      expect(
        getObjectTotal({
          a: 1,
          b: 1
        })
      ).to.eql(2)
      expect(
        getObjectTotal({
          a: 4,
          b: 5
        })
      ).to.eql(9)
      expect(
        getObjectTotal({
          a: 10000,
          b: 10000
        })
      ).to.eql(20000)
    })

    it(`returns total of multiple properties in object`, () => {
      expect(
        getObjectTotal({
          a: 1,
          b: 2,
          c: 3,
          d: 5,
          e: 100,
          f: 1000,
        })
      ).to.eql(1111)
      expect(
        getObjectTotal({
          a: 10,
          b: 10,
          c: 10,
          d: 10,
          e: 10
        })
      ).to.eql(50)
      expect(
        getObjectTotal({
          foo: 10000,
          bar: 10000
        })
      ).to.eql(20000)
    })
  })

  describe(`findKeyByValue(object, valueToFind)`, () => {
    it(`returns undefined by default with an empty object`, () => {
      expect(findKeyByValue({})).to.eql(undefined)
      expect(findKeyByValue({}, 'a')).to.eql(undefined)
      expect(findKeyByValue({}, 'foo')).to.eql(undefined)
    })

    it(`returns key for specified value`, () => {
      expect(findKeyByValue({ a: 1 }, 1)).to.eql('a')
      expect(findKeyByValue({ b: 6 }, 6)).to.eql('b')
      expect(findKeyByValue({ foo: 'bar' }, 'bar')).to.eql('foo')
      expect(findKeyByValue({ a: 800 }, 800)).to.eql('a')
    })

    it(`returns undefined if value not present`, () => {
      expect(findKeyByValue({ a: 1 }, 2)).to.eql(undefined)
      expect(findKeyByValue({ b: 6 }, 1)).to.eql(undefined)
      expect(findKeyByValue({ foo: 8 }, 99)).to.eql(undefined)
      expect(findKeyByValue({ a: 800 }, 3)).to.eql(undefined)
    })
  })

  describe(`objectIncludes(object, valueToFind)`, () => {
    it(`returns false by default with an empty object`, () => {
      expect(objectIncludes({})).to.eql(false)
      expect(objectIncludes({}, 'a')).to.eql(false)
      expect(objectIncludes({}, 'foo')).to.eql(false)
    })

    it(`returns key for specified value`, () => {
      expect(objectIncludes({ a: 1 }, 1)).to.eql(true)
      expect(objectIncludes({ b: 'foobar' }, 'foobar')).to.eql(true)
      expect(objectIncludes({ foo: 8 }, 8)).to.eql(true)
      expect(objectIncludes({ a: 800 }, 800)).to.eql(true)
    })

    it(`returns false if value not present`, () => {
      expect(objectIncludes({ a: 1 }, 2)).to.eql(false)
      expect(objectIncludes({ b: 6 }, 1)).to.eql(false)
      expect(objectIncludes({ foo: 8 }, 99)).to.eql(false)
      expect(objectIncludes({ a: 800 }, 3)).to.eql(false)
    })
  })
})

describe(`While loops`, () => {
  describe(`findMatchingIndex(array, valueToFind)`, () => {
    it(`returns -1 by default`, () => {
      expect(findMatchingIndex([])).to.eql(-1)
    })

    it(`returns 0 when item is at first position`, () => {
      expect(findMatchingIndex(['foo'], 'foo')).to.eql(0)
      expect(findMatchingIndex([9], 9)).to.eql(0)
      expect(findMatchingIndex([321], 321)).to.eql(0)
    })

    it(`returns 2 when item is at third position`, () => {
      expect(findMatchingIndex([0, 1, 'foo'], 'foo')).to.eql(2)
      expect(findMatchingIndex([11, 10, 9], 9)).to.eql(2)
      expect(findMatchingIndex2([123, 456, 321, 890, 567], 321)).to.eql(2)
    })
  })

  describe(`getMeanAverage(array)`, () => {
    it(`returns 0 by default`, () => {
      expect(getMeanAverage([])).to.eql(0)
    })

    it(`returns item when an array of 1 item`, () => {
      expect(getMeanAverage([1])).to.eql(1)
      expect(getMeanAverage([3])).to.eql(3)
      expect(getMeanAverage([99])).to.eql(99)
      expect(getMeanAverage([104])).to.eql(104)
    })

    it(`returns mean average when an array of multiple items`, () => {
      expect(getMeanAverage([0, 1])).to.eql(0.5)
      expect(getMeanAverage([1, 1, 1, 1])).to.eql(1)
      expect(getMeanAverage([3, 4, 5, 6, 7])).to.eql(5)
      expect(getMeanAverage([150, 0, 200, 100, 50])).to.eql(100)
    })
  })

  describe(`all(array, valueToCheck)`, () => {
    it(`returns false by default`, () => {
      expect(all([])).to.eql(true)
    })

    it(`returns true when item is in the array`, () => {
      expect(all(['foo'], 'foo')).to.eql(true)
      expect(all([9], 9)).to.eql(true)
      expect(all([321], 321)).to.eql(true)
    })

    it(`returns false when some items aren't the same as item to check`, () => {
      expect(all([0, 1, 'foo'], 'foo')).to.eql(false)
      expect(all([11, 10, 9], 9)).to.eql(false)
      expect(all([123, 456, 321], 321)).to.eql(false)
    })

    it(`returns true when all items are the same as item to check`, () => {
      expect(all(['foo', 'foo', 'foo'], 'foo')).to.eql(true)
      expect(all([9, 9, 9], 9)).to.eql(true)
      expect(all([321, 321, 321], 321)).to.eql(true)
    })
  })

  describe(`getCountOfSequence(array)`, () => {
    it(`returns 0 by default`, () => {
      expect(getCountOfSequence([])).to.eql(0)
    })

    it(`returns 1 when one item in array`, () => {
      expect(getCountOfSequence([2])).to.eql(1)
    })

    it(`returns 1 when items not the same`, () => {
      expect(getCountOfSequence([2, 1])).to.eql(1)
    })

    it(`returns count of which are the same in a row`, () => {
      expect(getCountOfSequence([9, 9, 9, 9, 1])).to.eql(4)
    })
  })
})
