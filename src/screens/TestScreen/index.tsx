import { useEffect, useState } from 'react'
import * as S from './styles'

import { Checkbox, Input } from 'antd'
import type { CheckboxProps } from 'antd'

import { IChecklistProduct, checklistData } from '@/data/test'
import { formatCurrency } from '@/utils/functions/formatCurrency'
import { Controller, useForm, useWatch } from 'react-hook-form'

interface ITestScreen {}

const TestScreen = ({}: ITestScreen) => {
  const { control } = useForm()
  const products = useWatch({ control, name: 'products', defaultValue: {} })
  const [valorTotal, setValorTotal] = useState(0)

  // useEffect(() => {
  //   const total: any = Object.values(products).reduce((total, category) => {
  //     if (Array.isArray(category)) {
  //       return (
  //         total +
  //         category.reduce((catTotal, product) => {
  //           if (product?.isSelected) {
  //             return catTotal + product.productPrice * product.productQuantity
  //           }
  //           return catTotal
  //         }, 0)
  //       )
  //     }
  //     return total
  //   }, 0)
  //   setValorTotal(total)
  // }, [products])

  return (
    <S.TestScreen>
      <S.TestHeader>
        <h1>Lista de Compras</h1>
        <span>Henrique e Cicera ❤️</span>
      </S.TestHeader>
      <S.TestMenu></S.TestMenu>
      <S.TestList>
        <Checklist control={control} />
      </S.TestList>
      {/* <S.TestFooter>
        <h2>
          Valor total: <b>{formatCurrency(valorTotal)}</b>
        </h2>
      </S.TestFooter> */}
    </S.TestScreen>
  )
}

export default TestScreen

// ======================================= CHECKLIST

interface IChecklist {
  control: any
}

const Checklist = ({ control }: IChecklist) => {
  return (
    <S.Checklist>
      {checklistData.map((category, categoryIndex) => (
        <S.ChecklistCategory key={category.categoryId}>
          <S.ChecklistCategoryTitle>
            {category.categoryName}
          </S.ChecklistCategoryTitle>
          <S.ChecklistCategoryItems>
            {category.categoryItems.map(
              (product: IChecklistProduct, productIndex) => (
                <ChecklistItem
                  key={product.productId}
                  product={product}
                  categoryIndex={categoryIndex}
                  productIndex={productIndex}
                  control={control}
                />
              )
            )}
          </S.ChecklistCategoryItems>
        </S.ChecklistCategory>
      ))}
    </S.Checklist>
  )
}

// ======================================= CHECKLIST

interface IChecklistItem {
  product: IChecklistProduct
  categoryIndex: number
  productIndex: number
  control: any
}

const ChecklistItem = ({
  product,
  categoryIndex,
  productIndex,
  control
}: IChecklistItem) => {
  const fieldName = `products[${categoryIndex}][${productIndex}]`

  return (
    <S.ChecklistItem>
      <Controller
        name={`${fieldName}.isSelected`}
        control={control}
        defaultValue={false}
        render={({ field }) => (
          <Checkbox
            {...field}
            style={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.8)' }}
          >
            {product.productName}
          </Checkbox>
        )}
      />
      {/* <S.ChecklistItemInputs>
        <Controller
          name={`${fieldName}.productQuantity`}
          control={control}
          defaultValue={0}
          render={({ field }) => (
            <Input
              {...field}
              type="number"
              min={0}
              style={{
                width: '32px',
                textAlign: 'center',
                paddingLeft: '10px'
              }}
            />
          )}
        />
        <Controller
          name={`${fieldName}.productPrice`}
          control={control}
          defaultValue={0}
          render={({ field }) => (
            <Input
              {...field}
              type="number"
              addonBefore="R$"
              min={0}
              style={{ width: '110px' }}
            />
          )}
        />
      </S.ChecklistItemInputs> */}
    </S.ChecklistItem>
  )
}
