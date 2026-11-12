import { useState } from 'react'
import { StyleNavigation } from '../../components/StyleNavigation'
import {
  Bag,
  CollectionHead,
  Collections,
  Copy,
  GoldButton,
  Grid,
  Hero,
  ImageWrap,
  Page,
  Product,
  Tabs,
  Text,
  Title,
} from './styled'

interface ProductItem {
  name: string
  icon: string
  price: number
}

const collections = ['Atelier', 'Evening', 'Archive']

const products: ProductItem[] = [
  { name: '01 — Evening Column', icon: '◆', price: 1800 },
  { name: '02 — Sculpted Silk', icon: '◯', price: 2400 },
  { name: '03 — The Aurelia Line', icon: '◇', price: 3200 },
]

export function Luxury() {
  const [collection, setCollection] = useState('Atelier')
  const [selectedProduct, setSelectedProduct] = useState(0)
  const [bag, setBag] = useState(0)

  function discoverCollection() {
    document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })
  }

  function addToBag(index: number) {
    setSelectedProduct(index)
    setBag((currentBag) => currentBag + 1)
  }

  return (
    <Page>
      <StyleNavigation theme="luxury" brand="Maison Aurelia" />

      <Hero>
        <Copy>
          <small>Paris · Collection VII</small>
          <Title>
            Form of<br />
            <em>Distinction.</em>
          </Title>
          <Text>
            A couture collection defined by architectural tailoring, rare
            natural materials and exceptional hand-finished detail.
          </Text>
          <GoldButton onClick={discoverCollection}>
            Discover the collection
          </GoldButton>
        </Copy>

        <ImageWrap>
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200"
            alt="Luxury fashion editorial"
          />
        </ImageWrap>
      </Hero>

      <Collections id="collections">
        <CollectionHead>
          <h2>The {collection} edit</h2>
          <Tabs>
            {collections.map((collectionName) => (
              <button
                key={collectionName}
                className={collection === collectionName ? 'active' : ''}
                onClick={() => setCollection(collectionName)}
              >
                {collectionName}
              </button>
            ))}
          </Tabs>
        </CollectionHead>

        <Grid>
          {products.map((product, index) => (
            <Product
              key={product.name}
              $selected={selectedProduct === index}
              onClick={() => addToBag(index)}
            >
              <div>{product.icon}</div>
              <span>
                <b>{product.name}</b>
                <b>€{product.price}</b>
              </span>
            </Product>
          ))}
        </Grid>
      </Collections>

      {bag > 0 && <Bag>Shopping bag · {bag}</Bag>}
    </Page>
  )
}