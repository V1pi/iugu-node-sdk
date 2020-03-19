
import { IuguUtils } from '../lib/iugu'

test('test validateCreditCardNumber', () => {
  expect(IuguUtils.validateCreditCardNumber('5495 9849 8848 9270')).toBe(true)
  expect(IuguUtils.validateCreditCardNumber('5191 3032 8817 2056')).toBe(false)
})

test('test validateAccountId', () => {
  expect(IuguUtils.validateAccountID('F5F5CE88F1F33D91A488E94120501D61')).toBe(true)
  expect(IuguUtils.validateAccountID('F5F5CE88F1F33D91C420501D61')).toBe(false)
})

test('test format UUID', () => {
  expect(IuguUtils.formatUUID('884629830509465AA89387529A56FF3C')).toBe('88462983-0509-465A-A893-87529A56FF3C')
})

test('test interpolate url', () => {
  const urlParams: Map<string, string> = new Map()
  urlParams.set('param1', 'teste')
  urlParams.set('param5', 'banana')

  expect(IuguUtils.interpolateURL('/{param1}/{param5}', urlParams)).toBe('/teste/banana')
  expect(IuguUtils.interpolateURL('/teste/teste', urlParams)).toBe('/teste/teste')
})
