import React from 'react'
import { render } from '@testing-library/react'
import { homeData } from 'src/mocks/data/homes'
import ProductPage from './ProductPage'

describe('ProductPage Component', () => {
  test('ProductPage renders', () => {
    render(
      <ProductPage
        home={{
          fetching: false,
          stale: false,
          data: { homes_by_pk: homeData },
        }}
      />
    )
  })
})
