import styled from 'styled-components'
import { Screen } from '@/utils/styles/globals'

const pagePadding = '20px'
const headerHeight = '120px'
const footerHeight = '100px'

export const TestScreen = styled(Screen)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${headerHeight} 0 0 0;

  background-color: rgb(2, 4, 26);
`

export const TestHeader = styled.header`
  z-index: 1000;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 10px;
  width: 100%;
  height: ${headerHeight};
  padding: 0px ${pagePadding};

  background-color: rgb(3, 6, 36);
  border-bottom: 1px solid gray;

  h1 {
    font-size: 26px;
    line-height: 26px;
    font-weight: 600;

    color: white;
  }

  span {
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;

    color: white;
  }
`

export const TestMenu = styled.nav`
  display: flex;
`

export const TestList = styled.div`
  display: flex;
  width: 100%;
  /* height: calc(100% - ${headerHeight} - ${footerHeight}); */
  height: calc(100% - ${headerHeight});
  padding: 25px ${pagePadding};
`

export const TestFooter = styled.div`
  z-index: 1000;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${footerHeight};
  padding: 0px ${pagePadding};

  background-color: rgb(3, 6, 36);
  border-top: 1px solid gray;

  h2 {
    font-size: 24px;
    line-height: 24px;
    font-weight: 400;

    color: white;

    b {
      font-weight: 600;
    }
  }
`

// ======================================= CHECKLIST

export const Checklist = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`

export const ChecklistCategory = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`

export const ChecklistCategoryTitle = styled.span`
  display: flex;

  font-size: 16px;
  line-height: 16px;
  font-weight: 600;

  color: white;
`

export const ChecklistCategoryItems = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  .ant-checkbox-wrapper {
    display: flex;
    align-items: center;
    column-gap: 4px;
  }

  .ant-checkbox-inner {
    width: 26px;
    height: 26px;
    background-color: transparent;
  }
`

export const ChecklistItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .ant-input-group-addon {
    color: rgba(255, 255, 255, 0.8);
  }

  .ant-input {
    font-size: 16px;

    color: rgba(255, 255, 255, 0.8);
    background-color: transparent;
  }
`

export const ChecklistItemInputs = styled.div`
  display: flex;
  column-gap: 8px;

  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`
